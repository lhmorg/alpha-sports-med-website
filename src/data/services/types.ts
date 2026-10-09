// Types for service page data rendered by src/pages/services/[slug].astro (schema notes in README.md).

export type ClinicSlug = 'ascot-vale' | 'newport' | 'bacchus-marsh' | 'hawthorn';

export interface ServicePage {
  seo: { title: string; description: string };
  breadcrumb: string;
  schemaType?: "MedicalWebPage" | "WebPage" | "Service";
  hero: { eyebrow: string; heading: string; subheading: string; background?: string; media?: { image: string; imageAlt: string; caption: string }; practitioner?: { name: string; role: string; image: string; imageAlt: string; cutout?: boolean; videoId?: string; videoPending?: boolean } };
  intro: { eyebrow: string; heading: string; paragraphs: string[]; image?: string; imageAlt?: string; caption: string };
  explainer: { eyebrow: string; heading: string; paragraphs: string[]; concept?: { icon: string; title: string; copy: string } };
  benefits: { eyebrow?: string; heading: string; intro: string; items: { icon: string; title: string; copy: string }[] };
  conditions: { heading: string; intro: string; items: { title: string; href: string; icon: string; copy: string }[] };
  visit: { heading: string; intro: string; steps: { title: string; copy: string }[]; notes?: { icon: string; title: string; copy: string }[] };
  team: { eyebrow: string; heading: string; copy: string; image?: string; imageAlt?: string; links?: { label: string; href: string }[] };
  clinics: ClinicSlug[];
  locationsHeading: string;
  locationsCopy?: string;
  clinicLinks?: Partial<Record<ClinicSlug, { href: string; label: string }>>;
  showLocationsOverview?: boolean;
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  closing: { eyebrow: string; heading: string; copy: string };
}
