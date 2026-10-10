import type { CSSProperties } from "react";

/** one of the five quiz hubs shown on the home page */
export interface Category {
  /** url slug, e.g. "daily-rot" */
  id: string;
  /** display number, e.g. "01" */
  num: string;
  /** lowercase display name, e.g. "daily rot" */
  name: string;
  /** pastel hex used for the card + accents */
  color: string;
  /** one-line lowercase vibe description */
  tagline: string;
  quizzes: Quiz[];
}

export interface Quiz {
  /** url slug, unique within its category */
  id: string;
  title: string;
  /** one-liner shown on the quiz card */
  blurb: string;
  questions: Question[];
  /**
   * results are index-addressed: option index n picks result index n.
   * ship quizzes with exactly 5 results so options 0-4 line up.
   */
  results: Result[];
}

export interface Question {
  text: string;
  /**
   * options are scored by position: option 0 -> result 0, option 1 -> result 1, etc.
   * ship questions with exactly 5 options unless the quiz needs fewer results.
   */
  options: string[];
}

export interface Result {
  title: string;
  callout: string;
}

/** CSSProperties that also accept CSS custom properties like "--tilt" */
export type CSSVars = CSSProperties & Record<string, string | number>;
