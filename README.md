# IHRA MSDS Functional Demo

A board-ready pre-award prototype that demonstrates the proposed IHRA MSDS learning, self-assessment, readiness, paid-access and administration experience end to end.

## What is implemented

The demo now includes:

- IHRA-branded welcome experience
- HCE onboarding and category selection
- Personalized applicable MSDS dashboard
- Search and status filters
- 10-indicator demo dataset
- Indicator learning pages with exact supplied MSDS wording
- Video slots for the submitted 278, 74, 70 and 41 samples
- Do's / Don'ts and practical learning content
- Done / Partially Done / Undone self-assessment
- Demo 2 / 1 / 0 scoring
- Evidence/notes field and simulated evidence upload
- Configuration-driven mandatory-indicator red-flag behaviour
- Dynamic readiness summary
- Corrective-action view
- Simulated paid / time-bound access flow
- Simulated payment-success and access activation
- IHRA administration dashboard using synthetic records
- Payments / reconciliation concept
- Indicator configuration preview
- Integration / scale architecture view
- `?demo=true` presentation mode with deterministic seeded data
- `Reset Demo` control
- Graceful missing-video fallback
- Responsive boardroom-friendly interface

## Run locally

No build step is required. Serve the repository as static files, for example:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/?demo=true
```

Because the app uses browser history routes, Vercel is the recommended hosted demo environment. `vercel.json` rewrites all application routes back to `index.html`.

## Presentation mode

Use:

```text
/?demo=true
```

Presentation mode seeds:

- `Demo General Hospital`
- Hospital category
- MSDS 278 = Done
- MSDS 70 = Partially Done
- MSDS 74 = Undone
- A demo-configured mandatory classification on MSDS 74 to prove the red-flag interaction
- Active 30-day demo access

The interface clearly labels unconfirmed classifications and synthetic records as demo configuration rather than official IHRA policy.

## Add the submitted sample videos

Place the final H.264 MP4 files in `assets/videos/` using these exact names:

- `msds-278.mp4`
- `msds-74.mp4`
- `msds-70.mp4`
- `msds-41.mp4`

See [`assets/videos/README.md`](assets/videos/README.md).

## Seven-minute board demo path

1. Welcome — explain the MSDS learning/readiness problem.
2. Select Hospital / open the personalized dashboard.
3. Open MSDS 278 and show exact requirement, sample animation and Do's / Don'ts.
4. Open self-assessment and show Done / Partial / Undone.
5. Open MSDS 74 to show the demo mandatory red-flag state.
6. Open Readiness Summary and corrective actions.
7. Show paid/time-bound access and payment simulation.
8. Show IHRA Admin and reconciliation.
9. Close on Integration / Scale.

## Important prototype rules

- No unconfirmed indicator is presented as officially mandatory/essential.
- No final HCE taxonomy is claimed.
- No IHRA fee is invented.
- No real patient/HCE data is used.
- Payment, authentication, uploads, reporting PDF and production integrations are simulated.
- Exact MSDS wording in the demo dataset is preserved from the supplied demonstration material.

See [`docs/WINNING_DEMO_PLAN.md`](docs/WINNING_DEMO_PLAN.md) for the original demo strategy and acceptance checklist.
