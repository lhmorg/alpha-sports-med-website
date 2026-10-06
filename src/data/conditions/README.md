# Condition page data

Each `<slug>.json` in this folder becomes `/conditions/<slug>/` via `src/pages/conditions/[slug].astro`.
Knee Pain is the approved reference page and keeps its own file (`src/pages/conditions/knee-pain/index.astro`, `src/data/knee-pain.json`).
The human-readable copy for each page lives in `content/<slug>.md`, in the same shape as `content/knee-pain.md`.

Strings marked (html) may contain inline `<a href="…">` and `<strong>` only. Everything else is plain text.
Sections marked optional can be omitted; the template skips them.

```jsonc
{
  "seo": { "title": "… | Alpha Sports Medicine", "description": "≤ 155 chars" },
  "breadcrumb": "Back pain",                        // short page name
  "hero": {
    "eyebrow": "Back pain treatment · Melbourne",
    "heading": "H1",
    "subheading": "1–2 sentences",
    "trust": ["No referral needed", "Four Melbourne clinics", "Health fund claiming"]   // optional, max 4
  },
  "urgent": {                                       // red flags; always present
    "eyebrow": "When to seek urgent care",
    "heading": "…",
    "paragraphs": ["(html)", "(html)"],             // 1–2 short paragraphs
    "linkLabel": "…", "linkUrl": "https://www.healthdirect.gov.au/…"   // optional, external authoritative source
  },
  "pattern": {                                      // optional: 3–6 cards (regions, presentations, types)
    "ghost": "WHERE", "eyebrow": "…", "heading": "…", "intro": "…",
    "items": [{ "title": "…", "kicker": "short trigger line", "copy": "(html)", "link": { "label": "…", "href": "/conditions/…/" } }]
  },
  "explainer": {                                    // optional: reframe / myth-busting section
    "ghost": "WHY", "eyebrow": "…", "heading": "…",
    "paragraphs": ["(html)", "…"],
    "link": { "label": "…", "href": "…", "external": true }          // optional
  },
  "focus": {                                        // optional: image + copy section for a sub-audience
    "eyebrow": "…", "heading": "…", "paragraphs": ["(html)"],
    "link": { "label": "…", "href": "/…/" },        // optional
    "caption": "short caption"
  },
  "process": {                                      // how we treat; exactly 6 steps
    "eyebrow": "How we treat back pain", "heading": "…",
    "steps": [{ "title": "…", "copy": "one sentence" }]
  },
  "note": {                                         // optional: balanced note (surgery, scans, medication)
    "eyebrow": "A balanced conversation", "heading": "…", "paragraphs": ["(html)"], "icon": "fa-notes-medical"
  },
  "servicesHeading": "optional H2 override",
  "services": [{ "title": "Physiotherapy", "copy": "…", "href": "/services/physiotherapy/", "icon": "fa-user-md" }],   // 3–5
  "related": [{ "title": "Neck pain", "href": "/conditions/neck-pain/" }],                                              // 4–6
  "locationsEyebrow": "Back pain treatment in Melbourne",
  "faqHeading": "Back pain FAQs",
  "faqs": [{ "question": "…", "answer": "plain text" }],   // 6–9
  "closing": { "eyebrow": "Your next step", "heading": "…", "copy": "…" }
}
```

Font Awesome 5 free-solid icons only (e.g. fa-user-md, fa-hands, fa-heartbeat, fa-child, fa-dumbbell, fa-spa, fa-bone).
Internal hrefs should follow the approved sitemap (`/services/<name>/`, `/conditions/<name>/`, `/locations/<name>/`), even if the page is not built yet.

## Local rollout options

Condition pages can set truthful hero.media (image/imageAlt/caption) or hero.practitioner (name/role/image/imageAlt), rendered statically against a neutral background. Explicit hero.trust: [] suppresses the trust strip. `clinics` supplies confirmed clinic subsets; [] displays enquiry copy without invented availability, while unset preserves legacy defaults. `locationsHeading`, `locationsCopy` and per-clinic `clinicLinks` href/label support existing booking destinations. New broad topic hubs use `medicalConditionName: null` to omit MedicalCondition schema; legacy unset values preserve existing schema. FAQ answers remain plaintext and must exactly match visible content. Public wording/media metadata changes require editorial and healthcare delta review.
