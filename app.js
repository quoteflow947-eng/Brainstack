/* BrainStack — application logic.
   All state lives in localStorage. Works fully offline. */

// ---------- Config ----------
const TUTOR_ENDPOINT = ""; // Optional: set to your Cloudflare Worker URL to enable AI.
const STORAGE_KEY = "brainstack:progress";
const THEME_KEY = "brainstack:theme";

// ---------- State ----------
let currentChapter = null;
let currentTab = "notes";
let quizState = null; // { index, answers: [], shuffled: [] }

// ---------- Utilities ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showToast(msg, ms = 2000) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { t.hidden = true; }, ms);
}

// ---------- Progress storage ----------
function getProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}
function setChapterScore(id, score, total) {
  const p = getProgress();
  const prev = p[id] || { best: 0, attempts: 0 };
  p[id] = {
    best: Math.max(prev.best, score),
    total,
    attempts: prev.attempts + 1
  };
  saveProgress(p);
  renderSidebar();
}
function resetProgress() {
  if (!confirm("Reset all quiz progress? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  renderSidebar();
  if (currentChapter) renderChapter(currentChapter.id);
  showToast("Progress reset");
}

// ---------- Theme ----------
function applyTheme() {
  const theme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.classList.toggle("dark", theme === "dark");
}
$("#themeBtn").addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
});

// ---------- Markdown mini-renderer ----------
function mdToHtml(md) {
  const lines = md.trim().split("\n");
  const out = [];
  let inList = false, listType = null;
  let inTable = false, tableRows = [];

  function inline(t) {
    return escapeHtml(t)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }
  function closeList() {
    if (inList) { out.push(`</${listType}>`); inList = false; listType = null; }
  }
  function flushTable() {
    if (!inTable) return;
    const cells = (r) => r.split("|").slice(1, -1).map(c => c.trim());
    const [header, ...rows] = tableRows;
    const ths = cells(header).map(c => `<th>${inline(c)}</th>`).join("");
    const trs = rows
      .filter(r => !/^\|[\s\-|:]+\|$/.test(r))
      .map(r => `<tr>${cells(r).map(c => `<td>${inline(c)}</td>`).join("")}</tr>`)
      .join("");
    out.push(`<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`);
    inTable = false; tableRows = [];
  }

  for (const line of lines) {
    const t = line.trim();
    if (!t) { closeList(); flushTable(); continue; }
    if (t.startsWith("|")) { tableRows.push(t); inTable = true; continue; }
    flushTable();
    if (t.startsWith("### ")) { closeList(); out.push(`<h3>${inline(t.slice(4))}</h3>`); }
    else if (t.startsWith("## ")) { closeList(); out.push(`<h2>${inline(t.slice(3))}</h2>`); }
    else if (t.startsWith("# ")) { closeList(); out.push(`<h1>${inline(t.slice(2))}</h1>`); }
    else if (t.startsWith("> ")) { closeList(); out.push(`<blockquote>${inline(t.slice(2))}</blockquote>`); }
    else if (/^- /.test(t)) {
      if (!inList || listType !== "ul") { closeList(); out.push("<ul>"); inList = true; listType = "ul"; }
      out.push(`<li>${inline(t.slice(2))}</li>`);
    }
    else if (/^\d+\. /.test(t)) {
      if (!inList || listType !== "ol") { closeList(); out.push("<ol>"); inList = true; listType = "ol"; }
      out.push(`<li>${inline(t.replace(/^\d+\.\s+/, ""))}</li>`);
    }
    else { closeList(); out.push(`<p>${inline(t)}</p>`); }
  }
  closeList(); flushTable();
  return out.join("\n");
}

// ---------- Sidebar rendering ----------
function renderSidebar() {
  const list = $("#chapterList");
  const progress = getProgress();
  list.innerHTML = CHAPTERS.map(ch => {
    const p = progress[ch.id];
    const done = p && p.best >= Math.ceil(p.total * 0.8);
    const label = p ? `${p.best}/${p.total}` : "—";
    return `<a href="#chapter/${ch.id}" class="nav-item chapter-link" data-chapter="${ch.id}">
      <span>${ch.number}. ${escapeHtml(ch.title)}</span>
      <span class="chapter-badge ${done ? 'done' : ''}">${label}</span>
    </a>`;
  }).join("");
}

// ---------- Home view ----------
function renderHome() {
  const progress = getProgress();
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="home"]').classList.add("active");

  const cards = CHAPTERS.map(ch => {
    const p = progress[ch.id];
    const pct = p ? Math.round((p.best / p.total) * 100) : 0;
    return `<div class="card" data-chapter="${ch.id}">
      <h3>${ch.number}. ${escapeHtml(ch.title)}</h3>
      <p>${escapeHtml(ch.summary)}</p>
      <div class="card-progress"><div class="card-progress-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join("");

  $("#main").innerHTML = `
    <div class="hero">
      <h1>Study smarter, not longer.</h1>
      <p>Read the notes. Take the quiz. Ask the tutor. All offline-ready.</p>
    </div>
    <div class="card-grid">${cards}</div>
  `;

  $$(".card").forEach(c => c.addEventListener("click", () => {
    location.hash = `#chapter/${c.dataset.chapter}`;
  }));
}

// ---------- Chapter view ----------
function renderChapter(id) {
  const ch = CHAPTERS.find(c => c.id === id);
  if (!ch) { location.hash = "#home"; return; }
  currentChapter = ch;
  currentTab = "notes";
  quizState = null;

  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $(`.nav-item[data-chapter="${id}"]`)?.classList.add("active");

  $("#main").innerHTML = `
    <div class="chapter-header">
      <div class="eyebrow">Chapter ${ch.number}</div>
      <h1>${escapeHtml(ch.title)}</h1>
      <p>${escapeHtml(ch.summary)}</p>
    </div>
    <div class="tabs">
      <button class="tab active" data-tab="notes">Notes</button>
      <button class="tab" data-tab="quiz">Quiz</button>
      <button class="tab" data-tab="ask">Ask a question</button>
    </div>
    <div id="chapterBody"></div>
  `;

  $$(".tab").forEach(t => t.addEventListener("click", () => {
    currentTab = t.dataset.tab;
    $$(".tab").forEach(x => x.classList.toggle("active", x === t));
    renderTab();
  }));

  renderTab();
}

function renderTab() {
  const ch = currentChapter;
  if (!ch) return;
  const body = $("#chapterBody");
  if (currentTab === "notes") {
    body.innerHTML = `<div class="content">${mdToHtml(ch.notes)}</div>`;
  } else if (currentTab === "quiz") {
    renderQuiz(ch);
  } else if (currentTab === "ask") {
    renderAsk(ch);
  }
}

// ---------- Quiz ----------
function renderQuiz(ch) {
  if (!quizState) {
    quizState = { index: 0, answers: [], questions: shuffle(ch.quiz), done: false };
  }
  const body = $("#chapterBody");
  const total = quizState.questions.length;

  if (quizState.done) {
    const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
    const pct = Math.round((score / total) * 100);
    const msg = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good — review the wrong answers." : "Re-read the notes and try again.";
    body.innerHTML = `
      <div class="score-card">
        <div class="score-big">${score}/${total}</div>
        <div class="score-label">${pct}% correct</div>
        <div class="score-msg">${msg}</div>
        <div class="quiz-actions" style="justify-content:center; margin-top:24px">
          <button class="btn btn-primary" id="retryBtn">Retry quiz</button>
          <button class="btn" id="reviewBtn">Review answers</button>
        </div>
      </div>
    `;
    $("#retryBtn").addEventListener("click", () => {
      quizState = null; renderQuiz(ch);
    });
    $("#reviewBtn").addEventListener("click", () => {
      quizState.done = false;
      quizState.reviewMode = true;
      renderQuiz(ch);
    });
    return;
  }

  const q = quizState.questions[quizState.index];
  const selected = quizState.answers[quizState.index];
  const showResult = selected !== undefined;
  const pct = Math.round((quizState.index / total) * 100);

  const optionsHtml = q.options.map((opt, i) => {
    let cls = "quiz-option";
    if (showResult) {
      if (i === q.answer) cls += " correct";
      else if (i === selected) cls += " wrong";
    }
    return `<button class="${cls}" data-idx="${i}" ${showResult ? "disabled" : ""}>
      <span class="letter">${String.fromCharCode(65 + i)}</span>
      <span>${escapeHtml(opt)}</span>
    </button>`;
  }).join("");

  body.innerHTML = `
    <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    <div class="quiz-question">
      <div class="q-num">Question ${quizState.index + 1} of ${total}</div>
      <div class="q-text">${escapeHtml(q.q)}</div>
      <div class="quiz-options">${optionsHtml}</div>
      ${showResult ? `<div class="quiz-explain"><strong>Why:</strong> ${escapeHtml(q.explain)}</div>` : ""}
    </div>
    <div class="quiz-actions">
      ${showResult ? `<button class="btn btn-primary" id="nextBtn">${quizState.index === total - 1 ? "See results" : "Next question"}</button>` : ""}
    </div>
  `;

  if (!showResult) {
    $$(".quiz-option").forEach(btn => btn.addEventListener("click", () => {
      quizState.answers[quizState.index] = Number(btn.dataset.idx);
      renderQuiz(ch);
    }));
  } else {
    $("#nextBtn").addEventListener("click", () => {
      if (quizState.index === total - 1) {
        quizState.done = true;
        const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
        setChapterScore(ch.id, score, total);
      } else {
        quizState.index++;
      }
      renderQuiz(ch);
    });
  }
}

// ---------- Ask a question ----------
function renderAsk(ch) {
  $("#chapterBody").innerHTML = `
    <div class="ask-box">
      <textarea id="askInput" placeholder="Ask anything about ${escapeHtml(ch.title)}… e.g. 'what is the difference between hazard and risk?'"></textarea>
      <div class="ask-actions">
        <span class="ask-hint">${TUTOR_ENDPOINT ? "AI tutor — online" : "Offline tutor — searches course content"}</span>
        <button class="btn btn-primary" id="askBtn">Ask</button>
      </div>
    </div>
    <div id="answerArea"></div>
  `;
  $("#askBtn").addEventListener("click", () => handleAsk(ch));
  $("#askInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); handleAsk(ch); }
  });
  $("#askInput").focus();
}

async function handleAsk(ch) {
  const input = $("#askInput").value.trim();
  if (!input) return;
  const area = $("#answerArea");
  area.innerHTML = `<div class="answer"><div class="a-text">Thinking…</div></div>`;

  let answer = null, source = "local";

  // 1. Try AI endpoint (if configured and online)
  if (TUTOR_ENDPOINT && navigator.onLine) {
    try {
      const res = await fetch(TUTOR_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input, chapter: ch.title })
      });
      if (res.ok) {
        const data = await res.json();
        answer = data.answer || data.text || null;
        source = "ai";
      }
    } catch { /* fall through to local */ }
  }

  // 2. Local knowledge base
  if (!answer) {
    answer = localAnswer(input, ch);
  }

  area.innerHTML = `
    <div class="answer">
      <h4>Answer</h4>
      <div class="a-text">${mdToHtml(answer.text)}</div>
      <div class="a-meta">${source === "ai" ? "From AI tutor" : "From course content"}</div>
      ${answer.suggestions && answer.suggestions.length ? `
        <div style="margin-top:12px">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">Related questions</div>
          ${answer.suggestions.map(s => `<button class="suggestion" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}
        </div>` : ""}
    </div>
  `;
  $$(".suggestion").forEach(b => b.addEventListener("click", () => {
    $("#askInput").value = b.dataset.q;
    handleAsk(ch);
  }));
}

function localAnswer(question, ch) {
  const q = question.toLowerCase();

  // 1. Search this chapter's FAQ by keyword overlap
  const faq = ch.faq || [];
  let best = null, bestScore = 0;
  for (const item of faq) {
    const score = keywordScore(q, item.q.toLowerCase());
    if (score > bestScore) { bestScore = score; best = item; }
  }

  if (best && bestScore >= 2) {
    return {
      text: best.a,
      suggestions: faq.filter(f => f !== best).slice(0, 3).map(f => f.q)
    };
  }

  // 2. Search ALL chapters' FAQs
  let globalBest = null, globalScore = 0;
  for (const c of CHAPTERS) {
    for (const item of (c.faq || [])) {
      const score = keywordScore(q, (item.q + " " + item.a).toLowerCase());
      if (score > globalScore) { globalScore = score; globalBest = { item, c }; }
    }
  }
  if (globalBest && globalScore >= 2) {
    return {
      text: globalBest.item.a + `\n\n> Found in Chapter ${globalBest.c.number}: ${globalBest.c.title}`,
      suggestions: []
    };
  }

  // 3. Search the notes for the question text
  const notesMatch = findInNotes(q, ch);
  if (notesMatch) {
    return { text: notesMatch, suggestions: ch.faq.slice(0, 3).map(f => f.q) };
  }

  return {
    text: "I couldn't find an answer in this chapter's content. Try rephrasing, or browse the **Notes** tab. You can also check the FAQ in the sidebar — every chapter has one.",
    suggestions: ch.faq.slice(0, 3).map(f => f.q)
  };
}

function keywordScore(question, text) {
  const stop = new Set(["the","a","an","is","are","was","were","of","to","in","on","for","and","or","what","how","why","when","which","who","does","do","can","i","my","with","that","this","it","be","by","from","as","at","if","so"]);
  const words = question.split(/\W+/).filter(w => w.length > 2 && !stop.has(w));
  if (!words.length) return 0;
  let hits = 0;
  for (const w of words) if (text.includes(w)) hits++;
  return hits;
}

function findInNotes(q, ch) {
  const words = q.split(/\W+/).filter(w => w.length > 3);
  if (!words.length) return null;
  const sections = ch.notes.split(/^## /m);
  for (const sec of sections) {
    let hits = 0;
    for (const w of words) if (sec.toLowerCase().includes(w)) hits++;
    if (hits >= Math.max(2, Math.ceil(words.length / 2))) {
      const firstLine = sec.split("\n")[0];
      const body = sec.slice(firstLine.length).trim().slice(0, 500);
      return `**${firstLine}**\n\n${body}${body.length >= 500 ? "…" : ""}`;
    }
  }
  return null;
}

// ---------- Search ----------
$("#searchInput").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) { renderHome(); return; }
  const results = CHAPTERS.filter(ch =>
    ch.title.toLowerCase().includes(q) ||
    ch.summary.toLowerCase().includes(q) ||
    ch.notes.toLowerCase().includes(q)
  );
  $("#main").innerHTML = `
    <div class="hero"><h1>Search results</h1><p>${results.length} chapter(s) match "${escapeHtml(q)}"</p></div>
    <div class="card-grid">
      ${results.map(ch => `<div class="card" data-chapter="${ch.id}">
        <h3>${ch.number}. ${escapeHtml(ch.title)}</h3>
        <p>${escapeHtml(ch.summary)}</p>
      </div>`).join("") || `<div class="empty"><h2>No matches</h2><p>Try a different keyword.</p></div>`}
    </div>
  `;
  $$(".card").forEach(c => c.addEventListener("click", () => {
    location.hash = `#chapter/${c.dataset.chapter}`;
  }));
});

// ---------- Router ----------
function route() {
  const hash = location.hash || "#home";
  if (hash.startsWith("#chapter/")) {
    renderChapter(hash.replace("#chapter/", ""));
  } else if (hash === "#ask") {
    renderAskGlobal();
  } else {
    renderHome();
  }
  if (window.innerWidth <= 800) $("#sidebar").classList.remove("open");
}

function renderAskGlobal() {
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="ask"]').classList.add("active");
  $("#main").innerHTML = `
    <div class="hero"><h1>Ask a question</h1><p>Search across all chapters, or pick one below.</p></div>
    <div class="card-grid">
      ${CHAPTERS.map(ch => `<div class="card" data-chapter="${ch.id}">
        <h3>${ch.number}. ${escapeHtml(ch.title)}</h3>
        <p>Ask about ${escapeHtml(ch.title.toLowerCase())}</p>
      </div>`).join("")}
    </div>
  `;
  $$(".card").forEach(c => c.addEventListener("click", () => {
    location.hash = `#chapter/${c.dataset.chapter}`;
    setTimeout(() => { if (currentChapter) { currentTab = "ask"; $$(".tab").forEach(x => x.classList.toggle("active", x.dataset.tab === "ask")); renderTab(); } }, 10);
  }));
}

window.addEventListener("hashchange", route);

// ---------- Sidebar toggle ----------
$("#menuBtn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#resetBtn").addEventListener("click", resetProgress);

// Home/Ask links in sidebar
$$('[data-nav="home"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#home"; }
}));
$$('[data-nav="ask"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#ask"; }
}));

// ---------- Offline indicator ----------
function updateOffline() {
  $("#offlinePill").hidden = navigator.onLine;
}
window.addEventListener("online", updateOffline);
window.addEventListener("offline", updateOffline);

// ---------- Service worker ----------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

// ---------- Boot ----------
applyTheme();
renderSidebar();
updateOffline();
route();
