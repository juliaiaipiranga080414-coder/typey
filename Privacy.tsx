import LegalPage, { type LegalSection } from "../components/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    heading: "no personal data collection",
    body: "Typey is an anonymous entertainment site. We do not require accounts, logins, or personal details (like your real name or address). Quiz answers are processed locally on your device and are not linked to your identity.",
  },
  {
    heading: "cookies & advertising",
    body: "We partner with third-party ad networks (like Google AdSense) that use cookies to serve non-personal, relevant ads based on web visits. You can manage or opt out of personalized ads at google.com/settings/ads.",
  },
  {
    heading: "coppa & ccpa compliance",
    body: "Typey is intended for users 13 years of age or older. We do not knowingly collect personal data from children under 13, and we do not sell consumer data.",
  },
  {
    heading: "contact us",
    body: "If you have questions about privacy, contact us at: typeyhub.app@gmail.com",
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="privacy policy"
      updated="october 2026"
      sections={SECTIONS}
      accent="#B4E7CE"
    />
  );
}
