# IHRA MSDS Functional Demo

A focused pre-award prototype for demonstrating how IHRA's MSDS learning and self-assessment experience can work end to end.

## Demo objective

Show a board-ready journey that is simple, credible, and scalable:

**Select HCE category → View applicable MSDS indicators → Open an indicator → Watch the MSDS learning video → Review Do's / Don'ts → Self-assess as Done / Partially Done / Undone → See score and mandatory-indicator warning logic → View assessment summary → Preview paid/time-bound access → Show IHRA admin/reporting concept.**

This is a **functional demo**, not the final production platform. The demo should prove the user experience, logic, visual quality, and scalability without spending time on unnecessary backend work before award.

## Winning-demo principle

Do not try to demonstrate all 303 indicators. Demonstrate the **system** convincingly with a small set of real sample indicators and make it obvious that the same framework can scale to the full MSDS library.

Recommended sample indicators for the prototype:

- **278** — Healthcare Waste Segregation
- **74** — Medication Safety
- **70** — Patient Information / Follow-up
- **41** — Gender-Sensitive Examination / Chaperone

The existing 10 demo videos remain separate submission material; the prototype may link to selected samples.

## Build approach

- **Frontend:** Next.js + TypeScript
- **UI:** Tailwind CSS
- **Data:** local mock JSON / TypeScript objects
- **State:** client-side state + localStorage
- **Authentication:** simulated demo login only
- **Payments:** simulated payment/access flow only
- **Admin:** simulated dashboard with realistic mock data
- **Deployment:** Vercel-compatible

No production backend, payment gateway, or real patient/HCE data is required for this stage.

## Key rule

Do **not** invent official IHRA classifications, mandatory/essential mappings, or scoring rules that have not been supplied. Keep these configurable in the demo and label any unconfirmed mapping as demo/sample data.

See [`docs/WINNING_DEMO_PLAN.md`](docs/WINNING_DEMO_PLAN.md) for the complete screen flow, logic, acceptance criteria, presentation sequence, and build priorities.
