import type { Category, Quiz } from "../types";
import { dailyRot } from "./dailyRot";
import { mainCharacter } from "./mainCharacter";
import { canonEvents } from "./canonEvents";
import { socialChemistry } from "./socialChemistry";
import { personaLab } from "./personaLab";

export { dailyRot, mainCharacter, canonEvents, socialChemistry, personaLab };

export const categories: Category[] = [
  dailyRot,
  mainCharacter,
  canonEvents,
  socialChemistry,
  personaLab,
];

/** a quiz paired with the category it lives in */
export interface QuizEntry {
  category: Category;
  quiz: Quiz;
}

export const allQuizzes: QuizEntry[] = categories.flatMap((category) =>
  category.quizzes.map((quiz) => ({ category, quiz })),
);

export function getCategory(id?: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getQuiz(catId?: string, quizId?: string): QuizEntry | undefined {
  const category = getCategory(catId);
  const quiz = category?.quizzes.find((q) => q.id === quizId);
  if (!category || !quiz) return undefined;
  return { category, quiz };
}

/** same-category quizzes first, then the rest — current quiz excluded */
export function getRecommendations(
  catId: string,
  quizId: string,
  count = 3,
): QuizEntry[] {
  const sameCategory = allQuizzes.filter(
    (e) => e.category.id === catId && e.quiz.id !== quizId,
  );
  const otherCategories = allQuizzes.filter((e) => e.category.id !== catId);
  return [...sameCategory, ...otherCategories].slice(0, count);
}
