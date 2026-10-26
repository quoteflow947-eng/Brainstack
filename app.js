/* BrainStack — application logic.
   All state lives in localStorage. Works fully offline. */

const TUTOR_ENDPOINT = ""; 
const STORAGE_KEY = "brainstack:progress";
const THEME_KEY = "brainstack:theme";

const EXAM_TIMETABLE = [
  { date: "24 November 2026", module: "Business Computer Applications" },
  { date: "25 November 2026", module: "Communication" },
  { date: "26 November 2026", module: "Retail Operations Management 1" },
  { date: "30 November 2026", module: "Retailing 1" },
  { date: "07 December 2026", module: "Retail Financial Management 1" }
];

let currentChapter = null;
let currentTab = "notes";
let quizState = null; 

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

function showToast(msg, ms = 3000) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { t.hidden = true; }, ms);
}

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

function applyTheme() {
  const theme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.classList.toggle("dark", theme === "dark");
}
$("#themeBtn").addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
});

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

function renderSidebar() {
  const list = $("#chapterList");
  const progress = getProgress();
  
  const modules = [...new Set(CHAPTERS.map(c => c.module))];

  let html = "";
  modules.forEach(mod => {
    html += `<div class="nav-heading">${escapeHtml(mod)}</div>`;
    const modChapters = CHAPTERS.filter(c => c.module === mod);
    
    html += modChapters.map(ch => {
      const p = progress[ch.id];
      const done = p && p.best >= Math.ceil(p.total * 0.8);
      const label = p ? `${p.best}/${p.total}` : "—";
      return `<a href="#chapter/${ch.id}" class="nav-item chapter-link" data-chapter="${ch.id}">
        <span>${escapeHtml(ch.number)}. ${escapeHtml(ch.title)}</span>
        <span class="chapter-badge ${done ? 'done' : ''}">${label}</span>
      </a>`;
    }).join("");
  });
  
  list.innerHTML = html;
}

function renderHome() {
  const progress = getProgress();
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="home"]').classList.add("active");

  const modules = [...new Set(CHAPTERS.map(c => c.module))];

  let html = `
    <div class="dashboard-header">
      <h1>Your Study Dashboard</h1>
      <p>Read the notes. Take the quiz. Ask the tutor. All offline-ready.</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h4>All-in-One Notes</h4>
        <p>5 complete modules structured clearly so you can study without flipping through old PDFs.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h4>Offline Ready</h4>
        <p>Study on the bus or without data. Everything is saved to your device automatically.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🧠</div>
        <h4>Active Recall Quizzes</h4>
        <p>8-question quizzes per topic with instant scores and full explanations to test your memory.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🤖</div>
        <h4>Smart Tutor</h4>
        <p>Ask questions and get answers pulled directly from your course content. No internet required.</p>
      </div>
    </div>

    <div class="timetable-widget">
      <h3>📅 Upcoming Exams</h3>
      <div class="timetable-list">
        ${EXAM_TIMETABLE.map(ex => `
          <div class="timetable-item">
            <span class="timetable-date">${escapeHtml(ex.date)}</span>
            <span class="timetable-module">${escapeHtml(ex.module)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  modules.forEach(mod => {
    const modChapters = CHAPTERS.filter(c => c.module === mod);

    html += `<div class="module-section">`;
    html += `<div class="module-title">${escapeHtml(mod)}</div>`;
    html += `<div class="card-grid">`;

    html += modChapters.map(ch => {
      const p = progress[ch.id];
      const pct = p ? Math.round((p.best / p.total) * 100) : 0;
      return `<div class="card" data-chapter="${ch.id}">
        <div class="card-top">
          <span class="chapter-num">${escapeHtml(ch.number)}</span>
        </div>
        <h3>${escapeHtml(ch.title)}</h3>
        <p>${escapeHtml(ch.summary)}</p>
        <div class="card-progress-wrap">
          <div class="card-progress-label">
            <span>Progress</span>
            <span>${pct}%</span>
          </div>
          <div class="card-progress"><div class="card-progress-fill" style="width:${pct}%"></div></div>
        </div>
      </div>`;
    }).join("");

    html += `</div></div>`;
  });

  $("#main").innerHTML = html;

  $$(".card").forEach(c => c.addEventListener("click", () => {
    location.hash = `#chapter/${c.dataset.chapter}`;
  }));
}

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
      <div class="eyebrow">${escapeHtml(ch.module)}</div>
      <h1>${escapeHtml(ch.number)}. ${escapeHtml(ch.title)}</h1>
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

// ---------- QUIZ LOGIC ----------
function renderQuiz(ch) {
  if (!quizState) {
    quizState = { 
      index: 0, 
      answers: new Array(ch.quiz.length).fill(undefined), 
      questions: shuffle(ch.quiz), 
      done: false,
      reviewing: false
    };
  }
  
  const body = $("#chapterBody");
  const total = quizState.questions.length;

  if (quizState.reviewing) {
    let reviewHtml = `<h2>Review Answers</h2>`;
    quizState.questions.forEach((q, i) => {
      const userAns = quizState.answers[i];
      const isCorrect = userAns === q.answer;
      
      reviewHtml += `<div class="review-item">
        <div class="q-text">${i+1}. ${escapeHtml(q.q)}</div>
        <div class="a-row ${isCorrect ? 'correct' : 'wrong'}">
          Your answer: ${String.fromCharCode(65 + userAns)}. ${escapeHtml(q.options[userAns])} 
          ${isCorrect ? '✓' : '✗'}
        </div>
        ${!isCorrect ? `<div class="a-row correct">
          Correct answer: ${String.fromCharCode(65 + q.answer)}. ${escapeHtml(q.options[q.answer])}
        </div>` : ''}
        <div class="quiz-explain" style="margin-top:12px">
          <strong>Why:</strong> ${escapeHtml(q.explain)}
        </div>
      </div>`;
    });
    
    body.innerHTML = reviewHtml + `
      <div class="quiz-actions" style="justify-content:center; margin-top:32px">
        <button class="btn btn-primary" id="retryBtn">Retake Quiz</button>
        <button class="btn" id="backToScoreBtn">Back to Score</button>
      </div>
    `;
    
    $("#retryBtn").addEventListener("click", () => { quizState = null; renderQuiz(ch); });
    $("#backToScoreBtn").addEventListener("click", () => { quizState.reviewing = false; renderQuiz(ch); });
    return;
  }

  if (quizState.done) {
    const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
    const pct = Math.round((score / total) * 100);
    const msg = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good — review the wrong answers." : "Re-read the notes and try again.";
    
    body.innerHTML = `
      <div class="score-card">
        <div class="score-big">${score}/${total}</div>
        <div class="score-label">${pct}% correct</div>
        <div class="score-msg">${msg}</div>
        <div class="quiz-actions" style="justify-content:center; margin-top:32px">
          <button class="btn btn-primary" id="reviewBtn">Review Answers</button>
          <button class="btn" id="retryBtn">Retake Quiz</button>
        </div>
      </div>
    `;
    
    $("#reviewBtn").addEventListener("click", () => {
      quizState.reviewing = true;
      renderQuiz(ch);
    });
    $("#retryBtn").addEventListener("click", () => {
      quizState = null; renderQuiz(ch);
    });
    return;
  }

  const q = quizState.questions[quizState.index];
  const selected = quizState.answers[quizState.index];
  const pct = Math.round((quizState.index / total) * 100);

  const optionsHtml = q.options.map((opt, i) => {
    const isSelected = selected === i;
    return `<button class="quiz-option ${isSelected ? 'selected' : ''}" data-idx="${i}">
      <span class="letter">${String.fromCharCode(65 + i)}</span>
      <span>${escapeHtml(opt)}</span>
    </button>`;
  }).join("");

  body.innerHTML = `
    <div class="quiz-progress-wrap">
      <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="quiz-question">
      <div class="q-num">Question ${quizState.index + 1} of ${total}</div>
      <div class="q-text">${escapeHtml(q.q)}</div>
      <div class="quiz-options">${optionsHtml}</div>
    </div>
    <div class="quiz-actions">
      <button class="btn btn-primary" id="nextBtn" ${selected === undefined ? 'disabled' : ''}>
        ${quizState.index === total - 1 ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  `;

  $$(".quiz-option").forEach(btn => btn.addEventListener("click", () => {
    quizState.answers[quizState.index] = Number(btn.dataset.idx);
    renderQuiz(ch);
  }));

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

function renderAsk(ch) {
  $("#chapterBody").innerHTML = `
    <div class="ask-box">
      <textarea id="askInput" placeholder="Ask anything about ${escapeHtml(ch.title)}…"></textarea>
      <div class="ask-actions">
        <span class="ask-hint">Offline tutor — searches course content</span>
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

  let answer = localAnswer(input, ch);

  area.innerHTML = `
    <div class="answer">
      <h4>Answer</h4>
      <div class="a-text">${mdToHtml(answer.text)}</div>
      <div class="a-meta">From course content</div>
      ${answer.suggestions && answer.suggestions.length ? `
        <div style="margin-top:16px">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:8px">Related questions</div>
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
  const faq = ch.faq || [];
  let best = null, bestScore = 0;
  for (const item of faq) {
    const score = keywordScore(q, item.q.toLowerCase());
    if (score > bestScore) { bestScore = score; best = item; }
  }
  if (best && bestScore >= 2) {
    return { text: best.a, suggestions: faq.filter(f => f !== best).slice(0, 3).map(f => f.q) };
  }
  let globalBest = null, globalScore = 0;
  for (const c of CHAPTERS) {
    for (const item of (c.faq || [])) {
      const score = keywordScore(q, (item.q + " " + item.a).toLowerCase());
      if (score > globalScore) { globalScore = score; globalBest = { item, c }; }
    }
  }
  if (globalBest && globalScore >= 2) {
    return { text: globalBest.item.a + `\n\n> Found in ${globalBest.c.module} - ${globalBest.c.number}. ${globalBest.c.title}`, suggestions: [] };
  }
  const notesMatch = findInNotes(q, ch);
  if (notesMatch) {
    return { text: notesMatch, suggestions: ch.faq.slice(0, 3).map(f => f.q) };
  }
  return {
    text: "I couldn't find an answer in this topic's content. Try rephrasing, or browse the **Notes** tab.",
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

$("#searchInput").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) { renderHome(); return; }
  const results = CHAPTERS.filter(ch =>
    ch.title.toLowerCase().includes(q) ||
    ch.summary.toLowerCase().includes(q) ||
    ch.notes.toLowerCase().includes(q)
  );
  $("#main").innerHTML = `
    <div class="dashboard-header"><h1>Search results</h1><p>${results.length} topic(s) match "${escapeHtml(q)}"</p></div>
    <div class="card-grid">
      ${results.map(ch => `<div class="card" data-chapter="${ch.id}">
        <div class="card-top"><span class="chapter-num">${escapeHtml(ch.number)}</span></div>
        <h3>${escapeHtml(ch.title)}</h3>
        <p>${escapeHtml(ch.summary)}</p>
      </div>`).join("") || `<div class="empty"><h2>No matches</h2><p>Try a different keyword.</p></div>`}
    </div>
  `;
  $$(".card").forEach(c => c.addEventListener("click", () => {
    location.hash = `#chapter/${c.dataset.chapter}`;
  }));
});

function renderTimetable() {
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="timetable"]').classList.add("active");

  $("#main").innerHTML = `
    <div class="dashboard-header">
      <h1>Exam Timetable</h1>
      <p>Keep track of your upcoming exams and start preparing early.</p>
    </div>
    <div class="timetable-widget">
      <div class="timetable-list">
        ${EXAM_TIMETABLE.map(ex => `
          <div class="timetable-item" style="padding: 20px;">
            <span class="timetable-date" style="font-size: 20px;">${escapeHtml(ex.date)}</span>
            <span class="timetable-module" style="font-size: 18px; font-weight: 600;">${escapeHtml(ex.module)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function route() {
  const hash = location.hash || "#home";
  if (hash.startsWith("#chapter/")) {
    renderChapter(hash.replace("#chapter/", ""));
  } else if (hash === "#ask") {
    renderAskGlobal();
  } else if (hash === "#timetable") {
    renderTimetable();
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
    <div class="dashboard-header"><h1>Ask a question</h1><p>Search across all topics, or pick one below.</p></div>
    <div class="card-grid">
      ${CHAPTERS.map(ch => `<div class="card" data-chapter="${ch.id}">
        <div class="card-top"><span class="chapter-num">${escapeHtml(ch.number)}</span></div>
        <h3>${escapeHtml(ch.title)}</h3>
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
$("#menuBtn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#resetBtn").addEventListener("click", resetProgress);

$$('[data-nav="home"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#home"; }
}));
$$('[data-nav="timetable"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#timetable"; }
}));
$$('[data-nav="ask"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#ask"; }
}));

function updateOffline() { $("#offlinePill").hidden = navigator.onLine; }
window.addEventListener("online", updateOffline);
window.addEventListener("offline", updateOffline);

// Register Service Worker for Offline Use
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(reg => {
      // Force update if a new service worker is found
      reg.onupdatefound = () => {
        const installingWorker = reg.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showToast("App updated! Refresh to see changes.");
          }
        };
      };
    }).catch(() => {});
  });
}

applyTheme();
renderSidebar();
updateOffline();
route();
