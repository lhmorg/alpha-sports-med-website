# Alpha website content project

Website repo: /Users/michaelcolman/Documents/Astro Projects/alpha-sports-med-website
Remote: https://github.com/lhmorg/alpha-sports-med-website
Live current site: https://alphasportsmed.com.au/
Knowledge: /Users/michaelcolman/Library/CloudStorage/GoogleDrive-michael@localhealthmarketing.com.au/Shared drives/LHM Knowledge/20 Clients/Alpha Sports Med
Working outputs: /Users/michaelcolman/Library/CloudStorage/GoogleDrive-michael@localhealthmarketing.com.au/Shared drives/Claude Workspace/Current Clients/Alpha Sports Med
Playbook: /Users/michaelcolman/Library/CloudStorage/GoogleDrive-michael@localhealthmarketing.com.au/Shared drives/LHM Knowledge/20 Clients/Alpha Sports Med/campaign-playbook.md
Profile: /Users/michaelcolman/Library/CloudStorage/GoogleDrive-michael@localhealthmarketing.com.au/Shared drives/LHM Knowledge/20 Clients/Alpha Sports Med/client_profile.md
Sitemap authority: /Users/michaelcolman/Library/CloudStorage/GoogleDrive-michael@localhealthmarketing.com.au/Shared drives/Claude Workspace/Current Clients/Alpha Sports Med/content-strategy/sitemap/Alpha-Sports-Med-Proposed-Sitemap-Opportunity.html, with subsequent Michael navigation edits in src/data/navigation.json.

## Implementation
Service reference: src/pages/services/osteopathy/index.astro, src/pages/services/[slug].astro, src/data/services/physiotherapy.json.
Condition reference: src/pages/conditions/[slug].astro and knee-pain/index.astro.
Company reference: src/pages/about/index.astro.
Practitioner profile: /staff/dr-ashton-wilson/.
Booking route: /book/. Cliniko appointment links remain inside the booking flow.
Build: npm run build. Existing booking checks: node --test tests/booking.test.mjs.
Local preview: http://127.0.0.1:4321/.

## Publication
Main pushes auto-deploy the Cloudflare prototype at https://alpha-sports-med-prototype.pages.dev/, not the current live clinic site. Content-batch publication destination has not yet been explicitly resolved. Produce local review drafts until Michael selects a destination. Approval to publish the skill is not approval to approve clinical copy on behalf of the client.

6 October 2026 pilot baseline: tracked working tree was clean when inspected. Earlier hero, booking link and homepage/menu changes are already in the baseline; preserve them. The earlier homepage stash remains untouched. Michael explicitly authorised this Exercise Physiology pilot locally for review. Do not commit, push or deploy it.

## Scope
Proposed batch: Meet Us and What We Do destinations. Existing About, Osteo and Physio are references to preserve; Chiropractic and Myotherapy also exist. Michael authorised all remaining What We Do destinations on 6 October 2026, including the expanded condition hubs. Exercise Physiology remains the completed reference pilot. No client content approval inferred from existing files.

## Remaining What We Do rollout
Scope confirmed by Michael: nine missing destinations in current navigation, including four condition hubs and Running Assessment. Existing five service pages preserved. Local review only; no publication destination resolved. Separate research, brief, copy, editorial and healthcare review precede integration. Family contract: templates/what-we-do-rollout.md.

What We Do rollout completed locally: nine new drafts ready-for-review, all14 menu routes built. Review pack: /Users/michaelcolman/Library/CloudStorage/GoogleDrive-michael@localhealthmarketing.com.au/Shared drives/Claude Workspace/Current Clients/Alpha Sports Med/astro-new/website-content/2026-10-06-what-we-do. Verification and unresolved publication checks: rollout-summary.md.

## Publication authorisation — 6 October 2026
Michael explicitly requested pushing these reviewed pages to main. This supersedes the earlier local-only instruction and authorises Cloudflare prototype deployment. End-client clinical approval remains pending; no deployment to alphasportsmed.com.au requested. Remote and rendered deployment verification follows the push.
