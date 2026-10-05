/* Portfolio V2 — vanilla port of the approved design's renderVals() logic. */
(function () {
  'use strict';

  /* ── Translations ──────────────────────────────────────────────
     FR is the copy in index.html (read from the DOM at start-up);
     EN mirrors it key by key. Values may contain inline markup. */
  var EN = {
    'meta.description': 'Mohamed Amine Mrabet, Data & AI Engineer with a Master’s degree in Artificial Intelligence (EPITA, highest honors). I industrialize cloud pipelines, Machine Learning and LLM-based systems for Stellantis, Carrefour, Leasys and Dalkia.',

    'nav.home': 'Home — Mohamed Amine Mrabet',
    'nav.label': 'Main navigation',
    'nav.xp': 'Experience',
    'nav.projects': 'Projects',
    'nav.stack': 'Skills',
    'nav.path': 'Background',
    'nav.lang': 'Language',
    'nav.theme': 'Change theme',
    'nav.cv': 'Download the CV',
    'nav.menu': 'Open the menu',

    'hero.alt': 'Portrait of Mohamed Amine Mrabet',
    'hero.hello': 'Hi, I’m',
    'hero.h1': 'I build data pipelines and AI agents <span class="grad">that hold up in production.</span>',
    'hero.lead': 'Data &amp; AI Engineer with a Master’s degree in Artificial Intelligence (EPITA, highest honors). I industrialize cloud pipelines, Machine Learning and LLM-based systems for groups such as Stellantis, Carrefour, Leasys and Dalkia.',
    'hero.cta1': 'See my projects',
    'hero.cta2': 'Contact me',

    'impact.label': 'Key figures',
    'impact.title': 'Measured impact',
    'impact.m1n': '−85%',
    'impact.m1': 'memory for the sales forecasting API (20 GB → 3 GB)',
    'impact.m2': 'startup time after migrating to Cloud Run',
    'impact.m3': 'automated tests and 13 quality gates for an AI DevOps agent',
    'impact.m4': 'countries × AWS Glue jobs orchestrated in a single workflow',
    'facts.master': 'AI Master’s — EPITA',
    'facts.masterv': 'Highest honors · 2025',
    'facts.lang': 'Languages',
    'facts.langv': 'French · English · Arabic',

    'clients.title': 'They trusted me',
    'clients.edf': 'EDF Group',

    'xp.eyebrow': '01 — Experience',
    'xp.h2': 'From notebook to production, <span class="grad">for real clients.</span>',
    'xp.intro': 'Data engineering, MLOps and AI agents, in consulting as well as in large corporations. Click + to see the details of each experience.',

    'xp0.date': 'Jan. 2026 — Present',
    'xp0.sum': 'Design and deployment of data pipelines and AI solutions for several clients, from serverless architecture on AWS to autonomous agents.',
    'xp0.m1.head': 'AI agent',
    'xp0.m1.title': 'Autonomous DevOps agent',
    'xp0.m1.desc': 'A labeled Jira ticket triggers a containerized agent that fixes the defect, runs the tests and opens a Pull Request. Merging stays human. Policy engine, audit log and sandboxed execution.',
    'xp0.m1.kpi': '560 tests · 13 quality gates · 100% Terraform',
    'xp0.m2.title': 'Used-vehicle photo lifecycle',
    'xp0.m2.desc': 'Archiving and deletion via S3 Batch Operations, multi-country Glue workflow and CI/CD deployment. RDS queries brought down from several minutes to a few seconds.',
    'xp0.m2.kpi': '15 countries × 4 jobs · keyset pagination',
    'xp0.m3.title': 'Data pipeline &amp; visualization',
    'xp0.m3.desc': 'End-to-end pipeline from ingestion to cleaning, feature engineering and key indicator tracking on Amazon QuickSight.',
    'xp0.m3.kpi': 'Ingestion → cleaning → KPI',
    'xp0.m4.title': 'LLM-assisted debt collection',
    'xp0.m4.desc': 'Classification of incoming emails, summary of the customer request and suggested automated actions to speed up debt collection.',
    'xp0.m4.kpi': 'Classify → summarize → act',
    'xp0.aria': 'Show IT-PEAC 2026 details',

    'xp1.date': 'Mar. 2025 — Sept. 2025',
    'xp1.sum': 'Overhaul of the machine learning API forecasting promotional sales: migration from a monolith to microservices on Google Cloud Run.',
    'xp1.result': '20 GB → 3 GB of RAM · startup 8 min → 8 s',
    'xp1.c1': 'Automated ingestion and transformation pipelines with dbt and Airflow',
    'xp1.c2': 'Model performance analysis in BigQuery',
    'xp1.c3': 'Looker Studio dashboards to track metrics and sales trends',
    'xp1.aria': 'Show Carrefour details',

    'xp2.date': 'Aug. 2023 — Jan. 2024',
    'xp2.loc': 'Sousse, Tunisia',
    'xp2.sum': 'Vehicle price prediction system for Stellantis (Random Forest, XGBoost), deployed on AWS in a containerized architecture, with the CEO as mentor.',
    'xp2.result': 'Average error brought down to ±€1,000',
    'xp2.c1': 'Automated pipeline for data collection, preparation and model training',
    'xp2.c2': 'Real-time predictions for pricing dashboards',
    'xp2.c3': 'Exploratory analyses and performance tracking in Amazon QuickSight',
    'xp2.aria': 'Show IT-PEAC 2023 details',

    'xp3.date': 'Aug. 2022 — Sept. 2022',
    'xp3.loc': 'Tunis, Tunisia',
    'xp3.sum': 'Analysis and visualization of sales data for the sales department: specifications, a Python web dashboard and a dynamic Power BI dashboard.',
    'xp3.aria': 'Show A.M.A Group details',

    'pj.eyebrow': '02 — Projects',
    'pj.h2': 'Projects carried through <span class="grad">to deployment.</span>',
    'pj.intro': 'One flagship project, then a selection you can filter by domain. Each card leads to the source code.',
    'feat.badge': 'Flagship project',
    'feat.desc': 'A conversational BI platform: import a CSV, an Excel file or a SQL database, and ask your questions in natural language. The agent cleans, models, writes the SQL, generates the dashboards and writes the report.',
    'feat.c1': 'One-click data quality checks and cleaning',
    'feat.c2': 'Suggested star schema, React Flow visual modeler',
    'feat.c3': 'Plan → Execution → Verification agent with persistent sessions',
    'feat.c4': 'Automatically generated Plotly dashboards and executive reports',
    'feat.demo': 'View the demo',
    'feat.code': 'Source code',
    'win.title': 'bi-agent · new analysis',
    'win.bubble': 'Show the sales trend by region over the year',
    'win.exec': 'Execution',
    'win.verif': 'Verification',
    'win.code': '<b>SELECT</b> region, month, <b>SUM</b>(sales)\n<b>FROM</b> sales\n<b>GROUP BY</b> region, month;',
    'win.chart': 'Sales by region — sample data',
    'pj.filters': 'Filter projects',
    'filter.all': 'All <span>10</span>',
    'filter.gen': 'Generative AI <span>1</span>',

    'p1.cat': 'Vision · Final-year project',
    'p1.badge': 'Best project of the year',
    'p1.title': 'Facial recognition for attendance tracking',
    'p1.desc': 'Image collection through a Flask app, GAN-based augmentation and a transfer-learning CNN to mark attendance automatically.',
    'p2.title': 'End-to-end ML pipeline',
    'p2.desc': 'PostgreSQL storage, Airflow orchestration, Great Expectations validation, FastAPI API and Grafana monitoring.',
    'p3.title': 'Customer behavior and explainability',
    'p3.desc': 'Segmentation, trend prediction and SHAP explanations, with an XGBoost model tracked in MLflow.',
    'p4.title': 'Multi-tower recommendation system',
    'p4.desc': 'Specialized user, item and context towers with embeddings, compared with classic recommendation models.',
    'p5.cat': 'Generative AI',
    'p5.desc': 'Music generated from text with MusicGen, diffusion-based animations, playlists, sharing and multilingual translation.',
    'p6.title': 'Assistant for visually impaired people',
    'p6.desc': 'Description of the surroundings, real-time obstacle detection and a voice assistant to gain independence.',
    'p7.title': 'Real estate price prediction',
    'p7.desc': 'Exploratory analysis, feature engineering, XGBoost tuned with cross-validation and a real-time prediction pipeline.',
    'p8.title': 'Emotion classification',
    'p8.desc': 'LSTM and GRU networks on word embeddings to identify emotions in different types of text.',
    'p9.title': 'Intruder detection',
    'p9.desc': 'HaarCascade face detection, TensorFlow recognition and an automatic alert when an unauthorized person is detected.',
    'p10.title': 'Siamese facial recognition',
    'p10.desc': 'Siamese network trained with metric learning to compare and validate detected faces.',

    'st.eyebrow': '03 — Skills',
    'st.h2': 'The tools I use <span class="grad">every day.</span>',
    'st.intro': 'Grouped by use rather than as an exhaustive list, so it reads in ten seconds.',
    'st.c1': 'Ingestion, transformation, orchestration and quality.',
    'st.h2t': 'AI &amp; LLM',
    'st.c2': 'From classic models to secure autonomous agents.',
    'st.agents': 'AI agents',
    'st.c3': 'Infrastructure as code, containers and CI/CD.',
    'st.c4': 'Decision-making dashboards and model APIs.',

    'pc.eyebrow': '04 — Background',
    'pc.h2': 'Education, certifications <span class="grad">and the rest.</span>',
    'pc.intro': 'Applied mathematics, then artificial intelligence, complemented by cloud, data and Microsoft certifications.',
    'pc.edu': 'Education',
    'pc.e1': 'Master of Science — Artificial Intelligence',
    'pc.e1b': 'Highest honors',
    'pc.e2': 'Bachelor’s in Applied Mathematics — Data Analysis &amp; Decision Support',
    'pc.e2b': 'Excellent honors',
    'pc.beyond': 'Beyond code',
    'pc.mad': 'Head of the Hard-Skills department, Club MAD<span>2020 — 2023</span>',
    'pc.basket': 'Player, then assistant coach, Ksar Hlel Mini-Basket School<span>2013 — 2023</span>',
    'pc.langs': 'Languages',
    'pc.l1': 'French · English<span>Professional proficiency</span>',
    'pc.l2': 'Arabic<span>Native language</span>',
    'cert.view': 'View',
    'cert.aws': 'View the AI Model Deployment on AWS certificate',
    'cert.pbi': 'View the Power BI certificate',
    'cert.dl': 'View the Deep Learning with TensorFlow and Keras certificate',
    'cert.mct': 'View the Microsoft Certified Trainer certificate',
    'cert.ibm': 'View the Databases and SQL for Data Science certificate',

    'ct.h2': 'A data or AI project in mind? <span class="grad">Let’s talk.</span>',
    'ct.made': 'Made with passion in Paris',
    'ct.top': 'Back to top ↑',

    /* Mission details dialog */
    'case.dalkia.meta': 'Dalkia — EDF · Jul. 2026 — Present',
    'case.dalkia.ctx': 'As part of a debt collection management application, set up a processing chain to centralize and structure all email exchanges with customers, rebuild the conversation history and help account managers analyze and handle requests.',
    'case.dalkia.d1': 'Designed and orchestrated automated pipelines with Apache Airflow covering the retrieval, processing and enrichment of emails from the inbox.',
    'case.dalkia.d2': 'Set up email classification and matching mechanisms to rebuild the different conversations and the history of exchanges.',
    'case.dalkia.d3': 'Linked spontaneously received emails, with no direct link to an existing reminder email, to the relevant collection scope.',
    'case.dalkia.d4': 'Identified and associated each email with the customer, the portfolio and the related business elements, so that account managers can find every exchange from their own work scope.',
    'case.dalkia.d5': 'Built a consolidated communication matrix per customer and portfolio, grouping exchanges and their history to make collection follow-up easier.',
    'case.dalkia.d6': 'Set up an email content analysis chain to extract the context, the nature of the request and its priority level.',
    'case.dalkia.d7': 'Studied and experimented with several LLMs running in a dedicated local environment, separate from the business application and without relying on a managed LLM service.',
    'case.dalkia.d8': 'Evaluated different models to find the best trade-off between comprehension quality, performance and operating constraints.',
    'case.dalkia.d9': 'Used the LLM to automatically suggest the business actions to take based on the email content, for example:',
    'case.dalkia.d9.1': 'forwarding to accounting',
    'case.dalkia.d9.2': 'detecting an urgent request',
    'case.dalkia.d9.3': 'resending an account statement',
    'case.dalkia.d9.4': 'routing to the right business process',
    'case.dalkia.d10': 'Integrated the AI analysis results into the processing workflow to help account managers qualify and handle requests.',
    'case.dalkia.i1': 'Centralize the history of collection-related communications and make it reliable.',
    'case.dalkia.i2': 'Enable each account manager to quickly find every exchange linked to their portfolio and customers.',
    'case.dalkia.i3': 'Reduce the time needed to qualify emails manually.',
    'case.dalkia.i4': 'Make requests easier to prioritize and route thanks to automated content analysis.',
    'case.dalkia.i5': 'Prepare the industrialization of AI assistance while keeping control over hosting and data.',
    'case.dalkia.env9': 'email processing',
    'case.dalkia.env10': 'pipeline orchestration',
    'case.dalkia.open': 'See details of the Dalkia mission',
    'case.stellantis.meta': 'Stellantis · May 2026 — June 2026',
    'case.stellantis.role': 'AWS Data Engineering · IT-PEAC',
    'case.stellantis.ctx': 'With a large volume of used-vehicle photos stored on AWS S3, set up a data chain to identify the objects to keep, archive or delete, make the tracking of their status reliable and optimize storage costs.',
    'case.stellantis.d1': 'Set up and operated S3 Inventory to get an exhaustive view of the stored objects and their metadata.',
    'case.stellantis.d2': 'Retrieved the S3 inventories in Parquet format and queried them with AWS Glue / Athena to analyze photo volumes and statuses.',
    'case.stellantis.d3': 'Automated the generation of S3 Batch Operations manifests from the consolidated data.',
    'case.stellantis.d4': 'Industrialized archiving, tagging and deletion operations via S3 Batch Operations / PutObjectTagging.',
    'case.stellantis.d5': 'Set up reconciliation mechanisms between S3 Inventory, the AWS jobs and the database to check that operations ran correctly.',
    'case.stellantis.d6': 'Orchestrated a multi-country AWS Glue workflow covering 15 countries × 4 jobs, with conditional triggers and concurrent run management.',
    'case.stellantis.d7': 'Automated the deployment of workflows and jobs via Bitbucket Pipelines / CI/CD.',
    'case.stellantis.open': 'See details of the Stellantis mission',
    'case.leasys.meta': 'Leasys · Apr. 2026 — May 2026',
    'case.leasys.ctx': 'Set up a reporting solution to improve the operational management of order processing and give senior management a consolidated view of performance indicators and of the risks related to order tracking.',
    'case.leasys.d1': 'Designed and implemented the data preparation jobs needed to feed the business reports.',
    'case.leasys.d2': 'Cleaned, transformed and prepared the data used to compute operational and decision-making indicators.',
    'case.leasys.d3': 'Worked with business and technical teams to translate management needs into usable indicators and reports.',
    'case.leasys.d4': 'Contributed to the design of Amazon QuickSight dashboards enabling:',
    'case.leasys.d4.1': 'tracking of activity and operational performance',
    'case.leasys.d4.2': 'identification of orders requiring particular attention',
    'case.leasys.d4.3': 'tracking of risk indicators',
    'case.leasys.d4.4': 'a consolidated view for steering and executive reporting',
    'case.leasys.d5': 'Set up an industrialization and deployment chain for reporting components across environments, integrated into the Bitbucket pipelines.',
    'case.leasys.d6': 'Took part in automating the deployment and configuration of QuickSight resources to make promotions between environments more reliable.',
    'case.leasys.d7': 'Worked with development teams to embed QuickSight dashboards directly into business applications.',
    'case.leasys.i1': 'Operational indicators centralized in consistent reporting.',
    'case.leasys.i2': 'Better visibility on order processing and tracking.',
    'case.leasys.i3': 'Steering indicators suited to operational teams as well as to management.',
    'case.leasys.i4': 'More reliable, automated deployment of reports across environments.',
    'case.leasys.open': 'See details of the Leasys mission',
    'case.carrefour.meta': 'Carrefour · Mar. 2025 — Sept. 2025',
    'case.carrefour.title': 'Overhaul of the ML API predicting promotional sales',
    'case.carrefour.ctx': 'Overhaul of the machine learning API predicting promotional sales: migration from a monolithic architecture to a microservices architecture on Google Cloud Run.',
    'case.carrefour.d1': 'Set up automated data pipelines to ingest sales and promotions data.',
    'case.carrefour.d2': 'Transformed data with dbt and Apache Airflow, and analyzed model performance in BigQuery.',
    'case.carrefour.d3': 'Helped build interactive Looker Studio dashboards to track key metrics and sales trends.',
    'case.carrefour.d4': 'Set up load testing with Locust and API documentation with Swagger.',
    'case.carrefour.open': 'See details of the Carrefour mission',
    'case.more': 'See details',
    'case.ctx': 'Context',
    'case.done': 'Achievements',
    'case.result': 'Result',
    'case.env': 'Tech environment',

    'modal.close': 'Close'
  };

  var MORE = {
    fr: function (more, hidden) {
      return more ? 'Afficher moins' : 'Afficher ' + hidden + ' projet' + (hidden > 1 ? 's' : '') + ' de plus';
    },
    en: function (more, hidden) {
      return more ? 'Show less' : 'Show ' + hidden + ' more project' + (hidden > 1 ? 's' : '');
    }
  };

  /* Each translatable target remembers its French original. */
  var I18N = [
    { attr: 'data-i18n', get: function (el) { return el.innerHTML; }, set: function (el, v) { el.innerHTML = v; } },
    { attr: 'data-i18n-aria', get: function (el) { return el.getAttribute('aria-label'); }, set: function (el, v) { el.setAttribute('aria-label', v); } },
    { attr: 'data-i18n-alt', get: function (el) { return el.getAttribute('alt'); }, set: function (el, v) { el.setAttribute('alt', v); } },
    { attr: 'data-i18n-content', get: function (el) { return el.getAttribute('content'); }, set: function (el, v) { el.setAttribute('content', v); } }
  ];
  var targets = [];
  I18N.forEach(function (kind) {
    document.querySelectorAll('[' + kind.attr + ']').forEach(function (el) {
      targets.push({ el: el, key: el.getAttribute(kind.attr), fr: kind.get(el), set: kind.set });
    });
  });

  function storageGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }

  /* ── State (mirrors renderVals) ── */
  var root = document.getElementById('top');
  var dialogs = Array.prototype.slice.call(document.querySelectorAll('.modal'));
  var state = {
    theme: root.classList.contains('theme-light') ? 'light' : 'dark',
    lang: storageGet('pf-lang') === 'en' ? 'en' : 'fr',
    open: 0,
    filter: 'all',
    more: false
  };

  var xpButtons = document.querySelectorAll('[data-xp]');
  var filterButtons = document.querySelectorAll('.filters [data-filter]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.pcard'));
  var moreWrap = document.getElementById('more-wrap');
  var moreBtn = document.getElementById('more-btn');

  function render() {
    /* Theme */
    ['dark', 'light'].forEach(function (t) {
      root.classList.toggle('theme-' + t, state.theme === t);
      dialogs.forEach(function (d) { d.classList.toggle('theme-' + t, state.theme === t); });
    });

    /* Language */
    document.documentElement.lang = state.lang;
    document.querySelectorAll('.seg [data-lang]').forEach(function (b) {
      var on = b.getAttribute('data-lang') === state.lang;
      b.className = on ? 'on' : '';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    targets.forEach(function (t) {
      var v = state.lang === 'en' && EN[t.key] !== undefined ? EN[t.key] : t.fr;
      t.set(t.el, v);
    });

    /* Experience accordion */
    xpButtons.forEach(function (btn) {
      var i = Number(btn.getAttribute('data-xp'));
      var open = state.open === i;
      document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.querySelector('[data-icon="open"]').toggleAttribute('hidden', !open);
      btn.querySelector('[data-icon="closed"]').toggleAttribute('hidden', open);
    });

    /* Filters, counts from the data */
    filterButtons.forEach(function (btn) {
      var k = btn.getAttribute('data-filter');
      var on = k === state.filter;
      btn.className = on ? 'on' : '';
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.querySelector('span').textContent = String(k === 'all' ? cards.length : cards.filter(function (c) {
        return c.getAttribute('data-filter') === k;
      }).length);
    });

    /* Cards + "more" button */
    var matched = cards.filter(function (c) { return state.filter === 'all' || c.getAttribute('data-filter') === state.filter; });
    var visible = state.more ? matched : matched.filter(function (c) { return c.getAttribute('data-extra') !== 'true'; });
    cards.forEach(function (c) { c.hidden = visible.indexOf(c) === -1; });
    var hidden = matched.length - visible.length;
    moreWrap.hidden = !(state.more || hidden > 0);
    moreBtn.textContent = MORE[state.lang](state.more, hidden);
    moreBtn.setAttribute('aria-expanded', state.more ? 'true' : 'false');
  }

  function setState(patch) {
    for (var k in patch) state[k] = patch[k];
    render();
  }

  /* ── Events ── */
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var theme = state.theme === 'dark' ? 'light' : 'dark';
    storageSet('pf-theme', theme);
    setState({ theme: theme });
  });

  document.querySelectorAll('.seg [data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      storageSet('pf-lang', lang);
      setState({ lang: lang });
    });
  });

  xpButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var i = Number(btn.getAttribute('data-xp'));
      setState({ open: state.open === i ? -1 : i });
    });
  });

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { setState({ filter: btn.getAttribute('data-filter') }); });
  });

  moreBtn.addEventListener('click', function () { setState({ more: !state.more }); });

  /* Mobile menu */
  var menuBtn = document.getElementById('nav-menu');
  var panel = document.getElementById('nav-panel');
  function setMenu(open, focusBack) {
    panel.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open && focusBack) menuBtn.focus();
  }
  menuBtn.addEventListener('click', function () { setMenu(panel.hidden); });
  panel.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('click', function (e) {
    if (!panel.hidden && !panel.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
  });

  /* Dialogs: certificate PDF + mission details */
  var openDialog = null;
  var lastTrigger = null;

  function closeButton(d) { return d.querySelector('button[data-close]'); }
  function focusables(d) {
    return Array.prototype.filter.call(d.querySelectorAll('button, iframe, [tabindex="0"]'), function (el) {
      return !el.closest('[hidden]');
    });
  }
  function showDialog(d, trigger) {
    lastTrigger = trigger;
    openDialog = d;
    d.hidden = false;
    document.body.classList.add('modal-open');
    closeButton(d).focus();
  }
  function closeDialog() {
    if (!openDialog) return;
    var d = openDialog;
    openDialog = null;
    d.hidden = true;
    if (d.id === 'cert-modal') frame.src = 'about:blank';
    document.body.classList.remove('modal-open');
    if (lastTrigger) lastTrigger.focus();
    lastTrigger = null;
  }
  dialogs.forEach(function (d) {
    d.querySelectorAll('[data-close]').forEach(function (el) { el.addEventListener('click', closeDialog); });
    /* Cycle Tab / Shift+Tab inside the open dialog. */
    d.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var items = focusables(d);
      var i = items.indexOf(document.activeElement);
      e.preventDefault();
      items[(i + (e.shiftKey ? items.length - 1 : 1)) % items.length].focus();
    });
  });
  /* Keep focus inside the dialog while it is open. */
  document.addEventListener('focusin', function (e) {
    if (openDialog && !openDialog.contains(e.target)) closeButton(openDialog).focus();
  });

  /* Certificate PDF */
  var certModal = document.getElementById('cert-modal');
  var frame = document.getElementById('cert-modal-frame');
  var certTitle = document.getElementById('cert-modal-title');
  document.querySelectorAll('.cert-view[data-pdf]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var name = btn.closest('.cert').querySelector('b').textContent;
      certTitle.textContent = name;
      frame.title = name;
      frame.src = btn.getAttribute('data-pdf');
      showDialog(certModal, btn);
    });
  });

  /* Mission details */
  var caseModal = document.getElementById('case-modal');
  var caseBox = caseModal.querySelector('[role="dialog"]');
  var caseScroll = caseModal.querySelector('.modal-scroll');
  document.querySelectorAll('.mcard-more[data-case]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-case');
      caseModal.querySelectorAll('.case').forEach(function (a) { a.hidden = a.id !== id; });
      caseBox.setAttribute('aria-labelledby', id + '-title');
      showDialog(caseModal, btn);
      caseScroll.scrollTop = 0;
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (openDialog) closeDialog();
    else if (!panel.hidden) setMenu(false, true);
  });

  render();
})();
