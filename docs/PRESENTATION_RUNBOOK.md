# IHRA Functional Demo — Presentation Runbook

## Before the presentation

1. Add the final MP4 files to `assets/videos/` using the exact filenames in `assets/videos/README.md`.
2. Deploy the repository as a static Vercel project.
3. Open the deployed URL with `?demo=true`.
4. Click `Reset` once before presenting.
5. Test MSDS 278 video playback and audio.
6. Test the full route: Dashboard → 278 → Assessment → Dashboard → 74 → Summary → Access → Admin → Integration.
7. Record one full backup screen capture of the flow.
8. Keep the four MP4 files and the screen recording locally on the presentation laptop.

## Seven-minute live flow

### 0:00–0:45 — Context
Open the landing page.

Presenter line:
> MSDS requirements are comprehensive. This solution helps each healthcare establishment understand what applies to them, learn the requirement, assess readiness and identify gaps before inspection.

### 0:45–1:30 — Personalization
Open `Start Assessment`, confirm `Demo General Hospital` and `Hospital`, then continue to the dashboard.

Show:
- Applicable indicators
- Assessed count
- Needs attention
- Readiness score

### 1:30–2:45 — Learn
Open **MSDS 278 — Healthcare Waste Segregation**.

Show:
- Exact MSDS requirement
- Animated sample video
- Why it matters
- Do's and Don'ts

### 2:45–3:45 — Assess
Open self-assessment.

Demonstrate:
- Done = 2
- Partially Done = 1
- Undone = 0
- Evidence / notes

Then return to the dashboard and open **MSDS 74** to point out the seeded demo mandatory / Undone red-flag behavior.

Say clearly:
> This classification is demo configuration. Final mappings will follow IHRA-approved rules.

### 3:45–4:45 — Readiness
Open **Readiness Summary**.

Show:
- Overall readiness
- Done / Partial / Undone breakdown
- Strengths
- Improvement areas
- Critical gaps
- Recommended actions

### 4:45–5:30 — Access
Open **Access**.

Show:
- Time-bound access concept
- `As per IHRA-approved fee`
- Simulated payment flow
- Access activation and reference

### 5:30–6:30 — IHRA control
Open **IHRA Admin**.

Show:
- HCE activity
- Assessment progress
- Readiness
- Access expiry
- Payments / reconciliation
- Indicator configuration preview

### 6:30–7:00 — Scale
Open **Integration**.

Closing line:
> The demonstration uses a small indicator set, but the same learning, assessment, access and reporting framework can scale across the complete IHRA MSDS library.

## Failure-safe rules

- If a video does not play, continue with the exact MSDS, Do's / Don'ts and assessment flow. Do not troubleshoot live.
- If browser state becomes inconsistent, click `Reset` in presentation mode.
- If the live deployment is unavailable, play the backup screen recording and continue the same narration.
- Do not quote an unapproved IHRA fee, pass/fail threshold, official mandatory mapping or final HCE taxonomy.
