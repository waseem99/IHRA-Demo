# IHRA Demo — Implementation Backlog

This backlog is ordered for implementation on branch `ai/winning-demo-upgrade`.

## P0 — Boardroom must-haves

### W1 — Guided Board Story Mode
- [ ] Add demo-only story controller.
- [ ] Define deterministic 9-step story as data.
- [ ] Next / Previous / Reset / Exit controls.
- [ ] Ensure route + state synchronization.
- [ ] Add presenter-safe focus/highlight states.
- [ ] QA full 5–7 minute path.

### W2 — Dynamic HCE personalization
- [ ] Add visible category switcher.
- [ ] Recompute applicable indicators.
- [ ] Recompute denominator and readiness stats.
- [ ] Refresh dashboard cards and filters.
- [ ] Preserve state safely across category changes.

### W3 — Red-flag propagation
- [ ] Strengthen mandatory-configured Undone alert.
- [ ] Increment critical-gap count live.
- [ ] Update Readiness Summary.
- [ ] Update Admin view.
- [ ] Add corrective-action card.
- [ ] Preserve explicit demo-classification disclaimer.

### W4 — Payment / access / reconciliation trace
- [ ] Complete simulated access lifecycle.
- [ ] Add transaction reference and activation/expiry.
- [ ] Add days remaining / renewal state.
- [ ] Build proper Admin reconciliation table.
- [ ] Add month/category/status filters.
- [ ] Add CSV export simulation.
- [ ] Make payment transaction traceable into Admin by ID.

### W5 — IHRA Assessor Mode
- [ ] Add demo role switcher.
- [ ] Build `/assessor` route.
- [ ] Fee-free training library.
- [ ] Search/filter indicators.
- [ ] Remove payment prompts for assessor role.
- [ ] Add demo-policy disclaimer.

### W6 — Admin configuration with visible propagation
- [ ] Expand `/admin/indicators`.
- [ ] Editable demo classification.
- [ ] Editable HCE applicability.
- [ ] Scoring enabled + active/inactive flags.
- [ ] Save to session/local demo state.
- [ ] Show at least one immediate effect in HCE UI.

### W7 — Readiness report preview
- [ ] Add report preview page/modal.
- [ ] Include HCE/category/date/score/status breakdown.
- [ ] Include critical gaps + corrective actions.
- [ ] Include non-inspection disclaimer.
- [ ] Provide working browser print/download action.

### W8 — 303-indicator production tracker
- [ ] Build `/admin/content-production`.
- [ ] Add pipeline fixture model.
- [ ] Script / storyboard / animation / VO / captions / QA / IHRA review / publish statuses.
- [ ] Add aggregate cards.
- [ ] Add status filters.
- [ ] Demonstrate scale without inventing unapproved content.

### W9 — Presentation QA
- [ ] 1366×768 visual QA.
- [ ] 1920×1080 visual QA.
- [ ] Keyboard and focus QA.
- [ ] Deep-link refresh QA on Vercel.
- [ ] Missing-video fallback QA.
- [ ] Reset from every route.
- [ ] Ensure no dead buttons.

## P1 — Strong differentiators

### W10 — Audit trail
- [ ] `/admin/audit` route.
- [ ] Seed deterministic audit history.
- [ ] Capture live demo admin actions.
- [ ] Actor / role / action / entity / before / after / result.

### W11 — Bilingual & accessibility evidence
- [ ] Add Urdu VO / English caption badges to video cards.
- [ ] Add captions status in learning page.
- [ ] Optional limited Urdu UI toggle only for verified copy.
- [ ] Improve ARIA labels, semantic controls and touch targets.

### W12 — Integration architecture polish
- [ ] Improve `/integration` visual flow.
- [ ] Show website/module/API/NTC deployment modes.
- [ ] Show payment/media/auth side integrations.

## AI-first implementation workflow

For every workstream:

1. Read the existing route/state implementation before editing.
2. Represent behaviour as data/configuration before adding repeated markup.
3. Generate deterministic synthetic fixtures with stable IDs.
4. Generate edge cases and regression checks before coding.
5. Implement the smallest change that proves the requirement.
6. Run the complete Board Story path after each major change.
7. Reject any implementation that invents official IHRA policy, classifications, fees or thresholds.

## Merge gate

Do not merge to `main` until all P0 checks below pass:

- [ ] Demo story completes end to end.
- [ ] Category change recomputes correctly.
- [ ] Red flag propagates correctly.
- [ ] Payment reference reaches reconciliation.
- [ ] Assessor mode is visibly fee-free.
- [ ] Admin config change propagates.
- [ ] Report preview works.
- [ ] Production tracker communicates 303-scale.
- [ ] No dead links/buttons.
- [ ] No invented IHRA rule/fee/classification.
- [ ] Vercel deep links refresh correctly.
- [ ] Reset Demo is reliable.
