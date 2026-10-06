# Astro integration — conditions--hypermobility

6 October 2026. Local draft only. No commit, push or deployment. Technical and browser checks passed. Ready for local review; client approval pending.

## Exact review and integrated binding

- copy.md SHA256: `478fdf008d70ab961daa17947df9f63b5f246fb7cc01a451799a8622b1ec24ff`
- Reviewed page-data.json SHA256: `1aa7053957b12d1200d6379c0d1fd17ed209e6d98e5edd285c2bb09e514593b7`
- Integrated src/data/conditions/hypermobility.json SHA256: `535d905881500c6b6b10f73ba2cbcd5a4d086ecf0c3c46e023b0cc8cdd176640`
- Renderer src/pages/conditions/[slug].astro SHA256: `21b3115113d8fbdfe8dc71b76ba0e5435f784ce14afdaf89f90240a68cee7901`

Editor and healthcare review reports both matched exact copy/data hashes before integration. Public text, metadata, media alt/captions and FAQ answers semantically unchanged. Technical-only integrated fields: `{"clinicLinks": {"ascot-vale": {"href": "/book/", "label": "Enquire about Ascot Vale appointments"}, "bacchus-marsh": {"href": "/book/", "label": "Enquire about Bacchus Marsh appointments"}, "hawthorn": {"href": "/book/", "label": "Enquire about Hawthorn appointments"}}, "medicalConditionName": null}`. Clinic fallback links go to /book/ with explicit enquiry labels for destinations not yet built. Condition hubs use generic MedicalWebPage without representing broad topic as one MedicalCondition; coaching uses WebPage. These structural deltas implement the reviewed family contract and compliance conditions.

## Checks

- npm run build: passed, 25 static pages, 0 errors, 0 warnings, 30 hints.
- Existing booking tests: 8 passed, 0 failed. No Cliniko submission.
- This route /conditions/hypermobility/: one H1; title/canonical correct; all main-body local links and image files exist; all 7 visible FAQ questions and answers exactly match reviewed data and FAQPage schema.
- FA5 aliases applied in renderer only: activity→heartbeat, file-text→file-alt, move→arrows-alt, message-circle→comment, signpost→map-signs, footprints→shoe-prints, shirt→tshirt, sliders-horizontal→sliders-h. Other valid tokens gain fa- prefix; reviewed staging data hashes retained.
- Static truthful hero media; no inherited video, practitioner or empty trust claims on these new pages. Confirmed clinic subsets or enquiry copy; one/two cards centred. Shared navigation/footer planned routes remain outside body-link scope.
- Existing EP copy, homepage, booking data/tests and homepage stash preserved. Existing booking typo “Return physiotherapylogy session” remains outside rollout scope.

## Review gate

Parent browser verification PASS at desktop 1440×1000 and mobile 390×844 for all nine pages. All main images loaded after scrolling; first FAQ opened on every page. Desktop icons had glyph pseudo-content. Service paragraph spacing is 16px with consistent colour; condition spacing 20px. Pregnancy/hypermobility overflow corrected and all four condition pages retested with zero overflow. New-page hero navigated to /book/; Dietetics showed two existing appointment choices. No submissions. Evidence: /private/tmp/alpha-what-we-do/browser-checks.json. Root owns tracker updates. End-client approval remains pending by exact revision; local not-published.

Condition family layout delta: pregnancy and hypermobility mobile long-label buttons exposed intrinsic-grid overflow. Grid children now min-width:0 and explainer/focus buttons wrap within max-width:100%, preserving all words. Rebuild, structural checks and parent mobile recheck passed with zero overflow.
