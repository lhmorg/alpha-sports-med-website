# Service page data

Each `<slug>.json` in this folder becomes `/services/<slug>/` via `src/pages/services/[slug].astro`.
Osteopathy (`src/pages/services/osteopathy/`) is the approved reference page and Shockwave Therapy keeps its own template; both are unchanged.
Human-readable copy lives in `content/<slug>.md` in the same shape as `content/osteopathy.md`, ending with a `## Review notes` section.
Types: `types.ts` (`ServicePage`). Strings marked (html) may contain inline `<a href>` and `<strong>` only.

```jsonc
{
  "seo": { "title": "≤ 60 chars | Alpha Sports Medicine", "description": "≤ 155 chars" },
  "breadcrumb": "Physiotherapy",
  "hero": { "eyebrow": "Alpha Sports Medicine · Physiotherapy", "heading": "H1", "subheading": "1–2 sentences" },
  "intro": { "eyebrow": "…", "heading": "…", "paragraphs": ["(html)", "(html)"], "caption": "short caption" },   // image optional; defaults to a clinic photo
  "explainer": { "eyebrow": "Plain-language care", "heading": "What is physiotherapy?", "paragraphs": ["(html)", "…"],
                 "concept": { "icon": "fa-link", "title": "short idea", "copy": "one line" } },            // concept optional
  "benefits": { "eyebrow": "How we work", "heading": "The Alpha physio difference", "intro": "one line",
                "items": [{ "icon": "fa-comments", "title": "…", "copy": "one sentence" }] },               // exactly 6
  "conditions": { "heading": "What physiotherapy may help with", "intro": "one line",
                  "items": [{ "title": "Back pain", "href": "/conditions/back-pain/", "icon": "fa-user-injured", "copy": "one line" }] },   // 6–10
  "visit": { "heading": "Your first physiotherapy appointment", "intro": "one line",
             "steps": [{ "title": "…", "copy": "one sentence" }],                                             // exactly 4
             "notes": [{ "icon": "fa-tshirt", "title": "…", "copy": "…" }] },                                 // 0–3, optional
  "team": { "eyebrow": "Our physiotherapists", "heading": "…", "copy": "2–3 sentences" },                    // image optional
  "clinics": ["newport", "ascot-vale", "bacchus-marsh", "hawthorn"],                                         // ONLY clinics that offer this service, per the brief
  "locationsHeading": "Physiotherapy across Melbourne",
  "faqHeading": "Physiotherapy FAQs",
  "faqs": [{ "question": "…", "answer": "plain text" }],                                                       // 5–8
  "closing": { "eyebrow": "Your next step", "heading": "…", "copy": "…" }
}
```

Font Awesome 5 free-solid icons only. Internal hrefs follow the approved sitemap (`/services/<name>/`, `/conditions/<name>/`, `/locations/<name>/`) even if the page is not built yet.

## Optional pilot overrides

- `hero.practitioner`: `{ name, role, image, imageAlt }` renders a static rectangular portrait with a neutral navy hero background. Only use verified service-relevant practitioner facts and imagery. It has no play controls or implied video. When absent, the existing FeaturedPractitioner behaviour is retained.
- `team.links`: an array of `{ label, href }` supplies the team section buttons. Choose existing local destinations; defaults remain the team and qualifications links.
- `showLocationsOverview: false`: hides the general `/locations/` overview link for a page. The clinic cards and site navigation remain unchanged; the default shows the overview link.
- `closing.copy` and `visit.notes[].copy` allow reviewed `<a href="/local/path/">`, `<a href="tel:digits">` and `<strong>` markup only. The renderer escapes other markup. Intro/explainer paragraphs already render HTML and require reviewed trusted source content. Do not add unchecked claims or arbitrary HTML; public wording/metadata/FAQ/alt changes require editorial and compliance delta review.

Exercise Physiology uses these options for its local review pilot. Data and copy review evidence are under docs/website-content/pages/services--exercise-physiology/.

## What We Do family extensions

The reusable output is now src/components/ServicePage.astro. The dynamic service route passes data and slug; /running-assessment/ passes its explicit route for the root canonical without a duplicate service page.
`hero.media` accepts image/imageAlt/caption for verified neutral clinic imagery when no service-relevant named practitioner is established. `locationsCopy` supports bounded availability enquiries; `clinicLinks` can override href/label by clinic for existing booking destinations. `schemaType` optionally uses WebPage for nonclinical coaching; MedicalWebPage remains the default. FontAwesome5 aliases are normalized only by the renderer, retaining reviewed public data. Public text changes still require fresh editorial/compliance delta review.
