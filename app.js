const SUBJECTS = [
  {
    name: "Frontend Engineering",
    key: "frontend",
    icon: "💻",
    color: "#e9e7ff",
    topics: "HTML · CSS · JavaScript",
    teacher: "frontend_teacher",
  },
  {
    name: "Advanced Java",
    key: "java",
    icon: "☕",
    color: "#fff0e5",
    topics: "Swing · AWT · JDBC",
    teacher: "java_teacher",
  },
  {
    name: "Computer Networks",
    key: "networks",
    icon: "🌐",
    color: "#e5f5ff",
    topics: "Protocols · Routing · Security",
    teacher: "networks_teacher",
  },
  {
    name: "Aptitude",
    key: "aptitude",
    icon: "🧠",
    color: "#fff3dc",
    topics: "Logic · Quantitative · Verbal",
    teacher: "aptitude_teacher",
  },
  {
    name: "Cloud Computing",
    key: "cloud",
    icon: "☁️",
    color: "#e4f7f2",
    topics: "AWS · Azure · Cloud basics",
    teacher: "cloud_teacher",
  },
];

const seedQuestions = {
  frontend: [
    [
      "Which HTML element is used for the largest heading?",
      ["<h6>", "<head>", "<h1>", "<header>"],
      2,
    ],
    [
      "Which CSS property controls the space inside an element?",
      ["margin", "padding", "spacing", "border"],
      1,
    ],
    [
      "Which keyword declares a block-scoped variable in JavaScript?",
      ["var", "let", "static", "define"],
      1,
    ],
    [
      "What does CSS stand for?",
      [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Syntax",
        "Colorful Style Sheets",
      ],
      1,
    ],
    [
      "Which method selects an element by its ID?",
      [
        "querySelectorAll()",
        "getElementById()",
        "getElementsByClass()",
        "selectId()",
      ],
      1,
    ],
    [
      "Which HTML tag creates a hyperlink?",
      ["<link>", "<a>", "<href>", "<url>"],
      1,
    ],
    [
      "Which CSS property changes text colour?",
      ["font-style", "text-size", "color", "background"],
      2,
    ],
    [
      "Which symbol starts a single-line comment in JavaScript?",
      ["<!--", "//", "##", "**"],
      1,
    ],
    [
      "Which HTML attribute provides alternative text for an image?",
      ["title", "src", "alt", "href"],
      2,
    ],
    [
      "Which CSS layout system is designed for rows and columns?",
      ["Flexbox", "Grid", "Float", "Inline"],
      1,
    ],
  ],

  java: [
    [
      "Which package contains the Swing library?",
      ["java.net", "javax.swing", "java.io", "java.awt.event"],
      1,
    ],
    [
      "Which layout arranges components in rows and columns?",
      ["BorderLayout", "FlowLayout", "GridLayout", "CardLayout"],
      2,
    ],
    [
      "Which JDBC interface represents a database connection?",
      ["Driver", "Connection", "Statement", "ResultSet"],
      1,
    ],
    [
      "Which AWT component is used to display a single line of text?",
      ["TextArea", "Label", "Canvas", "Panel"],
      1,
    ],
    [
      "Which object executes a SQL query in JDBC?",
      ["ResultSet", "Connection", "Statement", "DriverManager"],
      2,
    ],
    [
      "Which Swing component is used for a clickable button?",
      ["JLabel", "JButton", "JFrame", "JTextField"],
      1,
    ],
    [
      "Which AWT class creates a top-level window?",
      ["Frame", "Label", "Checkbox", "List"],
      0,
    ],
    [
      "Which JDBC object stores rows returned by a query?",
      ["Driver", "Connection", "ResultSet", "PreparedStatement"],
      2,
    ],
    [
      "Which method is commonly used to handle a button click in Swing?",
      ["paint()", "actionPerformed()", "main()", "runQuery()"],
      1,
    ],
    [
      "Which JDBC class helps establish a database connection?",
      ["DriverManager", "ResultSet", "JFrame", "Scanner"],
      0,
    ],
  ],

  networks: [
    ["How many layers are in the OSI model?", ["4", "5", "7", "8"], 2],
    [
      "Which protocol provides reliable, connection-oriented delivery?",
      ["UDP", "IP", "TCP", "ARP"],
      2,
    ],
    [
      "What does DNS translate domain names into?",
      ["MAC addresses", "IP addresses", "Port numbers", "Subnets"],
      1,
    ],
    [
      "Which device forwards packets between networks?",
      ["Hub", "Switch", "Router", "Repeater"],
      2,
    ],
    ["How many bits are in an IPv4 address?", ["16", "32", "64", "128"], 1],
    [
      "Which protocol is commonly used to send email?",
      ["SMTP", "FTP", "ARP", "DHCP"],
      0,
    ],
    [
      "What does LAN stand for?",
      [
        "Large Access Network",
        "Local Area Network",
        "Linked Address Node",
        "Long Area Network",
      ],
      1,
    ],
    [
      "Which device mainly connects devices within a local network?",
      ["Router", "Switch", "Modem", "Repeater"],
      1,
    ],
    [
      "Which protocol automatically assigns IP addresses to devices?",
      ["DNS", "HTTP", "DHCP", "SSH"],
      2,
    ],
    [
      "What is the purpose of a firewall?",
      [
        "To cool servers",
        "To filter network traffic",
        "To assign domain names",
        "To increase screen resolution",
      ],
      1,
    ],
  ],

  aptitude: [
    [
      "A car travels 150 km in 3 hours. What is its average speed?",
      ["30 km/h", "45 km/h", "50 km/h", "60 km/h"],
      2,
    ],
    ["What is 25% of 240?", ["40", "50", "60", "80"], 2],
    ["Find the next number: 2, 6, 12, 20, __", ["28", "30", "32", "36"], 1],
    [
      "If 5 workers finish a job in 8 days, how many worker-days is that?",
      ["13", "20", "40", "45"],
      2,
    ],
    [
      "A shirt marked ₹800 is discounted by 10%. What is the sale price?",
      ["₹700", "₹720", "₹740", "₹780"],
      1,
    ],
    ["What is the average of 10, 20, and 30?", ["15", "20", "25", "30"], 1],
    ["If x + 7 = 15, what is x?", ["6", "7", "8", "9"], 2],
    [
      "A bag has 3 red and 2 blue balls. What fraction are blue?",
      ["2/3", "2/5", "3/5", "1/2"],
      1,
    ],
    [
      "What is the simple interest on ₹1000 at 5% for 2 years?",
      ["₹50", "₹100", "₹150", "₹200"],
      1,
    ],
    [
      "A train leaves at 2:00 and arrives at 5:30. How long is the journey?",
      ["2 hours", "3 hours", "3.5 hours", "4 hours"],
      2,
    ],
  ],

  cloud: [
    [
      "Which cloud service model provides virtual machines?",
      ["SaaS", "PaaS", "IaaS", "FaaS"],
      2,
    ],
    [
      "What does AWS S3 primarily provide?",
      ["Object storage", "DNS hosting", "Email delivery", "Load balancing"],
      0,
    ],
    [
      "What is cloud elasticity?",
      [
        "Encrypting cloud data",
        "Scaling resources to demand",
        "Backing up a database",
        "Moving apps between regions",
      ],
      1,
    ],
    [
      "Which deployment model uses both private and public cloud?",
      ["Community", "Hybrid", "Private", "Local"],
      1,
    ],
    [
      "What is a cloud region?",
      [
        "A physical geographic area with data centers",
        "A billing plan",
        "A user permission group",
        "A type of virtual machine",
      ],
      0,
    ],
    [
      "Which service model gives customers a ready-to-use application?",
      ["IaaS", "PaaS", "SaaS", "LAN"],
      2,
    ],
    [
      "What is a virtual machine?",
      [
        "A software-based computer",
        "A physical router",
        "A cloud invoice",
        "A web browser",
      ],
      0,
    ],
    [
      "What does pay-as-you-go cloud pricing mean?",
      [
        "Pay a fixed fee forever",
        "Pay for the resources you use",
        "Use cloud services for free",
        "Pay only once to install",
      ],
      1,
    ],
    [
      "Why are backups useful?",
      [
        "They make screens brighter",
        "They help recover lost data",
        "They replace passwords",
        "They speed up typing",
      ],
      1,
    ],
    [
      "What is cloud scalability?",
      [
        "Changing a screen theme",
        "Increasing or decreasing resources as needed",
        "Deleting old files",
        "Creating a domain name",
      ],
      1,
    ],
  ],
};

// Read and write small demo records in this browser.
function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
function getQuizzes() {
  let q = read("quizhub_quizzes", null);
  if (!q) {
    q = SUBJECTS.map((s, i) => ({
      id: "q" + (i + 1),
      subject: s.key,
      title: [
        "Web Foundations Check-in",
        "Java GUI & JDBC",
        "Network Essentials",
        "Numbers & Logic",
        "Cloud Fundamentals",
      ][i],
      description: `A quick practice quiz covering ${s.topics.toLowerCase()}.`,
      duration: 10,
      questions: seedQuestions[s.key].map((x, n) => ({
        id: "seed" + n,
        text: x[0],
        options: x[1],
        answer: x[2],
      })),
      status: "published",
      scheduledAt: "",
      createdAt: new Date().toISOString(),
    }));
    write("quizhub_quizzes", q);
  } else {
    q = q.map((x) => {
      const starter = SUBJECTS.findIndex(
        (s) => x.id === `q${SUBJECTS.indexOf(s) + 1}`,
      );
      if (starter >= 0 && x.questions.length < 10)
        x.questions = seedQuestions[x.subject].map((v, n) => ({
          id: "seed" + n,
          text: v[0],
          options: v[1],
          answer: v[2],
        }));
      return x;
    });
    write("quizhub_quizzes", q);
  }
  return q;
}
const getUsers = () => read("quizhub_users", []),
  getResults = () => read("quizhub_results", []),
  current = () => read("quizhub_current", null);
let toastTimer;
function toast(msg) {
  let t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}
function subject(key) {
  return SUBJECTS.find((s) => s.key === key) || SUBJECTS[0];
}
function fmtDate(d) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(d));
}
function isAvailable(q) {
  return !q.scheduledAt || new Date(q.scheduledAt) <= new Date();
}
function nav(active, teacher = false) {
  return `<aside class="sidebar"><div class="brand"><span class="brand-mark">Q</span><span class="brand-name">quizhub</span></div><div class="nav-caption">WORKSPACE</div><button class="nav-item ${active === "home" ? "active" : ""}" data-nav="home"><span class="nav-icon">⌂</span><span>Dashboard</span></button>${teacher ? `<button class="nav-item ${active === "quizzes" ? "active" : ""}" data-nav="quizzes"><span class="nav-icon">▤</span><span>My quizzes</span></button><button class="nav-item ${active === "results" ? "active" : ""}" data-nav="results"><span class="nav-icon">◷</span><span>Student results</span></button>` : `<button class="nav-item ${active === "subjects" ? "active" : ""}" data-nav="subjects"><span class="nav-icon">▦</span><span>All subjects</span></button><button class="nav-item ${active === "results" ? "active" : ""}" data-nav="results"><span class="nav-icon">◷</span><span>My results</span></button>`}<div class="side-bottom"><div class="nav-caption">ACCOUNT</div><button class="nav-item" data-action="logout"><span class="nav-icon">↪</span><span>Sign out</span></button><div class="profile-mini"><div class="avatar">${initials(current()?.name || "Student")}</div><div><strong>${esc(current()?.name || "Student")}</strong><small>${teacher ? "Subject teacher" : "Student account"}</small></div></div></div></aside>`;
}
function initials(name) {
  return (name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((x) => x[0])
    .join("")
    .toUpperCase();
}
function esc(v = "") {
  return String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function layout(content, active = "home", teacher = false) {
  return `<div class="shell">${nav(active, teacher)}<main class="main"><div class="topbar"><div class="crumb">${teacher ? "Teacher workspace" : "Student workspace"}　/　${active === "home" ? "Dashboard" : active === "results" ? "Results" : active === "quizzes" ? "My quizzes" : "Subjects"}</div><div class="top-actions"><button class="icon-btn" title="Notifications">♧</button><span class="avatar">${initials(current()?.name)}</span></div></div>${content}</main></div>`;
}
function subjectCards(filter = "") {
  return `<div class="subject-grid">${SUBJECTS.filter(
    (s) => !filter || s.name.toLowerCase().includes(filter.toLowerCase()),
  )
    .map(
      (s, i) =>
        `<article class="subject-card"><div class="subject-head"><span class="subject-icon" style="background:${s.color}">${s.icon}</span><span class="badge ${i % 2 ? "green" : ""}">${i === 0 ? "POPULAR" : "SUBJECT"}</span></div><h3>${s.name}</h3><p>${s.topics}</p><div class="subject-foot"><span>◷ ${getQuizzes().filter((q) => q.subject === s.key && q.status === "published" && isAvailable(q)).length} quizzes available</span><button data-subject="${s.key}">Explore →</button></div></article>`,
    )
    .join("")}</div>`;
}
function studentDashboard() {
  const u = current(),
    res = getResults().filter((r) => r.studentId === u.id),
    quizzes = getQuizzes().filter(
      (q) => q.status === "published" && isAvailable(q),
    ),
    done = new Set(res.map((r) => r.quizId));
  return layout(
    `<div class="welcome"><div><h1>Welcome back, ${esc(u.name.split(" ")[0])} 👋</h1><p>Ready to learn something new? Pick a subject and start a quiz.</p></div><div class="date-pill">▦ &nbsp;${fmtDate(new Date())}</div></div><section class="hero"><div><h2>Your next big score starts here.</h2><p>Learn at your pace, take a quick quiz, and see how far you’ve grown. Your learning streak is waiting.</p><button class="btn btn-primary" data-nav="subjects">Explore subjects <b>→</b></button></div><div class="hero-art">📚</div></section><div class="stats"><div class="stat"><div class="stat-top">Quizzes completed <span class="stat-icon" style="background:#efedff">✎</span></div><strong>${res.length}</strong><small>Keep your momentum going</small></div><div class="stat"><div class="stat-top">Average score <span class="stat-icon" style="background:#e5f8f1">♧</span></div><strong>${res.length ? Math.round(res.reduce((a, r) => a + r.percentage, 0) / res.length) : 0}%</strong><small>Across all attempts</small></div><div class="stat"><div class="stat-top">Available quizzes <span class="stat-icon" style="background:#fff2df">▤</span></div><strong>${quizzes.filter((q) => !done.has(q.id)).length}</strong><small>Waiting for you</small></div><div class="stat"><div class="stat-top">Subjects <span class="stat-icon" style="background:#e4f5ff">▦</span></div><strong>${SUBJECTS.length}</strong><small>Explore all subject areas</small></div></div><div class="section-head"><h2>Explore subjects</h2><button class="link-btn" data-nav="subjects">View all subjects →</button></div>${subjectCards()}<div class="two-col"><section class="panel"><div class="section-head"><h2>Recent activity</h2><button class="link-btn" data-nav="results">See all →</button></div>${
      res.slice(0, 3).length
        ? res
            .slice(0, 3)
            .map(
              (r) =>
                `<div class="activity"><div class="activity-ico" style="background:${subject(r.subject).color}">${subject(r.subject).icon}</div><div><strong>${esc(r.quizTitle)}</strong><small>${esc(subject(r.subject).name)} · ${fmtDate(r.submittedAt)}</small></div><span class="score">${r.percentage}%</span></div>`,
            )
            .join("")
        : `<div class="empty"><strong>Your story starts here</strong>Take your first quiz and your results will show up here.</div>`
    }</section><section class="panel"><h2>Quick tip ✨</h2><div class="tagline">Little by little, a little becomes a lot.</div><p style="font-size:11px;color:#898fa5;line-height:1.7;margin:8px 0 16px">Short practice sessions help you remember more. Pick a topic you enjoy and try one quiz today.</p><button class="btn btn-light btn-small" data-nav="subjects">Find a quiz →</button></section></div>`,
    "home",
  );
}
function studentSubjects() {
  return layout(
    `<h1 class="page-title">All subjects</h1><p class="subtitle">Choose a subject to see its quizzes and keep learning.</p><div class="filters"><input class="search" id="subject-search" placeholder="⌕  Search subjects..."></div><div id="subject-results">${subjectCards()}</div>`,
    "subjects",
  );
}
function quizCards(items, teacher = false) {
  if (!items.length)
    return `<div class="empty"><strong>No quizzes to show</strong>${teacher ? "Create your first quiz to get started." : "Try another subject or check back later."}</div>`;
  return `<div class="quiz-grid">${items.map((q) => `<article class="quiz-card"><div class="subject-head"><span class="subject-icon" style="background:${subject(q.subject).color}">${subject(q.subject).icon}</span><span class="badge ${q.status === "published" ? "green" : "amber"}">${q.status === "published" ? (isAvailable(q) ? "AVAILABLE" : "SCHEDULED") : q.status.toUpperCase()}</span></div><h3>${esc(q.title)}</h3><p>${esc(subject(q.subject).name)} · ${esc(q.description || "Quiz")}</p><div class="quiz-meta"><span>▤ ${q.questions.length} questions</span><span>◷ ${q.duration} min</span>${q.scheduledAt ? `<span>▦ ${fmtDate(q.scheduledAt)}</span>` : ""}</div>${teacher ? `<div style="display:flex;gap:8px"><button class="btn btn-light btn-small" data-edit-quiz="${q.id}" style="flex:1">Edit</button><button class="btn btn-outline btn-small" data-toggle-quiz="${q.id}" style="flex:1">${q.status === "published" ? "Unpublish" : "Publish"}</button></div>` : `<button class="btn ${isAvailable(q) && q.status === "published" ? "btn-primary" : "btn-outline"} btn-small" data-start-quiz="${q.id}" ${!isAvailable(q) || q.status !== "published" ? "disabled" : ""}>${!isAvailable(q) ? "Starts " + fmtDate(q.scheduledAt) : q.status !== "published" ? "Not available" : "Start quiz →"}</button>`}</article>`).join("")}</div>`;
}
function studentQuizzes(subjectKey = null) {
  const qs = getQuizzes().filter(
    (q) =>
      (!subjectKey || q.subject === subjectKey) && q.status === "published",
  );
  return layout(
    `<h1 class="page-title">${subjectKey ? subject(subjectKey).name + " quizzes" : "All quizzes"}</h1><p class="subtitle">Choose a quiz and test what you know. Your score appears as soon as you finish.</p><div class="filters"><select class="select" id="quiz-subject"><option value="">All subjects</option>${SUBJECTS.map((s) => `<option value="${s.key}" ${subjectKey === s.key ? "selected" : ""}>${s.name}</option>`).join("")}</select></div><div id="quiz-list">${quizCards(qs)}</div>`,
    "subjects",
  );
}
function studentResults() {
  const u = current(),
    res = getResults().filter((r) => r.studentId === u.id);
  return layout(
    `<h1 class="page-title">My results</h1><p class="subtitle">Track your quiz attempts and see your progress over time.</p>${res.length ? `<div class="table-wrap"><table><thead><tr><th>Quiz</th><th>Subject</th><th>Score</th><th>Correct</th><th>Date</th></tr></thead><tbody>${res.map((r) => `<tr><td><strong>${esc(r.quizTitle)}</strong></td><td>${esc(subject(r.subject).name)}</td><td><span class="score-bar"><span class="score-fill" style="width:${r.percentage}%"></span></span><strong>${r.percentage}%</strong></td><td>${r.score}/${r.total}</td><td>${fmtDate(r.submittedAt)}</td></tr>`).join("")}</tbody></table></div>` : `<div class="empty"><strong>No results yet</strong>Your completed quizzes and scores will appear here.</div>`}`,
    "results",
  );
}
function teacherHome() {
  const s = subject(current().subject),
    qs = getQuizzes().filter((q) => q.subject === s.key),
    rs = getResults().filter((r) => r.subject === s.key),
    avg = rs.length
      ? Math.round(rs.reduce((a, r) => a + r.percentage, 0) / rs.length)
      : 0;
  return layout(
    `<div class="welcome"><div><h1>Good day, ${esc(current().name)} 👋</h1><p>Manage your ${s.name} quizzes and follow student progress.</p></div><button class="btn btn-primary" data-action="new-quiz">＋ Create quiz</button></div><div class="stats"><div class="stat"><div class="stat-top">Total quizzes <span class="stat-icon" style="background:#efedff">▤</span></div><strong>${qs.length}</strong><small>In your subject</small></div><div class="stat"><div class="stat-top">Published <span class="stat-icon" style="background:#e5f8f1">✓</span></div><strong>${qs.filter((q) => q.status === "published").length}</strong><small>Visible to students</small></div><div class="stat"><div class="stat-top">Student attempts <span class="stat-icon" style="background:#fff2df">✎</span></div><strong>${rs.length}</strong><small>Across your quizzes</small></div><div class="stat"><div class="stat-top">Average score <span class="stat-icon" style="background:#e4f5ff">◷</span></div><strong>${avg}%</strong><small>Across all attempts</small></div></div><div class="section-head"><h2>Your recent quizzes</h2><button class="link-btn" data-nav="quizzes">Manage quizzes →</button></div>${quizCards(qs.slice(0, 3), true)}<div class="section-head" style="margin-top:27px"><h2>Latest student results</h2><button class="link-btn" data-nav="results">View all →</button></div>${resultsTable(rs.slice(0, 5), true)}`,
    "home",
    true,
  );
}
function teacherQuizzes() {
  const s = subject(current().subject),
    qs = getQuizzes().filter((q) => q.subject === s.key);
  return layout(
    `<div class="welcome"><div><h1>My quizzes</h1><p>Create, edit, publish, and schedule ${s.name} quizzes.</p></div><button class="btn btn-primary" data-action="new-quiz">＋ Create quiz</button></div>${quizCards(qs, true)}`,
    "quizzes",
    true,
  );
}
function resultsTable(rs, teacher = false) {
  if (!rs.length)
    return `<div class="empty"><strong>No quiz attempts yet</strong>Results will appear after students submit a quiz.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Student</th><th>Quiz</th><th>Score</th><th>Correct</th><th>Submitted</th></tr></thead><tbody>${rs.map((r) => `<tr><td><div class="student-cell"><span class="avatar">${initials(r.studentName)}</span><strong>${esc(r.studentName)}</strong></div></td><td>${esc(r.quizTitle)}</td><td><span class="score-bar"><span class="score-fill" style="width:${r.percentage}%"></span></span><strong>${r.percentage}%</strong></td><td>${r.score}/${r.total}</td><td>${fmtDate(r.submittedAt)}</td></tr>`).join("")}</tbody></table></div>`;
}
function teacherResults() {
  let rs = getResults().filter((r) => r.subject === current().subject);
  return layout(
    `<h1 class="page-title">Student results</h1><p class="subtitle">Review attempts and scores for ${subject(current().subject).name}.</p><div class="filters"><input class="search" id="result-search" placeholder="⌕  Search student or quiz..."></div><div id="result-list">${resultsTable(rs, true)}</div>`,
    "results",
    true,
  );
}
function login() {
  const app = $("#app");
  app.innerHTML = `<div class="login-wrap"><section class="login-art"><div class="brand"><span class="brand-mark" style="background:#ffffff;color:#6654e8">Q</span><span class="brand-name">quizhub</span></div><div class="login-copy"><h1>Make learning<br>feel like progress.</h1><p>Small quizzes. Clear feedback. A little more confidence every day. Your next step starts right here.</p></div><div class="login-illustration">📚</div><small>© 2026 QuizHub · Learn at your own pace</small></section><section class="login-side"><form id="login-form" class="login-box"><h2>Welcome to QuizHub</h2><p>Sign in to continue learning or teaching.</p><div class="tabs"><button type="button" class="active" data-role-tab="student">Student</button><button type="button" data-role-tab="teacher">Teacher</button></div><input type="hidden" name="role" value="student"><div id="name-field" class="field"><label>Your name</label><input name="name" placeholder="e.g. Aditi Sharma" required></div><div class="field"><label>Email address</label><input name="email" type="email" placeholder="you@example.com" required></div><div class="field"><label>Password</label><input name="password" type="password" placeholder="Enter your password" required minlength="4"></div><div id="subject-field" class="field" style="display:none"><label>Your subject</label><select name="subject">${SUBJECTS.map((s) => `<option value="${s.key}">${s.name}</option>`).join("")}</select></div><button class="btn btn-primary" type="submit">Create account / Sign in →</button><p class="login-note" id="login-hint">New here? Enter your name, email and password to create an account. Use the same details next time to sign in.</p></form></section></div>`;
}
function render() {
  let u = current();
  if (!u) {
    login();
    return;
  }
  if (u.role === "teacher") {
    if (!u.subject) {
      write("quizhub_current", null);
      login();
      return;
    }
    $("#app").innerHTML = teacherHome();
  } else $("#app").innerHTML = studentDashboard();
}
function go(page, arg) {
  if (page === "home") render();
  else if (page === "subjects") $("#app").innerHTML = studentSubjects();
  else if (page === "quizzes") $("#app").innerHTML = teacherQuizzes();
  else if (page === "results")
    $("#app").innerHTML =
      current().role === "teacher" ? teacherResults() : studentResults();
  else if (page === "quiz-list") $("#app").innerHTML = studentQuizzes(arg);
}
let session = null,
  tickHandle = null;
function startQuiz(id) {
  const q = getQuizzes().find((x) => x.id === id);
  if (!q || q.status !== "published" || !isAvailable(q)) {
    toast("This quiz is not available yet.");
    return;
  }
  if (!q.questions.length) {
    toast("This quiz has no questions yet.");
    return;
  }
  session = { quiz: q, index: 0, answers: {}, left: q.duration * 60 };
  renderQuiz();
  tickHandle = setInterval(() => {
    if (!session) return;
    session.left--;
    let el = $("#timer");
    if (el) el.textContent = timerText(session.left);
    if (session.left <= 0) submitQuiz(true);
  }, 1000);
}
function timerText(sec) {
  return `${String(Math.floor(Math.max(sec, 0) / 60)).padStart(2, "0")}:${String(Math.max(sec, 0) % 60).padStart(2, "0")}`;
}
function renderQuiz() {
  const { quiz: q, index: i, answers, left } = session,
    qu = q.questions[i];
  $("#app").innerHTML =
    `<div class="quiz-screen"><div class="quiz-top"><button class="btn btn-outline btn-small" data-action="exit-quiz">← Exit quiz</button><span class="timer">◷ <span id="timer">${timerText(left)}</span></span></div><div class="crumb">${esc(subject(q.subject).name)}　/　${esc(q.title)}</div><div style="display:flex;justify-content:space-between;margin:17px 0 8px;font-size:11px;color:#868ca2"><span>Question ${i + 1} of ${q.questions.length}</span><span>${Math.round(((i + 1) / q.questions.length) * 100)}%</span></div><div class="quiz-progress"><div style="width:${((i + 1) / q.questions.length) * 100}%"></div></div><section class="question-card"><span class="badge">QUESTION ${String(i + 1).padStart(2, "0")}</span><h2>${esc(qu.text)}</h2>${qu.options.map((o, n) => `<div class="option ${answers[qu.id] === n ? "selected" : ""}" data-answer="${n}"><span class="option-key">${String.fromCharCode(65 + n)}</span>${esc(o)}</div>`).join("")}<div class="quiz-footer"><button class="btn btn-outline btn-small" data-action="prev-question" ${i === 0 ? "disabled" : ""}>← Previous</button>${i === q.questions.length - 1 ? '<button class="btn btn-primary" data-action="submit-quiz">Submit quiz ✓</button>' : '<button class="btn btn-primary" data-action="next-question">Next question →</button>'}</div></section><p style="text-align:center;color:#a2a6b7;font-size:10px;margin-top:15px">Your progress is saved while you’re taking this quiz.</p></div>`;
}
function submitQuiz(auto = false) {
  if (!session) return;
  clearInterval(tickHandle);
  const { quiz: q, answers } = session,
    score = q.questions.reduce(
      (n, x) => n + (answers[x.id] === x.answer ? 1 : 0),
      0,
    ),
    r = {
      id: "r" + Date.now(),
      quizId: q.id,
      quizTitle: q.title,
      subject: q.subject,
      studentId: current().id,
      studentName: current().name,
      score,
      total: q.questions.length,
      percentage: Math.round((score / q.questions.length) * 100),
      submittedAt: new Date().toISOString(),
    };
  let rs = getResults();
  rs.unshift(r);
  write("quizhub_results", rs);
  session = null;
  $("#app").innerHTML =
    `<div class="result-card"><div class="result-mark">✓</div><h1>${auto ? "Time is up!" : "Quiz completed!"}</h1><p>${esc(r.quizTitle)} · ${esc(subject(r.subject).name)}</p><div class="result-score">${r.score} / ${r.total}</div><p>You scored <strong style="color:#6654e8">${r.percentage}%</strong>. ${r.percentage >= 80 ? "Excellent work — keep it up!" : r.percentage >= 50 ? "Nice effort — a little more practice will help." : "Good start — try reviewing the topic and give it another go."}</p><div style="display:flex;justify-content:center;gap:9px;margin-top:23px"><button class="btn btn-primary" data-action="go-home">Back to dashboard</button><button class="btn btn-light" data-nav="results">View my results</button></div></div>`;
}
function showModal(content, wide = false) {
  let old = $(".modal-backdrop");
  if (old) old.remove();
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="modal-backdrop"><div class="modal ${wide ? "wide" : ""}">${content}</div></div>`,
  );
}
function closeModal() {
  $(".modal-backdrop")?.remove();
}
function createQuizModal(existingId = null) {
  const s = subject(current().subject),
    old = existingId ? getQuizzes().find((q) => q.id === existingId) : null,
    qs = old?.questions || [
      { id: "new1", text: "", options: ["", "", "", ""], answer: 0 },
    ];
  showModal(
    `<div class="modal-head"><h2>${old ? "Edit quiz" : "Create a quiz"}</h2><button class="close" data-action="close-modal">✕</button></div><form id="quiz-form"><input type="hidden" name="id" value="${old?.id || ""}"><div class="form-grid"><div class="field full"><label>Quiz title</label><input name="title" required maxlength="90" placeholder="e.g. HTML & CSS Fundamentals" value="${esc(old?.title || "")}"></div><div class="field"><label>Subject</label><input value="${esc(s.name)}" disabled><input type="hidden" name="subject" value="${s.key}"></div><div class="field"><label>Time limit (minutes)</label><input name="duration" type="number" min="1" max="180" required value="${old?.duration || 15}"></div><div class="field full"><label>Description</label><input name="description" maxlength="150" placeholder="What will students learn?" value="${esc(old?.description || "")}"></div><div class="field"><label>Publish / schedule</label><select name="status"><option value="published" ${old?.status === "published" ? "selected" : ""}>Publish now</option><option value="draft" ${old?.status === "draft" ? "selected" : ""}>Save as draft</option></select></div><div class="field"><label>Schedule date & time (optional)</label><input name="scheduledAt" type="datetime-local" value="${old?.scheduledAt || ""}"></div></div><div style="display:flex;align-items:center;justify-content:space-between;margin:20px 0 10px"><strong style="font-size:12px">Questions</strong><button type="button" class="btn btn-light btn-small" data-action="add-question">＋ Add question</button></div><div id="question-editor">${qs.map((q, i) => questionEditor(q, i)).join("")}</div><div class="modal-actions"><button type="button" class="btn btn-outline" data-action="close-modal">Cancel</button><button class="btn btn-primary">${old ? "Save changes" : "Save quiz"}</button></div></form>`,
    true,
  );
}
function questionEditor(q, i) {
  return `<div class="question-editor" style="border:1px solid var(--line);padding:13px;border-radius:11px;margin:9px 0"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:9px"><strong style="font-size:10px;color:#777e96">Question ${i + 1}</strong>${i ? `<button type="button" class="link-btn" data-action="remove-question" style="color:#d85c67">Remove</button>` : ""}</div><div class="field"><input class="q-text" required placeholder="Enter your question" value="${esc(q.text)}"></div><div class="form-grid" style="margin-top:9px">${q.options.map((op, n) => `<div class="field"><label>Option ${String.fromCharCode(65 + n)} ${n === q.answer ? "✓ Correct" : ""}</label><input class="q-option" required placeholder="Option ${String.fromCharCode(65 + n)}" value="${esc(op)}"></div>`).join("")}<div class="field"><label>Correct answer</label><select class="q-answer">${q.options.map((_, n) => `<option value="${n}" ${n === q.answer ? "selected" : ""}>Option ${String.fromCharCode(65 + n)}</option>`).join("")}</select></div></div></div>`;
}
function formToQuestions() {
  return $$(".question-editor").map((el, i) => ({
    id: "q" + Date.now() + i,
    text: $(".q-text", el).value.trim(),
    options: $$(".q-option", el).map((x) => x.value.trim()),
    answer: Number($(".q-answer", el).value),
  }));
}
document.addEventListener("click", (e) => {
  const t = e.target.closest("button,.option");
  if (!t) return;
  if (t.dataset.roleTab) {
    const role = t.dataset.roleTab;
    $$("[data-role-tab]").forEach((b) => b.classList.toggle("active", b === t));
    $("#login-form [name=role]").value = role;
    $("#name-field").style.display = role === "student" ? "flex" : "none";
    $("#subject-field").style.display = role === "teacher" ? "flex" : "none";
    $("#login-form [name=name]").required = role === "student";
    $("#login-hint").textContent =
      role === "student"
        ? "New here? Enter your name, email and password to create an account. Use the same details next time to sign in."
        : "Use your subject teacher username and password. For this local demo, credentials are shown below.";
    if (role === "teacher")
      $("#login-hint").textContent =
        "Demo logins: frontend_teacher, java_teacher, networks_teacher, aptitude_teacher, cloud_teacher.";
    return;
  }
  if (t.dataset.nav) {
    go(t.dataset.nav);
    return;
  }
  if (t.dataset.subject) {
    go("quiz-list", t.dataset.subject);
    return;
  }
  if (t.dataset.startQuiz) {
    startQuiz(t.dataset.startQuiz);
    return;
  }
  if (t.dataset.editQuiz) {
    createQuizModal(t.dataset.editQuiz);
    return;
  }
  if (t.dataset.toggleQuiz) {
    let qs = getQuizzes(),
      q = qs.find((x) => x.id === t.dataset.toggleQuiz);
    q.status = q.status === "published" ? "draft" : "published";
    write("quizhub_quizzes", qs);
    toast(`Quiz ${q.status === "published" ? "published" : "unpublished"}.`);
    go("quizzes");
    return;
  }
  if (t.dataset.answer !== undefined) {
    session.answers[session.quiz.questions[session.index].id] = Number(
      t.dataset.answer,
    );
    renderQuiz();
    return;
  }
  if (t.dataset.action === "logout") {
    write("quizhub_current", null);
    render();
    return;
  }
  if (t.dataset.action === "new-quiz") {
    createQuizModal();
    return;
  }
  if (t.dataset.action === "close-modal") {
    closeModal();
    return;
  }
  if (t.dataset.action === "add-question") {
    const ed = $("#question-editor");
    ed.insertAdjacentHTML(
      "beforeend",
      questionEditor(
        { text: "", options: ["", "", "", ""], answer: 0 },
        $$(".question-editor").length,
      ),
    );
    return;
  }
  if (t.dataset.action === "remove-question") {
    t.closest(".question-editor").remove();
    $$(".question-editor").forEach(
      (el, i) =>
        ($(".question-editor strong", el).textContent = `Question ${i + 1}`),
    );
    return;
  }
  if (t.dataset.action === "next-question") {
    session.index++;
    renderQuiz();
    return;
  }
  if (t.dataset.action === "prev-question") {
    session.index--;
    renderQuiz();
    return;
  }
  if (t.dataset.action === "submit-quiz") {
    submitQuiz();
    return;
  }
  if (t.dataset.action === "exit-quiz") {
    if (confirm("Exit this quiz? Your answers will not be submitted.")) {
      clearInterval(tickHandle);
      session = null;
      render();
    }
    return;
  }
  if (t.dataset.action === "go-home") {
    render();
    return;
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "login-form") {
    e.preventDefault();
    const fd = new FormData(e.target),
      role = fd.get("role"),
      email = String(fd.get("email")).trim().toLowerCase(),
      password = String(fd.get("password")),
      users = getUsers();
    if (role === "teacher") {
      const uname = email.split("@")[0],
        s = SUBJECTS.find((x) => x.teacher === uname);
      if (!s || password !== "teacher123") {
        toast("Use a valid subject teacher username and password.");
        return;
      }
      const u = {
        id: "teacher-" + s.key,
        role: "teacher",
        name: s.teacher,
        subject: s.key,
      };
      write("quizhub_current", u);
      render();
      return;
    }
    const name = String(fd.get("name")).trim();
    let user = users.find((x) => x.email === email);
    if (user) {
      if (user.password !== password) {
        toast("Incorrect password for this email.");
        return;
      }
    } else {
      user = { id: "stu" + Date.now(), name, email, password, role: "student" };
      users.push(user);
      write("quizhub_users", users);
    }
    write("quizhub_current", user);
    render();
    return;
  }
  if (e.target.id === "quiz-form") {
    e.preventDefault();
    const fd = new FormData(e.target),
      qs = formToQuestions();
    if (!qs.length) {
      toast("Add at least one question.");
      return;
    }
    if (qs.some((q) => q.options.some((x) => !x) || !q.text)) {
      toast("Complete every question and its options.");
      return;
    }
    const quizzes = getQuizzes(),
      id = fd.get("id") || "quiz" + Date.now(),
      old = quizzes.find((q) => q.id === id),
      scheduled = fd.get("scheduledAt");
    const q = {
      id,
      subject: current().subject,
      title: fd.get("title").trim(),
      description: fd.get("description").trim(),
      duration: Number(fd.get("duration")),
      questions: qs,
      status: fd.get("status"),
      scheduledAt: scheduled ? new Date(scheduled).toISOString() : "",
      createdAt: old?.createdAt || new Date().toISOString(),
    };
    if (old) Object.assign(old, q);
    else quizzes.unshift(q);
    write("quizhub_quizzes", quizzes);
    closeModal();
    toast(old ? "Quiz updated." : "Quiz saved.");
    go("quizzes");
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "subject-search") {
    $("#subject-results").innerHTML = subjectCards(e.target.value);
    return;
  }
  if (e.target.id === "result-search") {
    let term = e.target.value.toLowerCase(),
      rs = getResults().filter(
        (r) =>
          r.subject === current().subject &&
          `${r.studentName} ${r.quizTitle}`.toLowerCase().includes(term),
      );
    $("#result-list").innerHTML = resultsTable(rs, true);
  }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "quiz-subject") {
    $("#quiz-list").innerHTML = quizCards(
      getQuizzes().filter(
        (q) =>
          (!e.target.value || q.subject === e.target.value) &&
          q.status === "published",
      ),
    );
  }
});
render();
