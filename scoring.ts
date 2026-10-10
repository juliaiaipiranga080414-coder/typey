/**
 * scoring contract:
 * - every answer is the index of the chosen option (0-4)
 * - option index n maps to result index n
 * - the most-selected option index wins
 * - on a tie, the FIRST tied index wins (implemented by scanning
 *   left-to-right and only replacing the best on a strictly greater count)
 */
export function computeResultIndex(answers: number[], resultCount: number): number {
  const counts = new Array<number>(resultCount).fill(0);

  for (const answer of answers) {
    if (answer >= 0 && answer < resultCount) {
      counts[answer] += 1;
    }
  }

  let best = 0;
  for (let i = 1; i < counts.length; i++) {
    if (counts[i] > counts[best]) {
      best = i;
    }
  }
  return best;
}

/* --- answer persistence so /result survives a refresh -------------------- */

const keyFor = (catId: string, quizId: string) => `typey:answers:${catId}:${quizId}`;

export function saveAnswers(catId: string, quizId: string, answers: number[]): void {
  try {
    sessionStorage.setItem(keyFor(catId, quizId), JSON.stringify(answers));
  } catch {
    /* storage unavailable (private mode etc.) — navigation state still works */
  }
}

export function loadAnswers(catId: string, quizId: string): number[] | null {
  try {
    const raw = sessionStorage.getItem(keyFor(catId, quizId));
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    const answers = parsed.filter((n): n is number => typeof n === "number");
    return answers.length > 0 ? answers : null;
  } catch {
    return null;
  }
}

export function clearAnswers(catId: string, quizId: string): void {
  try {
    sessionStorage.removeItem(keyFor(catId, quizId));
  } catch {
    /* noop */
  }
}
