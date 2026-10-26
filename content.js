/* BrainStack — Combined Course Content (Module 1 & Module 2) */

const CHAPTERS = [
  /* =========================================
     MODULE 1: RETAIL OPERATIONS MANAGEMENT 1
     ========================================= */
  {
    id: "ch06a",
    module: "Retail Operations Management 1",
    number: "6 (Part 1)",
    title: "Entrepreneurship & Business Plan",
    summary: "What entrepreneurship is, why it matters, SA's challenges, and the tools you need before writing a plan.",
    notes: `## Overview
This chapter introduces what entrepreneurship is, why it matters to a country's economy, what makes it difficult in South Africa specifically, and the first analytical tools you need before writing a business plan: feasibility, viability, market size, market share, and break-even analysis.

## Why entrepreneurship matters
1. **Create jobs** — small and medium businesses are the largest employers in most countries; startups absorb unemployed youth and lower unemployment.
2. **Drive innovation** — entrepreneurs introduce new products, services and technologies that disrupt markets and improve productivity.
3. **Grow the economy** — new businesses generate income, pay taxes, and stimulate demand for goods and services.
4. **Solve social problems** — social entrepreneurs address gaps in healthcare, education, clean energy and more.
5. **Encourage self-reliance** — entrepreneurship builds a culture of resilience and financial independence.

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

**Twelve traits of successful entrepreneurs:**
1. Innovative, 2. Risk-taker, 3. Self-confident, 4. Hardworking, 5. Goal-oriented, 6. Leadership skills, 7. Decision-making ability, 8. Persistent, 9. Adaptable, 10. Good problem-solver, 11. Creative, 12. Organised.

## Feasibility vs viability
| | **Feasibility** | **Viability** |
|---|---|---|
| **Question** | *Can it be done?* | *Will it make money?* |
| **Focus** | Short-term: can we build this? | Long-term: can this survive and grow? |
| **Key considerations** | Technical, financial, legal, operational | Demand, competitive advantage, profit |

## Market size & Market share
- **Market size:** Total potential sales/revenue for a product in a market over a period.
- **Market share:** (Company sales ÷ Total market sales) × 100

## Break-even analysis
- **Break-even quantity** = Fixed costs ÷ (Selling price per unit − Variable cost per unit)
- **Break-even rand value** = Break-even quantity × Selling price`,
    quiz: [
      { q: "What is the main difference between feasibility and viability?", options: ["Feasibility = can it be done; Viability = will it make money long-term", "Feasibility = will it make money; Viability = can it be done", "They mean the same thing", "Feasibility is for products; Viability is for services"], answer: 0, explain: "Feasibility checks technical/financial/legal/operational ability. Viability checks demand, competitive advantage and profit." },
      { q: "Fixed costs are R100,000, selling price is R12, variable cost is R2. What is the break-even quantity?", options: ["8,333 units", "10,000 units", "12,000 units", "50,000 units"], answer: 1, explain: "BEQ = Fixed ÷ (Price − Variable) = 100,000 ÷ (12 − 2) = 10,000 units." },
      { q: "A company sells 12,000 cars in a market of 60,000 total cars. What is its market share?", options: ["12%", "20%", "25%", "60%"], answer: 1, explain: "12,000 ÷ 60,000 × 100 = 20%." },
      { q: "Which is NOT listed as a challenge for SA entrepreneurs?", options: ["Limited access to funding", "Bureaucracy and red tape", "Too much mentorship", "Crime and safety concerns"], answer: 2, explain: "Lack of mentorship is the challenge — not too much of it." },
      { q: "Which of these is a fixed cost?", options: ["Raw materials", "Direct wages", "Rent", "Packaging per unit"], answer: 2, explain: "Rent does not change with output. Materials and direct wages are variable." },
      { q: "What are the two main ways to measure market size?", options: ["By revenue and by volume", "By profit and by loss", "By feasibility and by viability", "By competitors and by customers"], answer: 0, explain: "Market size can be measured by total revenue or by volume." },
      { q: "Which of the following is NOT one of the four feasibility checks?", options: ["Technical feasibility", "Financial feasibility", "Emotional feasibility", "Operational feasibility"], answer: 2, explain: "The four checks are technical, financial, legal, and operational." },
      { q: "If an entrepreneur is a 'risk-taker', they are willing to take:", options: ["No risks at all", "Unlimited risks", "Calculated risks", "Only financial risks"], answer: 2, explain: "Successful entrepreneurs take *calculated* risks." }
    ],
    faq: [
      { q: "difference between feasibility and viability", a: "Feasibility asks *can it be done?* — technical, financial, legal and operational checks. Viability asks *will it make money long-term?* — demand, competitive advantage and profit." },
      { q: "how to calculate break-even", a: "Break-even quantity = Fixed costs ÷ (Selling price − Variable cost per unit). Then multiply by selling price for the rand value." },
      { q: "how to calculate market share", a: "Market share = (Company sales ÷ Total market sales) × 100." }
    ]
  },
  {
    id: "ch06b",
    module: "Retail Operations Management 1",
    number: "6 (Part 2)",
    title: "The Business Plan",
    summary: "How to project profit, and what goes inside a proper business plan.",
    notes: `## Calculating projected net profit
- **Income > Expenses** → the idea is profitable
- **Expenses > Income** → not viable; the business runs at a loss
- **Gross profit** = Revenue − COGS
- **Operating profit** = Gross profit − Operating expenses
- **Net profit** = Operating profit − Interest − Tax

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

## The 4 Ps
**Product** (Functionality, brand) · **Price** (List price, discounts) · **Place** (Channel, logistics) · **Promotion** (Advertising, sales)

## Market segmentation
1. **Demographic** (Age, gender, income)
2. **Geographic** (Local, regional, national)
3. **Psychographic** (Activities, attitudes, personality)
4. **Behavioral** (Benefits, patterns, usage rates)`,
    quiz: [
      { q: "How long should the executive summary be?", options: ["One paragraph", "½ to 1 page", "3–5 pages", "10 pages"], answer: 1, explain: "The executive summary should be between half a page and one page." },
      { q: "Which is NOT one of the 4 Ps?", options: ["Product", "Price", "Profit", "Promotion"], answer: 2, explain: "The 4 Ps are Product, Price, Place and Promotion." },
      { q: "McDonald's selling a McSpicy Paneer burger in India is an example of:", options: ["Demographic segmentation", "Geographic segmentation", "Psychographic segmentation", "Behavioral segmentation"], answer: 1, explain: "It segments by location/country — geographic segmentation." },
      { q: "Revenue 200,000, COGS 80,000, operating expenses 72,500. What is gross profit?", options: ["80,000", "120,000", "47,500", "32,400"], answer: 1, explain: "Gross profit = Revenue − COGS = 200,000 − 80,000 = 120,000." },
      { q: "Which comes FIRST in a business plan?", options: ["Financial plan", "Executive summary", "Marketing plan", "Appendices"], answer: 1, explain: "The executive summary comes early." },
      { q: "In the financial plan, how long is the operating cost provision for a retailer?", options: ["1 month", "3 months", "6 months", "12 months"], answer: 1, explain: "The slides state: 6 months for factories and 3 months for retailers." },
      { q: "A company sells small cans of Coke for singles and 2L bottles for families. This is:", options: ["Demographic segmentation", "Geographic segmentation", "Psychographic segmentation", "Behavioral segmentation"], answer: 3, explain: "It is based on usage rate or occasion — behavioral segmentation." },
      { q: "Where should the short CVs of the management team go?", options: ["In the executive summary", "In the main body of the plan", "In the appendices", "On the cover page"], answer: 2, explain: "The actual CVs go in the appendix." }
    ],
    faq: [
      { q: "how to calculate gross profit", a: "Gross profit = Revenue − Cost of Goods Sold (COGS)." },
      { q: "what goes in a business plan", a: "Ten sections: cover sheet, table of contents, executive summary, management team, macro/market analysis, products/services, marketing plan, operational plan, financial plan, appendices." },
      { q: "what are the 4 Ps", a: "Product, Price, Place, Promotion." }
    ]
  },
  {
    id: "ch07",
    module: "Retail Operations Management 1",
    number: "7",
    title: "Control",
    summary: "The fourth management function — monitoring performance and correcting deviations.",
    notes: `## What is control?
> **Definition:** Control is a function of management which helps to identify errors and take corrective action.

## Types of control (based on timing)
- **Pre-control** (Inputs)
- **Concurrent control** (Transformation process)
- **Post control** (Outputs)

## The four-step control process
1. **Establish standards** — linked to objectives
2. **Measure actual performance**
3. **Compare actual performance with standards**
4. **Take corrective action** — or reinforce good performance

## Types of performance standards
- Quantity, Cost, Time, Quality, Behaviour.

## Measurement rules
- **Reliable** = consistent; produces the same result every time.
- **Valid** = measures what it is supposed to measure.`,
    quiz: [
      { q: "What is the correct order of the control process?", options: ["Measure → Set standards → Compare → Correct", "Set standards → Measure → Compare → Correct", "Compare → Set standards → Measure → Correct", "Set standards → Compare → Measure → Correct"], answer: 1, explain: "Standards → Measurement → Comparison → Corrective action." },
      { q: "Controlling inputs such as HR, technology and materials is:", options: ["Pre-control", "Concurrent control", "Post control", "Financial control"], answer: 0, explain: "Pre-control focuses on inputs before the transformation process." },
      { q: "A standard of '<5% errors' is a:", options: ["Quantity standard", "Cost standard", "Time standard", "Quality standard"], answer: 3, explain: "Error rate is a quality standard." },
      { q: "A measurement that produces the same result every time is:", options: ["Valid", "Reliable", "Subjective", "Balanced"], answer: 1, explain: "Reliable = consistent. Valid = measures what it should." },
      { q: "Standard is 50 cars/month; actual is 40. The gap is:", options: ["5", "10", "40", "50"], answer: 1, explain: "Gap = Standard − Actual = 50 − 40 = 10." },
      { q: "Which level of control asks 'is the organisation performing according to its financial and social goals?'", options: ["Individual level", "Group level", "Organisational level", "Pre-control level"], answer: 2, explain: "The organisational level focuses on overall company goals." },
      { q: "A standard stating '80% of staff must complete training' is a:", options: ["Quantity standard", "Cost standard", "Behaviour standard", "Quality standard"], answer: 2, explain: "It focuses on staff behaviour/actions." },
      { q: "If actual performance EXCEEDS the standard, what should management do?", options: ["Punish the staff for showing off", "Ignore it", "Reinforce and encourage the good performance", "Lower the standard"], answer: 2, explain: "Step 4 of the control process says to reinforce good performance." }
    ],
    faq: [
      { q: "what is the control process", a: "Four steps: (1) establish standards, (2) measure actual performance, (3) compare actual with standards, (4) take corrective action." },
      { q: "difference between reliability and validity", a: "Reliable = consistent, produces the same result every time. Valid = measures what it is supposed to measure." },
      { q: "types of control based on timing", a: "Pre-control (inputs), Concurrent control (process), Post control (outputs)." }
    ]
  },
  {
    id: "ch08",
    module: "Retail Operations Management 1",
    number: "8 (Part 1)",
    title: "Leadership — Foundations",
    summary: "What leadership is, how it differs from management, styles and types of power.",
    notes: `## What is leadership?
> **Definition:** Leadership is the ability to influence, guide and motivate people to work toward a common goal.

## Leadership vs management
| **Leadership** | **Management** |
|---|---|
| About people and vision | About process and execution |
| Asks **"what and why?"** | Asks **"how and when?"** |

## The three leadership styles
1. **Autocratic (authoritarian)** — manager decides **without consulting** employees.
2. **Participative (democratic)** — managers and employees **work together**.
3. **Free-rein (laissez-faire)** — management **sets objectives** and allows employees to **work freely**.

## The five types of power
1. **Coercive** (Fear)
2. **Reward** (Praise, promotion, pay)
3. **Legitimate** (Position given by the organisation)
4. **Referent** (The leader's personality)
5. **Expert** (Leader's knowledge and skills)`,
    quiz: [
      { q: "Leadership focuses on ____, while management focuses on ____.", options: ["process and execution; people and vision", "people and vision; process and execution", "authority; influence", "stability; change"], answer: 1, explain: "Leadership = people and vision. Management = process and execution." },
      { q: "A manager makes all decisions without consulting staff. This is:", options: ["Democratic", "Laissez-faire", "Autocratic", "Servant"], answer: 2, explain: "Autocratic (authoritarian) leadership." },
      { q: "Which power is based on the leader's personality and likeability?", options: ["Coercive", "Legitimate", "Referent", "Expert"], answer: 2, explain: "Referent power comes from admiration and respect." },
      { q: "Free-rein leadership works best with:", options: ["New, inexperienced workers", "Highly skilled experts", "Emergency situations", "Unionised staff"], answer: 1, explain: "Laissez-faire suits experts like doctors, engineers and researchers." },
      { q: "Which is NOT one of the five types of power?", options: ["Coercive", "Reward", "Charismatic", "Legitimate"], answer: 2, explain: "The five are coercive, reward, legitimate, referent and expert." },
      { q: "What is 'situational leadership'?", options: ["Only leading in emergencies", "Using a style that matches the situation, employees, and goals", "Only using the autocratic style", "Leading from home"], answer: 1, explain: "Situational leadership means adapting your style." },
      { q: "A manager using their job title to give orders is using which type of power?", options: ["Coercive", "Reward", "Legitimate", "Referent"], answer: 2, explain: "Legitimate power comes from the position or job title." },
      { q: "Management asks 'how and when?', while leadership asks:", options: ["Who and where?", "What and why?", "Which and how much?", "When and where?"], answer: 1, explain: "Leadership deals with vision and direction." }
    ],
    faq: [
      { q: "difference between leadership and management", a: "Leadership is about people and vision — asks 'what and why?'. Management is about process and execution — asks 'how and when?'." },
      { q: "three leadership styles", a: "Autocratic (manager decides alone), Participative/Democratic (decide together), Free-rein/Laissez-faire (employees work freely)." },
      { q: "five types of power", a: "Coercive (fear), Reward (praise/pay), Legitimate (position), Referent (personality), Expert (knowledge/skills)." }
    ]
  },
  {
    id: "ch09",
    module: "Retail Operations Management 1",
    number: "9 (Part 2)",
    title: "Leadership — Theories",
    summary: "The nine theories from trait theory to servant-leadership.",
    notes: `## 1. Trait theory
- **Assumption:** **"Good leaders are born, not made."**

## 2. Behavioural theory
- Studies **how successful leaders behave** differently from unsuccessful leaders.

## 3. Leadership competencies theory
- The more leadership skills and behaviours a person has, the better the leader.

## 4. Principle-centred perspective
- A leader's **beliefs** can make them great leaders.

## 5. Ethical-leadership perspective
- Leaders who promote and model moral conduct.

## 6. Transformational leadership
- Leaders **encourage, inspire and motivate employees to innovate and create change**.

## 7. Transactional leadership
- Focuses on **routine, structure and clear tasks**, using **rewards and punishments** to motivate.

## 8. Leader-member exchange (LMX)
- Focuses on the **relationship between leaders and followers** ("in" vs "out" groups).

## 9. Servant-leadership
- **Leading by example.** The leader serves the team.`,
    quiz: [
      { q: "Which theory says 'good leaders are born, not made'?", options: ["Behavioural", "Trait", "Contingency", "Transformational"], answer: 1, explain: "Trait theory assumes leaders are born with the right characteristics." },
      { q: "A leader who inspires employees to innovate and create change is:", options: ["Transactional", "Servant", "Transformational", "Autocratic"], answer: 2, explain: "Transformational leadership encourages innovation." },
      { q: "A leader who only steps in when goals are not met is using:", options: ["Management by exception", "Servant-leadership", "LMX", "Trait theory"], answer: 0, explain: "Management by exception is a transactional style." },
      { q: "LMX theory focuses on:", options: ["The leader's personality traits", "The relationship between leader and followers ('in' vs 'out' groups)", "Rewards and punishments", "The leader's beliefs"], answer: 1, explain: "Leader-member exchange examines in-group vs out-group relationships." },
      { q: "A manager who does the same work they ask of their team is demonstrating:", options: ["Transactional leadership", "Servant-leadership", "Trait theory", "Autocratic leadership"], answer: 1, explain: "Servant-leadership = leading by example." },
      { q: "Which theory focuses on the skills and behaviours a leader can learn?", options: ["Trait theory", "Leadership competencies theory", "Principle-centred perspective", "Transactional leadership"], answer: 1, explain: "Competency theory says great leaders are made." },
      { q: "Nelson Mandela's leadership style, focused on moral conduct, is an example of:", options: ["Transactional leadership", "Ethical-leadership perspective", "LMX theory", "Behavioural theory"], answer: 1, explain: "Ethical leaders promote and model suitable, moral conduct." },
      { q: "Bill Gates rewarding overtime with a good performance review is an example of:", options: ["Transformational leadership", "Transactional leadership", "Trait theory", "Servant-leadership"], answer: 1, explain: "Transactional leadership is based on an exchange." }
    ],
    faq: [
      { q: "difference between trait and behavioural theory", a: "Trait theory: leaders are born with certain characteristics. Behavioural theory: leadership is a set of learnable behaviours." },
      { q: "difference between transformational and transactional leadership", a: "Transformational leaders inspire innovation and change. Transactional leaders manage through routine, reward and punishment." },
      { q: "what is servant leadership", a: "Leading by example — the leader is willing to do the same work they ask of their team." }
    ]
  },
  {
    id: "ch10",
    module: "Retail Operations Management 1",
    number: "10",
    title: "Motivation",
    summary: "Why motivation matters, plus the six main motivational theories.",
    notes: `## What is motivation?
> **Definition:** The **enthusiasm, energy level, promise and creativity** an employee brings to the organisation daily.

## 1. Maslow's hierarchy of needs
1. **Physiological** (food, water)
2. **Safety** (safe and secure)
3. **Social** (loved, accepted)
4. **Esteem** (recognition)
5. **Self-actualisation** (full potential)

## 2. Herzberg's two-factor theory
- **Motivators** (Sense of achievement, Recognition)
- **Hygiene factors** (Working conditions, Pay)

## 3. Vroom's theory — "carrot and stick"
- Motivated by **rewards or consequences**.

## 4. Adams' equity theory (1965)
- People compare their input/outcome ratio to others.

## 5. Alderfer's ERG theory
- **E**xistence, **R**elatedness, **G**rowth. Needs can be met in any order.

## 6. McClelland's needs theory
- Need for achievement, Need for affiliation, Need for power.`,
    quiz: [
      { q: "In Maslow's hierarchy, which need comes directly above safety?", options: ["Physiological", "Social", "Esteem", "Self-actualisation"], answer: 1, explain: "Order: Physiological → Safety → Social → Esteem → Self-actualisation." },
      { q: "In Herzberg's theory, which is a hygiene factor?", options: ["Recognition", "Responsibility", "Working conditions", "Achievement"], answer: 2, explain: "Working conditions are a hygiene factor." },
      { q: "Vroom's theory is also called the:", options: ["Equity theory", "Carrot-and-stick approach", "ERG theory", "Two-factor theory"], answer: 1, explain: "Vroom = carrot-and-stick." },
      { q: "A female manager earning less than a male manager for the same work is an example of:", options: ["Maslow", "Herzberg", "Adams' equity theory", "McClelland"], answer: 2, explain: "Adams' equity theory — unfair comparison." },
      { q: "Which theory allows needs to be satisfied in any order (unlike Maslow)?", options: ["Alderfer's ERG", "Herzberg's two-factor", "Vroom's expectancy", "McClelland's needs"], answer: 0, explain: "ERG theory allows different levels of need to be met at any time." },
      { q: "What is the definition of employee motivation?", options: ["The money employees earn", "The enthusiasm, energy, promise, and creativity an employee brings daily", "The number of hours worked", "The level of supervision required"], answer: 1, explain: "Motivation is the desire and willingness to reach goals." },
      { q: "According to Herzberg, if hygiene factors are missing, what happens?", options: ["Employees are still motivated", "Motivators cannot work", "Employees ask for a raise", "Productivity increases"], answer: 1, explain: "If hygiene factors are missing, the motivators cannot work." },
      { q: "A person driven by a 'need for affiliation' according to McClelland:", options: ["Likes to control others", "Likes to solve complex problems", "Values relationships above all and avoids risk", "Wants to be the boss"], answer: 2, explain: "They value relationships and don't like to stand out." }
    ],
    faq: [
      { q: "difference between maslow and erg theory", a: "Maslow: needs must be satisfied in strict sequence bottom to top. ERG: needs can be satisfied in any order." },
      { q: "herzberg motivators vs hygiene factors", a: "Motivators: achievement, recognition, growth. Hygiene: working conditions, pay, job security. Hygiene must be present for motivators to work." },
      { q: "what is adams equity theory", a: "People are demotivated by comparing their input/outcome ratio to others." }
    ]
  },
  {
    id: "ch11",
    module: "Retail Operations Management 1",
    number: "11",
    title: "Stakeholders",
    summary: "The six stakeholder categories, their expectations, and their influence.",
    notes: `## What is a stakeholder?
> **Definition:** A stakeholder has an interest in a company and can either **affect** or be **affected by** a business's operations.

## The six stakeholder categories
1. **Owners:** provide capital. Expect profits, ROI.
2. **Customers:** buy products. Expect good prices, quality. Influence: stop buying, bad word of mouth.
3. **Employees:** provide labour. Expect fair pay, security. Influence: strike, go-slow, quiet quitting.
4. **Community:** support business. Expect funding. Influence: good word of mouth, or looting.
5. **Suppliers:** make goods available. Expect timely payments. Influence: stop supplying (e.g., Nando's chicken shortage).
6. **Government:** SARS, SAPS, CCMA. Expect taxes. Influence: fines, cancel licences.`,
    quiz: [
      { q: "Which is NOT one of the six stakeholder categories covered?", options: ["Owners", "Competitors", "Suppliers", "Community"], answer: 1, explain: "Competitors are not listed." },
      { q: "Which is an expectation of owners?", options: ["Good working conditions", "Maximum ROI and growing business value", "Fair negotiation", "Tax compliance"], answer: 1, explain: "Owners expect profits, maximum ROI, growth." },
      { q: "Employees who do the absolute minimum are demonstrating:", options: ["Strike", "Quiet quitting", "Sabotage", "Go-slow"], answer: 1, explain: "Quiet quitting = working but doing the absolute minimum." },
      { q: "A UK chicken shortage forced Nando's to close branches. This is an example of:", options: ["Government influence", "Community influence", "Supplier influence", "Customer influence"], answer: 2, explain: "Suppliers can stop supplying, disrupting operations." },
      { q: "Which government body helps dissatisfied employees against employers?", options: ["SARS", "SAPS", "CCMA", "Municipality"], answer: 2, explain: "CCMA = Commission for Conciliation, Mediation and Arbitration." },
      { q: "What is a stakeholder profile used for?", options: ["To track employee salaries", "To understand a group's role, expectations, and influence", "To calculate market share", "To design a website"], answer: 1, explain: "To understand a stakeholder's role, expectations, influence, and priority." },
      { q: "Which of these is a result of GOOD relations with suppliers?", options: ["They stop supplying", "They extend credit payment terms during cash flow problems", "They demand immediate payment", "They sue the business"], answer: 1, explain: "Suppliers may extend credit terms if the business has cash flow issues." },
      { q: "Xenophobia riots and looting are examples of negative relations with which stakeholder?", options: ["Customers", "Employees", "Community", "Government"], answer: 2, explain: "Negative relations with the community can lead to riots, attacks, and looting." }
    ],
    faq: [
      { q: "who are the six stakeholder categories", a: "Owners, customers, employees, community, suppliers, government." },
      { q: "what is a stakeholder profile", a: "Four questions per group: (1) role, (2) expectations, (3) influence/impact, (4) rating and priority." },
      { q: "what are employee expectations", a: "Fair pay, job security, good working conditions, work/life balance, promotions and development." }
    ]
  },
  {
    id: "ch12",
    module: "Retail Operations Management 1",
    number: "12",
    title: "Operational Risks",
    summary: "Ten types of risk, shrinkage and shoplifting in depth, and the five-step risk management process.",
    notes: `## The ten operational risks
1. Shoplifting and theft, 2. Employee theft, 3. Fraud and scams, 4. Inventory shortages, 5. Cybersecurity threats, 6. Supply chain disruptions, 7. Competition, 8. Health and safety incidents, 9. Natural disasters, 10. Sabotage.

## Shrinkage
> **Definition:** The reduction of inventory value due to employee or customer theft.
- Types: Customer theft, Employee theft, POS mistakes, Supplier short delivery, Miscounting.

## Shoplifting
- **Methods:** Working in pairs, hiding products, price switching, grab and run.
- **Prevention:** Cameras, mirrors, RFID tags, customer service, layout optimization.

## Who cannot be legally prosecuted
- Children under 12 (presumed no criminal capacity).
- Children 12–14 (only if State proves they understood wrongfulness).

## Risk management process
1. Identifying risks
2. Evaluating techniques
3. Selecting a technique
4. Implementing
5. Monitoring effectiveness`,
    quiz: [
      { q: "Shrinkage is best defined as:", options: ["Theft by customers only", "Reduction of inventory value due to employee or customer theft", "Damage from natural disasters", "Loss from supplier delays"], answer: 1, explain: "Shrinkage = reduction of inventory value." },
      { q: "Swapping price tags on products is called:", options: ["Grab and run", "Price switching", "Hiding products", "Working in pairs"], answer: 1, explain: "Price switching = swapping tags so a more expensive item is charged less." },
      { q: "Under SA law, children in which age group CANNOT be prosecuted for shoplifting?", options: ["Under 10", "Under 12", "Under 14", "Under 16"], answer: 1, explain: "Children under 12 are presumed to lack criminal capacity." },
      { q: "Which is the FIRST step of the risk management process?", options: ["Implementing the technique", "Identifying risks", "Selecting a technique", "Monitoring effectiveness"], answer: 1, explain: "Step 1 = identifying risks." },
      { q: "A bomb threat forcing a store to close is an example of:", options: ["Shrinkage", "Data breach", "Forced closure", "Sabotage"], answer: 2, explain: "Forced closure = business required to shut down." },
      { q: "Which of the following is NOT one of the ten operational risks?", options: ["Customer injuries", "Employee theft", "Employee motivation", "Supply chain disruptions"], answer: 2, explain: "Employee motivation is not an operational risk." },
      { q: "How should staff approach a suspected shoplifter?", options: ["Run at them and shout", "Calmly and discreetly", "Use unnecessary force", "Ignore them"], answer: 1, explain: "Approach calmly and discreetly." },
      { q: "What is a key prevention measure for shoplifting involving technology?", options: ["Using RFID tags", "Hiring more security guards", "Closing the store earlier", "Increasing prices"], answer: 0, explain: "Retail inventory management tools like RFID tags." }
    ],
    faq: [
      { q: "what is shrinkage", a: "Reduction of inventory value due to employee or customer theft." },
      { q: "what are the methods of shoplifting", a: "Working in pairs, hiding products, price switching, grab and run." },
      { q: "who cannot be prosecuted for shoplifting in south africa", a: "Children under 12, and children 12-14 unless the State proves they understood wrongfulness." }
    ]
  },
  {
    id: "ch13",
    module: "Retail Operations Management 1",
    number: "13",
    title: "Health and Safety at Work",
    summary: "The OHSA 1993 framework, employer and employee duties, and stress management.",
    notes: `## The legal framework
> **The Occupational Health and Safety Act (OHSA), 1993** requires retailers to maintain a work environment that is safe and without risk to health.

## The three key terms
- **Hazard:** Anything with potential to cause harm.
- **Risk:** The likelihood the hazard will cause harm.
- **Control:** Measures to decrease the likelihood or consequences.

## Employer's seven duties
1. Identify risks, 2. Establish protective methods, 3. Provide info/training, 4. Not permit unsafe work, 5. Ensure obedience, 6. Ensure trained supervision, 7. Appoint reps.

## Health and Safety Representatives
- Required if >20 employees.
- Shops/offices: 1 per 100.
- Other workplaces: 1 per 50.

## Employee duties
1. Care for own/others' safety, 2. No "playing", 3. Obey rules, 4. Co-operate, 5. Give info to inspectors, 6. Report unsafe conditions.

## Stress management
- **Physical** (headaches), **Behavioural** (withdrawal), **Cognitive** (poor concentration), **Emotional** (anxiety).`,
    quiz: [
      { q: "A wet floor is best described as a:", options: ["Risk", "Hazard", "Control", "Standard"], answer: 1, explain: "A hazard is anything with potential to cause harm." },
      { q: "Which Act governs health and safety at work in South Africa?", options: ["OHSA 1993", "BCEA 1997", "LRA 1995", "EEA 1998"], answer: 0, explain: "OHSA = Occupational Health and Safety Act, 1993." },
      { q: "In shops and offices, the minimum number of H&S reps is:", options: ["1 per 20 employees", "1 per 50 employees", "1 per 100 employees", "1 per 200 employees"], answer: 2, explain: "Shops/offices: 1 per 100. Other workplaces: 1 per 50." },
      { q: "Which is NOT an employee duty under OHSA?", options: ["Care for own and others' safety", "Obey rules and procedures", "Appoint H&S representatives", "Report unsafe conditions ASAP"], answer: 2, explain: "Appointing H&S reps is an EMPLOYER duty." },
      { q: "An inspector from the Department of Labour may:", options: ["Only enter with a warrant", "Enter any workplace without prior notice", "Only inspect offices", "Only issue warnings, not fines"], answer: 1, explain: "Inspectors may enter without notice." },
      { q: "How many H&S representatives are required if a factory has 120 employees?", options: ["1", "2", "3", "4"], answer: 2, explain: "Factories require 1 per 50. 120 ÷ 50 = 2.4, round up to 3." },
      { q: "Which of these is a cognitive symptom of stress?", options: ["Headaches", "Nail biting", "Difficulty making decisions", "Anger and irritability"], answer: 2, explain: "Cognitive symptoms include difficulty making decisions." },
      { q: "What does the OHSA require regarding work tasks?", options: ["Employees must figure out safety themselves", "Employers must not permit unsafe work", "Only managers need training", "Safety is entirely the employee's responsibility"], answer: 1, explain: "Employer duty #4: Not to permit unsafe work." }
    ],
    faq: [
      { q: "difference between hazard and risk", a: "Hazard = potential to cause harm. Risk = likelihood it causes harm." },
      { q: "how many h&s representatives are required", a: "Trigger: >20 employees. Shops/offices: 1 per 100. Other: 1 per 50." },
      { q: "what are the employer duties under ohsa", a: "Seven: identify hazards, establish protective methods, provide info/training, not permit unsafe work, ensure obedience, ensure trained supervision, appoint H&S reps." }
    ]
  },

  /* =========================================
     MODULE 2: RETAILING 1
     ========================================= */
  {
    id: "t01",
    module: "Retailing 1",
    number: "Topic 1",
    title: "Customer Segments & Target Markets",
    summary: "How markets are divided into groups to better target marketing efforts.",
    notes: `## The Market & Target Market
* **Market:** Consists of all the consumers who purchase specific goods and services.
* **Target Market:** A group of people to whom a firm decides to direct its marketing efforts.

## Customer Segmentation
* **Definition:** The process of dividing a market into distinct customer groups that share similar characteristics.
* **Kotler's Definition:** Sub-dividing a market into distinct and homogenous subgroups.

## The Four Main Bases for Segmentation:
1. **Profile (Demographic/Geographic):** Age, gender, income.
2. **Behavioural:** Benefits sought, purchase occasion, usage rate.
3. **Psychographic:** Lifestyle, personality.
4. **Geographic:** Where the customer lives.

## Benefits of Segmentation:
* Product development and customized marketing programs.
* Focus marketing on customers and build loyal relationships.
* Improve customer service and become more competitive.`,
    quiz: [
      { q: "What is a target market?", options: ["A group of people a firm decides to direct its marketing efforts to", "The entire population of a country", "The competitors in a specific area", "A list of all products in a store"], answer: 0, explain: "A target market is the specific group a business aims its marketing at." },
      { q: "Customer segmentation is the process of dividing a market into:", options: ["Random groups", "Distinct groups sharing similar characteristics", "Competitor groups", "Price categories"], answer: 1, explain: "Segmentation divides the market into distinct groups." },
      { q: "Which of the following is a psychographic segmentation factor?", options: ["Age", "Purchase occasion", "Lifestyle", "Income"], answer: 2, explain: "Psychographic segmentation includes lifestyle and personality." },
      { q: "According to the slides, what is one reason target markets are important?", options: ["To fire employees", "To forecast market growth", "To increase store size", "To buy more stock"], answer: 1, explain: "Forecasting market growth is one reason." },
      { q: "Purchase behaviour falls under which segmentation category?", options: ["Psychographic", "Profile", "Behavioural", "Geographic"], answer: 2, explain: "Behavioural segmentation includes purchase behaviour." },
      { q: "Which of the following is a benefit of customer segmentation?", options: ["Wasting company resources", "Building loyal relationships with customers", "Increasing the number of competitors", "Making products more expensive"], answer: 1, explain: "Building loyal relationships is a benefit." },
      { q: "Kotler defines marketing segmentation as sub-dividing a market into subgroups that are:", options: ["Random and chaotic", "Distinct and homogenous", "Competitive and expensive", "Large and small"], answer: 1, explain: "Kotler defines it as distinct and homogenous subgroups." },
      { q: "Which factor is part of 'Profile' segmentation?", options: ["Personality", "Benefits sought", "Socio-economic status", "Usage rate"], answer: 2, explain: "Profile segmentation includes socio-economic status." }
    ],
    faq: [
      { q: "What is the difference between a market and a target market?", a: "A market is *everyone* who buys the product. A target market is the *specific group* the business chooses to focus its marketing on." },
      { q: "What are the four main bases of segmentation?", a: "Profile (Demographic/Geographic), Behavioural, Psychographic, and Geographic." },
      { q: "Why segment a market?", a: "To focus marketing efforts, build better relationships, allocate resources efficiently, and increase profit potential." }
    ]
  },
  {
    id: "t02",
    module: "Retailing 1",
    number: "Topic 2",
    title: "Customer Service & Complaints",
    summary: "The importance of good service and identifying customer emotions during complaints.",
    notes: `## What is Customer Service?
* The support and advice provided by a business to those people who buy or use its products.
* **Importance:** Builds loyalty, encourages repeat purchases, differentiates from competitors.
* **Types:** In-store assistance, online support, after-sales service.
* **Customer Expectations:** Fast response, personal attention, product knowledge, respect.
* **Measuring Service Quality:** Surveys, mystery shoppers, Net Promoter Score (NPS).

## Handling Complaints (Identifying Emotions)
* *Scenario 1:* Broken toy for a child.
  * **Emotion:** Upset, Angry, Frustrated.
* *Scenario 2:* Cream is off while preparing a dessert with guests waiting.
  * **Emotion:** Panicked, Stressed, Embarrassed.
* *Scenario 3:* Wrong change, told to wait, supervisor dismisses her.
  * **Emotion:** Frustrated, Ignored, Angry.
* *Scenario 4:* Promotional product not available, travelled far.
  * **Emotion:** Disappointed, Frustrated.
* *Scenario 5:* Price increased, assistant not interested to assist.
  * **Emotion:** Angry, Ignored, Confused.`,
    quiz: [
      { q: "What is customer service?", options: ["The process of manufacturing goods", "The support and advice provided by a business to buyers/users", "A type of marketing advertisement", "The financial record of a store"], answer: 1, explain: "Customer service is the support and advice provided to buyers." },
      { q: "Which of the following is a type of customer service?", options: ["In-store assistance", "After-sales service", "Online support", "All of the above"], answer: 3, explain: "All are valid types." },
      { q: "Which skill involves understanding and sharing the feelings of a customer?", options: ["Patience", "Product knowledge", "Empathy", "Problem-solving"], answer: 2, explain: "Empathy is understanding and sharing feelings." },
      { q: "A customer who finds a broken product after purchase is most likely feeling:", options: ["Joyful", "Disappointed", "Indifferent", "Relieved"], answer: 1, explain: "A broken product leads to disappointment." },
      { q: "Which of the following is a method to measure customer service?", options: ["Mystery shoppers", "Stock counts", "Employee wages", "Store layout"], answer: 0, explain: "Mystery shoppers evaluate customer service." },
      { q: "What is a key expectation of customers regarding service?", options: ["Slow response", "Impersonal interaction", "Fast response and personal attention", "Lack of product knowledge"], answer: 2, explain: "Fast responses and personal attention are expected." },
      { q: "When a customer is told to wait and the supervisor is dismissive, the customer likely feels:", options: ["Valued", "Ignored", "Excited", "Relaxed"], answer: 1, explain: "Being dismissed makes the customer feel ignored." },
      { q: "Which of the following is an example of poor customer service?", options: ["Welcoming customers warmly", "Resolving issues quickly", "Being rude and unhelpful", "Assisting with product selection"], answer: 2, explain: "Being rude and unhelpful is poor service." }
    ],
    faq: [
      { q: "What are the 4 types of customer service?", a: "In-store assistance, online support, after-sales service, and call centre/helpdesk." },
      { q: "How do we measure customer service?", a: "Through satisfaction surveys, mystery shoppers, feedback forms, and Net Promoter Scores (NPS)." },
      { q: "What skills does a good customer service agent need?", a: "Communication, empathy, patience, product knowledge, and problem-solving." }
    ]
  },
  {
    id: "t03",
    module: "Retailing 1",
    number: "Topic 3",
    title: "The Selling Process",
    summary: "The 9 steps of a sale, types of selling, FAB, and closing techniques.",
    notes: `## Types of Selling Processes:
1. Self-service, 2. Limited service, 3. Full service.

## The 9-Step Sales Process:
1. **Preparing:** Equipment, product knowledge.
2. **Approaching:** Initiate a relationship. "You never get a second chance to make a good first impression."
3. **Getting information:** Ask questions, listen carefully.
4. **Giving information:** Use **FAB**:
   * *Features:* Physical characteristics.
   * *Advantages:* What makes it unique.
   * *Benefits:* The satisfaction the customer gains.
5. **Identifying and overcoming obstacles:** Real, Misinformed, Emotional, Delaying.
6. **Dealing with offers & terms:** Credit (Hire Purchase).
7. **Using closing techniques:** Assumptive, either/or, reflexive, summary, ask for it, third party, inducement.
8. **Completing paperwork:** Cash, card, credit.
9. **Implementing after-sales follow-up.**

## Bob Phibbs' 5 Steps to Closing Quickly:
1. **Engage.**
2. **Establish Trust.**
3. **Address Concerns.**
4. **Demonstrate Value:** Focus on what the product provides.
5. **Closing Organically:** Suggest complimentary items (add-ons).`,
    quiz: [
      { q: "Which of the following is a type of selling process?", options: ["Self-service", "Full service", "Limited service", "All of the above"], answer: 3, explain: "All three are types of selling processes." },
      { q: "What is the first step in the 9-step sales process?", options: ["Approaching the customer", "Preparing for the sale", "Overcoming obstacles", "Completing paperwork"], answer: 1, explain: "Step 1 is preparing for the sale." },
      { q: "In the FAB acronym, what does the B stand for?", options: ["Buying", "Bargain", "Benefits", "Balance"], answer: 2, explain: "FAB stands for Features, Advantages, Benefits." },
      { q: "Which of these is NOT a type of obstacle?", options: ["Real obstacle", "Misinformed obstacle", "Financial obstacle", "Emotional obstacle"], answer: 2, explain: "The four are Real, Misinformed, Emotional, and Delaying." },
      { q: "According to Bob Phibbs, what should you do instead of pushing for a close?", options: ["Walk away", "Offer complimentary items (add-ons)", "Lower the price", "Call the manager"], answer: 1, explain: "Suggesting add-ons closes the sale organically." },
      { q: "'You never get a second chance to make a good first impression' applies to which step?", options: ["Preparing", "Approaching", "Paperwork", "After-sales"], answer: 1, explain: "This quote is related to the approach." },
      { q: "Which closing technique is The either/or close?", options: ["A closing technique", "A type of obstacle", "A step in FAB", "A paperwork method"], answer: 0, explain: "It is one of the 7 closing techniques." },
      { q: "What is a key part of Demonstrating Value?", options: ["Focusing on the price", "Focusing on what the product provides", "Rushing the customer", "Ignoring the customer's needs"], answer: 1, explain: "Focus on what the product provides." }
    ],
    faq: [
      { q: "What are Features, Advantages, and Benefits (FAB)?", a: "Features are physical traits; Advantages are what makes it unique; Benefits are the satisfaction the customer gets." },
      { q: "What are the 4 types of obstacles?", a: "Real, Misinformed, Emotional, and Delaying." },
      { q: "How do you close a sale organically?", a: "By suggesting complementary items that add value, rather than pushing them to pay immediately." }
    ]
  },
  {
    id: "t04",
    module: "Retailing 1",
    number: "Topic 4",
    title: "Retail Location",
    summary: "Why location matters and the 5-step process of choosing one.",
    notes: `## Definition
Retail location refers to the geographical place where a retail business is established. 

## Importance of Location:
* Determines customer accessibility.
* Affects foot traffic and visibility.
* Influences cost (rent, utilities, taxes).

## Types of Retail Locations:
1. Central Business District (CBD)
2. Shopping Centers and Malls
3. Freestanding Sites
4. Neighborhood Centers
5. Online Retail Locations

## The 5-Step Location Process:
1. Market research and data analysis.
2. Identification of potential sites.
3. Site evaluation and feasibility study.
4. Financial analysis and budgeting.
5. Final selection and negotiation.`,
    quiz: [
      { q: "What does retail location refer to?", options: ["The type of products sold", "The geographical place where a business is established", "The price of the products", "The store's website"], answer: 1, explain: "Retail location refers to the geographical place." },
      { q: "Which of the following is a type of retail location?", options: ["Central Business District (CBD)", "Freestanding Sites", "Online E-commerce", "All of the above"], answer: 3, explain: "All are valid retail location types." },
      { q: "Why is location important?", options: ["It determines customer accessibility", "It has no effect on costs", "It guarantees success", "It replaces the need for marketing"], answer: 0, explain: "Location determines accessibility." },
      { q: "Which factor influences location decisions?", options: ["Zoning laws", "The owner's favourite colour", "The number of employees", "The store's logo"], answer: 0, explain: "Zoning laws are a major factor." },
      { q: "What is the first step in choosing a retail location?", options: ["Final selection", "Market research and data analysis", "Signing the lease", "Buying stock"], answer: 1, explain: "Step 1 is market research." },
      { q: "A store located in a mall is an example of:", options: ["CBD", "Shopping Center/Mall", "Online retail", "Freestanding site"], answer: 1, explain: "A mall is a Shopping Center." },
      { q: "Which of these is NOT a factor in location decisions?", options: ["Accessibility and transportation", "Cost of premises", "The owner's age", "Competition"], answer: 2, explain: "The owner's age is not a factor." },
      { q: "What does a feasibility study fall under?", options: ["Step 1", "Step 2", "Step 3", "Step 5"], answer: 2, explain: "Step 3 is site evaluation and feasibility study." }
    ],
    faq: [
      { q: "What are the 5 types of retail locations?", a: "CBD, Shopping Centers/Malls, Freestanding Sites, Neighborhood Centers, and Online." },
      { q: "Why does location influence cost?", a: "Rent, utilities, and taxes vary drastically depending on the area." },
      { q: "What is a feasibility study?", a: "It is step 3 in location selection, where the business evaluates if a site will work." }
    ]
  },
  {
    id: "t05",
    module: "Retailing 1",
    number: "Topic 5",
    title: "Retail Merchandising",
    summary: "Planning, buying, and selling products effectively.",
    notes: `## Definition
Retail merchandising refers to the planning, buying, and selling of products in a retail setting.

## 5 Key Elements of Merchandising:
1. Product assortment
2. Pricing strategy
3. Visual merchandising
4. Inventory management
5. Promotion and advertising

## Visual Merchandising:
* Display techniques to attract customers (window displays, store layout, signage, lighting).
* Aims to maximize product visibility and appeal.

## The Merchandising Process:
1. Understanding customer needs.
2. Planning merchandise assortment.
3. Buying and sourcing products.
4. Pricing and placing merchandise.
5. Monitoring and adjusting based on performance.`,
    quiz: [
      { q: "What is retail merchandising?", options: ["Only the visual display of products", "The planning, buying, and selling of products", "The accounting process of a store", "Hiring and firing staff"], answer: 1, explain: "It involves planning, buying, and selling." },
      { q: "Which of these is a key element of merchandising?", options: ["Product assortment", "Pricing strategy", "Visual merchandising", "All of the above"], answer: 3, explain: "All are key elements." },
      { q: "Visual merchandising includes:", options: ["Window displays and lighting", "Store layout and signage", "Both A and B", "Only pricing"], answer: 2, explain: "Both A and B are part of visual merchandising." },
      { q: "What is the first step in the merchandising process?", options: ["Buying products", "Understanding customer needs", "Pricing products", "Adjusting based on performance"], answer: 1, explain: "Step 1 is understanding customer needs." },
      { q: "Which of these is a reason merchandising is important?", options: ["It decreases sales", "It helps manage inventory", "It confuses customers", "It lowers brand identity"], answer: 1, explain: "It helps manage inventory effectively." },
      { q: "Adjusting based on performance is which step?", options: ["Step 1", "Step 3", "Step 5", "Step 2"], answer: 2, explain: "Step 5 is monitoring and adjusting." },
      { q: "What does visual merchandising aim to do?", options: ["Hide products", "Maximize product visibility and appeal", "Reduce lighting costs", "Slow down customer traffic"], answer: 1, explain: "It maximizes visibility and appeal." },
      { q: "A grocery store using seasonal displays for summer fruits is an example of:", options: ["Pricing strategy", "Visual merchandising", "Inventory management", "Promotion"], answer: 1, explain: "It's an example of visual merchandising." }
    ],
    faq: [
      { q: "What are the 5 key elements of merchandising?", a: "Product assortment, pricing strategy, visual merchandising, inventory management, and promotion." },
      { q: "What is the difference between merchandising and visual merchandising?", a: "Merchandising is the overall process of planning and selling, while visual merchandising is how products are displayed." },
      { q: "What is product assortment?", a: "The variety and range of products a store chooses to stock." }
    ]
  },
  {
    id: "t06",
    module: "Retailing 1",
    number: "Topic 6",
    title: "Township Retailing",
    summary: "The unique characteristics, challenges, and opportunities of retail in South African townships.",
    notes: `## What is Township Retailing?
* Retail activities in township areas.
* Focuses on accessibility, affordability, and convenience.

## Characteristics of Townships:
* High population density.
* Lower to middle income.
* Mix of informal and formal trade.

## Types of Retailers:
* Spaza shops
* Street vendors
* Supermarkets (Shoprite, Checkers)
* Malls

## Consumer Profile & Buying Behaviour:
* Price-sensitive customers.
* Frequent, small purchases.
* Dependence on public transport.
* Focus on promotions.
* Preference for smaller pack sizes.

## Retail Challenges:
* Security issues.
* Infrastructure limitations.
* Competition from informal traders.

## Retail Strategies & Marketing:
* Affordable pricing.
* Localised products.
* Community engagement.
* Use of radio, flyers, word-of-mouth.`,
    quiz: [
      { q: "What is township retailing focused on?", options: ["Luxury goods", "Accessibility, affordability, and convenience", "Online shopping only", "International exports"], answer: 1, explain: "It focuses on accessibility, affordability, and convenience." },
      { q: "Which of these is a characteristic of townships?", options: ["Low population density", "High population density", "Very high income", "No informal trade"], answer: 1, explain: "Townships have high population density." },
      { q: "Which type of retailer is common in townships?", options: ["Spaza shops", "Street vendors", "Supermarkets", "All of the above"], answer: 3, explain: "All of these are common." },
      { q: "Township consumers often prefer:", options: ["Large pack sizes", "Smaller pack sizes", "Expensive luxury items", "Buying in bulk monthly"], answer: 1, explain: "They prefer smaller pack sizes." },
      { q: "What is a major challenge for township retailers?", options: ["Too much security", "Security issues", "Too few customers", "No competition"], answer: 1, explain: "Security issues are a major challenge." },
      { q: "Why is location important in townships?", options: ["It doesn't matter", "Near transport hubs and high foot traffic", "Far away from residential areas", "Inside industrial zones"], answer: 1, explain: "Location near transport hubs is critical." },
      { q: "Which is a strategy for township retailers?", options: ["High pricing", "Community engagement", "Ignoring local needs", "Using only English advertising"], answer: 1, explain: "Community engagement is a key strategy." },
      { q: "What is a future trend for township retail?", options: ["No growth", "Digital transformation", "Less competition", "Closing of all formal stores"], answer: 1, explain: "Digital transformation is a future trend." }
    ],
    faq: [
      { q: "What is a spaza shop?", a: "A small, informal convenience store found in South African townships." },
      { q: "Why are township consumers price-sensitive?", a: "Because the income levels are generally lower to middle income, so they look for value." },
      { q: "What are the main challenges of township retail?", a: "Security issues, poor infrastructure, and heavy competition." }
    ]
  },
  {
    id: "t07",
    module: "Retailing 1",
    number: "Topic 7",
    title: "Consumer Protection Legislation",
    summary: "The Consumer Protection Act (CPA) and the Electronic Communications Act.",
    notes: `## The Consumer:
* Someone who uses goods or services supplied by another party.

## Customer Rights:
Right to return unwanted goods, right to safety, right to accurate information, right not to be misled, right to be heard, right to redress, right to choose.

## The Retailer's Responsibilities:
* No misleading trade descriptions.
* No misleading advertising about availability or price.
* No displaying of goods without prices.
* Give customers a record (till slip).
* Have procedures to return/replace/refund.
* Train staff on friendly service.

## The Complaint Process:
1. Company contacted for response.
2. Reference number given.
3. Response sent to all parties.
4. If unresolved, conciliation within 10 days.
5. Independent mediator resolves it.
6. Consumer Tribunal (final authority).

## The Electronic Communications Act:
* Regulates how retailers communicate electronically.
* Customers may opt-out of direct marketing.`,
    quiz: [
      { q: "Who is a consumer?", options: ["The person selling the goods", "Someone who uses goods/services supplied by another party", "The manager of the store", "The government"], answer: 1, explain: "A consumer uses goods/services supplied by another party." },
      { q: "What does the CPA say about displayed goods with a price?", options: ["The retailer is making an offer", "The customer is making an offer", "It is just decoration", "It means the item is out of stock"], answer: 0, explain: "Displaying with a price is making an offer." },
      { q: "Which of the following is a customer right?", options: ["Right to be misled", "Right to safety", "Right to steal", "Right to ignore prices"], answer: 1, explain: "The right to safety is a fundamental customer right." },
      { q: "Which section prohibits misleading trade descriptions?", options: ["Section 24.2", "Section 61.1", "Section 21.1", "Section 4"], answer: 0, explain: "Section 24.2 prohibits misleading trade descriptions." },
      { q: "What must a retailer provide for all goods sold?", options: ["A free gift", "A record (till slip)", "A warranty card only", "A discount"], answer: 1, explain: "They must provide a record." },
      { q: "If a complaint goes to conciliation, it must be done within how many days?", options: ["10 days", "30 days", "7 days", "14 days"], answer: 0, explain: "Conciliation is conducted within 10 days." },
      { q: "What does the Electronic Communications Act regulate?", options: ["How retailers communicate electronically", "The price of electronics", "How many TVs a store can sell", "The return policy of electronics"], answer: 0, explain: "It regulates electronic communication with customers." },
      { q: "Which of these is a retailer responsibility?", options: ["Displaying goods without prices", "Making false claims about performance", "Handling queries in a friendly manner", "Selling unsafe goods"], answer: 2, explain: "Handling queries in a friendly manner is a responsibility." }
    ],
    faq: [
      { q: "What is the purpose of the CPA?", a: "To protect consumers from unfair business practices and ensure they receive safe, quality goods." },
      { q: "What are the retailer's rules regarding pricing?", a: "They must not display goods without prices, and they must not make misleading claims about price." },
      { q: "How does the complaint process work?", a: "A complaint is made, the retailer responds, and if unresolved, it goes to conciliation and finally the Consumer Tribunal." }
    ]
  },
  {
    id: "t08",
    module: "Retailing 1",
    number: "Topic 8",
    title: "Time Management",
    summary: "Setting SMART goals, prioritizing, and using tools to manage time effectively.",
    notes: `## Goal Setting (SMART):
* **S**pecific
* **M**easurable
* **A**ttainable
* **R**elevant
* **T**ime-bound

## Time Management System:
1. **Identify:** Find a system that works for you.
2. **Create:** Create a personal schedule.
3. **Account:** Account for your job and other commitments.
4. **Check:** Strive for balance.

## Benefits:
* Reduces stress and lets you work optimally.

## The Eisenhower Matrix:
1. **Urgent & Important:** Do first.
2. **Important, Not Urgent:** Schedule.
3. **Urgent, Less Important:** Delegate.
4. **Neither Urgent nor Important:** Don't do at all.`,
    quiz: [
      { q: "What does the 'S' in SMART goals stand for?", options: ["Specific", "Simple", "Standard", "Slow"], answer: 0, explain: "S stands for Specific." },
      { q: "What does the 'T' in SMART goals stand for?", options: ["Tough", "Time-bound", "Target", "Team"], answer: 1, explain: "T stands for Time-bound." },
      { q: "Why is identifying priorities important?", options: ["To waste time", "To plan actions that contribute to goals", "To ignore your goals", "To make you stressed"], answer: 1, explain: "It helps plan actions toward your goals." },
      { q: "Which is the first step in the Time Management System?", options: ["Create", "Account", "Identify", "Check"], answer: 2, explain: "Step 1 is Identify." },
      { q: "In the Eisenhower Matrix, tasks that are Urgent and Important should be:", options: ["Delegated", "Done first", "Scheduled", "Not done at all"], answer: 1, explain: "Urgent and Important tasks are done first." },
      { q: "In the Eisenhower Matrix, Important, but not urgent tasks should be:", options: ["Delegated", "Done first", "Scheduled", "Ignored"], answer: 2, explain: "Important but not urgent tasks are scheduled." },
      { q: "What is a benefit of good time management?", options: ["Increased stress", "Working optimally", "Missing deadlines", "Confusion"], answer: 1, explain: "It lets you work optimally." },
      { q: "Tasks that are Neither urgent nor important should be:", options: ["Done first", "Scheduled", "Delegated", "Not done at all"], answer: 3, explain: "These should not be done at all." }
    ],
    faq: [
      { q: "What are SMART goals?", a: "Specific, Measurable, Attainable, Relevant, and Time-bound goals." },
      { q: "What is the Eisenhower Matrix?", a: "A 4-quadrant tool used to prioritize tasks based on urgency and importance." },
      { q: "Why is a time management system important?", a: "It helps you stay accountable and balance your commitments." }
    ]
  }
];
