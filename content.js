/* BrainStack — course content.
   Format: markdown-ish. Rendered by app.js. */

const CHAPTERS = [
{
  id: "ch06a",
  number: "6 (Part 1)",
  title: "Entrepreneurship & the Business Plan",
  summary: "What entrepreneurship is, why it matters, SA's challenges, and the tools you need before writing a plan.",
  notes: `
## Overview
This chapter introduces what entrepreneurship is, why it matters to a country's economy, what makes it difficult in South Africa specifically, and the first analytical tools you need before writing a business plan: feasibility, viability, market size, market share, and break-even analysis.

## Why entrepreneurship matters

1. **Create jobs** — small and medium businesses are the largest employers in most countries; startups absorb unemployed youth and lower unemployment.
2. **Drive innovation** — entrepreneurs introduce new products, services and technologies that disrupt markets and improve productivity.
3. **Grow the economy** — new businesses generate income, pay taxes, and stimulate demand for goods and services.
4. **Solve social problems** — social entrepreneurs address gaps in healthcare, education, clean energy and more.
5. **Encourage self-reliance** — entrepreneurship builds a culture of resilience and financial independence.

> **Exam tip:** If asked "why is entrepreneurship important?", give all five with one sentence of explanation each.

## Challenges entrepreneurs face in South Africa

1. **Limited access to funding** — banks require collateral and credit records that first-time entrepreneurs usually don't have.
2. **High unemployment and low disposable income** — less money to spend shrinks the market and hurts profitability.
3. **Bureaucracy and red tape** — lengthy registration, multiple regulations, high formalisation costs.
4. **Crime and safety concerns** — theft, vandalism, violence; higher security costs and investor reluctance.
5. **Skills gap and education** — many entrepreneurs lack financial, marketing and digital skills.
6. **Market access and competition** — small businesses struggle against established chains and retail shelf access.
7. **Lack of mentorship** — no experienced guides, so poor early decisions lead to failure.

## What is an entrepreneur?

> **Definition:** An entrepreneur is a person who sees an opportunity in the market, gathers resources, and creates and grows a business venture to satisfy that need. They take the risk of the venture and are rewarded with profit if it succeeds.

**Four moving parts and one outcome:** Opportunity → Resources → Venture → Risk → **Profit**.

**Twelve traits of successful entrepreneurs:**

1. Innovative — creates new ideas, products or ways of doing business
2. Risk-taker — willing to take *calculated* risks
3. Self-confident — believes in their abilities and decisions
4. Hardworking — dedicated and willing to put in the effort
5. Goal-oriented — focuses on specific objectives
6. Leadership skills — can motivate and guide others
7. Decision-making ability — makes timely, effective decisions
8. Persistent — continues despite challenges and setbacks
9. Adaptable — adjusts to market changes
10. Good problem-solver — identifies problems and finds solutions
11. Creative — thinks of unique improvements
12. Organised — plans and manages resources efficiently

## Feasibility vs viability

| | **Feasibility** | **Viability** |
|---|---|---|
| **Question** | *Can it be done?* | *Will it make money?* |
| **Focus** | Short-term: can we build this? | Long-term: can this survive and grow? |
| **Key considerations** | Technical, financial, legal, operational | Demand, competitive advantage, profit |

**Feasibility — four checks:**

1. Technical — do we have the skills and technology?
2. Financial — do we have the budget?
3. Legal — is it allowed?
4. Operational — can it work in practice?

**Viability — three checks:**

1. Is there demand for the product or service?
2. Do we have a competitive advantage?
3. Is the profit sufficient?

> **Exam tip:** Not all ideas can become businesses. Many are creative — but they still have to pass both tests.

## Market size

> **Definition:** Market size is the total potential sales or revenue opportunity available for a product or service in a specific market over a given period.

**Two ways to measure:**

1. **By revenue** — total money customers spend (e.g. SA fast-food market is worth R5 billion per year)
2. **By volume** — total number of potential customers or units sold (e.g. 10 million smartphone users in a region)

**Worked example:** A town has 10,000 residents. About 2,000 buy coffee every day. Each spends R30 per day.

- Market size in customers = **2,000 potential buyers**
- Market size in revenue = 2,000 × R30 = **R60,000 per day**

## Market share

> **Definition:** Market share is the percentage of total sales in a market that is earned by a particular company, product or brand during a specific time.

**Formula:** Market share = (Company sales ÷ Total market sales) × 100

**Worked example from 2025 car sales (total = 37,455):**

1. Toyota: 11,690 ÷ 37,455 × 100 = **31%**
2. Suzuki: 5,221 ÷ 37,455 × 100 = **14%**
3. VW: 4,973 ÷ 37,455 × 100 = **13%**

**Observation from the slides:** Suzuki moved from a smaller share in 2022 to second place in 2025 — value for money and reliability appeal to cash-strapped consumers.

## Simple research techniques

Six low-cost ways to test demand:

1. **Surveys and questionnaires** — Google Forms or printed; ask about needs, pricing, preferences.
2. **Interviews** — face-to-face or phone; open-ended questions about pain points.
3. **Social media polls** — track likes, comments, shares.
4. **Pre-sell or test the product** — count actual commitments, not opinions.
5. **Pop-up stalls, markets or food trucks** — face-to-face feedback plus real sales data.
6. **Observe the competition** — if competitors are busy, demand likely exists.

## Break-even analysis

**The cost split:**

- **Fixed costs** (overheads, indirect) — do not change with output: rent, insurance, advertising, water/electricity, owner and non-production salaries.
- **Variable costs** — change directly with units produced: raw materials, direct wages of production staff.

**Formulas:**

- **Break-even quantity** = Fixed costs ÷ (Selling price per unit − Variable cost per unit)
- **Break-even rand value** = Break-even quantity × Selling price

**Worked example:** Company A sells water bottles. Fixed costs = R100,000. Variable cost = R2 per bottle. Selling price = R12 per bottle.

1. Contribution per unit = R12 − R2 = **R10**
2. Break-even quantity = R100,000 ÷ R10 = **10,000 units**
3. Break-even rand value = 10,000 × R12 = **R120,000 in sales**

> **Exam tip:** Show the formula, substitution, unit answer, and rand answer. That's four marks even if the arithmetic is slightly off.
`,
  quiz: [
    { q: "What is the main difference between feasibility and viability?",
      options: ["Feasibility = can it be done; Viability = will it make money long-term", "Feasibility = will it make money; Viability = can it be done", "They mean the same thing", "Feasibility is for products; Viability is for services"],
      answer: 0,
      explain: "Feasibility checks technical/financial/legal/operational ability. Viability checks demand, competitive advantage and profit." },
    { q: "Fixed costs are R100,000, selling price is R12, variable cost is R2. What is the break-even quantity?",
      options: ["8,333 units", "10,000 units", "12,000 units", "50,000 units"],
      answer: 1,
      explain: "BEQ = Fixed ÷ (Price − Variable) = 100,000 ÷ (12 − 2) = 10,000 units." },
    { q: "A company sells 12,000 cars in a market of 60,000 total cars. What is its market share?",
      options: ["12%", "20%", "25%", "60%"],
      answer: 1,
      explain: "12,000 ÷ 60,000 × 100 = 20%." },
    { q: "Which is NOT listed as a challenge for SA entrepreneurs?",
      options: ["Limited access to funding", "Bureaucracy and red tape", "Too much mentorship", "Crime and safety concerns"],
      answer: 2,
      explain: "Lack of mentorship is the challenge — not too much of it." },
    { q: "Which of these is a fixed cost?",
      options: ["Raw materials", "Direct wages", "Rent", "Packaging per unit"],
      answer: 2,
      explain: "Rent does not change with output. Materials and direct wages are variable." }
  ],
  faq: [
    { q: "difference between feasibility and viability", a: "Feasibility asks *can it be done?* — technical, financial, legal and operational checks. Viability asks *will it make money long-term?* — demand, competitive advantage and profit. An idea can be feasible but not viable." },
    { q: "how to calculate break-even", a: "Break-even quantity = Fixed costs ÷ (Selling price − Variable cost per unit). Then multiply by selling price for the rand value. Example: R100,000 ÷ (R12 − R2) = 10,000 units × R12 = R120,000 in sales." },
    { q: "how to calculate market share", a: "Market share = (Company sales ÷ Total market sales) × 100. Example: 11,690 ÷ 37,455 × 100 = 31%." },
    { q: "what are the challenges for entrepreneurs in SA", a: "Seven: limited access to funding, high unemployment/low disposable income, bureaucracy and red tape, crime and safety concerns, skills gap, market access and competition, and lack of mentorship." }
  ]
},
{
  id: "ch06b",
  number: "6 (Part 2)",
  title: "The Business Plan",
  summary: "How to project profit, and what goes inside a proper business plan.",
  notes: `
## Overview
Two things: how to calculate whether a business idea will be profitable (pro forma income statement), and what goes into a proper business plan.

## Calculating projected net profit

**Core logic:**

- **Income > Expenses** → the idea is profitable
- **Expenses > Income** → not viable; the business runs at a loss

Because you're estimating future figures, you draw up a **pro forma income statement** — a projected income statement.

**Worked example — Coffee Shop (year ended 31 Dec 2024):**

| Item | Amount (ZAR) |
|---|---|
| Revenue | 200,000 |
| Cost of Goods Sold | (80,000) |
| **Gross Profit** | **120,000** |
| Rent | 20,000 |
| Salaries | 35,000 |
| Utilities | 5,000 |
| Marketing | 5,000 |
| Equipment Maintenance | 3,000 |
| Supplies | 2,000 |
| Insurance | 2,500 |
| **Total Operating Expenses** | **72,500** |
| **Operating Profit** | **47,500** |
| Loan Interest | (2,500) |
| **Net Profit Before Tax** | **45,000** |
| Income Tax (28%) | (12,600) |
| **Net Profit** | **32,400** |

**How to read it in three steps:**

1. **Gross profit** = Revenue − COGS = 200,000 − 80,000 = **120,000** (before running costs)
2. **Operating profit** = Gross profit − Operating expenses = 120,000 − 72,500 = **47,500** (core business profit)
3. **Net profit** = Operating profit − Interest − Tax = 47,500 − 2,500 − 12,600 = **32,400** (what the owner keeps)

> **Exam tip:** Write the formula first, then substitute. If tax is missing, calculate 28% of Net Profit Before Tax.

## Why a business plan matters

Eight purposes:

1. **Provides direction** — sets goals and plans how to achieve them
2. **Assists decision-making** — guides decisions based on objectives and strategies
3. **Secures funding** — banks and investors usually require one
4. **Identifies risks and opportunities** — helps anticipate challenges
5. **Improves resource management** — money, people, equipment
6. **Measures performance** — benchmarks actual vs planned
7. **Attracts investors and partners** — shows potential
8. **Enhances communication** — explains vision and strategy to stakeholders

## Contents of a business plan

1. Cover sheet
2. Table of contents
3. Executive summary
4. Management team
5. Macro and market analysis + positioning
6. Products and/or services plan
7. Marketing plan
8. Production or operational plan
9. Financial plan
10. Appendices and references

> **Note from the slides:** The plan can be adapted to the type and size of the business. It is a **living document** — reviewed and updated regularly.

## Section-by-section detail

### Cover page must include

1. Full name of the business
2. Ownership status (sole proprietor, partnership, company, etc.)
3. Street address
4. Telephone, email, website
5. A contact name and title
6. Date of the plan

### Executive summary

- **Length:** ½ page to 1 page
- **Contents:** brief introduction; describes the business, the problem it solves, the target market, financial highlights
- **Purpose:** grab attention; investors may make an initial decision based on this alone

### Management team

1. Qualifications and experience of directors, managers, significant owners
2. The entrepreneur's special experience and abilities
3. Background and achievements of the team and technical experts
4. **Short CVs go in the appendix**, not the main body
5. Roles of consultants, board of directors and other advisors
6. Contribution of key personnel
7. Ownership information

### Products and/or services plan

1. Explain the products
2. Include photographs, drawings or specifications
3. Outline unique qualities and importance
4. Explain superiority over existing products
5. List limitations and flaws
6. Clarify potential expansion

### Marketing plan

1. Target market — size, growth rate, segments, targeted area
2. Product, pricing, distribution and promotion strategies with explanations
3. Estimated monthly sales for year 1 and quarterly for years 2–3
4. Anticipated market share and how it will be achieved

## The 4 Ps

| **P** | **Covers** |
|---|---|
| **Product** | Functionality, brand, packaging, service |
| **Price** | List price, discounts, bundling, credit terms |
| **Place** | Channel, inventory, logistics, distribution |
| **Promotion** | Advertising, sales force, publicity, sales promotion |

## Market segmentation — four types

| Type | Based on | Example |
|---|---|---|
| **Demographic** | Age, gender, income, marital status, ethnic background | Colgate: cartoon packaging for kids vs whitening for adults |
| **Geographic** | Local, regional, national, international | McDonald's: McSpicy Paneer in India, Teriyaki Burger in Japan |
| **Psychographic** | Activities, attitudes, personality, values | Nike: "Just Do It" for ambitious, active lifestyles |
| **Behavioral** | Benefits, patterns, usage rates | Coca-Cola: small cans for singles, 2L bottles for families |

> **Exam tip:** Ask yourself — *is this about who they are (demographic), where they are (geographic), how they live (psychographic), or how they buy (behavioral)?*

## Manufacturing / operational plan

- **Manufacturing business:** details on manufacturing and outsourcing; plant size and layout; equipment; raw materials and source; manufacturing costs; future requirements.
- **Service business:** nature of processes, equipment, controls, experience required.

## Financial plan — establishment costs

1. Product development
2. Legal costs
3. Product testing
4. Market research
5. Cost of purchasing premises (if not rented)
6. Machinery and equipment
7. Installation
8. Office equipment and modifications
9. Operating costs provision (6 months factories / 3 months retailers)
10. Unforeseen expenses
11. Current assets such as stock

## Financial plan — operating costs

1. **People:** salaries, wages, medical fund contributions
2. **Facilities:** equipment, rent, water and electricity, insurance
3. **Promotion:** ads, pamphlets, samples, demonstrations, outdoor advertising, sponsorships, competitions
4. **Admin:** postage, telephone, stationery, printing, local taxes, trade licences, legal expenses, collection costs

## Pro forma financial statements

For a **three-year period**:

1. Pro forma **cash-flow statement**
2. Pro forma **income statement**
3. Pro forma **balance sheet**

Plus a **break-even analysis**.

## Appendices and references

Proof of documentation and sources of assistance: attorneys, marketing specialists, engineering and production experts, accounting firms, local municipalities, government, business partners, consultants, the Internet, business chambers, the Department of Trade and Industry, journals, Statistics SA, and competitors.
`,
  quiz: [
    { q: "How long should the executive summary be?",
      options: ["One paragraph", "½ to 1 page", "3–5 pages", "10 pages"],
      answer: 1,
      explain: "The executive summary should be between half a page and one page." },
    { q: "Which is NOT one of the 4 Ps?",
      options: ["Product", "Price", "Profit", "Promotion"],
      answer: 2,
      explain: "The 4 Ps are Product, Price, Place and Promotion." },
    { q: "McDonald's selling a McSpicy Paneer burger in India is an example of:",
      options: ["Demographic segmentation", "Geographic segmentation", "Psychographic segmentation", "Behavioral segmentation"],
      answer: 1,
      explain: "It segments by location/country — geographic segmentation." },
    { q: "Revenue 200,000, COGS 80,000, operating expenses 72,500. What is gross profit?",
      options: ["80,000", "120,000", "47,500", "32,400"],
      answer: 1,
      explain: "Gross profit = Revenue − COGS = 200,000 − 80,000 = 120,000." },
    { q: "Which comes FIRST in a business plan?",
      options: ["Financial plan", "Executive summary", "Marketing plan", "Appendices"],
      answer: 1,
      explain: "The executive summary comes early (after cover page and table of contents)." }
  ],
  faq: [
    { q: "how to calculate gross profit", a: "Gross profit = Revenue − Cost of Goods Sold (COGS). Example: 200,000 − 80,000 = 120,000." },
    { q: "how to calculate net profit", a: "Net profit = Operating profit − Interest − Tax. From the coffee shop example: 47,500 − 2,500 − 12,600 = 32,400." },
    { q: "what goes in a business plan", a: "Ten sections: cover sheet, table of contents, executive summary, management team, macro/market analysis, products/services, marketing plan, operational plan, financial plan, appendices." },
    { q: "what are the 4 Ps", a: "Product, Price, Place, Promotion." }
  ]
},
{
  id: "ch07",
  number: "7",
  title: "Control",
  summary: "The fourth management function — monitoring performance and correcting deviations.",
  notes: `
## Overview
Control is the fourth management function, after planning, organising and leading. It's the mechanism that tells the manager whether the other three are actually working.

## What is control?

> **Definition:** Control is a function of management which helps to identify errors and take corrective action.

## Why control matters

1. Helps managers **monitor the effectiveness** of planning, organising and leading.
2. Determines **what is being accomplished** — evaluating performance and taking corrective measures so performance follows plans.
3. **Without control, the rest of the management functions are unusable.** Planning without control is just a wish.

## Levels of control

1. **Individual/employee** — are individuals performing vs their prescribed standards?
2. **Group/team** — are teams performing vs their prescribed standards?
3. **Organisational** — is the organisation performing vs its financial, operational, social and environmental goals?

## Types of control (based on timing)

| Type | Focus | Examples |
|---|---|---|
| **Pre-control** | Inputs (resources) | HR, technology, materials, capital, information |
| **Concurrent control** | Transformation process | Production, retail, services |
| **Post control** | Outputs | Final goods and services |

> **Memory aid:** Pre = before (inputs), Concurrent = during (process), Post = after (outputs).

## The four-step control process

1. **Establish standards** — linked to objectives
2. **Measure actual performance**
3. **Compare actual performance with standards**
4. **Take corrective action** — or reinforce good performance

The process is cyclical. After corrective action, loop back to measuring performance.

## Step 1 — Types of performance standards

| Type | Example |
|---|---|
| **Quantity** | Sales goals for a sales team |
| **Cost** | Reduce expenses by 10% |
| **Time** | Launch a new store by 1 Jan 2026 |
| **Quality** | Less than 5% errors |
| **Behaviour** | 80% of staff trained |

**Key point:** All standards must be **linked to the objectives** of the organisation, department, group or individual.

## Step 2 — Measuring actual performance

**Rules of good measurement:**

1. Decide **what** to measure and **how often**.
2. Measure **objectively** — subjective measurement produces incorrect or unfair information.
3. Measurement must be **reliable**.
4. Focus on the **important performance areas** of the job.

**Two technical terms:**

- **Reliable** = consistent; produces the same result every time.
- **Valid** = measures what it is supposed to measure.

> A measure can be reliable but not valid (consistently measuring the wrong thing). To be useful, it must be **both**.

## Step 3 — Comparing actual performance with standards

- Is performance up to standard or not?
- If yes, ask *why is it so good?* — so it can be reinforced.
- If no, ask *why not?* — so the cause can be corrected.
- The difference is called the **gap** or **deviation**.

## Step 4 — Reinforcing or correcting

1. If performance **matches or exceeds** the standard → **reinforce (encourage)**.
2. If performance **does not meet** the standard → **corrective action**.
3. Corrective action must **focus on defining the actual problem**, not blaming people.

## Worked example — the car manufacturer

1. **Standard set:** Produce 50 quality cars per month.
2. **Actual performance measured:** Only 40 cars produced.
3. **Comparison:** 10 cars short — this is the gap/deviation. Why?
4. **Reason found:** Machine breakdown and parts delay from Japan.
5. **Corrective action:** Replace the machine, service regularly, or buy a backup machine.

## Class-task formula

- Uses a **5-day week** and **4-week month**.
- **Standard per month = (per day × 5) × 4**

**Memo from the slides:**

| Product | Standard | Actual | Result |
|---|---|---|---|
| A | 2/day × 5 = 10/week × 4 = 40/month | 90 | **Exceeded by 50** |
| B | 3/day × 5 = 15/week × 4 = 60/month | 95 | **Exceeded by 35** |
| C | 4/week × 4 = 16/month | 15 | **Short by 1** |

**Second class task (no memo on slides):**

| Product | Standard required | Actual | Worked result |
|---|---|---|---|
| A | 3/day (5-day week) | 95 | 3×5×4 = 60 → **exceeded by 35** |
| B | 4/day (5-day week) | 100 | 4×5×4 = 80 → **exceeded by 20** |
| C | 5/week | 20 | 5×4 = 20 → **achieved exactly** |

## Generic types of control

1. **Financial controls** — financial statements, ratios, budgets
2. **Quality controls** — benchmarking, quality circles
3. **Balanced scorecard** — converts strategic goals into measurable performance objectives
4. **Stock control**
5. Others as appropriate to the business

## Benefits of controlling

1. **Achieves organisational goals** — directs activities toward objectives
2. **Improves efficiency** — reduces waste, better use of resources
3. **Identifies problems early** — detects errors before they become serious
4. **Measures performance** — compares actual vs planned targets
5. **Improves decision-making** — provides accurate information
`,
  quiz: [
    { q: "What is the correct order of the control process?",
      options: ["Measure → Set standards → Compare → Correct", "Set standards → Measure → Compare → Correct", "Compare → Set standards → Measure → Correct", "Set standards → Compare → Measure → Correct"],
      answer: 1,
      explain: "Standards → Measurement → Comparison → Corrective action." },
    { q: "Controlling inputs such as HR, technology and materials is:",
      options: ["Pre-control", "Concurrent control", "Post control", "Financial control"],
      answer: 0,
      explain: "Pre-control focuses on inputs before the transformation process." },
    { q: "A standard of '<5% errors' is a:",
      options: ["Quantity standard", "Cost standard", "Time standard", "Quality standard"],
      answer: 3,
      explain: "Error rate is a quality standard." },
    { q: "A measurement that produces the same result every time is:",
      options: ["Valid", "Reliable", "Subjective", "Balanced"],
      answer: 1,
      explain: "Reliable = consistent. Valid = measures what it should." },
    { q: "Standard is 50 cars/month; actual is 40. The gap is:",
      options: ["5", "10", "40", "50"],
      answer: 1,
      explain: "Gap = Standard − Actual = 50 − 40 = 10." }
  ],
  faq: [
    { q: "what is the control process", a: "Four steps: (1) establish standards, (2) measure actual performance, (3) compare actual with standards, (4) take corrective action (or reinforce good performance)." },
    { q: "difference between reliability and validity", a: "Reliable = consistent, produces the same result every time. Valid = measures what it is supposed to measure. A measure can be reliable but not valid. Useful measurement requires both." },
    { q: "types of control based on timing", a: "Pre-control (inputs), Concurrent control (process), Post control (outputs)." },
    { q: "how to work out a control class task", a: "Standard per month = (per day × 5) × 4. Compare with actual; state 'exceeded by X' or 'short by X'." }
  ]
},
{
  id: "ch08",
  number: "8 (Part 1)",
  title: "Leadership — Foundations",
  summary: "What leadership is, how it differs from management, styles and types of power.",
  notes: `
## Overview
Introduces leadership as a concept: definition, differences from management, three main styles, five types of power, and a first look at leadership theories (detailed in Part 2).

## What is leadership?

> **Definition:** Leadership is the ability to influence, guide and motivate people to work toward a common goal.

**Three things follow from the definition:**

1. A leader must **communicate ideas**.
2. A leader must **inspire workers** to support ideas through change.
3. **Coercing or forcing** workers via threats is **not** leading. That's managing by fear.

## Leadership vs management

| **Leadership** | **Management** |
|---|---|
| About people and vision | About process and execution |
| Inspires and guides toward a vision | Plans, organises and controls resources |
| Deals with change, innovation, direction | Deals with stability, structure, processes |
| Relies on influence, motivation, trust | Relies on authority, systems, policies |
| Asks **"what and why?"** | Asks **"how and when?"** |

> **Exam tip:** The "what and why" vs "how and when" contrast is a classic short-answer question.

## The three leadership styles

1. **Autocratic (authoritarian)** — manager decides **without consulting** employees. The "do or die" approach.
2. **Participative (democratic)** — managers and employees **work together** to make decisions.
3. **Free-rein (laissez-faire)** — management **sets objectives** and allows employees to **work freely**.

## Is there a best style?

**No.** Depends on the situation, employees, goals and values of the organisation.

1. **Autocratic** works **in an emergency** or with **new/inexperienced workers**.
2. **Participative** — not necessarily the most effective, but **increases job satisfaction**.
3. **Free-rein** works with **experts or highly skilled workers** — doctors, engineers, researchers.

**The nuance:**

- A single leader can use **all three** styles with different employees and situations.
- This is called **situational leadership**, described as the "overall best tool."
- A **combination of democratic style with Theory Y** is most effective.
- Effectiveness depends on demonstrating an **adequate level of skill**.

## The five types of power

| Type | Source | Example |
|---|---|---|
| **Coercive** | Fear — threats or punishment | "Do this or you're fired" |
| **Reward** | What the manager can give/withhold | Praise, promotion, pay |
| **Legitimate** | Position given by the organisation | A job title |
| **Referent** | The leader's personality | A charismatic manager |
| **Expert** | Leader's knowledge and skills | The most skilled manager in the room |

> Leaders who command **all five** types are **strong leaders**.

## Leadership theories (overview)

Ten theories across Parts 1 and 2:

1. Trait
2. Behavioural
3. Contingency
4. Leadership competency
5. Principle-centred
6. Ethical
7. Transformational
8. Transactional
9. Leader-member exchange (LMX)
10. Servant-leadership

> Contingency theory appears in the list but isn't developed in the slides. Standard answer: **no single best style; the right style depends on the situation.**
`,
  quiz: [
    { q: "Leadership focuses on ____, while management focuses on ____.",
      options: ["process and execution; people and vision", "people and vision; process and execution", "authority; influence", "stability; change"],
      answer: 1,
      explain: "Leadership = people and vision. Management = process and execution." },
    { q: "A manager makes all decisions without consulting staff. This is:",
      options: ["Democratic", "Laissez-faire", "Autocratic", "Servant"],
      answer: 2,
      explain: "Autocratic (authoritarian) leadership — the 'do or die' approach." },
    { q: "Which power is based on the leader's personality and likeability?",
      options: ["Coercive", "Legitimate", "Referent", "Expert"],
      answer: 2,
      explain: "Referent power comes from admiration and respect for the leader." },
    { q: "Free-rein leadership works best with:",
      options: ["New, inexperienced workers", "Highly skilled experts", "Emergency situations", "Unionised staff"],
      answer: 1,
      explain: "Laissez-faire suits experts like doctors, engineers and researchers." },
    { q: "Which is NOT one of the five types of power?",
      options: ["Coercive", "Reward", "Charismatic", "Legitimate"],
      answer: 2,
      explain: "The five are coercive, reward, legitimate, referent and expert." }
  ],
  faq: [
    { q: "difference between leadership and management", a: "Leadership is about people and vision — asks 'what and why?', inspires change. Management is about process and execution — asks 'how and when?', plans and controls. Best leaders have some of both." },
    { q: "three leadership styles", a: "Autocratic (manager decides alone), Participative/Democratic (decide together), Free-rein/Laissez-faire (manager sets objectives, employees work freely)." },
    { q: "five types of power", a: "Coercive (fear), Reward (praise/pay), Legitimate (position), Referent (personality), Expert (knowledge/skills). Leaders with all five are strongest." }
  ]
},
{
  id: "ch09",
  number: "9 (Part 2)",
  title: "Leadership — Theories",
  summary: "The nine theories from trait theory to servant-leadership.",
  notes: `
## Overview
Develops the theories themselves. For each, learn three things: **what it says**, **what it assumes**, and **the example the slides give**.

## 1. Trait theory

1. **What it says:** Studies the personal characteristics that make good leaders.
2. **Assumption:** **"Good leaders are born, not made."** Leadership is innate.
3. **Traits:** Honesty, kindness, patience, dependability, respectfulness, empathy, optimism, confidence, humility, adaptability, creativity.

> If Elon Musk says "don't listen to the little man" — is this trait or behavioural? **Trait theory**, because it describes a personal characteristic, not a learnable action.

## 2. Behavioural theory

1. **What it says:** Studies **how successful leaders behave** differently from unsuccessful leaders.
2. **Key question:** What actions create business success?
3. **Contrast with trait theory:** Trait = innate; Behavioural = **learnable**.

## 3. Leadership competencies theory

1. **What it says:** The more leadership skills and behaviours a person has, the better the leader.
2. **Nine key competencies:**
   1. **Vision** — sets direction, inspires a shared vision
   2. **Communication** — communicates clearly, listens actively
   3. **Empathy** — understands and cares, builds trust
   4. **Problem-solving** — analyses challenges, finds solutions
   5. **Integrity** — honesty and moral principles
   6. **Team-building** — collaboration, values diversity
   7. **Decision-making** — confident, timely, based on facts
   8. **Motivation** — empowers others
   9. **Driving results**
3. **Tagline from the slide:** *"Great leaders are not born, they are made. Continuously develop your skills and lead by example."*

## 4. Principle-centred perspective

1. **What it says:** A leader's **beliefs** can make them great leaders.
2. **Definition of belief:** Something you believe or accept as true.
3. **Example:** Jeff Bezos — *"If you want to be inventive, you have to be willing to fail."*

## 5. Ethical-leadership perspective

1. **What it says:** Ethical leaders put people into management positions who will **promote and model moral conduct** in their actions and relationships at work.
2. **Example:** Nelson Mandela — *"Real leaders must be ready to sacrifice all for the freedom of their people."*

## 6. Transformational leadership

1. **What it says:** Leaders **encourage, inspire and motivate employees to innovate and create change** for future success.
2. **Example:** Steve Jobs.
3. **Key word:** *change*.

## 7. Transactional leadership

1. **What it says:** Focuses on **routine, structure and clear tasks**, using **rewards and punishments** to motivate.
2. **Relationship is an exchange:** work for pay, compliance for rewards.
3. **Example:** Bill Gates — overtime rewarded with a good performance review.
4. **Management by exception:** leaders **interfere only when goals are not met**.

**Transformational vs transactional:**

- Transformational leaders inspire change and innovation.
- Transactional leaders manage through routine, reward and punishment.

## 8. Leader-member exchange (LMX)

1. **What it says:** Focuses on the **relationship between leaders and followers**.
2. **Core observation:** In every team there are workers who are **"in"** (work well with the leader) and workers who are **"out"** (do not).
3. **Central question:** How can the leader get the **"outs" to become "ins"?**

## 9. Servant-leadership

1. **What it says:** **Leading by example.** A leader shows they are a helping leader by being **willing to do the same work they ask of their team**.
2. **Example:** A sales team manager willing to do the same work they ask their team members to do.

> Servant-leadership is one of the most commonly examined theories. The distinguishing feature is **humility and service** — the leader serves the team.
`,
  quiz: [
    { q: "Which theory says 'good leaders are born, not made'?",
      options: ["Behavioural", "Trait", "Contingency", "Transformational"],
      answer: 1,
      explain: "Trait theory assumes leaders are born with the right characteristics." },
    { q: "A leader who inspires employees to innovate and create change is:",
      options: ["Transactional", "Servant", "Transformational", "Autocratic"],
      answer: 2,
      explain: "Transformational leadership encourages innovation and change (e.g. Steve Jobs)." },
    { q: "A leader who only steps in when goals are not met is using:",
      options: ["Management by exception", "Servant-leadership", "LMX", "Trait theory"],
      answer: 0,
      explain: "Management by exception is a transactional style — interfere only when targets are missed." },
    { q: "LMX theory focuses on:",
      options: ["The leader's personality traits", "The relationship between leader and followers ('in' vs 'out' groups)", "Rewards and punishments", "The leader's beliefs"],
      answer: 1,
      explain: "Leader-member exchange (LMX) examines in-group vs out-group relationships." },
    { q: "A manager who does the same work they ask of their team is demonstrating:",
      options: ["Transactional leadership", "Servant-leadership", "Trait theory", "Autocratic leadership"],
      answer: 1,
      explain: "Servant-leadership = leading by example and helping." }
  ],
  faq: [
    { q: "difference between trait and behavioural theory", a: "Trait theory: leaders are born with certain characteristics. Behavioural theory: leadership is a set of learnable behaviours — study what successful leaders DO." },
    { q: "difference between transformational and transactional leadership", a: "Transformational leaders inspire innovation and change. Transactional leaders manage through routine, reward and punishment (an exchange: work for pay)." },
    { q: "what is servant leadership", a: "Leading by example — the leader is willing to do the same work they ask of their team. Humility and service are the distinguishing features." },
    { q: "what is LMX theory", a: "Leader-member exchange. Focuses on the relationship between leader and followers — 'in' group works well with the leader, 'out' group does not. The central question: how to move 'outs' to 'ins'." }
  ]
},
{
  id: "ch10",
  number: "10",
  title: "Motivation",
  summary: "Why motivation matters, plus the six main motivational theories.",
  notes: `
## Overview
Motivation is the willingness of employees to put effort into their work. This chapter covers why motivation matters and the six main theories.

## What is motivation?

> **Definition:** Employee motivation is the **enthusiasm, energy level, promise and creativity** an employee brings to the organisation daily. Motivation means the **desire and willingness of employees to reach the goals of the business.**

- Motivated employees are an **asset** — directly related to the organisation's success.

## Why managers must understand motivation

Managers must understand what motivates employees because **by understanding what motivates them, a manager can influence employee work performance.**

**Five reasons to motivate employees:**

1. **Find the right person for the job** — motivation attracts better candidates.
2. **Retain employees** — time, money and effort are invested in them.
3. **Employees come to work regularly** — attendance improves.
4. **Employees do more than the minimum** — discretionary effort.
5. **Good group citizenship** — employees accept the culture and values.

## Maslow's hierarchy of needs

Needs are arranged in a **pyramid** and satisfied **in sequence**, from bottom to top.

| Level | Need | Meaning |
|---|---|---|
| 5 (top) | **Self-actualisation** | Develop one's full potential |
| 4 | **Esteem** | Recognition and acknowledgement |
| 3 | **Social** | Loved, accepted, part of a group |
| 2 | **Safety** | Safe and secure at work/home |
| 1 (bottom) | **Physiological** | Food, water, shelter |

**Manager application:**

1. **Physiological** — adequate salary for food, clothing, shelter
2. **Safety** — job stability and benefits (medical aid, housing, UIF)
3. **Social** — breaks, team-building activities
4. **Esteem** — recognition and appreciation
5. **Self-actualisation** — responsibility, autonomy, challenging assignments

## Herzberg's two-factor theory

| **Motivators (high)** | **Hygiene factors (low)** |
|---|---|
| Sense of achievement | Working conditions |
| Recognition | Pay |
| Opportunity for growth | Peer and group relations |
| Work itself | Status |
| Responsibility | Job security |
| | Supervisor fairness |
| | Policy and rules |
| | Bonus |

**Four rules:**

1. The **true motivators** are the motivators, **not** the hygiene factors.
2. **Hygiene factors must be present** for satisfaction.
3. **One can't be motivated and dissatisfied at the same time.**
4. **If hygiene factors are missing, motivators can't work.**

**Practical implication:** Paying more (a hygiene factor) won't make someone motivated. But if pay is unfair, no amount of recognition (a motivator) will work.

> **Exam tip:** The common mistake is listing "pay" as a motivator — it's a **hygiene factor**.

## Vroom's theory — "carrot and stick"

1. **What it says:** Employees are motivated by **rewards or consequences**.
2. **Positive:** Bonus for reaching targets.
3. **Negative:** Warning for coming late.

> Memory aid: Carrot = reward = bonus. Stick = punishment = warning.

## Adams' equity theory (1965)

1. **What it says:** People can be **demotivated by comparing themselves to others** — salary, benefits, recognition.
2. **Core idea:** Employees need to **perceive** that rewards for their contributions are **fair** and similar to others'.
3. **Example:** A female manager earning less than a male manager for the same work will be demotivated.
4. **The image:** A balance scale comparing **Person (input vs outcome)** against **Referent Other**.

## Alderfer's ERG theory

Three groups of core needs, mapped onto Maslow:

| ERG | Maslow levels covered |
|---|---|
| **E — Existence** | Physiological (food, water) + Safety (shelter) |
| **R — Relatedness** | Social (friendship, family) + Esteem from others (respect) |
| **G — Growth** | Esteem (self-esteem, achievement) + Self-actualisation (creativity, problem-solving) |

**Key difference from Maslow:**

- **Maslow:** needs must be satisfied **in sequence**, one at a time.
- **ERG:** different levels **can be satisfied at any time** — you can have social needs met while basic needs are unmet.

> **Exam tip:** "How does ERG differ from Maslow?" → **ERG allows needs to be met in any order; Maslow requires a strict sequence.**

## McClelland's needs theory

Every person has **one of three main drivers**:

1. **Need for achievement** — likes to solve problems and achieve goals.
2. **Need for affiliation** — doesn't like to stand out or take risks; values relationships above all.
3. **Need for power** — likes to control others and be in charge.

**How managers use this:** identify each team member's dominant driver, then lead, praise and structure roles accordingly.
`,
  quiz: [
    { q: "In Maslow's hierarchy, which need comes directly above safety?",
      options: ["Physiological", "Social", "Esteem", "Self-actualisation"],
      answer: 1,
      explain: "Order: Physiological → Safety → Social → Esteem → Self-actualisation." },
    { q: "In Herzberg's theory, which is a hygiene factor?",
      options: ["Recognition", "Responsibility", "Working conditions", "Achievement"],
      answer: 2,
      explain: "Working conditions are a hygiene factor. Recognition and responsibility are motivators." },
    { q: "Vroom's theory is also called the:",
      options: ["Equity theory", "Carrot-and-stick approach", "ERG theory", "Two-factor theory"],
      answer: 1,
      explain: "Vroom = carrot-and-stick: rewards (carrot) and consequences (stick)." },
    { q: "A female manager earning less than a male manager for the same work is an example of:",
      options: ["Maslow", "Herzberg", "Adams' equity theory", "McClelland"],
      answer: 2,
      explain: "Adams' equity theory — unfair comparison of input/outcome ratios demotivates." },
    { q: "Which theory allows needs to be satisfied in any order (unlike Maslow)?",
      options: ["Alderfer's ERG", "Herzberg's two-factor", "Vroom's expectancy", "McClelland's needs"],
      answer: 0,
      explain: "ERG theory allows different levels of need to be met at any time." }
  ],
  faq: [
    { q: "difference between maslow and erg theory", a: "Maslow: needs must be satisfied in strict sequence bottom to top. ERG (Alderfer): needs can be satisfied in any order at any time. E=Existence, R=Relatedness, G=Growth." },
    { q: "herzberg motivators vs hygiene factors", a: "Motivators: achievement, recognition, growth, work itself, responsibility. Hygiene: working conditions, pay, peer relations, status, job security, supervisor fairness, policy, bonus. Hygiene must be present for motivators to work." },
    { q: "what is adams equity theory", a: "Adams (1965): people are demotivated by comparing their input/outcome ratio to others. If rewards feel unfair (e.g. woman paid less than man for same work), motivation drops." },
    { q: "what is vroom theory", a: "Vroom's 'carrot and stick': employees are motivated by rewards (bonus for targets) or consequences (warning for lateness)." }
  ]
},
{
  id: "ch11",
  number: "11",
  title: "Stakeholders",
  summary: "The six stakeholder categories, their expectations, and their influence.",
  notes: `
## Overview
A business doesn't operate in isolation — it affects and is affected by many groups. This chapter introduces the six stakeholder categories, the stakeholder profile, and how good and bad relations play out.

## What is a stakeholder?

> **Definition:** A stakeholder has an interest in a company and can either **affect** or be **affected by** a business's operations and performance.

**Two directions of influence:**

1. **Stakeholders can affect the business** — e.g. customers or the media complain about Eskom's service.
2. **The business can affect stakeholders** — e.g. Eskom advises customers to use less electricity to avoid load shedding.

**Why stakeholders matter beyond profit:**

- Success is usually measured by profitability/ROI.
- But **more criteria should be used** — businesses need to satisfy stakeholders.
- A business that exploits its workers can't be seen as successful.

**The goal is to:**

1. **Promote positive actions** from stakeholders
2. **Prevent negative actions** from stakeholders

## The stakeholder profile — four questions

1. **What is their role?**
2. **What are their expectations?**
3. **What is their influence or impact?**
4. **What is their rating and priority?**

## The six stakeholder categories

### Owners

**Roles:** provide capital, provide security for loans, evaluate success.

**Expectations:** profits, maximum ROI, growing business value, personal goals (legacy).

**Influence:** close the business, sell it, sell shares, dismiss managers, retrench employees.

### Customers

**Roles:** buy products and services, advertise by word of mouth.

**Expectations:** good prices, quality products, service and advice, after-sales service, value for money, convenience.

**Influence (if unmet):** stop buying, loss of sales/profit, bad word of mouth, shrinkage (steal).

> **Real-world example:** Clicks/TRESemme — after a "racist" ad, Unilever removed all TRESemme products from SA retail stores for 10 days. Bad customer relations caused direct commercial harm.

### Employees

**Roles:** provide labour, bring skills and expertise, bring new and creative products/solutions.

**Expectations:** fair pay, job security, good working conditions, work/life balance, promotions, development.

**Influence (if unmet):**

1. Strike
2. Unproductive (go-slow)
3. Steal (products and secrets)
4. Sabotage
5. Complain (bad-mouth the business)
6. Demotivate other employees
7. **Quiet quitting** — working but doing the absolute minimum

> **Example:** Google's work/life balance — free meals, on-site health checks, haircuts, dry cleaning, massages, nap pods, video game stations, foosball and table tennis.

### Community

**Roles:** support the business.

**Expectations:** funding/money, space/venue, transport, management/admin support.

**Influence:**

- **Positive:** good word of mouth, encourage others to support
- **Negative:** discourage support, pressure suppliers, **looting**

> **Real-world example:** 2021 unrest in Pietermaritzburg — communities engaged in looting.

### Suppliers

> **Definition:** A supplier is a business or person that makes goods available to another business or service. Includes finance (banks) and services (legal).

**Expectations:**

1. **Timely payments** — honour 30/60-day terms
2. **Clear communication** — accurate purchase orders, forecasts
3. **Consistent and reliable orders** — steady demand, not erratic
4. **Fair negotiation** — competitive but not exploitative
5. **Loyalty and long-term partnership**

**Influence:** stop supplying, change credit arrangements, stop giving credit.

> **Real-world example:** A UK chicken shortage forced **Nando's to close 50 branches** and **KFC to limit its menu** due to lack of meat-processing staff and HGV drivers.

### Government

**Types:**

1. **Municipalities** — road, water, electricity, business licences
2. **SARS** — tax
3. **SAPS** — policing
4. **CCMA** — helps dissatisfied employees against employers

**Expectations:** pay taxes, create employment, behave ethically and lawfully.

**Influence:** cancel operating licences, fines (SARS), stop services (water/electricity), increase rates, load shedding.

## Results of bad stakeholder relations

1. **Bad relations with customers:** boycott, influence others not to buy
2. **Bad relations with community:** xenophobia riots, attacks, demolition of foreign retailers
3. **Bad relations with staff:** strikes over bad conditions or low pay

## Results of good stakeholder relations

1. **Support from suppliers:** extended credit terms when cash flow is tight
2. **Support from local authorities:** help with licences and location

> **Exam tip:** A common exam question asks you to identify a stakeholder in a scenario and explain the impact. Use the four-question profile as structure: role, expectation, influence, priority.
`,
  quiz: [
    { q: "Which is NOT one of the six stakeholder categories covered?",
      options: ["Owners", "Competitors", "Suppliers", "Community"],
      answer: 1,
      explain: "Competitors are not listed. The six are owners, customers, employees, community, suppliers, government." },
    { q: "Which is an expectation of owners?",
      options: ["Good working conditions", "Maximum ROI and growing business value", "Fair negotiation", "Tax compliance"],
      answer: 1,
      explain: "Owners expect profits, maximum ROI, growth and personal goals." },
    { q: "Employees who do the absolute minimum are demonstrating:",
      options: ["Strike", "Quiet quitting", "Sabotage", "Go-slow"],
      answer: 1,
      explain: "Quiet quitting = working but doing the absolute minimum." },
    { q: "A UK chicken shortage forced Nando's to close branches. This is an example of:",
      options: ["Government influence", "Community influence", "Supplier influence", "Customer influence"],
      answer: 2,
      explain: "Suppliers can stop supplying, disrupting operations." },
    { q: "Which government body helps dissatisfied employees against employers?",
      options: ["SARS", "SAPS", "CCMA", "Municipality"],
      answer: 2,
      explain: "CCMA = Commission for Conciliation, Mediation and Arbitration." }
  ],
  faq: [
    { q: "who are the six stakeholder categories", a: "Owners, customers, employees, community, suppliers, government." },
    { q: "what is a stakeholder profile", a: "Four questions per stakeholder group: (1) role, (2) expectations, (3) influence/impact, (4) rating and priority." },
    { q: "what are employee expectations", a: "Fair pay, job security, good working conditions, work/life balance, promotions and development." },
    { q: "what happens if supplier relations are bad", a: "Suppliers may stop supplying, change credit arrangements, or stop giving credit. Example: UK chicken shortage forced Nando's to close 50 branches." }
  ]
},
{
  id: "ch12",
  number: "12",
  title: "Operational Risks",
  summary: "Ten types of risk, shrinkage and shoplifting in depth, and the five-step risk management process.",
  notes: `
## Overview
Every business faces risks — from customers, employees, nature, and the digital world. This chapter catalogues the ten main operational risks, drills into shrinkage and shoplifting, and closes with the risk management process.

## The ten operational risks

1. **Shoplifting and theft** — loss of stock from customer theft
2. **Employee theft** — staff stealing cash, stock, company assets
3. **Fraud and scams** — false returns, counterfeit money, credit card fraud
4. **Inventory shortages** — stock losses from theft, damage, errors
5. **Cybersecurity threats** — data breaches, hacking, ransomware
6. **Supply chain disruptions** — delays or shortages from suppliers
7. **Competition** — losing customers to competitors or online retailers
8. **Health and safety incidents** — injuries to customers or employees
9. **Natural disasters** — fires, floods, other disruptive events
10. **Sabotage** — deliberate actions intended to damage operations

> Customer theft, a slipped ankle on a wet floor, phishing attacks, looting — all can have a **significant impact** on a business.

## Risk #1: Shrinkage

> **Definition:** Shrinkage is the **reduction of inventory value** due to **employee or customer theft**.

**Five types of shrinkage:**

1. Theft by customers
2. Theft by employees
3. Mistakes by employees at the point of sale
4. Supplier short delivery the retailer doesn't pick up
5. Miscounting during physical stock-takes → bookkeeping errors

> **Note:** Shrinkage is broader than theft alone — it includes administrative and supplier errors.

## Shoplifting

> **Definition:** A person taking goods from a store **without paying** for them.

**The legal test:** The store must prove the person **took control of the merchandise away from the retailer**. Just picking something up isn't shoplifting — concealment and movement away from control matters.

**Four common methods:**

1. **Working in pairs** — one distracts staff, the other pockets goods
2. **Hiding products** — in clothing or purchased items
3. **Price switching** — swapping tags so expensive items are charged less
4. **Grab and run** — waiting for busy periods, then dashing in and running off

> Grab and run is more common in stores without guards or anti-theft alarms.

## Ten prevention measures

1. **Know the methods** of customer stealing
2. **Keep the store organised and tidy** — missing items are hard to spot in a mess
3. **Optimise layout** — cashiers near the exit to spot shoplifters
4. **Install security cameras** — deterrent and blind-spot coverage
5. **Add mirrors** — low-cost alternative to cameras
6. **Use customer service as prevention** — engage with customers to show you're aware
7. **Use signage** — e.g. signs showing you use cameras
8. **Train staff to spot scams** — price switching, false returns
9. **Use retail inventory tools** — RFID tags
10. **Identify at-risk items** — e.g. expensive items

## Staff training on shoplifting

1. Identify scams (price switching, false returns)
2. Respond to suspected shoplifters
3. Alert colleagues using store codes
4. Know **when** to approach a suspect
5. Know **when to call security or police**
6. Implement a **clear shoplifting policy**

## The eight-step response procedure

1. Be **reasonably certain** a theft has occurred **before acting**
2. Approach **calmly and discreetly**
3. Request the person accompany security/management to a **private area**
4. Notify manager/security **immediately**
5. Contact police **if required by policy** or if the situation warrants it
6. Continue observing
7. **No unnecessary force**; don't put yourself or others at risk
8. **Document** any recovered merchandise

## When it might NOT be shoplifting

1. Customer **forgot to pay** (retailer's discretion)
2. Customer takes something **someone threw away**
3. Merchandise **priced incorrectly by the retailer**
4. Customer **intentionally damages** merchandise

> If unsure of age or mental state — call the police.

## Who cannot be legally prosecuted (South Africa)

1. **Children under 12** — presumed no criminal capacity
2. **Children aged 12–14** — only if the **State proves** they understood wrongfulness
3. **People with severe mental incapacity** at the time of the offence

## Risk #2: Data breaches and digital theft

1. **Phishing scams** deceive people into sharing sensitive info
2. **Employees and customers** can be targeted
3. **Credit card details** may be stolen
4. Results in **fraud and financial losses**
5. Highlights the importance of **cybersecurity awareness**

## Risk #3: Inventory damage

1. **Natural disasters and severe weather** damage stores and warehouses
2. **Perishable products** are especially vulnerable
3. Purchase **business property insurance** tailored to specific risks
4. General retail insurance may cover storm/weather damage

## Risk #4: Customer injuries

1. Customers may be injured in a store
2. **Safety signs do not eliminate all risks**
3. **General liability insurance** protects against customer injury claims
4. **Employee accident insurance** covers workers

> **Real-world example:** At **Canal Walk** on Boxing Day 2019, a lamp post crashed down on a patron's head after breaking loose from its bolts. Even well-maintained-looking fixtures can become hazards.

## Risk #5: Forced closure

> **Definition:** A business is **required to temporarily or permanently shut down** due to circumstances beyond its control.

**Six examples:**

1. Government orders / legal action (lockdown)
2. Health and safety violations (COVID-19)
3. Fire, flooding, natural disaster
4. Civil unrest, riots, terrorism threats
5. Security incidents (bomb threat)
6. Failure to comply with regulations/licensing

> **Examples:** A fire at a Checkers Hyper store; a Woolworths Food cordoned off after a bomb threat.

## The risk management process

Five-step cycle:

1. **Identifying risks**
2. **Evaluating techniques available to manage risk**
3. **Selecting a risk management technique**
4. **Implementing the risk management technique**
5. **Monitoring effectiveness of the risk management technique**

> The arrows loop back from step 5 to step 1 — risk management is **continuous**.
`,
  quiz: [
    { q: "Shrinkage is best defined as:",
      options: ["Theft by customers only", "Reduction of inventory value due to employee or customer theft", "Damage from natural disasters", "Loss from supplier delays"],
      answer: 1,
      explain: "Shrinkage = reduction of inventory value due to employee or customer theft." },
    { q: "Swapping price tags on products is called:",
      options: ["Grab and run", "Price switching", "Hiding products", "Working in pairs"],
      answer: 1,
      explain: "Price switching = swapping tags so a more expensive item is charged less." },
    { q: "Under SA law, children in which age group CANNOT be prosecuted for shoplifting?",
      options: ["Under 10", "Under 12", "Under 14", "Under 16"],
      answer: 1,
      explain: "Children under 12 are presumed to lack criminal capacity." },
    { q: "Which is the FIRST step of the risk management process?",
      options: ["Implementing the technique", "Identifying risks", "Selecting a technique", "Monitoring effectiveness"],
      answer: 1,
      explain: "Step 1 = identifying risks." },
    { q: "A bomb threat forcing a store to close is an example of:",
      options: ["Shrinkage", "Data breach", "Forced closure", "Sabotage"],
      answer: 2,
      explain: "Forced closure = business required to shut down due to circumstances beyond its control." }
  ],
  faq: [
    { q: "what is shrinkage", a: "Reduction of inventory value due to employee or customer theft. Five types: customer theft, employee theft, POS mistakes, supplier short delivery, miscounting." },
    { q: "what are the methods of shoplifting", a: "Four: working in pairs (one distracts), hiding products, price switching (swapping tags), grab and run (during busy periods, no guards/alarms)." },
    { q: "who cannot be prosecuted for shoplifting in south africa", a: "Children under 12 (presumed no criminal capacity). Children 12–14 only if State proves they understood wrongfulness. People with severe mental incapacity at the time." },
    { q: "steps of the risk management process", a: "Five: (1) identifying risks, (2) evaluating techniques, (3) selecting a technique, (4) implementing, (5) monitoring effectiveness. Continuous cycle." }
  ]
},
{
  id: "ch13",
  number: "13",
  title: "Health and Safety at Work",
  summary: "The OHSA 1993 framework, employer and employee duties, and stress management.",
  notes: `
## Overview
The legal framework that protects workers and customers, the practical duties on both employers and employees, and a final section on employee wellness.

## The legal framework

> **The Occupational Health and Safety Act (OHSA), 1993** requires retailers to bring about and maintain, **as far as reasonably practicable**, a work environment that is safe and without risk to the health of workers.

**Three purposes of the OHS Act:**

1. **Ensure the health and safety of employees at work.**
2. **Protect workers from hazards** arising from work-related activities.
3. Act as a **proactive measure** to **prevent and avoid** work-related illnesses and injuries.

**Shared-responsibility principle:**

1. It is **not** expected of retailers to take sole responsibility.
2. **Employees and the employer must share the responsibility.**
3. **Both parties** must proactively **identify dangers** and **develop control measures**.

## The three key terms

### Hazard

> Anything with the potential to cause harm.

**Examples:** a wet floor, exposed wiring, dangerous chemicals, moving machinery.

### Risk

> The **likelihood (chance)** the hazard will cause harm, plus **how severe** that harm could be.

**Examples:**

- Slipping on a wet floor
- A fire due to exposed wiring
- An employee being electrocuted
- Being knocked by moving machinery

### Control

> Measures put in place to **decrease the likelihood or consequences** of an unwanted event.

Controls can **prevent** the event or **reduce the loss of control** of the hazard (e.g. contain energy release).

**Examples:** wet-floor signs, gas shut-off valves, barriers.

> **The chain:** **Hazard** (the thing) → **Risk** (chance it hurts someone) → **Control** (what you do about it).

## The employer's seven duties

1. **Identify potential risks and hazards** — present while work is being done, produced, processed, used, stored or transported.
2. **Establish protective methods** and provide the means to implement them.
3. **Provide information, instructions, training and supervision** — keeping workers' capability in mind.
4. **Not permit employees to carry on with any task** unless protective methods are in place.
5. **Ensure every worker obeys** OHSA requirements.
6. **Ensure work and equipment are supervised** by a worker trained to understand the dangers.
7. **Appoint health and safety representatives.**

> **Memory aid:** Identify → Establish → Inform → Restrict → Enforce → Supervise → Appoint.

## Health and Safety Representatives (HSRs)

> **Definition:** Full-time workers **chosen/elected and selected in writing** by the employer, after the employer and workers **consulted and agreed**. They must be **familiar with the work surroundings and conditions** of the workplace.

> **Key point:** HSRs are not appointed unilaterally — there must be consultation and agreement with workers.

## How many HSRs must be appointed?

**Trigger rule:** The requirement starts when the workplace has **more than 20 employees**. An inspector can require additional representatives if numbers are inadequate.

**Rate rules:**

1. **Shops and offices:** at least **1 per 100 employees** (or part thereof)
2. **Other workplaces** (factories, warehouses, construction): at least **1 per 50 employees**

**Shops and offices:**

| Employees | Min H&S reps |
|---|---|
| 1–20 | None required |
| 21–100 | 1 |
| 101–200 | 2 |
| 201–300 | 3 |
| 301–400 | 4 |
| 401–500 | 5 |

**Other workplaces:**

| Employees | Min H&S reps |
|---|---|
| 1–20 | None required |
| 21–50 | 1 |
| 51–100 | 2 |
| 101–150 | 3 |
| 151–200 | 4 |
| 201–250 | 5 |
| 251–300 | 6 |

> **Exam tip:** Check whether the workplace is a shop/office (per 100) or other (per 50), then round up to "or part thereof."

## Communication duties

1. **The employer** must inform HSRs when an inspector notifies of **inspections and investigations**.
2. **HSRs** must inform the employer of any **incident** in the workplace **as soon as possible**.

## The six employee duties

1. **Care for your own health and safety, and others'.** Care for others affected by your actions or your carelessness to act.
2. **No "playing" at work.** Playing can lead to serious injuries or death — a **serious violation of the OHSA**.
3. **Obey rules and procedures** put in place by the employer.
4. **Co-operate with the employer** on health and safety issues.
5. **Give information to an inspector** from the Department of Labour if required.
6. **Report unsafe or unhealthy conditions** to the employer or HSR **as soon as possible**.

## Enforcement — who enforces the OHS Act?

1. The OHSA 1993 is managed by the **Chief Directorate of Occupational Health and Safety** of the **Department of Labour**.
2. **Provincial offices** exist in all provinces.
3. **OHSA inspectors** from these offices carry out inspections and investigations.

## What triggers an inspection?

1. **Accident statistics** of retailers/organisations
2. **Presence of dangerous substances** (e.g. benzene in laundries, dangerous machinery)
3. **Unplanned inspections** from complaints (treated **confidentially**)

## What can an inspection result in?

- **Warnings**, **fines**, and/or **stopping practices** that cause harm.

## The inspector's powers

At **any time**, an inspector may:

1. **Enter any workplace without prior notice**
2. **Request any documentation**
3. **Inspect any condition, process, plant or article**
4. **Take samples or seize any object**
5. **Question or summon any person** in the workplace

> **Exam tip:** "Without prior notice" is the key phrase — no warrant or appointment required.

## Employee wellness: stress management

### The four categories of stress symptoms

**Physical:**

1. Dizziness
2. Increased heart rate
3. High blood pressure
4. Rapid breathing
5. Aches and pains
6. Frequent colds and flu
7. Insomnia or sleeplessness
8. Headaches

**Behavioural:**

1. Behavioural changes
2. Decreased personal hygiene
3. Social withdrawal
4. Inability to finish tasks
5. Fear of being alone
6. Eating more, or less
7. Nervous habits (e.g. nail biting)

**Cognitive (mental):**

1. Confusion and poor judgement
2. Difficulty making decisions
3. Inability to concentrate and memory loss

**Emotional:**

1. Anxiety, fear, grief, moodiness
2. Anger and irritability
3. Depression
4. Feeling overwhelmed, dread
5. Loss of sense of humour

### The seven coping strategies

1. **Determine what caused the stress** — understand the cause and your own response
2. **Identify what you can control** — what is controllable vs not
3. **Make time for enjoyable activities** — do things you enjoy, connect with others
4. **Plan and manage your time** — work to a schedule
5. **Set priorities** — make a to-do list and prioritise
6. **Set boundaries** — maintain a healthy work-life balance
7. **Look after your physical and mental health** — sleep, diet, exercise

> **Exam tip:** "Thabo has headaches, sleeplessness and difficulty concentrating" → headaches and sleeplessness are **physical**; difficulty concentrating is **cognitive**.
`,
  quiz: [
    { q: "A wet floor is best described as a:",
      options: ["Risk", "Hazard", "Control", "Standard"],
      answer: 1,
      explain: "A hazard is anything with potential to cause harm. A wet floor is a hazard; slipping is the risk." },
    { q: "Which Act governs health and safety at work in South Africa?",
      options: ["OHSA 1993", "BCEA 1997", "LRA 1995", "EEA 1998"],
      answer: 0,
      explain: "OHSA = Occupational Health and Safety Act, 1993." },
    { q: "In shops and offices, the minimum number of H&S reps is:",
      options: ["1 per 20 employees", "1 per 50 employees", "1 per 100 employees", "1 per 200 employees"],
      answer: 2,
      explain: "Shops/offices: 1 per 100 or part thereof. Other workplaces: 1 per 50." },
    { q: "Which is NOT an employee duty under OHSA?",
      options: ["Care for own and others' safety", "Obey rules and procedures", "Appoint H&S representatives", "Report unsafe conditions ASAP"],
      answer: 2,
      explain: "Appointing H&S reps is an EMPLOYER duty." },
    { q: "An inspector from the Department of Labour may:",
      options: ["Only enter with a warrant", "Enter any workplace without prior notice", "Only inspect offices", "Only issue warnings, not fines"],
      answer: 1,
      explain: "Inspectors may enter without notice, request documents, inspect, take samples, question/summon, and issue warnings or fines." }
  ],
  faq: [
    { q: "difference between hazard and risk", a: "Hazard = anything with potential to cause harm (wet floor, exposed wiring). Risk = likelihood the hazard causes harm plus severity (slipping, electrocution). Control = what you do about it (signs, shut-off valves)." },
    { q: "how many h&s representatives are required", a: "Trigger: >20 employees. Shops/offices: 1 per 100 (or part). Other workplaces: 1 per 50 (or part). An inspector may require more." },
    { q: "what are the employer duties under ohsa", a: "Seven: identify hazards, establish protective methods, provide info/training, not permit unsafe work, ensure obedience, ensure trained supervision, appoint H&S reps." },
    { q: "what are stress symptom categories", a: "Four: Physical (headaches, insomnia), Behavioural (withdrawal, nail biting), Cognitive (confusion, poor concentration), Emotional (anxiety, anger, depression)." },
    { q: "inspector powers under ohsa", a: "Enter any workplace without notice, request documentation, inspect conditions/processes/plant, take samples or seize objects, question or summon any person. May issue warnings, fines, or stop practices." }
  ]
}
];
