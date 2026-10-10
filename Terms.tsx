import LegalPage, { type LegalSection } from "../components/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    heading: "acceptance & eligibility",
    body: "By accessing Typey, you confirm you are at least 13 years old and agree to these terms. If you are under 18, you confirm you have parental consent.",
  },
  {
    heading: "intellectual property & sharing",
    body: "All original quiz questions, text, branding, and design belong to Typey. You are free and encouraged to share screenshots, results, and links on social media (TikTok, Instagram, etc.) for personal, non-commercial fun. Commercial scraping or copying of text is prohibited.",
  },
  {
    heading: "disclaimer & limitation of liability",
    body: 'Typey is provided "as-is" without warranties. Typey and its operators are not liable for any damages, emotional distress, or misunderstandings resulting from quiz outcomes or site usage.',
  },
  {
    heading: "contact",
    body: "For legal inquiries, contact: typeyhub.app@gmail.com",
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="terms of service"
      updated="october 2026"
      sections={SECTIONS}
      accent="#C8B6FF"
    />
  );
}
