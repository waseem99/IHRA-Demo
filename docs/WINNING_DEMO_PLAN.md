# IHRA — Winning Functional Demo Plan

## 1. What this demo must prove

The board should understand, within a few minutes, that the proposed solution can:

1. Organize MSDS content by **HCE category**.
2. Teach an indicator through a structured **animated video + exact MSDS + Do's / Don'ts** experience.
3. Allow the HCE to self-assess each applicable indicator as **Done / Partially Done / Undone**.
4. Calculate and summarize assessment progress and score.
5. Surface a clear **warning / red-flag state** when an indicator configured as mandatory is not satisfactorily met.
6. Support **paid, time-bound access** as a product flow.
7. Give IHRA an **admin view** for HCE activity, assessments, access and reporting.
8. Scale the same pattern from the demo indicators to the complete MSDS library.

The objective is not to build every production integration now. The objective is to make the complete product concept feel real, coherent and technically credible.

---

## 2. Demo story — use this exact sequence

### Step 1 — Welcome / access

**Screen:** IHRA MSDS Digital Learning & Self-Assessment

Show:
- IHRA identity
- One-line purpose: `Learn the applicable MSDS requirements, assess your readiness, and identify gaps before inspection.`
- `Start Assessment` CTA
- Existing user `Sign In` link

**Presenter message:** This is a guided MSDS learning and readiness environment for healthcare establishments.

---

### Step 2 — Select healthcare establishment

**Screen:** `Tell us about your healthcare establishment`

Fields:
- HCE name: `Demo General Hospital`
- HCE category: dropdown/cards
- Registration number: optional demo field
- City: Islamabad

Recommended demo categories:
- Hospital
- Medical Centre / Clinic
- Diagnostic / Laboratory
- Other category placeholder

**Important:** The production system will use the official IHRA HCE taxonomy. Do not claim these demo labels are the final official list unless supplied by IHRA.

CTA: `Continue to My MSDS`

---

### Step 3 — Personalized MSDS dashboard

**Screen:** `Your MSDS Readiness`

Top cards:
- Applicable indicators: `10 demo indicators`
- Completed: dynamic count
- Needs attention: dynamic count
- Readiness score: dynamic percentage

Main content:
- Search indicators
- Filter: All / Not Started / In Progress / Completed / Needs Attention
- Indicator cards

Each card shows:
- Indicator number
- Indicator title
- Status
- Assessment state
- `Learn & Assess`

Use at least these sample cards:
- 278 — Healthcare Waste Segregation
- 74 — Medication Safety
- 70 — Patient Information / Follow-up
- 41 — Gender-Sensitive Examination / Chaperone

Add a small line: `Showing indicators applicable to the selected HCE category.`

---

### Step 4 — Indicator learning page

Use **Indicator 278** as the hero demo because it is visually clear.

**Screen layout:**

#### A. Indicator header
- `MSDS 278`
- `Healthcare Waste Segregation`
- status badge

#### B. Exact MSDS requirement
Put the exact supplied MSDS wording in a readable policy card.

#### C. Learning video
Video player using the submitted animated sample.

#### D. Why it matters
Short text:
`Correct waste segregation supports safer handling for patients, healthcare workers and the environment.`

#### E. Do's
- Display segregation guidance where waste is generated.
- Use approved, clearly marked colour-coded bins.
- Segregate waste at the point of generation.

#### F. Don'ts
- Do not mix different waste categories.
- Do not use unmarked or incorrectly labelled bins.
- Do not ignore displayed segregation guidance.

CTA: `Start Self-Assessment`

---

## 3. The most important interaction — self-assessment

### Screen: `Assess MSDS 278`

Question:
`What is the current implementation status of this requirement in your facility?`

Three large selectable cards:

### DONE
`The requirement is fully implemented and evidence is available.`

Demo score value: **2**

### PARTIALLY DONE
`Some parts are implemented, but gaps remain.`

Demo score value: **1**

### UNDONE
`The requirement is not currently implemented.`

Demo score value: **0**

Below the selection:

`Evidence / Notes` textarea

Optional demo upload control:
`Attach supporting evidence` — simulated only.

CTA: `Save & Continue`

### Scoring note

The demo can use the 2 / 1 / 0 interaction already described in the RFQ workflow. Any final weighting, mandatory/essential classification, category applicability, and pass/fail thresholds must remain configuration-driven and validated against IHRA's approved rules.

---

## 4. Mandatory-indicator red flag demo

This needs to be visually strong, but must not invent official IHRA mappings.

### Recommended implementation

Add a configuration field in demo data:

```ts
classification: 'mandatory' | 'essential' | 'standard'
```

For one **clearly labelled sample/demo record**, show the behaviour when a mandatory indicator is marked `Undone`.

Display:

**Red banner:**
`Critical gap identified`

Body:
`This indicator is configured as mandatory in the current demo dataset. An Undone status requires immediate attention.`

CTA:
`View Corrective Action`

Small disclaimer:
`Demo classification — final indicator classification will follow IHRA-approved mapping.`

This proves the red-flag logic without falsely claiming that a particular indicator is officially mandatory.

---

## 5. Assessment summary — the board-winning screen

After assessing 3–4 indicators, open:

### `Readiness Summary`

Top:
- Overall readiness score
- `7 of 10 assessed`
- Completed / Partial / Undone breakdown

Visuals:
- Donut/progress chart
- Horizontal status bars
- Red `Critical Gaps` area

Sections:

### Strengths
`Requirements currently marked Done`

### Improvement Areas
`Requirements marked Partially Done`

### Critical Gaps
`Mandatory-configured requirements marked Undone`

### Recommended next actions
1. Review the learning material for identified gaps.
2. Complete corrective actions.
3. Update assessment status and evidence.
4. Re-run readiness assessment before inspection.

Buttons:
- `Continue Assessment`
- `Download Readiness Summary` — simulated PDF action is sufficient for demo

---

## 6. Paid / time-bound access concept

Do not build a real payment gateway for the pre-award demo.

### Screen: `Activate MSDS Self-Assessment Access`

Show:
- Package: `MSDS Self-Assessment Access`
- HCE category
- Access duration: `30 days` — demo value only
- Price: `PKR —` or `As per IHRA-approved fee`

Do **not** invent a commercial fee.

CTA: `Proceed to Payment`

Next screen:

### Payment gateway simulation
- Card / bank / digital payment placeholder
- `Payment Successful`
- transaction/reference number
- access start date
- access expiry date

Presenter line:
`In production, this layer connects to the payment method approved by IHRA and activates access for the configured validity period.`

---

## 7. IHRA Admin view

One simple but polished admin dashboard is enough.

### Admin Dashboard

Top metrics:
- Active HCE access accounts
- Assessments started
- Assessments completed
- Average readiness
- Transactions this month

Tables:

### HCE Activity
Columns:
- HCE
- Category
- Assessment progress
- Readiness score
- Access expiry
- Status

### Payments / reconciliation
Columns:
- Transaction ID
- HCE
- Date
- Amount
- Status

Use synthetic demo data only.

### Indicator management preview
Show one configuration drawer/modal containing:
- Indicator number
- title
- HCE applicability
- classification
- learning video
- scoring enabled
- active/inactive

Presenter line:
`This demonstrates how IHRA can centrally configure applicability, learning content and assessment behaviour without changing the user-facing experience.`

---

## 8. Website integration screen

Show one final architecture/product screen:

`IHRA Website → MSDS Learning & Self-Assessment → Secure HCE Access → Assessment → Reporting / Admin`

Keep this visual. Do not over-engineer it.

Include:
- existing IHRA website
- secure module / sub-application
- payment service integration
- assessment engine
- reporting/admin
- content/video library

---

## 9. Routes to build

Recommended route map:

```txt
/
/onboarding
/dashboard
/indicators/278
/indicators/278/assessment
/summary
/access
/payment-demo
/admin
/admin/indicators
/integration
```

The demo should work without authentication or internet dependencies beyond loading the deployed app itself.

---

## 10. Demo data structure

```ts
type Indicator = {
  id: number
  title: string
  exactMsds: string
  whyItMatters: string
  dos: string[]
  donts: string[]
  videoUrl?: string
  applicableCategories: string[]
  classification: 'mandatory' | 'essential' | 'standard'
  classificationConfirmed: boolean
}

type Assessment = {
  indicatorId: number
  status: 'done' | 'partial' | 'undone' | 'not_started'
  score: 2 | 1 | 0 | null
  notes?: string
}
```

If `classificationConfirmed === false`, the UI must visibly identify the mapping as demo data in any area where it matters.

---

## 11. Visual direction

The interface should feel like a **government healthcare digital product**, not a generic SaaS dashboard.

Use:
- IHRA logo and brand colours
- white / off-white surfaces
- deep institutional blue/green
- clear accessibility-focused typography
- large status badges
- simple healthcare line icons
- generous spacing
- high contrast
- minimal decorative animation

Avoid:
- gradients everywhere
- glassmorphism
- excessive AI-looking illustrations
- tiny text
- overly technical dashboards
- developer terminology in the HCE-facing interface

The strongest visual moments should be:
1. Personalized readiness dashboard
2. Indicator learning page with video
3. Three-state assessment interaction
4. Red-flag behaviour
5. Readiness summary
6. Admin overview

---

## 12. What should actually work

### Must be functional
- Select HCE category
- Show indicator list
- Open an indicator
- Play/embed one or more sample videos
- Select Done / Partially Done / Undone
- Store selections during the demo
- Recalculate score/progress instantly
- Show red-flag behaviour based on configurable demo classification
- Generate summary screen
- Navigate simulated payment/access flow
- Navigate admin dashboard

### Can be simulated
- Login/authentication
- Real file upload
- Actual payment processing
- Email/SMS
- Real downloadable report generation
- Backend database
- Production reconciliation
- Final IHRA website SSO/API integration

---

## 13. Build priority — shortest path to a winning demo

### P0 — must be finished first
1. Brand shell / navigation
2. HCE category selection
3. Dashboard
4. Indicator 278 learning page
5. Self-assessment interaction
6. Dynamic summary
7. Red-flag demo

### P1 — makes it feel complete
8. Add Indicators 74, 70 and 41
9. Simulated access/payment
10. Admin dashboard

### P2 — presentation polish
11. Integration architecture page
12. Loading/empty states
13. Report-preview modal
14. Presentation/demo mode
15. Responsive QA

If time becomes constrained, protect **P0** at all costs.

---

## 14. Recommended presentation mode

Add a small hidden query parameter or button:

```txt
?demo=true
```

When active:
- seed the correct demo HCE
- seed 2–3 assessment answers
- remove irrelevant menus
- expose `Reset Demo`
- make the presentation path deterministic

This prevents the live demo from getting stuck because of accidental clicks or stale local state.

---

## 15. Seven-minute live demo script

### 0:00–0:45 — Problem
`MSDS requirements are comprehensive. The challenge is helping every HCE understand what applies to them, learn the requirement correctly, assess their readiness and identify gaps before regulatory inspection.`

### 0:45–1:30 — HCE personalization
Select `Hospital` and show the personalized indicator dashboard.

### 1:30–2:45 — Learn
Open MSDS 278. Show exact requirement, animation, Do's and Don'ts.

### 2:45–3:45 — Assess
Choose `Done`, then demonstrate a second configured sample indicator marked `Undone` and trigger the red-flag state.

### 3:45–4:45 — Results
Open the readiness summary and explain strengths, partial gaps and critical gaps.

### 4:45–5:30 — Access
Show paid/time-bound access concept.

### 5:30–6:30 — IHRA control
Open admin dashboard and show activity, reports, transactions and configurable indicator logic.

### 6:30–7:00 — Scale
Show architecture/integration screen.

Closing line:
`The demonstration uses a small indicator set, but the architecture is designed so the same learning, assessment and reporting framework can be applied consistently across the complete IHRA MSDS library.`

---

## 16. Acceptance checklist before board presentation

- [ ] No invented IHRA fee is shown.
- [ ] No unconfirmed indicator is presented as officially mandatory/essential.
- [ ] Exact MSDS text used in the demo matches the approved source.
- [ ] At least one submitted animation plays reliably.
- [ ] HCE category selection changes or clearly represents applicable content.
- [ ] Done / Partially Done / Undone selection works.
- [ ] Score/progress changes live.
- [ ] Red-flag behaviour works using clearly marked demo configuration.
- [ ] Readiness summary is visually strong and understandable in under 15 seconds.
- [ ] Payment is clearly a simulation, not a real transaction.
- [ ] Admin dashboard uses synthetic data.
- [ ] App works on the presentation laptop without developer tools.
- [ ] No broken links or empty routes.
- [ ] Reset Demo works.
- [ ] Backup screen recording of the full demo flow is prepared.

---

## 17. Definition of a winning demo

The board should leave with three conclusions:

1. **HCEs can understand MSDS requirements more easily.**
2. **IHRA can turn learning into measurable readiness and identify gaps.**
3. **The system can scale and be centrally controlled without rebuilding the experience for every indicator.**

Anything that does not strengthen one of these three messages is secondary for the pre-award prototype.
