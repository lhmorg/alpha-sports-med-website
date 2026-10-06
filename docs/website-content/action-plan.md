# Alpha action plan

Completed 6 October 2026: nine remaining What We Do destinations integrated locally and ready-for-review. All14 What We Do navigation destinations now build. See rollout-summary.md, content-plan.json and pages/<page-key>/ for exact drafts, independent reviews and integration evidence.

1. Michael can review locally through the What We Do menu at http://127.0.0.1:4321/services/clinical-pilates/. Capture feedback against each copy revision; distinguish internal Michael feedback from end-client approval.
2. If wording changes, run fresh editorial and healthcare delta checks before re-integrating. End-client approval remains pending for all new drafts and EP; unchanged older pages have unknown approval.
3. Named clinician sign-off for paediatric/pregnancy content, current provider/credential/funding/appointment/media checks where relevant, and a resolved publication destination remain before publishing. Unsupported stronger assertions were omitted; no material unresolved claim remains in current local drafts.
4. Meet Us and Who We Support remain separate future batches. Planned global navigation/footer links outside What We Do retained. No redirects or new practitioner profiles built in this rollout.

Verified: build25pages0errors/0warnings30hints; eight booking checks; all9new bodylinks/assets/metadata/canonical/visibleFAQ+schema; desktop1440 and mobile390, images/FAQ; zero final overflow. Long condition resource buttons wrap. All14nav destinations exist. No booking submissions.

Preservation: EP copy/data unchanged, unrelated baseline hashes preserved, homepage stash untouched. EP sole planned-body-link exception /staff/jordan-tripodi/ remains expressly authorised. Existing “Return physiotherapylogy session” booking label outside scope. All work local, uncommitted, unpushed, unpublished; main pushes auto-deploy Cloudflare prototype.

Resume: read project.md, content-plan.json, client-learnings.md and this action-plan.md first; inspect Git state; use templates/what-we-do-rollout.md and each page’s exact saved artifacts. Review current local drafts or apply specific feedback. Durable review pack path in rollout-summary.md and project.md. Do not restart production or overwrite the pilot.

## Publication authorisation — 6 October 2026
Michael explicitly requested pushing these reviewed pages to main. This supersedes the earlier local-only instruction and authorises Cloudflare prototype deployment. End-client clinical approval remains pending; no deployment to alphasportsmed.com.au requested. Remote and rendered deployment verification follows the push.

Publication verified: source commit140846b7db416791cde92f06c10673e52f1d96da pushed to main. GitHub deployment37403205666 succeeded; nine new routes and EP pilot rendered correctly on Cloudflare prototype. Browser verification used because direct HTTP checks returned403. Client approval remains pending.
