# IHRA Demo — AI-First Winning Upgrade Plan

## Objective

Upgrade the existing functional prototype from a strong pre-award demo into a boardroom-ready, procurement-winning product demonstration that visibly proves the highest-value IHRA requirements end to end.

This plan is implementation-oriented. It assumes the current static HTML/CSS/JavaScript architecture, deterministic `?demo=true` mode, synthetic data, localStorage state and Vercel deployment remain intact unless a requirement genuinely needs more.

## AI-first delivery principle

AI-first here means using AI to accelerate implementation, content structuring, synthetic data generation, QA and presentation safety — not using an LLM to make regulatory decisions.

### Use AI for

- Generating consistent synthetic HCE, assessment, audit and reconciliation data.
- Producing content metadata and demo-safe summaries from approved MSDS source material.
- Generating test cases and edge-case matrices from route/state behaviour.
- Accelerating UI copy variants, accessibility checks and code refactoring.
- Producing deterministic demo fixtures and presentation scripts.
- Generating CSV/PDF-style report data structures and sample corrective actions.

### Do not use AI for

- Deciding whether an indicator is officially Mandatory / Essential / Quality.
- Inventing IHRA fees, pass/fail thresholds or final HCE taxonomy.
- Rewriting authoritative MSDS wording.
- Making autonomous regulatory or clinical recommendations.

All regulatory logic remains configuration-driven and clearly demo-labelled where not formally confirmed by IHRA.

---

## Current baseline audit

The current demo already has a strong foundation and several previously identified winning features are implemented.

| Capability | Current status | Upgrade action |
|---|---|---|
| 10-indicator dataset | Implemented | Polish filters, counts and demo coverage |
| Indicator learning page | Implemented | Make one canonical "perfect" learning template |
| Exact MSDS wording | Implemented | Preserve exactly |
| Do's / Don'ts | Implemented | Preserve and standardize |
| Sample video support | Implemented for 278/74/70/41 | Add stronger player states + captions/language badges |
| Done / Partial / Undone | Implemented | Improve visual feedback and persistence |
| 2 / 1 / 0 score | Implemented | Add clearer score explanation |
| Evidence / notes | Implemented | Improve simulated evidence state |
| Mandatory red-flag | Implemented | Make the presentation moment more dramatic |
| HCE category logic | Implemented | Make category switching visibly alter counts/content |
| Readiness summary | Implemented | Upgrade board-level visuals and action summary |
| Paid/time-bound access | Implemented as simulation | Add full transaction/expiry/renewal lifecycle |
| Admin dashboard | Implemented | Expand configuration and operational visibility |
| Reconciliation concept | Implemented | Turn into a proper table + filters + export simulation |
| Integration / scale page | Implemented | Improve architecture visualization |
| Presentation mode | Implemented | Upgrade into guided Board Story Mode |
| Assessor mode | Not yet explicit | Build |
| 303-video production tracker | Not yet explicit | Build |
| Audit trail | Not yet explicit | Build |
| Downloadable readiness report | Simulated only | Add report preview + export action |
| Bilingual/accessibility showcase | Partial | Strengthen |

---

# Implementation phases

## Phase 0 — Preserve presentation safety

Before adding features:

1. Preserve `?demo=true` deterministic seed.
2. Preserve `Reset Demo`.
3. Preserve all demo disclaimers around classification, fees and synthetic data.
4. Keep zero mandatory backend dependencies.
5. Every new feature must work on Vercel as a static prototype.
6. No route can depend on external APIs during the live presentation.

Definition of done:
- A fresh browser can open `/?demo=true`, complete the full story, reset and repeat without developer tools.

---

## Phase 1 — P0: Board Story Mode

### Goal

Turn the current presentation mode into a controlled 5–7 minute guided journey.

### Build

Add a compact `Board Demo` controller visible only in demo mode:

- `Start Board Story`
- Current step indicator: `1 / 9`
- `Next` / `Previous`
- `Reset`
- Optional `Exit Story`

### Guided path

1. Welcome
2. Hospital category / personalized dashboard
3. MSDS 278 learning page
4. MSDS 278 assessment
5. MSDS 74 mandatory-configured red flag
6. Readiness summary
7. Payment / access activation
8. IHRA Admin + reconciliation
9. Integration / scale close

### AI-first implementation

Represent the story as data, not hard-coded navigation:

```js
const boardStory = [
  { route: '/dashboard', focus: 'applicable-indicators' },
  { route: '/indicators/278', focus: 'learning-video' },
  // ...
]
```

This lets AI/code tooling generate validation tests against the route sequence and prevents manual demo errors.

Acceptance:
- Presenter can run the complete demo using only Next/Previous.
- Deep links and normal navigation continue to work.
- Reset always returns the seeded story to a known state.

---

## Phase 2 — P0: Make the HCE experience visibly dynamic

### 2A. HCE category switcher

Add a visible category switch control on the dashboard.

When switching Hospital → Medical Centre / Clinic → Diagnostic / Laboratory:

- Applicable indicator count changes.
- Indicator cards change.
- Assessment denominator changes.
- Readiness score and assessed count recompute.
- A small banner explains: `Showing MSDS indicators applicable to the selected demo HCE category.`

### 2B. Canonical indicator detail template

Every demo indicator detail page should follow one consistent structure:

1. Indicator number + English title
2. Classification badge with confirmation state
3. Exact MSDS wording
4. Why it matters
5. Video / learning media
6. Urdu/English language status
7. English captions status
8. Do's
9. Don'ts
10. Self-assessment CTA
11. Assessment result summary when already answered

### 2C. Strong assessment response

When selecting Done / Partially Done / Undone:

- Animate selected state minimally.
- Show `Score impact: 2 / 1 / 0`.
- Save state immediately.
- Show confirmation: `Assessment saved`.
- Keep notes/evidence visible.

Acceptance:
- Category change visibly changes the system within 2 seconds.
- No stale scores or counts remain after category switching.

---

## Phase 3 — P0: Turn the mandatory red flag into the strongest demo moment

### Goal

Make the risk logic immediately understandable to a non-technical board member.

### Build

For a clearly demo-configured Mandatory indicator (MSDS 74 in presentation seed):

When status becomes `Undone`:

- Red top-level alert appears.
- `Critical Gap` count increments live.
- Readiness dashboard updates.
- Corrective Action card appears.
- Admin dashboard reflects the same critical gap.

Alert copy:

> Critical gap identified
>
> This indicator is configured as Mandatory in the current demonstration dataset and has been marked Undone. Immediate corrective attention is required.

Disclaimer:

> Demo classification — final classification will follow IHRA-approved mapping.

Acceptance:
- One click visibly changes at least three areas: assessment result, summary, admin visibility.

---

## Phase 4 — P0: Complete the access, payment and reconciliation story

### 4A. Access lifecycle

The simulated user journey must show:

- HCE category
- Access package
- Fee: `As per IHRA-approved fee`
- Proceed to payment
- Payment success
- Transaction reference
- Access activation date
- Expiry date
- Days remaining
- Renew access state

Never invent an IHRA fee.

### 4B. Admin reconciliation

Create a proper monthly reconciliation view with synthetic records:

Columns:
- Transaction ID
- HCE
- HCE Category
- Payment date
- Access start
- Access expiry
- Amount / rate placeholder
- Payment status
- Reconciliation status

Controls:
- Month filter
- Category filter
- Status filter
- `Export CSV` simulation
- `View transaction` drawer

Summary cards:
- Transactions this month
- Active access accounts
- Pending reconciliation
- Reconciled records

### AI-first implementation

Generate synthetic records from deterministic fixtures instead of typing rows manually. Use a seeded generator so the numbers never change unexpectedly during presentation.

Acceptance:
- Payment confirmation can be traced into Admin/Reconciliation by its transaction ID.

---

## Phase 5 — P0: IHRA Assessor Mode

### Goal

Prove the TOR-specific continuous training model for IHRA assessors.

### Add role switcher in demo mode

- HCE User
- IHRA Assessor
- IHRA Administrator

### Assessor experience

Route: `/assessor`

Show:
- `IHRA Assessor Training Library`
- Fee-free access badge
- Search MSDS
- Filter by category/topic
- Open all available training modules
- Recently viewed / training progress
- No payment gate

Clear statement:

> Demonstration of fee-free assessor access; final authentication and training governance will follow IHRA-approved policy.

Acceptance:
- Switching from HCE User → Assessor visibly changes navigation and removes payment/access prompts.

---

## Phase 6 — P1: 303-indicator content production control centre

### Goal

Answer the board's scale question before they ask it: `How will you actually manage 303 videos?`

Route: `/admin/content-production`

Table columns:
- MSDS ID
- Title
- HCE category applicability
- Script
- Storyboard
- Animation
- Urdu VO
- English captions
- Internal QA
- IHRA review
- Published
- Version

Statuses:
- Not Started
- In Draft
- In Review
- Approved
- In Production
- Complete
- Changes Requested

Dashboard cards:
- Total indicators
- Scripts approved
- Videos produced
- Awaiting IHRA review
- Published

### AI-first implementation

Use one central `contentPipeline` configuration object and derive cards/table/progress from it. Do not build duplicated markup.

Acceptance:
- Screen makes it obvious that 303 indicators can be managed as an operational pipeline.

---

## Phase 7 — P1: Admin configuration that visibly affects the HCE view

### Goal

Prove IHRA control instead of only describing it.

Route: `/admin/indicators`

Configuration drawer fields:
- Indicator number
- Title
- Classification
- `classificationConfirmed`
- Applicable HCE categories
- Learning video available
- Assessment enabled
- Active / inactive

Demo interaction:

1. Open one indicator in Admin.
2. Change a demo mapping/classification.
3. Save.
4. Return to HCE dashboard.
5. Show the changed applicability / classification / warning behaviour.

All changes stay local to the demo session and are clearly labelled synthetic/demo configuration.

Acceptance:
- At least one admin setting propagates into the HCE UI immediately.

---

## Phase 8 — P1: Readiness report preview + exports

### HCE report

Add `Download Readiness Report` button that opens a polished report-preview modal/page containing:

- HCE name
- Category
- Assessment date
- Applicable indicators
- Assessed indicators
- Readiness score
- Done / Partial / Undone breakdown
- Critical gaps
- Corrective actions
- Disclaimer that this is a readiness/self-assessment aid, not an official IHRA inspection result

For the prototype, browser print / generated HTML report is enough. Do not introduce a fragile PDF library unless necessary.

### Admin exports

Provide simulated / client-side CSV exports for:

- HCE activity
- Reconciliation
- Assessment summary

Acceptance:
- Export buttons create a visible result or download; no dead buttons.

---

## Phase 9 — P1: Audit trail and role-based evidence

Route: `/admin/audit`

Columns:
- Date/time
- Actor
- Role
- Action
- Entity
- Before
- After
- Result

Seed events such as:
- Indicator classification edited
- HCE category mapping updated
- Access activated
- Assessment submitted
- Reconciliation marked complete

### AI-first implementation

Create deterministic audit fixtures from user actions where possible and supplement with seeded synthetic history.

Acceptance:
- Admin changes create visible audit entries in the current session.

---

## Phase 10 — P1: Bilingual, accessibility and boardroom polish

### Language evidence

Add visible indicators for:
- Urdu Voice-over
- English Captions
- Video language

Optional prototype UI toggle:
- `English UI`
- `اردو` — limited to key demo copy only unless complete translation is available

Do not ship a half-translated experience as production-ready.

### Accessibility

- Keyboard focus visibility
- Semantic buttons/links
- ARIA labels where required
- Sufficient contrast
- 44px+ click/touch targets for primary controls
- Captions indication
- Responsive tablet/laptop layout

### Boardroom visual QA

Prioritize 1366×768 and 1920×1080 laptop/projector views.

Acceptance:
- No clipped cards, horizontal scrolling, tiny text or low-contrast critical states at presentation resolutions.

---

## Phase 11 — P2: Integration evidence

Upgrade `/integration` into a simple visual architecture with these nodes:

`IHRA Website / Entry Point`
→ `MSDS Learning & Self-Assessment Module`
→ `Application / API Layer`
→ `Assessment + Access + Reporting`
→ `IHRA Admin`

Side integrations:
- Approved payment provider
- Media/content store
- NTC / approved hosting
- Authentication / SSO where approved

Add implementation modes:
- Website module
- Sub-application / subdomain
- API integration
- NTC / approved hosting deployment

Acceptance:
- A non-technical stakeholder understands the deployment model in under 20 seconds.

---

# Implementation architecture

The current project is deliberately lightweight. Keep it that way for the presentation.

## Refactor target

Without introducing a framework migration, separate concepts inside `app.js` into clear modules/sections:

```txt
DATA
- indicator definitions
- demo fixtures
- content production fixtures
- transactions
- audit events

STATE
- HCE
- role
- assessments
- access
- admin demo configuration
- board story progress

DOMAIN HELPERS
- applicableIndicators()
- readinessStats()
- criticalGaps()
- accessStatus()
- reconciliationStats()

VIEWS
- HCE
- assessor
- admin
- reports
- integration

DEMO CONTROLS
- seedDemo()
- resetDemo()
- boardStory
```

If the code becomes difficult to maintain, split into small static JS files, but do not perform a framework rewrite before the presentation.

---

# Test strategy — AI-generated, human-verified

Create a `docs/DEMO_QA_MATRIX.md` and test every critical story.

Minimum tests:

1. Fresh demo seed works.
2. Reset works after every major route.
3. Category switching recomputes counts.
4. Done = 2, Partial = 1, Undone = 0.
5. Mandatory demo indicator + Undone produces critical warning.
6. Non-mandatory Undone does not falsely produce mandatory warning.
7. Payment success creates access dates/reference.
8. Reconciliation contains matching transaction reference.
9. HCE → Assessor role removes paywall prompts.
10. Admin config change propagates.
11. Report preview matches current assessment state.
12. No unconfirmed classification is presented as official IHRA policy.
13. No invented fee is displayed.
14. No real HCE/patient data exists.
15. All routes work on Vercel deep-link refresh.
16. 1366×768 presentation view has no clipping.
17. Mobile/tablet remains usable.
18. Missing video produces graceful fallback.

Use AI/code tooling to generate permutations and regression checks, but manually verify the seven-minute presentation path.

---

# Work order for implementation

## Must complete before board presentation

1. Board Story Mode
2. Dynamic HCE category switching
3. Red-flag propagation across assessment → summary → admin
4. Complete access/payment/reconciliation trace
5. IHRA Assessor Mode
6. Admin control with one live-propagating configuration change
7. Readiness report preview/export
8. 303-indicator production tracker
9. Presentation-resolution QA

## Complete if time remains

10. Audit trail
11. Limited bilingual UI toggle
12. Enhanced integration architecture
13. Additional export polish

---

# Definition of done

The upgraded demo is ready when a board member can watch one uninterrupted story and conclude:

1. The HCE can understand exactly what applies to it.
2. The HCE can learn through structured MSDS content and videos.
3. The HCE can assess itself and see a score immediately.
4. A critical mandatory-configured gap becomes visibly urgent.
5. IHRA can see the same activity centrally.
6. Access/payment/reconciliation are operationally thought through.
7. IHRA assessors have a separate continuous-training experience.
8. The 303-indicator content library is demonstrably manageable.
9. IHRA retains configuration and governance control.
10. The platform can integrate into the approved IHRA/NTC environment.

The demo should feel like the first working release of the proposed product — not a collection of disconnected mockups.
