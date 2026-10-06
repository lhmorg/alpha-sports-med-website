# Service family contract — 6 October 2026

References: local /services/osteopathy/ and /services/physiotherapy/, rendered 6 October; src/pages/services/osteopathy/index.astro, src/pages/services/[slug].astro, src/data/services/physiotherapy.json, types.ts and README.md. Layout references supplied by Michael; no end-client content approval inferred.

Keep the navy/orange visual system, two-column desktop hero / stacked mobile, service-hero, intro with image, explainer with optional concept, six process cards, reasons-to-visit cards, four appointment steps with optional notes, team, verified location module, FAQs and closing CTA. Reuse renderer and CSS; optional modules/data overrides may be added to prevent misleading defaults or broken required links. Condition-card count may be smaller where evidence/routes require it; do not invent clinical topics to fill a grid.

Data: ServicePage JSON under src/data/services/<slug>.json; dynamic getStaticPaths builds route. Required fields listed in types.ts. Inline HTML only strong and anchors. Booking /book/, phone from home.site. Never direct clinical CTAs to an unrelated modality. Existing booking route offers guided selection: use call fallback where EP booking availability isn't confirmed.

Hero: verified EP portrait only when source mapping supports it; otherwise truthful clinic image and neutral caption, no founder-as-EP. No artificial video controls. Existing FeaturedPractitioner auto-selects linked content but only Ashton is in collection; must override for pilot if no verified EP collection entry. Team photo must have accurate caption/alt.

Locations: ONLY verified EP availability. Unknown roster/location should use confirmation copy instead of an invented card. Body-required links must resolve; leave shared sitemap/navigation planned destinations visible per L001, record their existing 404s separately. Team /about/team/ and qualifications /about/qualifications/ currently absent, so pilot needs optional team CTAs targeting /about/ and /book/. Location details may be deferred or use verified current live URLs when local clinic page absent; prefer route-neutral confirmation module where scope is uncertain.

SEO: single H1, meaningful title <=60 and description <=155, canonical follows current prototype convention; MedicalWebPage + visible FAQPage as existing renderer. Add Service/BreadcrumbList only where accurate data and actual content justify it. No unverified clinical outcomes in schema.

Verification: npm run build; node --test tests/booking.test.mjs; rendered desktop/mobile, no overflow, images loaded, FAQ, body links and /book/ flow. Pilot stays local uncommitted/unpushed. Original Git status clean; homepage stash remains untouched.
