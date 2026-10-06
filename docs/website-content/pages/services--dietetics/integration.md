# Astro integration — services--dietetics

6 October 2026. Local draft only. No commit, push or deployment. Technical and browser checks passed. Ready for local review; client approval pending.

## Exact review and integrated binding

- copy.md SHA256: `efe9d417bfd70e12c3bcae0024282e44b18a8a66b44dd2530923fa2dcba1dfc2`
- Reviewed page-data.json SHA256: `8a273a1bb1efd6aedbbbc73b7662910d58222e7282a693e5e8c34723d46c05ac`
- Integrated src/data/services/dietetics.json SHA256: `2d1a43ffb8858e8a961acadc8341a14146edb96e313d8aa6222b2253d9d351bf`
- Renderer src/components/ServicePage.astro SHA256: `54404f1e42eae3efacc6f93fab7f5531eacdb61f059e52c883aa7b71db204599`

Editor and healthcare review reports both matched exact copy/data hashes before integration. Public text, metadata, media alt/captions and FAQ answers semantically unchanged. Technical-only integrated fields: `{"clinicLinks": {}}`. Clinic fallback links go to /book/ with explicit enquiry labels for destinations not yet built. Condition hubs use generic MedicalWebPage without representing broad topic as one MedicalCondition; coaching uses WebPage. These structural deltas implement the reviewed family contract and compliance conditions.

## Checks

- npm run build: passed, 25 static pages, 0 errors, 0 warnings, 30 hints.
- Existing booking tests: 8 passed, 0 failed. No Cliniko submission.
- This route /services/dietetics/: one H1; title/canonical correct; all main-body local links and image files exist; all 7 visible FAQ questions and answers exactly match reviewed data and FAQPage schema.
- FA5 aliases applied in renderer only: activity→heartbeat, file-text→file-alt, move→arrows-alt, message-circle→comment, signpost→map-signs, footprints→shoe-prints, shirt→tshirt, sliders-horizontal→sliders-h. Other valid tokens gain fa- prefix; reviewed staging data hashes retained.
- Static truthful hero media; no inherited video, practitioner or empty trust claims on these new pages. Confirmed clinic subsets or enquiry copy; one/two cards centred. Shared navigation/footer planned routes remain outside body-link scope.
- Existing EP copy, homepage, booking data/tests and homepage stash preserved. Existing booking typo “Return physiotherapylogy session” remains outside rollout scope.

## Review gate

Parent browser verification PASS at desktop 1440×1000 and mobile 390×844 for all nine pages. All main images loaded after scrolling; first FAQ opened on every page. Desktop icons had glyph pseudo-content. Service paragraph spacing is 16px with consistent colour; condition spacing 20px. Pregnancy/hypermobility overflow corrected and all four condition pages retested with zero overflow. New-page hero navigated to /book/; Dietetics showed two existing appointment choices. No submissions. Evidence: /private/tmp/alpha-what-we-do/browser-checks.json. Root owns tracker updates. End-client approval remains pending by exact revision; local not-published.
