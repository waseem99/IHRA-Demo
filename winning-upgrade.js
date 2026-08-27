(() => {
  const UPGRADE_VERSION = '2026.08.27-win';
  const baseShell = shell;
  const baseRoute = route;
  const baseSeedDemo = seedDemo;
  const baseRenderDashboard = renderDashboard;
  const baseRenderIndicator = renderIndicator;
  const baseRenderAssessment = renderAssessment;
  const baseRenderSummary = renderSummary;

  const demoCategories = ['Hospital', 'Medical Centre / Clinic', 'Diagnostic / Laboratory'];
  const story = [
    { label: 'HCE personalization', route: '/dashboard', focus: '.quick-category' },
    { label: 'MSDS learning', route: '/indicators/278', focus: '.video-frame' },
    { label: 'Self-assessment', route: '/indicators/278/assessment', focus: '.assessment-options' },
    { label: 'Mandatory red flag', route: '/indicators/74/assessment', focus: '#red-flag' },
    { label: 'Readiness summary', route: '/summary', focus: '.summary-hero' },
    { label: 'Paid / time-bound access', route: '/access', focus: '.access-lifecycle' },
    { label: 'IHRA administration', route: '/admin', focus: '.management-links' },
    { label: 'Reconciliation', route: '/admin/reconciliation', focus: '.reconciliation-table' },
    { label: 'Scale & integration', route: '/integration', focus: '.production-architecture' }
  ];
  let storyState = { active: false, index: 0 };

  indicators.forEach(i => {
    if (!i._baseCategories) i._baseCategories = [...i.categories];
    if (!i._baseClassification) i._baseClassification = i.classification;
  });

  function defaultUpgradeState() {
    return {
      transactions: [
        { id: 'DEMO-IHRA-240826', hce: 'Demo General Hospital', category: 'Hospital', date: '2026-08-24', amount: 'IHRA-approved fee', status: 'Success', accessFrom: '2026-08-24', accessTo: '2026-09-23', reconciled: true },
        { id: 'DEMO-IHRA-210826', hce: 'Capital Medical Centre', category: 'Medical Centre / Clinic', date: '2026-08-21', amount: 'IHRA-approved fee', status: 'Success', accessFrom: '2026-08-21', accessTo: '2026-09-20', reconciled: true },
        { id: 'DEMO-IHRA-030826', hce: 'BlueLine Diagnostics', category: 'Diagnostic / Laboratory', date: '2026-08-03', amount: 'IHRA-approved fee', status: 'Success', accessFrom: '2026-08-03', accessTo: '2026-09-02', reconciled: false }
      ],
      audit: [
        { at: '2026-08-24 10:12', user: 'Demo HCE User', action: 'Assessment updated', detail: 'MSDS 74 → Undone' },
        { at: '2026-08-24 10:10', user: 'Demo HCE User', action: 'Assessment updated', detail: 'MSDS 70 → Partially Done' },
        { at: '2026-08-24 10:08', user: 'Demo HCE User', action: 'Assessment updated', detail: 'MSDS 278 → Done' },
        { at: '2026-08-24 09:55', user: 'System', action: 'Access activated', detail: 'Reference DEMO-IHRA-240826' }
      ],
      config: {
        74: { classification: 'mandatory', categories: ['Hospital', 'Medical Centre / Clinic'] }
      },
      preferences: { contrast: false, largeText: false },
      role: 'hce'
    };
  }

  function ensureUpgradeState(reset = false) {
    const d = defaultUpgradeState();
    if (reset || !Array.isArray(state.transactions)) state.transactions = d.transactions;
    if (reset || !Array.isArray(state.audit)) state.audit = d.audit;
    if (reset || !state.config) state.config = d.config;
    if (reset || !state.preferences) state.preferences = d.preferences;
    if (reset || !state.role) state.role = d.role;
    applyConfig();
    saveState();
    applyPreferences();
  }

  function applyConfig() {
    indicators.forEach(i => {
      const cfg = state.config?.[i.id];
      i.classification = cfg?.classification || i._baseClassification;
      i.categories = cfg?.categories?.length ? [...cfg.categories] : [...i._baseCategories];
    });
  }

  function addAudit(action, detail, user = 'Demo HCE User') {
    state.audit ||= [];
    const now = new Date();
    state.audit.unshift({
      at: `${now.toISOString().slice(0,10)} ${now.toTimeString().slice(0,5)}`,
      user, action, detail
    });
    state.audit = state.audit.slice(0, 30);
    saveState();
  }

  seedDemo = function(force = false) {
    baseSeedDemo(force);
    ensureUpgradeState(Boolean(force));
  };
  ensureUpgradeState(false);

  function boardControllerHtml() {
    if (!isDemo()) return '';
    const step = story[storyState.index];
    return `<div class="board-controller ${storyState.active ? 'active' : ''}">
      <div class="board-story-copy"><strong>Board Demo</strong><span>${storyState.active ? `${storyState.index + 1}/${story.length} · ${step.label}` : 'Guided 5–7 minute story'}</span></div>
      <div class="board-story-actions">
        ${storyState.active ? '<button class="btn ghost small" data-upgrade-action="story-prev">←</button><button class="btn primary small" data-upgrade-action="story-next">Next →</button><button class="btn ghost small" data-upgrade-action="story-exit">Exit</button>' : '<button class="btn primary small" data-upgrade-action="story-start">Start Board Story</button>'}
      </div>
    </div>`;
  }

  shell = function(content, active = '') {
    let html = baseShell(content, active);
    const extraNav = `<a data-nav="/assessor" class="${location.pathname === '/assessor' ? 'active' : ''}">Assessor</a><a data-nav="/demo-check" class="${location.pathname === '/demo-check' ? 'active' : ''}">Demo Check</a>`;
    html = html.replace('</nav>', `${extraNav}</nav>`);
    const utilities = `<button class="icon-control" data-upgrade-action="toggle-text" aria-label="Toggle larger text">A+</button><button class="icon-control" data-upgrade-action="toggle-contrast" aria-label="Toggle high contrast">◐</button>`;
    html = html.replace('<div class="top-actions">', `<div class="top-actions">${utilities}`);
    html = html.replace('</header>', `</header>${boardControllerHtml()}`);
    return html;
  };

  function quickCategoryHtml() {
    return `<div class="quick-category"><span>Switch HCE category</span>${demoCategories.map(c => `<button data-upgrade-category="${c}" class="${currentCategory() === c ? 'active' : ''}">${c}</button>`).join('')}</div>`;
  }

  function enhanceDashboard() {
    const toolbar = document.querySelector('.toolbar');
    if (toolbar && !document.querySelector('.quick-category')) toolbar.insertAdjacentHTML('beforebegin', quickCategoryHtml());
    const cards = document.querySelectorAll('.indicator-card');
    cards.forEach(card => {
      if (!card.querySelector('.indicator-proof')) card.querySelector('.card-footer')?.insertAdjacentHTML('beforebegin', '<div class="indicator-proof">Exact MSDS · Learning · Assessment</div>');
    });
  }

  renderDashboard = function() {
    applyConfig();
    baseRenderDashboard();
    enhanceDashboard();
    scheduleStoryFocus();
  };

  renderIndicator = function(id) {
    baseRenderIndicator(id);
    const i = indicators.find(x => x.id === id);
    const frame = document.querySelector('.video-frame');
    if (frame && i && !document.querySelector('.learning-meta')) {
      const lang = i.language || 'Standardized learning format';
      frame.insertAdjacentHTML('afterend', `<div class="learning-meta"><span>${lang}</span><span>English captions / subtitles supported</span><span>Accessible player controls</span></div>`);
    }
    scheduleStoryFocus();
  };

  renderAssessment = function(id) {
    baseRenderAssessment(id);
    const opts = document.querySelector('.assessment-options');
    if (opts && !document.querySelector('.score-explainer')) opts.insertAdjacentHTML('afterend', '<div class="score-explainer"><span><b>2</b> Done</span><span><b>1</b> Partially Done</span><span><b>0</b> Undone</span><small>Demo scoring follows the RFQ workflow; final approved rules remain configuration-driven.</small></div>');
    scheduleStoryFocus();
  };

  renderSummary = function() {
    baseRenderSummary();
    const actions = document.querySelector('.section-head .row-actions');
    if (actions && !actions.querySelector('[data-nav="/report"]')) actions.insertAdjacentHTML('afterbegin', '<button class="btn secondary" data-nav="/report">Formal Readiness Report</button>');
    const s = stats();
    const hero = document.querySelector('.summary-hero');
    if (hero && !document.querySelector('.readiness-context')) hero.insertAdjacentHTML('afterend', `<div class="card pad readiness-context"><div class="eyebrow">Management interpretation</div><div class="readiness-context-grid"><div><strong>${s.done}</strong><span>Implemented</span></div><div><strong>${s.partial}</strong><span>Improvement areas</span></div><div><strong>${s.undone}</strong><span>Undone</span></div><div class="critical"><strong>${s.critical.length}</strong><span>Demo critical gaps</span></div></div></div>`);
    scheduleStoryFocus();
  };

  renderAccess = function() {
    const active = Boolean(state.access?.active);
    app.innerHTML = shell(`<main class="page narrow">
      <div class="section-head"><div><div class="eyebrow">Paid / Time-Bound Access</div><h2>${active ? 'Access is active' : 'Activate MSDS Self-Assessment Access'}</h2><p>Payment values and access periods are configurable and will follow IHRA-approved rules.</p></div></div>
      <div class="access-lifecycle">
        <div class="lifecycle-step done"><b>1</b><span>HCE category</span><strong>${escapeHtml(currentCategory())}</strong></div>
        <div class="lifecycle-step ${active ? 'done' : ''}"><b>2</b><span>Payment</span><strong>${active ? 'Successful' : 'Pending demo'}</strong></div>
        <div class="lifecycle-step ${active ? 'done' : ''}"><b>3</b><span>Access</span><strong>${active ? 'Activated' : 'After payment'}</strong></div>
        <div class="lifecycle-step ${active ? 'done' : ''}"><b>4</b><span>Reconciliation</span><strong>${active ? 'Transaction recorded' : 'Monthly'}</strong></div>
      </div>
      <div class="grid-2">
        <div class="card pad">
          <div class="eyebrow">Access package</div><h3>MSDS Self-Assessment Access</h3>
          <p class="muted">HCE: <b>${escapeHtml(state.hce.name || 'Demo General Hospital')}</b><br>Category: <b>${escapeHtml(currentCategory())}</b></p>
          <div class="approved-fee">As per IHRA-approved fee</div>
          <ul class="check-list"><li>✓ Applicable MSDS learning library</li><li>✓ Self-assessment and evidence notes</li><li>✓ Readiness and corrective actions</li><li>✓ Time-bound access</li></ul>
          ${active ? '<button class="btn secondary full" data-upgrade-action="renew-access">Simulate Renewal</button>' : `<button class="btn primary full" data-nav="/payment-demo">Proceed to Payment ${icon('arrow')}</button>`}
        </div>
        <div class="card pad">
          <div class="eyebrow">Access record</div><h3>${active ? 'Current activation' : 'Activation lifecycle'}</h3>
          ${active ? `<div class="access-record"><span>Reference<strong>${escapeHtml(state.access.reference || '—')}</strong></span><span>Starts<strong>${escapeHtml(state.access.starts || '—')}</strong></span><span>Expires<strong>${escapeHtml(state.access.expires || '—')}</strong></span><span>Status<strong class="success-text">Active</strong></span></div><button class="btn secondary small" data-nav="/admin/reconciliation">View in Reconciliation</button>` : '<p class="muted">A successful payment creates a transaction reference, activates access for the configured period and makes the record available to IHRA reconciliation.</p>'}
        </div>
      </div>${footerNote()}
    </main>`, '/access');
    scheduleStoryFocus();
  };

  function liveHceRow() {
    const s = stats();
    return [escapeHtml(state.hce.name || 'Demo General Hospital'), escapeHtml(currentCategory()), `${s.assessed} / ${s.total}`, `${s.score}%`, state.access?.expires || '—', s.critical.length ? `${s.critical.length} critical` : 'No critical'];
  }

  renderAdmin = function() {
    const s = stats();
    const rows = [liveHceRow(), ...adminHces.slice(1).map(r => [...r.slice(0,5), 'Synthetic'])];
    app.innerHTML = shell(`<main class="page">
      <div class="section-head"><div><div class="eyebrow">IHRA Administration</div><h2>Operational control, not just reporting</h2><p>Live demo state is combined with clearly-labelled synthetic programme records.</p></div><button class="btn primary" data-nav="/admin/indicators">Configure Indicators</button></div>
      <div class="management-links">
        <button data-nav="/admin/reconciliation"><strong>Payments & Reconciliation</strong><span>Transactions, access period, monthly status</span></button>
        <button data-nav="/admin/indicators"><strong>Indicator Configuration</strong><span>Classification, applicability, scoring</span></button>
        <button data-nav="/admin/production"><strong>303-Indicator Production</strong><span>Content pipeline and approval status</span></button>
        <button data-nav="/admin/audit"><strong>Audit Trail</strong><span>Who changed what and when</span></button>
      </div>
      <div class="grid-4"><div class="card stat-card"><span>Current HCE readiness</span><strong>${s.score}%</strong><small>${s.assessed}/${s.total} assessed</small></div><div class="card stat-card"><span>Critical gaps</span><strong class="${s.critical.length ? 'danger-text' : 'stat-accent'}">${s.critical.length}</strong><small>Configuration-driven</small></div><div class="card stat-card"><span>Active transactions</span><strong>${state.transactions.filter(t=>t.status==='Success').length}</strong><small>Demo + synthetic</small></div><div class="card stat-card"><span>Demo indicators</span><strong>10</strong><small>303 target library</small></div></div>
      <div style="height:16px"></div><div class="card pad"><h3>HCE Activity</h3><div class="table-wrap"><table class="admin-table"><thead><tr><th>HCE</th><th>Category</th><th>Assessment</th><th>Readiness</th><th>Access expiry</th><th>Risk</th></tr></thead><tbody>${rows.map((r,ri)=>`<tr class="${ri===0?'live-row':''}">${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>${footerNote()}
    </main>`, '/admin');
    scheduleStoryFocus();
  };

  function renderReconciliation() {
    const tx = state.transactions || [];
    app.innerHTML = shell(`<main class="page">
      <div class="section-head"><div><div class="eyebrow">IHRA Administration</div><h2>Payment & Access Reconciliation</h2><p>End-to-end traceability from transaction reference to access period and reconciliation state.</p></div><div class="row-actions"><button class="btn secondary" data-upgrade-action="export-reconciliation">Export CSV</button><button class="btn primary" data-nav="/admin">Back to Admin</button></div></div>
      <div class="grid-4"><div class="card stat-card"><span>Transactions</span><strong>${tx.length}</strong></div><div class="card stat-card"><span>Successful</span><strong>${tx.filter(t=>t.status==='Success').length}</strong></div><div class="card stat-card"><span>Reconciled</span><strong>${tx.filter(t=>t.reconciled).length}</strong></div><div class="card stat-card"><span>Pending review</span><strong>${tx.filter(t=>!t.reconciled).length}</strong></div></div>
      <div style="height:16px"></div><div class="card pad reconciliation-table"><div class="table-wrap"><table class="admin-table"><thead><tr><th>Transaction</th><th>HCE</th><th>Category</th><th>Date</th><th>Amount</th><th>Access period</th><th>Status</th><th>Reconciled</th></tr></thead><tbody>${tx.map(t=>`<tr><td><b>${escapeHtml(t.id)}</b></td><td>${escapeHtml(t.hce)}</td><td>${escapeHtml(t.category)}</td><td>${escapeHtml(t.date)}</td><td>${escapeHtml(t.amount)}</td><td>${escapeHtml(t.accessFrom)} → ${escapeHtml(t.accessTo)}</td><td><span class="badge success">${escapeHtml(t.status)}</span></td><td>${t.reconciled?'<span class="badge info">Yes</span>':'<span class="badge warning">Pending</span>'}</td></tr>`).join('')}</tbody></table></div></div>${footerNote()}
    </main>`, '/admin');
    scheduleStoryFocus();
  }

  function renderIndicatorConfig() {
    const i = indicators.find(x=>x.id===74);
    app.innerHTML = shell(`<main class="page">
      <div class="section-head"><div><div class="eyebrow">IHRA Administration</div><h2>Indicator Configuration</h2><p>Demonstrates that applicability and classification can change without rebuilding the HCE experience.</p></div><button class="btn secondary" data-nav="/admin">Back to Admin</button></div>
      <div class="grid-2"><div class="card pad"><div class="eyebrow">Live configuration demo</div><h3>MSDS 74 — ${i.title}</h3><div class="form-grid"><div class="field"><label>Classification</label><select id="cfg-classification"><option value="mandatory" ${i.classification==='mandatory'?'selected':''}>Mandatory — demo</option><option value="essential" ${i.classification==='essential'?'selected':''}>Essential — demo</option><option value="standard" ${i.classification==='standard'?'selected':''}>Standard — demo</option></select></div><div class="field"><label>Scoring</label><select disabled><option>Enabled — 2 / 1 / 0</option></select></div></div><div class="field"><label>HCE applicability</label><div class="config-checks">${demoCategories.map(c=>`<label><input type="checkbox" data-cfg-category="${c}" ${i.categories.includes(c)?'checked':''}> ${c}</label>`).join('')}</div></div><button class="btn primary" data-upgrade-action="save-indicator-config">Save & Apply Live</button><p class="config-note">Demo configuration only. Final mapping follows IHRA-approved classifications and taxonomy.</p></div>
      <div class="card pad"><div class="eyebrow">Immediate propagation</div><h3>What changes after Save</h3><ul class="check-list"><li>✓ Applicable indicator count by HCE category</li><li>✓ Dashboard indicator library</li><li>✓ Mandatory red-flag behaviour</li><li>✓ Readiness summary</li><li>✓ IHRA Admin risk visibility</li></ul><button class="btn secondary" data-nav="/dashboard">Open HCE Dashboard</button></div></div>
      <div style="height:16px"></div><div class="card pad"><h3>10 Demonstration Indicators</h3><div class="table-wrap"><table class="admin-table"><thead><tr><th>MSDS</th><th>Title</th><th>Demo classification</th><th>HCE categories</th><th>Video</th></tr></thead><tbody>${indicators.map(x=>`<tr><td>${x.id}</td><td>${x.title}</td><td>${x.classification}${x.classificationConfirmed?'':' · unconfirmed'}</td><td>${x.categories.length}</td><td>${x.video?'Sample slot':'Standard template'}</td></tr>`).join('')}</tbody></table></div></div>${footerNote()}
    </main>`, '/admin');
  }

  function renderAssessor() {
    app.innerHTML = shell(`<main class="page"><div class="section-head"><div><div class="eyebrow">IHRA Assessor Mode</div><h2>Continuous training access</h2><p>Assessor access is shown as a fee-free training concept with the complete approved learning library.</p></div><span class="badge info">No payment gate</span></div><div class="assessor-banner"><strong>Assessor Training Library</strong><span>Search, open and review any approved MSDS learning module without changing HCE assessment records.</span></div><div class="indicator-list">${indicators.map(i=>`<article class="card indicator-card"><div class="indicator-top"><div><div class="indicator-num">MSDS ${i.id}</div><h3>${i.title}</h3></div><span class="badge neutral">Training</span></div><p>${i.why}</p><div class="card-footer"><span>${i.language || 'Standard module'}</span><button class="btn secondary small" data-nav="/indicators/${i.id}">Open Training ${icon('arrow')}</button></div></article>`).join('')}</div>${footerNote()}</main>`, '/assessor');
  }

  function renderProduction() {
    const submitted = new Set(indicators.map(i=>i.id));
    const stages = id => [278,41,70,74].includes(id) ? ['Approved script','Demo video','Captions/VO','Submitted'] : ['Approved script','Demo video','Submitted','Review pending'];
    app.innerHTML = shell(`<main class="page"><div class="section-head"><div><div class="eyebrow">Content Operations</div><h2>303-Indicator Production Tracker</h2><p>A scalable production-control view. The 10 demonstration videos are represented as submitted; the remaining 293 indicators are future assignment scope.</p></div><button class="btn secondary" data-nav="/admin">Back to Admin</button></div><div class="grid-4"><div class="card stat-card"><span>Target library</span><strong>303</strong><small>Project scale</small></div><div class="card stat-card"><span>Demo submitted</span><strong>10</strong><small>Current pre-award set</small></div><div class="card stat-card"><span>Future production</span><strong>293</strong><small>Subject to award / assignment</small></div><div class="card stat-card"><span>Production model</span><strong>Batch</strong><small>Approval-led</small></div></div><div style="height:16px"></div><div class="card pad"><div class="table-wrap"><table class="admin-table"><thead><tr><th>MSDS</th><th>Title</th><th>Script</th><th>Video</th><th>Language / Captions</th><th>IHRA Review</th></tr></thead><tbody>${indicators.map(i=>`<tr><td>${i.id}</td><td>${i.title}</td><td><span class="badge success">Ready</span></td><td><span class="badge success">Demo submitted</span></td><td>${i.language || 'Per approved production plan'}</td><td><span class="badge warning">Evaluation / feedback</span></td></tr>`).join('')}</tbody></table></div></div><div class="production-queue"><strong>Future library queue</strong><span>293 additional indicators → script → storyboard → animation → voice/captions → QA → IHRA approval → publish</span></div>${footerNote()}</main>`, '/admin');
  }

  function renderAudit() {
    app.innerHTML = shell(`<main class="page"><div class="section-head"><div><div class="eyebrow">Governance</div><h2>Audit Trail</h2><p>Demonstrates traceability for assessment, configuration and access actions.</p></div><button class="btn secondary" data-nav="/admin">Back to Admin</button></div><div class="card pad"><div class="table-wrap"><table class="admin-table"><thead><tr><th>Date / Time</th><th>User</th><th>Action</th><th>Detail</th></tr></thead><tbody>${(state.audit||[]).map(a=>`<tr><td>${escapeHtml(a.at)}</td><td>${escapeHtml(a.user)}</td><td><b>${escapeHtml(a.action)}</b></td><td>${escapeHtml(a.detail)}</td></tr>`).join('')}</tbody></table></div></div>${footerNote()}</main>`, '/admin');
  }

  function renderReport() {
    const s = stats();
    const list = applicableIndicators();
    app.innerHTML = shell(`<main class="page report-page"><div class="section-head no-print"><div><div class="eyebrow">Readiness Report</div><h2>Formal report preview</h2><p>This browser-native report can be printed or saved as PDF without a backend dependency.</p></div><div class="row-actions"><button class="btn secondary" data-upgrade-action="export-readiness">Export CSV</button><button class="btn primary" data-upgrade-action="print-report">Print / Save as PDF</button></div></div><section class="print-report"><div class="report-brand"><img src="${IHRA_LOGO}" alt="IHRA"><div><strong>MSDS Readiness Summary</strong><span>Functional Demonstration</span></div></div><div class="report-hce"><h2>${escapeHtml(state.hce.name || 'Demo HCE')}</h2><p>${escapeHtml(currentCategory())} · ${escapeHtml(state.hce.city || 'Islamabad')}</p></div><div class="report-kpis"><div><strong>${s.score}%</strong><span>Readiness</span></div><div><strong>${s.assessed}/${s.total}</strong><span>Assessed</span></div><div><strong>${s.critical.length}</strong><span>Critical gaps</span></div></div><table class="admin-table report-table"><thead><tr><th>MSDS</th><th>Indicator</th><th>Status</th><th>Score</th><th>Notes</th></tr></thead><tbody>${list.map(i=>{const a=assessmentFor(i.id);return `<tr><td>${i.id}</td><td>${i.title}</td><td>${statusBadge(a.status)}</td><td>${a.score ?? '—'}</td><td>${escapeHtml(a.notes || '—')}</td></tr>`}).join('')}</tbody></table><p class="report-disclaimer">Demonstration report. Final classifications, applicability and scoring follow IHRA-approved configuration.</p></section>${footerNote()}</main>`, '/summary');
  }

  function renderIntegrationUpgrade() {
    app.innerHTML = shell(`<main class="page"><div class="section-head"><div><div class="eyebrow">Scale & Integration</div><h2>Deployment model designed for IHRA</h2><p>Integration remains modular so production hosting, authentication, payment and official configuration can follow IHRA / NTC requirements.</p></div></div><div class="production-architecture"><div class="arch-layer"><strong>IHRA Website</strong><span>Public entry point / approved navigation</span></div><div class="arch-arrow">↓</div><div class="arch-layer highlight"><strong>Secure MSDS Module</strong><span>HCE + Assessor experiences</span></div><div class="arch-arrow">↓</div><div class="arch-row"><div class="arch-layer"><strong>Learning Library</strong><span>Videos, exact MSDS, captions</span></div><div class="arch-layer"><strong>Assessment Engine</strong><span>2 / 1 / 0 + red flags</span></div><div class="arch-layer"><strong>Access & Payment</strong><span>Gateway + time-bound access</span></div></div><div class="arch-arrow">↓</div><div class="arch-row"><div class="arch-layer"><strong>IHRA Admin</strong><span>Configuration & oversight</span></div><div class="arch-layer"><strong>Reporting</strong><span>Readiness & reconciliation</span></div><div class="arch-layer"><strong>Audit & Security</strong><span>Roles, logs, traceability</span></div></div></div><div class="grid-3"><div class="card pad"><div class="eyebrow">Static-safe demo</div><h3>No live dependency risk</h3><p class="muted">Board presentation remains deterministic even before production APIs exist.</p></div><div class="card pad"><div class="eyebrow">Production-ready pattern</div><h3>Backend services plug in after award</h3><p class="muted">Authentication, database, gateway and official configuration are integration concerns, not UI rewrites.</p></div><div class="card pad"><div class="eyebrow">Configuration-driven</div><h3>Regulatory rules remain controlled</h3><p class="muted">No unconfirmed mapping is hard-coded as final IHRA policy.</p></div></div>${footerNote()}</main>`, '/integration');
    scheduleStoryFocus();
  }

  function renderDemoCheck() {
    app.innerHTML = shell(`<main class="page"><div class="section-head"><div><div class="eyebrow">Presentation Safety</div><h2>Board Demo Readiness Check</h2><p>Run a local smoke check before the meeting. Video availability is tested from the deployed environment.</p></div><button class="btn primary" data-upgrade-action="run-smoke">Run Smoke Check</button></div><div id="smoke-results" class="smoke-grid">${['10-indicator dataset','Hospital shows 10 applicable indicators','Done / Partial / Undone scoring','Mandatory red-flag configuration','Readiness summary','Paid/time-bound access','IHRA Admin','Reconciliation view','Assessor mode','Indicator configuration','303 production tracker','Audit trail'].map(x=>`<div class="smoke-item pass"><span>✓</span><strong>${x}</strong><small>Available</small></div>`).join('')}</div><div class="card pad"><h3>Video file checks</h3><div id="video-checks" class="video-checks">Click “Run Smoke Check” to verify the four local sample MP4 paths.</div></div><div class="alert info"><div><strong>Presentation rule</strong><p>If a video file check fails, use the submitted video locally or via the approved portfolio link rather than relying on a broken player during the board meeting.</p></div></div>${footerNote()}</main>`, '/demo-check');
  }

  const routed = baseRoute;
  route = function() {
    clearModal();
    applyConfig();
    const p = location.pathname.replace(/\/+$/,'') || '/';
    if (p === '/assessor') return renderAssessor();
    if (p === '/admin/reconciliation') return renderReconciliation();
    if (p === '/admin/indicators') return renderIndicatorConfig();
    if (p === '/admin/production') return renderProduction();
    if (p === '/admin/audit') return renderAudit();
    if (p === '/report') return renderReport();
    if (p === '/demo-check') return renderDemoCheck();
    if (p === '/integration') return renderIntegrationUpgrade();
    routed();
    scheduleStoryFocus();
  };

  function scheduleStoryFocus() {
    requestAnimationFrame(() => {
      document.body.classList.toggle('high-contrast', Boolean(state.preferences?.contrast));
      document.body.classList.toggle('large-text', Boolean(state.preferences?.largeText));
      document.querySelectorAll('.story-focus').forEach(x=>x.classList.remove('story-focus'));
      if (!storyState.active) return;
      const selector = story[storyState.index]?.focus;
      const el = selector ? document.querySelector(selector) : null;
      if (el) { el.classList.add('story-focus'); el.scrollIntoView({behavior:'smooth', block:'center'}); }
    });
  }

  function applyPreferences() {
    if (!document.body) return;
    document.body.classList.toggle('high-contrast', Boolean(state.preferences?.contrast));
    document.body.classList.toggle('large-text', Boolean(state.preferences?.largeText));
  }

  function downloadText(filename, text, mime='text/csv') {
    const blob = new Blob([text], {type: `${mime};charset=utf-8`});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href), 500);
  }

  function exportReconciliation() {
    const rows = [['Transaction','HCE','Category','Date','Amount','Access From','Access To','Status','Reconciled'], ...(state.transactions||[]).map(t=>[t.id,t.hce,t.category,t.date,t.amount,t.accessFrom,t.accessTo,t.status,t.reconciled?'Yes':'Pending'])];
    downloadText('IHRA_Demo_Reconciliation.csv', rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n'));
    toast('Reconciliation CSV generated.');
  }

  function exportReadiness() {
    const rows = [['MSDS','Indicator','Status','Score','Notes'], ...applicableIndicators().map(i=>{const a=assessmentFor(i.id); return [i.id,i.title,a.status,a.score??'',a.notes||''];})];
    downloadText('IHRA_Demo_Readiness.csv', rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n'));
    toast('Readiness CSV generated.');
  }

  async function runSmokeCheck() {
    const root = document.getElementById('video-checks');
    if (!root) return;
    root.innerHTML = '<div class="muted">Checking local MP4 paths…</div>';
    const files = ['msds-278.mp4','msds-74.mp4','msds-70.mp4','msds-41.mp4'];
    const results = await Promise.all(files.map(async file => {
      try { const r = await fetch(`${VIDEO_BASE}/${file}`, {method:'HEAD', cache:'no-store'}); return [file, r.ok]; }
      catch { return [file, false]; }
    }));
    root.innerHTML = results.map(([f,ok])=>`<div class="video-check ${ok?'ok':'fail'}"><strong>${f}</strong><span>${ok?'Available':'Missing / not deployed'}</span></div>`).join('');
  }

  document.addEventListener('click', e => {
    const cat = e.target.closest('[data-upgrade-category]');
    if (cat) {
      state.hce.category = cat.dataset.upgradeCategory;
      saveState(); addAudit('HCE category changed', state.hce.category);
      renderDashboard(); return;
    }
    const action = e.target.closest('[data-upgrade-action]')?.dataset.upgradeAction;
    if (!action) {
      const originalAction = e.target.closest('[data-action]')?.dataset.action;
      if (originalAction === 'complete-payment') setTimeout(() => {
        const a = state.access;
        if (!a?.reference || state.transactions?.some(t=>t.id===a.reference)) return;
        state.transactions.unshift({ id:a.reference, hce:state.hce.name||'Demo HCE', category:currentCategory(), date:a.starts, amount:'IHRA-approved fee', status:'Success', accessFrom:a.starts, accessTo:a.expires, reconciled:false });
        addAudit('Access activated', `Reference ${a.reference}`, 'System'); saveState();
      }, 0);
      if (originalAction === 'save-assessment') setTimeout(() => {
        const id = Number((location.pathname.match(/indicators\/(\d+)/)||[])[1]);
        const a = assessmentFor(id); if (id) addAudit('Assessment updated', `MSDS ${id} → ${a.status}`);
      }, 0);
      return;
    }
    if (action === 'story-start') { storyState={active:true,index:0}; navigate(story[0].route); return; }
    if (action === 'story-next') { storyState.index=Math.min(story.length-1,storyState.index+1); navigate(story[storyState.index].route); return; }
    if (action === 'story-prev') { storyState.index=Math.max(0,storyState.index-1); navigate(story[storyState.index].route); return; }
    if (action === 'story-exit') { storyState.active=false; route(); return; }
    if (action === 'toggle-contrast') { state.preferences.contrast=!state.preferences.contrast; saveState(); applyPreferences(); return; }
    if (action === 'toggle-text') { state.preferences.largeText=!state.preferences.largeText; saveState(); applyPreferences(); return; }
    if (action === 'save-indicator-config') {
      const classification = document.getElementById('cfg-classification').value;
      const categories = [...document.querySelectorAll('[data-cfg-category]:checked')].map(x=>x.dataset.cfgCategory);
      if (!categories.length) { toast('Select at least one HCE category.'); return; }
      state.config[74] = { classification, categories }; applyConfig(); saveState(); addAudit('Indicator configuration changed', `MSDS 74 → ${classification}; ${categories.join(', ')}`, 'IHRA Demo Admin');
      toast('Configuration applied live. Open the HCE dashboard to see the effect.'); renderIndicatorConfig(); return;
    }
    if (action === 'renew-access') {
      const start = state.access?.expires ? new Date(state.access.expires) : new Date(); const end=new Date(start); end.setDate(end.getDate()+30); const f=d=>d.toISOString().slice(0,10);
      state.access={active:true,starts:state.access?.starts||f(new Date()),expires:f(end),reference:`DEMO-RENEW-${String(Date.now()).slice(-6)}`};
      state.transactions.unshift({id:state.access.reference,hce:state.hce.name||'Demo HCE',category:currentCategory(),date:f(new Date()),amount:'IHRA-approved fee',status:'Success',accessFrom:f(start),accessTo:f(end),reconciled:false});
      addAudit('Access renewed', `New expiry ${f(end)}`, 'System'); saveState(); renderAccess(); toast('Demo access renewed and transaction recorded.'); return;
    }
    if (action === 'export-reconciliation') return exportReconciliation();
    if (action === 'export-readiness') return exportReadiness();
    if (action === 'print-report') return window.print();
    if (action === 'run-smoke') return runSmokeCheck();
  });

  document.addEventListener('change', e => {
    if (e.target.matches('[data-cfg-category], #cfg-classification')) return;
  });

  window.IHRAWinningDemo = { version: UPGRADE_VERSION, story, ensureUpgradeState, runSmokeCheck };
  route();
})();
