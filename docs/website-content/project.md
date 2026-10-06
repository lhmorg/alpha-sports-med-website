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

Existing uncommitted edits are Michael-requested hero, booking link and homepage/menu changes. Preserve them. The earlier homepage stash must remain untouched.

## Scope
Proposed batch: Meet Us and What We Do destinations. Existing About, Osteo and Physio are references to preserve; Chiropractic and Myotherapy also exist. Confirm whether linked condition hubs under expanded disciplines belong in the first batch. First pilot: Exercise Physiology only. No client content approval inferred from existing files.
