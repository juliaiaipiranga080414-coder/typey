import LegalPage, { type LegalSection } from "../components/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    heading: "for entertainment purposes only",
    body: "All quizzes, personality titles, callouts, and results on Typey are created strictly for entertainment, satirical, and comedic purposes. Nothing on this site constitutes professional medical, psychiatric, psychological, or academic advice.",
  },
  {
    heading: "no clinical validity",
    body: 'Concepts like "burnout," "anxiety," "delulu," or "pathology" used across Typey are pop-culture metaphors and internet slang. They are not scientifically validated diagnostic tools or medical evaluations.',
  },
  {
    heading: "liability & crisis resources",
    body: "By using Typey, you agree that you take these quizzes voluntarily at your own risk. If you are experiencing real-world mental health struggles or emotional crisis, please contact a professional or call/text 988 (US Crisis Lifeline) or your local emergency services.",
  },
];

export default function Disclaimer() {
  return (
    <LegalPage
      title="entertainment disclaimer"
      updated="october 2026"
      sections={SECTIONS}
      accent="#FF6FB5"
    />
  );
}
