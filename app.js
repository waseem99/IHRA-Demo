const IHRA_LOGO = 'https://ihra.gov.pk/wp-content/uploads/2020/07/Your-paragraph-text-2.png';
const VIDEO_BASE = '/assets/videos';
const STORAGE_KEY = 'ihra-msds-demo-v1';

const indicators = [
  {
    id: 278,
    title: 'Healthcare Waste Segregation',
    exact: 'In accordance with applicable national regulations, clear guidelines for waste segregation and storage are prominently displayed in the areas where waste is generated. This includes the use of clearly marked and color-coded bins for waste segregation.',
    why: 'Correct waste segregation supports safer handling for patients, healthcare workers and the environment.',
    dos: ['Display segregation guidance where waste is generated.', 'Use approved, clearly marked colour-coded bins.', 'Segregate waste at the point of generation.'],
    donts: ['Do not mix different waste categories.', 'Do not use unmarked or incorrectly labelled bins.', 'Do not ignore displayed segregation guidance.'],
    categories: ['Hospital', 'Medical Centre / Clinic', 'Diagnostic / Laboratory'],
    classification: 'standard',
    classificationConfirmed: false,
    video: `${VIDEO_BASE}/msds-278.mp4`,
    language: 'English sample'
  },
  {
    id: 62,
    title: 'Emergency Codes & Mock Drills',
    exact: 'The hospital has established and implemented a policy requiring emergency staff to call on urgent emergency codes (red, blue, etc.). Notification of code teams with the assigned responsibility. Mock drills are also conducted to guarantee that the appropriate team and equipment are available on time.',
    why: 'Emergency codes enable a timely, coordinated response by activating the right people, responsibilities and equipment.',
    dos: ['Recognise the emergency and activate the approved code.', 'Notify the assigned response team immediately.', 'Keep roles and required equipment ready.', 'Conduct and review mock drills.'],
    donts: ['Do not delay code activation.', 'Do not respond with unclear roles or missing equipment.', 'Do not treat mock drills as optional.'],
    categories: ['Hospital'], classification: 'essential', classificationConfirmed: false
  },
  {
    id: 41,
    title: 'Gender-Sensitive Examination / Chaperone',
    exact: 'When a female patient is being examined by an examiner of the opposite gender, a female nurse or chaperone is present. A male patients should also have a chaperone when being examined by opposite gender staff, ensuring gender-sensitive care.',
    why: 'A chaperone supports patient dignity, privacy and professional conduct during opposite-gender examinations.',
    dos: ['Ensure the appropriate chaperone is present before examination.', 'Maintain privacy and dignity.', 'Keep professional conduct throughout the interaction.'],
    donts: ['Do not begin without the required chaperone.', 'Do not treat the chaperone as optional.', 'Do not compromise patient privacy.'],
    categories: ['Hospital', 'Medical Centre / Clinic'], classification: 'standard', classificationConfirmed: false,
    video: `${VIDEO_BASE}/msds-41.mp4`, language: 'Urdu sample'
  },
  {
    id: 70,
    title: 'Patient Information / Follow-up / Medication',
    exact: 'Patients are given verbal and written information about next appointments, therapy, and medication after an evaluation.',
    why: 'Clear verbal and written instructions support safer follow-up and help patients understand what to do after evaluation.',
    dos: ['Explain the next appointment clearly.', 'Explain therapy and medication instructions.', 'Provide the same information in writing.', 'Confirm that the patient understands the plan.'],
    donts: ['Do not give verbal advice only.', 'Do not omit follow-up, therapy or medication details.', 'Do not end the consultation while the patient remains unsure.'],
    categories: ['Hospital', 'Medical Centre / Clinic'], classification: 'standard', classificationConfirmed: false,
    video: `${VIDEO_BASE}/msds-70.mp4`, language: 'Urdu sample'
  },
  {
    id: 107,
    title: 'Patient Identification & Fall-Risk Alert',
    exact: 'Each patient undergoing surgery is identified by a wristband/bracelet or another distinct identification and Red ID bands for fall risk alert, method that is securely attached to them.',
    why: 'Correct identification reduces patient-safety risk before surgery or procedures and makes fall-risk status visible to staff.',
    dos: ['Apply a secure approved patient identifier.', 'Verify identity before surgery or procedure.', 'Apply the approved red fall-risk alert band where applicable.', 'Recheck the identifier before proceeding.'],
    donts: ['Do not proceed without a secure identifier.', 'Do not rely only on bed, room or visual recognition.', 'Do not ignore a fall-risk alert.'],
    categories: ['Hospital'], classification: 'essential', classificationConfirmed: false
  },
  {
    id: 258,
    title: 'Infection Prevention & Control Policies',
    exact: 'The hospital developed and put into effect waste management and infection control policies and procedures that cover every important aspect of IPC activities.',
    why: 'Clear IPC policies connect hand hygiene, precautions, cleaning, safe sharps handling, waste segregation and isolation into one safer-care system.',
    dos: ['Follow approved hand-hygiene and standard precautions.', 'Follow approved cleaning and decontamination procedures.', 'Segregate infectious waste according to policy.', 'Follow isolation procedures where applicable.'],
    donts: ['Do not skip hand hygiene or standard precautions.', 'Do not handle contaminated items outside approved procedure.', 'Do not mix infectious waste with general waste.'],
    categories: ['Hospital', 'Medical Centre / Clinic', 'Diagnostic / Laboratory'], classification: 'mandatory', classificationConfirmed: false
  },
  {
    id: 12,
    title: 'IHRA Notification of Significant Changes',
    exact: 'The Hospital has defined a procedure to inform IHRA about significant changes regarding the facilities, the building and/or infrastructure, in the top management, ownership or any other essential personnel and management changes as well as any critical incidents to decide if an interim assessment or earlier assessment is to be done. Also, the record of the same is maintained.',
    why: 'Timely notification helps IHRA determine whether an interim or earlier assessment is required and keeps regulatory records complete.',
    dos: ['Identify whether a change or incident requires notification.', 'Inform IHRA through the approved process.', 'Maintain a complete notification record.'],
    donts: ['Do not delay required notification.', 'Do not omit relevant management, ownership, infrastructure or critical-incident changes.', 'Do not leave the notification undocumented.'],
    categories: ['Hospital', 'Medical Centre / Clinic', 'Diagnostic / Laboratory'], classification: 'standard', classificationConfirmed: false
  },
  {
    id: 115,
    title: 'Emergency Response & Resuscitation Readiness',
    exact: 'The Emergency department has developed and implemented advance emergency care protocols and is staffed by qualified individuals, duly registered with relevant regulating body, experienced and well trained to an advanced levels to handle the emergency situations. Every employee is trained in Basic Life Support (BLS), however, there must be at least one advanced (cardiac/trauma/pediatric) Life Support (ACLS) provider and a resuscitation team on call according to the schedule.',
    why: 'Emergency readiness depends on approved protocols, trained staff and available resuscitation support.',
    dos: ['Maintain approved advanced emergency-care protocols.', 'Ensure emergency staff are qualified, registered and trained.', 'Maintain required BLS training.', 'Keep appropriate advanced life-support coverage and a resuscitation team on call.'],
    donts: ['Do not operate emergency response without trained personnel.', 'Do not leave advanced life-support coverage unscheduled.', 'Do not rely on equipment without trained responders.'],
    categories: ['Hospital'], classification: 'essential', classificationConfirmed: false
  },
  {
    id: 74,
    title: 'Medication Safety',
    exact: "In order to ascertain that the appropriate medication is given to the relevant patient and that it is recorded in the patient's file or medical record, the hospital has created and put into place protocols and mechanisms.",
    why: 'Verification and documentation support medication safety and reduce the risk of giving medication to the wrong patient.',
    dos: ['Confirm patient identity and MR number before medication administration.', 'Verify the medication against the authorised order.', 'Record administration in the correct patient file or medical record.'],
    donts: ['Do not administer before patient verification.', 'Do not rely on assumption or memory.', 'Do not leave administration undocumented or record it in the wrong file.'],
    categories: ['Hospital', 'Medical Centre / Clinic'], classification: 'mandatory', classificationConfirmed: false,
    video: `${VIDEO_BASE}/msds-74.mp4`, language: 'English sample'
  },
  {
    id: 259,
    title: 'PPE Selection, Donning & Doffing',
    exact: 'The hospital has enough stock of essential Personal Protective Equipment (PPEs) and are correctly used in sections where there is a risk of infection.',
    why: 'PPE is effective when the right equipment is available in the right place and used according to approved procedure.',
    dos: ['Keep essential PPE available in infection-risk areas.', 'Select PPE according to the approved risk and procedure.', 'Follow the approved donning and doffing sequence.', 'Dispose of used PPE according to approved procedure.'],
    donts: ['Do not enter a risk area without required PPE.', 'Do not use incorrect or damaged PPE.', 'Do not remove PPE in an unsafe sequence.'],
    categories: ['Hospital', 'Medical Centre / Clinic', 'Diagnostic / Laboratory'], classification: 'standard', classificationConfirmed: false
  }
];

const defaultState = {
  hce: { name: '', category: 'Hospital', registration: '', city: 'Islamabad' },
  assessments: {},
  access: { active: false, starts: null, expires: null, reference: null },
  demoSeeded: false
};

let state = loadState();
let activeFilter = 'all';
let searchTerm = '';
let modal = null;

function loadState() {
  try {
    return { ...defaultState, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) };
  } catch { return structuredClone(defaultState); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function isDemo() { return new URLSearchParams(location.search).get('demo') === 'true'; }
function seedDemo(force = false) {
  if (!isDemo() && !force) return;
  if (state.demoSeeded && !force) return;
  state = {
    hce: { name: 'Demo General Hospital', category: 'Hospital', registration: 'IHRA-DEMO-001', city: 'Islamabad' },
    assessments: {
      278: { status: 'done', score: 2, notes: 'Segregation guidance and approved labelled bins are available at demo waste points.' },
      70: { status: 'partial', score: 1, notes: 'Written follow-up instructions need consistency across departments.' },
      74: { status: 'undone', score: 0, notes: 'Demo gap intentionally seeded to show configurable red-flag behaviour.' }
    },
    access: { active: true, starts: '2026-08-24', expires: '2026-09-23', reference: 'DEMO-IHRA-240826' },
    demoSeeded: true
  };
  saveState();
}
seedDemo();

const app = document.getElementById('app');

function icon(name) {
  const icons = {
    arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>',
    alert: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M10.3 3.4 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.4a2 2 0 0 0-3.4 0Z"/></svg>',
    reset: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    download: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>'
  };
  return icons[name] || '';
}

function shell(content, active = '') {
  const navs = [
    ['/dashboard', 'HCE Dashboard'], ['/summary', 'Readiness'], ['/access', 'Access'], ['/admin', 'IHRA Admin'], ['/integration', 'Integration']
  ];
  return `<div class="app-shell">
    <header class="topbar">
      <a class="brand-wrap" data-nav="/">
        <img src="${IHRA_LOGO}" alt="IHRA" onerror="this.style.display='none'" />
        <div class="brand-copy"><strong>IHRA MSDS Digital Learning</strong><span>Self-Assessment Functional Demonstration</span></div>
      </a>
      <nav class="nav">${navs.map(([path,label]) => `<a data-nav="${path}" class="${active===path?'active':''}">${label}</a>`).join('')}</nav>
      <div class="top-actions">
        ${isDemo() ? '<span class="demo-badge">PRESENTATION MODE</span><button class="btn ghost small" data-action="reset-demo">'+icon('reset')+' Reset</button>' : '<span class="demo-badge">FUNCTIONAL DEMO</span>'}
      </div>
    </header>
    ${content}
  </div>`;
}

function footerNote() {
  return `<div class="footer-note">Functional pre-award demonstration. Demo classifications, categories, access periods and synthetic records are configurable and are not represented as final IHRA policy unless formally approved.</div>`;
}

function currentCategory() { return state.hce?.category || 'Hospital'; }
function applicableIndicators() { return indicators.filter(i => i.categories.includes(currentCategory())); }
function assessmentFor(id) { return state.assessments?.[id] || { status: 'not_started', score: null, notes: '' }; }
function statusBadge(status) {
  const m = {
    done: ['success','Done'], partial: ['warning','Partially Done'], undone: ['danger','Undone'], not_started: ['neutral','Not Started']
  };
  const [c,l] = m[status] || m.not_started;
  return `<span class="badge ${c}"><span class="dot"></span>${l}</span>`;
}
function stats() {
  const list = applicableIndicators();
  const answers = list.map(i => assessmentFor(i.id));
  const assessed = answers.filter(a => a.status !== 'not_started');
  const done = answers.filter(a => a.status === 'done').length;
  const partial = answers.filter(a => a.status === 'partial').length;
  const undone = answers.filter(a => a.status === 'undone').length;
  const score = assessed.length ? Math.round((assessed.reduce((s,a)=>s+(a.score||0),0)/(assessed.length*2))*100) : 0;
  const critical = list.filter(i => i.classification === 'mandatory' && assessmentFor(i.id).status === 'undone');
  return { total:list.length, assessed:assessed.length, done, partial, undone, score, critical };
}

function renderHome() {
  app.innerHTML = shell(`<main class="hero">
    <section>
      <div class="eyebrow">IHRA • Minimum Service Delivery Standards</div>
      <h1>Learn the standard.<br>Assess readiness.<br>Act before inspection.</h1>
      <p class="lede">A guided digital environment that helps healthcare establishments understand applicable MSDS requirements, assess implementation, identify gaps and improve readiness.</p>
      <div class="hero-actions">
        <button class="btn primary" data-nav="/onboarding">Start Assessment ${icon('arrow')}</button>
        <button class="btn secondary" data-nav="/dashboard">Open Demo Dashboard</button>
      </div>
      <div class="kicker-strip">
        <div class="kicker"><strong>Learn</strong><span>Exact MSDS + animated guidance + Do's & Don'ts</span></div>
        <div class="kicker"><strong>Assess</strong><span>Done / Partially Done / Undone with evidence notes</span></div>
        <div class="kicker"><strong>Improve</strong><span>Readiness score, critical gaps and corrective actions</span></div>
      </div>
    </section>
    <section class="hero-panel">
      <div class="hero-panel-top"><span>Board demo story</span><strong>From requirement to measurable readiness</strong></div>
      <div class="hero-flow">
        ${[['1','Select HCE category','Show only applicable MSDS content'],['2','Learn each indicator','Exact wording, video and practical guidance'],['3','Self-assess implementation','Three-state scoring with optional evidence'],['4','Identify critical gaps','Configurable mandatory-indicator red flags'],['5','Review readiness','Clear summary and next actions'],['6','IHRA oversight','Admin, access, reporting and reconciliation concept']].map(x=>`<div class="flow-step"><div class="flow-num">${x[0]}</div><div><strong>${x[1]}</strong><span>${x[2]}</span></div></div>`).join('')}
      </div>
    </section>
  </main>`, '');
}

function renderOnboarding() {
  const cats = ['Hospital','Medical Centre / Clinic','Diagnostic / Laboratory','Other category placeholder'];
  app.innerHTML = shell(`<main class="page narrow">
    <div class="section-head"><div><div class="eyebrow">Step 1 of 3</div><h2>Tell us about your healthcare establishment</h2><p>The production system will use the official IHRA HCE taxonomy. These labels are used only to demonstrate category-based personalization.</p></div></div>
    <div class="card pad">
      <div class="form-grid">
        <div class="field"><label>Healthcare establishment name</label><input id="hce-name" value="${escapeHtml(state.hce.name)}" placeholder="e.g. Demo General Hospital"></div>
        <div class="field"><label>City</label><input id="hce-city" value="${escapeHtml(state.hce.city || 'Islamabad')}"></div>
        <div class="field"><label>Registration number <span style="font-weight:400;color:#78888d">(optional demo field)</span></label><input id="hce-reg" value="${escapeHtml(state.hce.registration || '')}" placeholder="Optional"></div>
      </div>
      <div style="height:18px"></div>
      <div class="field"><label>HCE category</label>
        <div class="category-grid">${cats.map(c=>`<button class="category-option ${currentCategory()===c?'selected':''}" data-category="${c}"><strong>${c}</strong><span>${c==='Hospital'?'Full demo indicator set':c==='Other category placeholder'?'Final categories to follow IHRA taxonomy':'Personalized demonstration subset'}</span></button>`).join('')}</div>
      </div>
      <div style="height:22px"></div>
      <div class="row-actions"><button class="btn primary" data-action="save-onboarding">Continue to My MSDS ${icon('arrow')}</button><button class="btn secondary" data-nav="/">Back</button></div>
    </div>${footerNote()}
  </main>`, '');
}

function renderDashboard() {
  if (!state.hce.name) { navigate('/onboarding', true); return; }
  const s = stats();
  const filtered = applicableIndicators().filter(i => {
    const a = assessmentFor(i.id);
    const textMatch = `${i.id} ${i.title}`.toLowerCase().includes(searchTerm.toLowerCase());
    let statusMatch = true;
    if (activeFilter === 'not_started') statusMatch = a.status === 'not_started';
    if (activeFilter === 'in_progress') statusMatch = a.status === 'partial';
    if (activeFilter === 'completed') statusMatch = a.status === 'done';
    if (activeFilter === 'attention') statusMatch = a.status === 'undone';
    return textMatch && statusMatch;
  });
  app.innerHTML = shell(`<main class="page">
    <div class="section-head"><div><div class="eyebrow">${escapeHtml(state.hce.name)} • ${escapeHtml(currentCategory())}</div><h2>Your MSDS Readiness</h2><p>Showing indicators applicable to the selected HCE category in this demonstration.</p></div><div class="row-actions"><button class="btn secondary" data-nav="/onboarding">Change HCE</button><button class="btn primary" data-nav="/summary">View Summary</button></div></div>
    <div class="grid-4">
      <div class="card stat-card"><span>Applicable indicators</span><strong>${s.total}</strong><small>Demo dataset</small></div>
      <div class="card stat-card"><span>Assessed</span><strong>${s.assessed}</strong><small>${s.total-s.assessed} remaining</small></div>
      <div class="card stat-card"><span>Needs attention</span><strong class="${s.undone?'':'stat-accent'}">${s.partial+s.undone}</strong><small>${s.undone} currently Undone</small></div>
      <div class="card stat-card"><span>Readiness score</span><strong class="stat-accent">${s.score}%</strong><small>Based on assessed indicators</small></div>
    </div>
    ${s.critical.length ? `<div style="height:16px"></div><div class="alert danger">${icon('alert')}<div><strong>${s.critical.length} demo-configured critical gap${s.critical.length>1?'s':''}</strong><p>An indicator configured as mandatory in the current demo dataset is marked Undone. Final classifications will follow IHRA-approved mapping.</p></div></div>` : ''}
    <div class="toolbar"><input id="indicator-search" class="search" placeholder="Search by indicator number or title" value="${escapeHtml(searchTerm)}"><div class="filters">${[['all','All'],['not_started','Not Started'],['in_progress','In Progress'],['completed','Completed'],['attention','Needs Attention']].map(([k,l])=>`<button class="filter ${activeFilter===k?'active':''}" data-filter="${k}">${l}</button>`).join('')}</div></div>
    <div class="indicator-list">${filtered.length ? filtered.map(indicatorCard).join('') : '<div class="card empty" style="grid-column:1/-1">No indicators match this view.</div>'}</div>
    ${footerNote()}
  </main>`, '/dashboard');
}

function indicatorCard(i) {
  const a = assessmentFor(i.id);
  const demoClass = i.classification === 'mandatory' ? '<span class="badge info">Demo mandatory</span>' : '';
  return `<article class="card indicator-card"><div class="indicator-top"><div><div class="indicator-num">MSDS ${i.id}</div><h3>${i.title}</h3></div>${statusBadge(a.status)}</div><p>${i.why}</p><div class="card-footer"><div>${demoClass}</div><button class="btn secondary small" data-nav="/indicators/${i.id}">Learn & Assess ${icon('arrow')}</button></div></article>`;
}

function renderIndicator(id) {
  const i = indicators.find(x=>x.id===id);
  if (!i) { renderNotFound(); return; }
  const a = assessmentFor(id);
  app.innerHTML = shell(`<main class="page">
    <div class="section-head"><div><div class="eyebrow">MSDS ${i.id}</div><h2>${i.title}</h2><p>Learn the requirement first, then assess your facility's current implementation status.</p></div><div>${statusBadge(a.status)}</div></div>
    <div class="policy-card"><strong>Exact MSDS Requirement</strong><p>“${i.exact}”</p></div>
    <div class="learning-layout">
      <div>
        <div class="video-frame">
          ${i.video ? `<video id="learning-video" controls preload="metadata"><source src="${i.video}" type="video/mp4"></video>` : ''}
          <div class="video-fallback" id="video-fallback" ${i.video?'style="display:none"':''}><div><div class="play-mark">▶</div><strong>${i.video?'Sample video file not added yet':'Animated learning video'}</strong><span>${i.video?`Add ${i.video.replace('/','')} to the repository before the board demo.`:'This indicator uses the standardized animated content framework.'}</span></div></div>
        </div>
        ${i.video ? `<div style="margin-top:9px;color:#77888d;font-size:10px">Submitted sample: ${i.language || 'demo animation'}. The app automatically falls back gracefully if the MP4 has not yet been added.</div>` : ''}
      </div>
      <div class="card pad"><div class="eyebrow">Why it matters</div><h3>Practical significance</h3><p style="color:#5c7076;font-size:13px;margin:10px 0 18px">${i.why}</p><div class="alert info"><div><strong>Learning first, assessment second</strong><p>The same page can scale across the complete MSDS library while keeping exact wording and practical guidance together.</p></div></div></div>
    </div>
    <div class="split-list"><div class="list-card do"><h3>Do's</h3><ul>${i.dos.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="list-card dont"><h3>Don'ts</h3><ul>${i.donts.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>
    <div style="height:20px"></div><div class="row-actions"><button class="btn primary" data-nav="/indicators/${i.id}/assessment">Start Self-Assessment ${icon('arrow')}</button><button class="btn secondary" data-nav="/dashboard">Back to Dashboard</button></div>${footerNote()}
  </main>`, '/dashboard');
  const video = document.getElementById('learning-video');
  if (video) {
    video.addEventListener('error', ()=>{ video.style.display='none'; const f=document.getElementById('video-fallback'); if(f) f.style.display='grid'; });
    video.querySelector('source')?.addEventListener('error', ()=>{ video.style.display='none'; const f=document.getElementById('video-fallback'); if(f) f.style.display='grid'; });
  }
}

function renderAssessment(id) {
  const i = indicators.find(x=>x.id===id);
  if (!i) { renderNotFound(); return; }
  const a = assessmentFor(id);
  app.innerHTML = shell(`<main class="page narrow">
    <div class="section-head"><div><div class="eyebrow">Self-Assessment • MSDS ${i.id}</div><h2>What is the current implementation status?</h2><p>${i.title}</p></div></div>
    ${i.classification === 'mandatory' ? `<div class="alert info"><div><strong>Demo classification: Mandatory</strong><p>This mapping is deliberately labelled as demo configuration. Final classification and weighting will follow IHRA-approved rules.</p></div></div><div style="height:14px"></div>` : ''}
    <div class="assessment-options">
      ${assessOption('done',2,'Done','The requirement is fully implemented and evidence is available.',a.status)}
      ${assessOption('partial',1,'Partially Done','Some parts are implemented, but gaps remain.',a.status)}
      ${assessOption('undone',0,'Undone','The requirement is not currently implemented.',a.status)}
    </div>
    <div id="red-flag">${redFlag(i,a.status)}</div>
    <div style="height:14px"></div>
    <div class="card pad"><div class="field"><label>Evidence / Notes</label><textarea id="assessment-notes" placeholder="Add a short note about current implementation or evidence...">${escapeHtml(a.notes || '')}</textarea></div><div style="height:12px"></div><div class="row-actions"><button class="btn secondary small" data-action="simulate-upload">Attach supporting evidence <span style="font-weight:400">(demo)</span></button><span style="font-size:10px;color:#7d8c90">No file is uploaded in this pre-award prototype.</span></div></div>
    <div style="height:18px"></div><div class="row-actions"><button class="btn primary" data-action="save-assessment" data-id="${i.id}">Save & Continue ${icon('arrow')}</button><button class="btn secondary" data-nav="/indicators/${i.id}">Back to Learning</button></div>${footerNote()}
  </main>`, '/dashboard');
}

function assessOption(status,score,title,desc,selected) {
  return `<button class="assess-option ${status} ${selected===status?'selected':''}" data-assess="${status}"><span class="score">${score}</span><strong>${title}</strong><p>${desc}</p></button>`;
}
function redFlag(i,status) {
  return i.classification === 'mandatory' && status === 'undone' ? `<div class="alert danger">${icon('alert')}<div><strong>Critical gap identified</strong><p>This indicator is configured as mandatory in the current demo dataset. An Undone status requires immediate attention. <b>Demo classification — final mapping follows IHRA approval.</b></p></div></div>` : '';
}

function renderSummary() {
  const s = stats();
  const list = applicableIndicators();
  const strengths = list.filter(i=>assessmentFor(i.id).status==='done');
  const improvements = list.filter(i=>assessmentFor(i.id).status==='partial');
  const critical = s.critical;
  const percent = Math.max(0, Math.min(100,s.score));
  app.innerHTML = shell(`<main class="page">
    <div class="section-head"><div><div class="eyebrow">Readiness Summary</div><h2>From assessment to corrective action</h2><p>A board-readable view of strengths, partial implementation and critical gaps.</p></div><div class="row-actions"><button class="btn secondary" data-action="open-report">${icon('download')} Download Summary</button><button class="btn primary" data-nav="/dashboard">Continue Assessment</button></div></div>
    <div class="grid-2">
      <div class="card pad summary-hero"><div class="progress-ring" style="--progress:${percent}%"><div><strong>${percent}%</strong><span>readiness</span></div></div><div><h3>${s.assessed} of ${s.total} assessed</h3><p style="color:#66777d;font-size:12px">Score shown against indicators currently assessed in this demo.</p><div class="status-bars">${summaryBar('done','Done',s.done,s.total)}${summaryBar('partial','Partial',s.partial,s.total)}${summaryBar('undone','Undone',s.undone,s.total)}</div></div></div>
      <div class="card pad"><div class="eyebrow">Recommended next actions</div><ol style="margin:8px 0 0;padding-left:20px;color:#52666c;font-size:12px;line-height:1.9"><li>Review learning material for identified gaps.</li><li>Complete corrective actions and prepare evidence.</li><li>Update the assessment status.</li><li>Re-run readiness assessment before inspection.</li></ol></div>
    </div>
    <div style="height:16px"></div>
    <div class="grid-3">
      ${summaryList('Strengths','Requirements marked Done',strengths,'success')}
      ${summaryList('Improvement Areas','Requirements marked Partially Done',improvements,'warning')}
      ${summaryList('Critical Gaps','Demo-configured mandatory requirements marked Undone',critical,'danger')}
    </div>${footerNote()}
  </main>`, '/summary');
}
function summaryBar(cls,label,val,total) { const width=total?Math.round(val/total*100):0; return `<div class="status-row"><span>${label}</span><div class="bar ${cls}"><span style="width:${width}%"></span></div><b>${val}</b></div>`; }
function summaryList(title,sub,list,tone) { return `<div class="card pad"><div class="eyebrow">${title}</div><h3>${sub}</h3><div style="height:12px"></div>${list.length?list.map(i=>`<div style="padding:9px 0;border-top:1px solid #edf2f1;font-size:11px"><b>MSDS ${i.id}</b><br><span style="color:#66777d">${i.title}</span></div>`).join(''):`<div class="badge ${tone==='danger'?'success':'neutral'}">${tone==='danger'?'No current critical gap':'None recorded yet'}</div>`}</div>`; }

function renderAccess() {
  const active = state.access?.active;
  app.innerHTML = shell(`<main class="page narrow">
    <div class="section-head"><div><div class="eyebrow">Paid / Time-Bound Access Concept</div><h2>Activate MSDS Self-Assessment Access</h2><p>This is a payment and access simulation only. The production system will connect to the payment method and fee approved by IHRA.</p></div></div>
    ${active ? `<div class="alert info"><div><strong>Demo access is currently active</strong><p>Reference ${state.access.reference} • ${state.access.starts} to ${state.access.expires}</p></div></div><div style="height:16px"></div>` : ''}
    <div class="card price-card"><h3>MSDS Self-Assessment Access</h3><p style="color:#65777d;font-size:12px">Healthcare establishment: <b>${escapeHtml(state.hce.name || 'Demo General Hospital')}</b><br>Category: <b>${escapeHtml(currentCategory())}</b></p><div class="price">As per IHRA-approved fee</div><span style="font-size:11px;color:#7a898e">No commercial fee is invented in this prototype.</span><ul class="check-list"><li>✓ Personalized applicable MSDS indicators</li><li>✓ Animated learning content and practical guidance</li><li>✓ Self-assessment with evidence notes</li><li>✓ Readiness summary and corrective-action view</li><li>✓ Demo access period: 30 days</li></ul><button class="btn primary full" data-nav="/payment-demo">Proceed to Payment ${icon('arrow')}</button></div>${footerNote()}
  </main>`, '/access');
}

function renderPayment() {
  app.innerHTML = shell(`<main class="page narrow">
    <div class="section-head"><div><div class="eyebrow">Payment Gateway Simulation</div><h2>Secure access activation</h2><p>For demonstration only — no real payment details are collected.</p></div></div>
    <div class="grid-2">
      <div class="card pad"><h3>Payment method</h3><div style="height:14px"></div><div class="field"><label>Payment option</label><select><option>Card / Bank / Digital Payment — Demo</option></select></div><div style="height:12px"></div><div class="field"><label>Reference placeholder</label><input value="DEMO TRANSACTION" disabled></div><div style="height:18px"></div><button class="btn primary full" data-action="complete-payment">Simulate Successful Payment</button></div>
      <div class="card pad"><div class="eyebrow">What production adds</div><h3>Configured IHRA payment service</h3><p style="color:#66777d;font-size:12px">Successful transaction activates the HCE account for the configured access period, stores a reference and becomes available for monthly reconciliation.</p><div style="height:10px"></div><div class="alert info"><div><strong>No gateway is connected here</strong><p>This screen proves the product flow without creating a false live transaction.</p></div></div></div>
    </div>${footerNote()}
  </main>`, '/access');
}

function renderPaymentSuccess() {
  app.innerHTML = shell(`<main class="page narrow"><div class="card pad" style="text-align:center;padding:52px 28px"><div style="width:72px;height:72px;border-radius:50%;display:grid;place-items:center;margin:0 auto 18px;background:#eaf7f1;color:#14805e;font-size:30px">✓</div><div class="eyebrow">Demo Payment Successful</div><h2>MSDS access activated</h2><p style="color:#66777d;max-width:540px;margin:12px auto 22px">Reference <b>${state.access.reference}</b><br>Access period: ${state.access.starts} — ${state.access.expires}</p><div class="row-actions" style="justify-content:center"><button class="btn primary" data-nav="/dashboard">Open My MSDS</button><button class="btn secondary" data-nav="/admin">Show IHRA Reconciliation View</button></div></div>${footerNote()}</main>`, '/access');
}

const adminHces = [
  ['Demo General Hospital','Hospital','7 / 10','67%','23 Sep 2026','Active'],
  ['Capital Medical Centre','Medical Centre / Clinic','4 / 7','75%','18 Sep 2026','Active'],
  ['BlueLine Diagnostics','Diagnostic / Laboratory','5 / 5','90%','02 Sep 2026','Expiring'],
  ['NorthCare Hospital','Hospital','10 / 10','82%','—','Completed']
];
const adminTx = [
  ['DEMO-IHRA-240826','Demo General Hospital','24 Aug 2026','IHRA-approved fee','Success'],
  ['DEMO-IHRA-210826','Capital Medical Centre','21 Aug 2026','IHRA-approved fee','Success'],
  ['DEMO-IHRA-030826','BlueLine Diagnostics','03 Aug 2026','IHRA-approved fee','Success']
];

function renderAdmin() {
  app.innerHTML = shell(`<main class="page">
    <div class="section-head"><div><div class="eyebrow">IHRA Administration</div><h2>Programme oversight at a glance</h2><p>Synthetic demo data showing how IHRA can monitor HCE activity, assessment progress, access and reconciliation.</p></div><button class="btn secondary" data-action="indicator-config">Indicator Configuration</button></div>
    <div class="grid-4"><div class="card stat-card"><span>Active HCE access</span><strong>126</strong><small>Synthetic demo metric</small></div><div class="card stat-card"><span>Assessments started</span><strong>94</strong><small>Current demo period</small></div><div class="card stat-card"><span>Assessments completed</span><strong>61</strong><small>65% completion</small></div><div class="card stat-card"><span>Average readiness</span><strong class="stat-accent">78%</strong><small>Across demo records</small></div></div>
    <div style="height:16px"></div>
    <div class="card pad"><div class="section-head" style="margin-bottom:8px"><div><h3>HCE Activity</h3><p>Assessment, readiness and access status.</p></div></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>HCE</th><th>Category</th><th>Assessment</th><th>Readiness</th><th>Access expiry</th><th>Status</th></tr></thead><tbody>${adminHces.map(r=>`<tr>${r.map((c,j)=>`<td>${j===5?`<span class="badge ${c==='Active'?'success':c==='Completed'?'info':'warning'}">${c}</span>`:c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>
    <div style="height:16px"></div>
    <div class="grid-2"><div class="card pad"><h3>Payments / Reconciliation</h3><div class="table-wrap"><table class="admin-table"><thead><tr><th>Transaction</th><th>HCE</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead><tbody>${adminTx.map(r=>`<tr>${r.map((c,j)=>`<td>${j===4?`<span class="badge success">${c}</span>`:c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div><div class="card pad"><div class="eyebrow">Central configuration</div><h3>Control without rebuilding</h3><p style="font-size:12px;color:#66777d">IHRA can configure HCE applicability, classification, learning content, scoring enablement and indicator status centrally. This keeps regulatory logic separate from presentation code.</p><button class="btn secondary small" data-action="indicator-config">Preview Indicator Settings</button></div></div>${footerNote()}
  </main>`, '/admin');
}

function renderIntegration() {
  app.innerHTML = shell(`<main class="page">
    <div class="section-head"><div><div class="eyebrow">Scale & Integration</div><h2>One framework across the complete MSDS library</h2><p>The demo uses a small set of indicators, while the product architecture separates content, applicability, assessment rules, access and reporting so the same experience can scale.</p></div></div>
    <div class="architecture">
      ${[['IHRA Website','Existing public entry point'],['Secure MSDS Module','HCE access & personalization'],['Payment Service','Approved gateway integration'],['Assessment Engine','Learning + 2/1/0 workflow'],['Reporting / Admin','Readiness, activity, reconciliation'],['Content Library','Videos, MSDS text, captions, guidance']].map(x=>`<div class="arch-node"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}
    </div>
    <div style="height:22px"></div>
    <div class="grid-3"><div class="card pad"><div class="eyebrow">Configurable</div><h3>Regulatory rules stay in data</h3><p style="font-size:12px;color:#66777d">Applicability, classification and scoring can follow IHRA-approved mappings without rewriting the HCE experience.</p></div><div class="card pad"><div class="eyebrow">Reusable</div><h3>One indicator template</h3><p style="font-size:12px;color:#66777d">Exact MSDS, learning video, Do's/Don'ts, assessment and evidence follow a consistent reusable pattern.</p></div><div class="card pad"><div class="eyebrow">Measurable</div><h3>Learning becomes readiness</h3><p style="font-size:12px;color:#66777d">Assessment state turns educational content into a visible improvement and oversight workflow.</p></div></div>
    <div style="height:22px"></div><div class="alert info"><div><strong>Production implementation</strong><p>Authentication, database, payment gateway, official taxonomy, IHRA-approved scoring/classification, APIs, security hardening, logs and final website integration are implemented after award and requirements validation.</p></div></div>
    <div style="height:22px"></div><div class="row-actions"><button class="btn primary" data-nav="/dashboard">Return to HCE Experience</button><button class="btn secondary" data-nav="/admin">Open IHRA Admin</button></div>${footerNote()}
  </main>`, '/integration');
}

function renderNotFound() {
  app.innerHTML = shell(`<main class="page narrow"><div class="card empty"><h2>Page not found</h2><p>This route is not part of the functional demo.</p><button class="btn primary" data-nav="/">Return Home</button></div></main>`);
}

function renderModal() {
  if (!modal) return '';
  if (modal === 'report') {
    const s=stats();
    return `<div class="modal-backdrop" data-action="close-modal"><div class="modal" onclick="event.stopPropagation()"><div class="modal-head"><div><div class="eyebrow">Readiness Report Preview</div><h2 style="font-size:26px">${escapeHtml(state.hce.name || 'Demo HCE')}</h2></div><button class="modal-close" data-action="close-modal">×</button></div><div class="grid-3"><div class="card stat-card flat"><span>Assessed</span><strong>${s.assessed}/${s.total}</strong></div><div class="card stat-card flat"><span>Readiness</span><strong>${s.score}%</strong></div><div class="card stat-card flat"><span>Critical gaps</span><strong>${s.critical.length}</strong></div></div><p style="font-size:12px;color:#66777d">A production report can include indicator-level status, evidence references, corrective actions and timestamped assessment history. PDF generation is simulated in this prototype.</p><div class="alert info"><div><strong>Demo download action</strong><p>The board can see where the report is generated without requiring a production reporting service before award.</p></div></div><div style="height:18px"></div><button class="btn primary full" data-action="fake-download">${icon('download')} Generate Demo PDF</button></div></div>`;
  }
  if (modal === 'config') {
    const i=indicators.find(x=>x.id===74);
    return `<div class="modal-backdrop" data-action="close-modal"><div class="modal" onclick="event.stopPropagation()"><div class="modal-head"><div><div class="eyebrow">Indicator Configuration Preview</div><h2 style="font-size:26px">MSDS ${i.id} — ${i.title}</h2></div><button class="modal-close" data-action="close-modal">×</button></div><div class="form-grid"><div class="field"><label>Classification</label><select><option>Mandatory — demo value</option><option>Essential</option><option>Standard</option></select></div><div class="field"><label>Status</label><select><option>Active</option><option>Inactive</option></select></div><div class="field"><label>Scoring</label><select><option>Enabled</option><option>Disabled</option></select></div><div class="field"><label>Learning video</label><input value="msds-74.mp4"></div></div><div style="height:16px"></div><div class="field"><label>HCE applicability</label><div class="category-grid"><div class="category-option selected"><strong>Hospital</strong><span>Included</span></div><div class="category-option selected"><strong>Medical Centre / Clinic</strong><span>Included</span></div></div></div><div style="height:14px"></div><div class="alert info"><div><strong>Configuration-driven by design</strong><p>The classification shown here is explicitly demo data. Production values will be loaded from IHRA-approved mappings.</p></div></div></div></div>`;
  }
  return '';
}

function attachModal() { document.body.insertAdjacentHTML('beforeend', renderModal()); }
function clearModal() { document.querySelector('.modal-backdrop')?.remove(); modal=null; }

function route() {
  clearModal();
  const p = location.pathname.replace(/\/+$/,'') || '/';
  if (p === '/') return renderHome();
  if (p === '/onboarding') return renderOnboarding();
  if (p === '/dashboard') return renderDashboard();
  if (p === '/summary') return renderSummary();
  if (p === '/access') return renderAccess();
  if (p === '/payment-demo') return renderPayment();
  if (p === '/payment-success') return renderPaymentSuccess();
  if (p === '/admin' || p === '/admin/indicators') return renderAdmin();
  if (p === '/integration') return renderIntegration();
  let m = p.match(/^\/indicators\/(\d+)\/assessment$/);
  if (m) return renderAssessment(Number(m[1]));
  m = p.match(/^\/indicators\/(\d+)$/);
  if (m) return renderIndicator(Number(m[1]));
  renderNotFound();
}

function navigate(path, replace=false) {
  const q = isDemo() ? '?demo=true' : '';
  history[replace?'replaceState':'pushState']({},'',path+q);
  route();
  scrollTo({top:0,behavior:'smooth'});
}

function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function toast(msg) {
  const root=document.getElementById('toast-root');
  const el=document.createElement('div'); el.className='toast'; el.textContent=msg; root.appendChild(el);
  setTimeout(()=>el.remove(),2800);
}

window.addEventListener('popstate',route);
document.addEventListener('click', e => {
  const nav=e.target.closest('[data-nav]');
  if(nav){ e.preventDefault(); navigate(nav.dataset.nav); return; }
  const cat=e.target.closest('[data-category]');
  if(cat){ state.hce.category=cat.dataset.category; saveState(); document.querySelectorAll('.category-option').forEach(x=>x.classList.toggle('selected',x.dataset.category===cat.dataset.category)); return; }
  const filter=e.target.closest('[data-filter]');
  if(filter){ activeFilter=filter.dataset.filter; renderDashboard(); return; }
  const assess=e.target.closest('[data-assess]');
  if(assess){ const id=Number((location.pathname.match(/indicators\/(\d+)/)||[])[1]); const status=assess.dataset.assess; state.assessments[id]={...(state.assessments[id]||{}),status,score:status==='done'?2:status==='partial'?1:0}; saveState(); document.querySelectorAll('.assess-option').forEach(x=>x.classList.toggle('selected',x.dataset.assess===status)); const i=indicators.find(x=>x.id===id); document.getElementById('red-flag').innerHTML=redFlag(i,status); return; }
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(!action) return;
  if(action==='save-onboarding'){
    state.hce.name=document.getElementById('hce-name').value.trim() || 'Demo Healthcare Establishment';
    state.hce.city=document.getElementById('hce-city').value.trim() || 'Islamabad';
    state.hce.registration=document.getElementById('hce-reg').value.trim(); saveState(); navigate('/dashboard');
  }
  if(action==='save-assessment'){
    const id=Number(e.target.closest('[data-id]').dataset.id); const a=assessmentFor(id);
    if(a.status==='not_started'){ toast('Select Done, Partially Done or Undone first.'); return; }
    state.assessments[id]={...a,notes:document.getElementById('assessment-notes').value.trim()}; saveState(); toast('Assessment saved. Readiness recalculated.'); navigate('/dashboard');
  }
  if(action==='simulate-upload') toast('Evidence upload is simulated in this pre-award demo.');
  if(action==='complete-payment'){
    const start=new Date(); const end=new Date(start); end.setDate(end.getDate()+30);
    const f=d=>d.toISOString().slice(0,10); state.access={active:true,starts:f(start),expires:f(end),reference:`DEMO-IHRA-${String(Date.now()).slice(-6)}`}; saveState(); navigate('/payment-success');
  }
  if(action==='reset-demo'){ seedDemo(true); activeFilter='all'; searchTerm=''; toast('Presentation demo reset to known state.'); navigate('/dashboard'); }
  if(action==='open-report'){ modal='report'; attachModal(); }
  if(action==='indicator-config'){ modal='config'; attachModal(); }
  if(action==='close-modal') clearModal();
  if(action==='fake-download') toast('Demo report generation shown successfully — production PDF service follows after award.');
});

document.addEventListener('input', e=>{
  if(e.target.id==='indicator-search'){ searchTerm=e.target.value; const caret=e.target.selectionStart; renderDashboard(); const n=document.getElementById('indicator-search'); if(n){n.focus();n.setSelectionRange(caret,caret);} }
});

route();
