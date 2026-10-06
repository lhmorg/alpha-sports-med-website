# Healthcare advertising delta review — Exercise Physiology tidy-up

Reviewed 6 October 2026. **PASS for local review.** This is a bounded delta review, not a full healthcare re-review, legal certification or publication approval.

## Exact reviewed artefacts

- Baseline copy: `/private/tmp/alpha-ep-tidy/copy.md`, SHA256 `c66ed1bad2e2646c1dc0ba4074a7a399c9a816155e002bfbc55fd75d759d4700` (matches the original compliance review).
- Updated copy: `docs/website-content/pages/services--exercise-physiology/copy.md`, SHA256 `bb0f3da298e3745fa4287441df9816c55bfeca980519345ac203647a39beeef2`.
- Current integration data: `src/data/services/exercise-physiology.json`, SHA256 `d79f8a480dafdb97d165ab6b97178053434cee2d2b337e03d5b4c112db768996`.
- Original review: `docs/website-content/pages/services--exercise-physiology/compliance-review.md`.

## Delta and finding

The exact copy diff contains two changes only:

1. Wrap the existing introductory words “Newport clinic” in a link to `/locations/newport/`. The visible wording and service-location meaning are unchanged.
2. Change the team CTA from “About Alpha” (`/about/`) to “Meet Jordan” (`/staff/jordan-tripodi/`). This is a navigation label and target change requested by Michael. It adds no clinical, qualification, accreditation or outcome claim.

Current service data reflects these same two changes. The clinical descriptions, suitability qualifications, funding wording, Jordan's role and historical degree claim, FAQs, metadata, image descriptions and Newport-only availability remain unchanged in meaning. No new healthcare advertising issue is introduced by the reviewed delta.

The planned Jordan route is intentionally unbuilt and must remain recorded as a local-review limitation. This review does not verify the future profile page or any destination-page claims. It must be implemented and reviewed before publication with a functioning destination.

## Carry-forward bounds

The original review's findings and evidence limitations carry forward to the updated copy hash because the clinical wording and claims have not changed. In particular, individual ESSA register confirmation, media consent documentation, provider/funding acceptance and appointment details remain unverified; do not convert these into unconditional claims. The original integration conditions, Newport-only availability and local-only review status continue to apply.

Spacing, uniform font colours and single-clinic alignment are presentation changes and do not alter the reviewed wording. Rendered checks remain the integration stage's responsibility. No fresh regulatory research was needed for this two-link delta; this report relies on the original 6 October 2026 review and does not claim a new full regulatory-source audit.
