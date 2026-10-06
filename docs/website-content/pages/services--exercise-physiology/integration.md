# Astro integration report — Exercise Physiology

6 October 2026. Local only; no commit, push or deployment. Technical status: PASS. Build, structural checks, desktop/mobile visual review, FAQ interaction and booking navigation passed.

- npm run build: passed; 16 pages built, 0 errors, 0 warnings, 30 hints (deprecated z API and inline script attributes).
- node --test tests/booking.test.mjs: 8 passed, 0 failed.
- Built pilot: one H1; metadata matches; all seven visible FAQs exactly match FAQPage JSON-LD and reviewed page data; all main-body local destinations and image files exist; booking uses /book/; closing and reception anchors render as anchors rather than literal HTML.
- Jordan portrait is static with reviewed name/role, rectangular reference geometry and face-aware crop. EP uses neutral navy background; no unrelated treatment image, founder portrait, video play control, extra credential, testimonial or funding strip.
- Team links use existing About and Book. EP overview link to absent /locations/ suppressed; Newport card goes to existing location page. Shared navigation/footer deliberately retain planned destinations, including absent team/qualifications and other clinics; outside pilot body scope.
- Public copy data is semantically identical to compliance-reviewed page-data.json; only non-copy showLocationsOverview=false added. Copy SHA256 c66ed1bad2e2646c1dc0ba4074a7a399c9a816155e002bfbc55fd75d759d4700.
- FeaturedPractitioner, osteopathy source, physiotherapy data, booking sources and homepage untouched. Scoped optional defaults retain other pages' existing content. Previous homepage stash untouched.

## Integrated source hashes

- src/data/services/exercise-physiology.json: `0cc014fd7c794ecbbccde0c643db5f98774ea4cccd681a6a16b9826fc930e6e4`
- src/data/services/types.ts: `c80446c58a4197953c18a4099fcfca408c0d7751a1124df6cae548b73409da37`
- src/pages/services/[slug].astro: `02f5a0b2d80d8c0e7d0a1858bc6b88103274e58bb4ba93ecf1f987d54860add9`

## Rendered verification

Parent agent verified Chrome at 1440 and 390 CSS px: viewport width equalled scrollWidth, with no horizontal overflow. IAB measurements at 2149/389 also had no overflow, but its screenshot backend failed; final evidence uses Chrome. All three body images loaded after scrolling. Jordan hero remains static without play controls, accurate role and appropriate crop. Desktop process cards and mobile team section passed. Mobile funding FAQ opens and shows the reviewed answer.

Header booking CTA navigated to /book/; Exercise Physiology category showed existing initial and return appointment links. No Cliniko submission occurred. Existing booking label typo “Return physiotherapylogy session” is outside the pilot changes and remains for a separate correction.

Evidence: pilot-desktop.jpg, pilot-mobile.jpg, pilot-mobile-faq.jpg in /private/tmp/alpha-ep-pilot and copied by parent to the client deliverable folder.

## Remaining review and resume instruction

Stage ready-for-review; draftReady true. Client approval remains pending for copy revision sha256:c66ed1bad2e2646c1dc0ba4074a7a399c9a816155e002bfbc55fd75d759d4700, local not-published. Current accreditation/provider acceptance, appointment details and consent documentation remain factual gaps.

Resume: read docs/website-content/project.md, content-plan.json, client-learnings.md and action-plan.md, then pages/services--exercise-physiology/{research,brief,copy,editor-review,compliance-review,integration}.md. Review the local /services/exercise-physiology/ pilot with Michael; record feedback and actual approver role against this revision. Any public wording change returns to independent editing/compliance delta review, then rebuild/reverify. Do not start the next batch or publish until separately authorised.


## Michael’s pilot tidy-up — 6 October 2026

Supersedes the original source hashes above for the current integrated revision. Shared service CSS provides 16px gaps between consecutive intro/explainer prose paragraphs and consistent muted explainer text. Underlined links retain the site’s link colour. Opening Newport clinic links to /locations/newport/. Team CTA is Meet Jordan at /staff/jordan-tripodi/; this route remains unbuilt as explicitly requested, not a completed profile. One-clinic location grids centre with a 420px desktop maximum and 342px phone width. No other public copy or clinical claims changed.

Independent editor-delta.md and compliance-delta.md pass for current copy revision sha256:bb0f3da298e3745fa4287441df9816c55bfeca980519345ac203647a39beeef2. Original reviews apply to unchanged text. npm run build passes (16 pages, 0 errors/warnings). Desktop 1440/mobile 390 CSS px show no overflow, paragraphs 16px apart and all explainer paragraphs rgb(107,114,128). Card centre 720px desktop, 195px phone. Shared spacing/colour also verified on physiotherapy. Booking data unchanged; prior 8 booking tests remain applicable. Screenshots paragraphs-desktop.jpg, paragraphs-mobile.jpg and clinic-desktop.jpg are in the client review pack. Local only, uncommitted/unpushed.

Current source hashes:
- src/data/services/exercise-physiology.json: `d79f8a480dafdb97d165ab6b97178053434cee2d2b337e03d5b4c112db768996`
- src/data/services/types.ts: `c80446c58a4197953c18a4099fcfca408c0d7751a1124df6cae548b73409da37`
- src/pages/services/[slug].astro: `34d53eeb0353ce139381acd673a8023e3e2031285653d4ce39ffd03b2f4b7f42`
- public/assets/css/service.css: `c73cb0b318c6271dac7209aca02d80988e9f89fb5f68fef9f6acfcf526ae340f`
