import { Link, useLocation, useParams } from "react-router-dom";
import { Home as HomeIcon, RotateCcw, Sparkles } from "lucide-react";
import { getQuiz, getRecommendations } from "../data";
import { computeResultIndex, loadAnswers } from "../lib/scoring";
import type { CSSVars } from "../types";
import { Header } from "../components/Header";
import { QuizCard } from "../components/QuizCard";
import { Heart, Sparkle, Squiggle, Star } from "../components/Doodles";
import { Footer } from "../components/Footer";
import NotFound from "./NotFound";

const TILTS = ["-1.25deg", "1deg", "-0.75deg"];

export default function ResultPage() {
  const { catId, quizId } = useParams();
  const location = useLocation();
  const entry = getQuiz(catId, quizId);

  if (!entry) return <NotFound />;

  const { category, quiz } = entry;
  const stateAnswers = (location.state as { answers?: number[] } | null)?.answers;
  const answers = stateAnswers ?? loadAnswers(category.id, quiz.id);

  /* landed here with nothing scored (fresh visit, cleared storage, etc.) */
  if (!answers || answers.length === 0) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col pb-12">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
          <div
            className="card-brutal relative bg-[#FDF8F0] p-8 sm:p-10"
            style={{ "--tilt": "-1deg" } as CSSVars}
          >
            <div
              className="tape absolute -top-3 left-8"
              style={{ backgroundColor: category.color, transform: "rotate(-5deg)" }}
            />
            <h1 className="font-display text-4xl font-semibold">
              hmm, no answers found
            </h1>
            <p className="mt-3 text-2xl leading-snug">
              looks like you teleported here. the quiz demands answers first.
            </p>
            <Link
              to={`/quiz/${category.id}/${quiz.id}`}
              className="btn-brutal mt-7 inline-flex items-center gap-2 px-6 py-2.5 font-display text-lg font-semibold"
              style={{ backgroundColor: category.color } as CSSVars}
            >
              take the quiz
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  /* most-selected option index wins; ties resolve to the first tied index */
  const winnerIndex = computeResultIndex(answers, quiz.results.length);
  const result = quiz.results[winnerIndex];

  if (!result) return <NotFound />;

  const recs = getRecommendations(category.id, quiz.id, 3);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col pb-12">
      <Header />

      <main className="px-4 pt-10">
        <div className="text-center">
          <span
            className="pill inline-flex items-center gap-2 px-5 py-1.5 font-display text-base font-semibold"
            style={{ backgroundColor: category.color, transform: "rotate(-2deg)" }}
          >
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
            your result is in
          </span>
        </div>

        {/* torn-paper result card */}
        <div className="relative mt-10">
          <Star
            className="pointer-events-none absolute -left-3 -top-6 z-10 w-10 -rotate-12 sm:-left-8"
            color="#FF6FB5"
          />
          <Heart
            className="pointer-events-none absolute -right-2 top-10 z-10 w-8 rotate-12 sm:-right-7"
            color="#C8B6FF"
          />
          <Sparkle
            className="pointer-events-none absolute -bottom-5 left-10 z-10 w-7 rotate-6"
            color="#B4E7CE"
          />

          <div style={{ transform: "rotate(-1deg)" }}>
            <div className="torn-outline">
              <div className="torn-paper px-6 py-10 sm:px-12 sm:py-14">
                <div className="flex justify-center">
                  <span
                    className="pill px-4 py-0.5 font-display text-sm font-semibold"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.name} · certified
                  </span>
                </div>
                <h1 className="font-display mt-6 text-center text-5xl font-bold leading-tight sm:text-6xl">
                  {result.title}
                </h1>
                <div className="mt-4 flex justify-center">
                  <Squiggle className="h-5 w-52" color="#FF6FB5" />
                </div>
                <p className="mx-auto mt-6 max-w-xl text-center text-2xl leading-snug sm:text-3xl">
                  {result.callout}
                </p>
                <p className="mt-8 text-center text-base opacity-70">
                  scored using 100% vibes-based mathematics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            to={`/quiz/${category.id}/${quiz.id}`}
            className="btn-brutal inline-flex items-center gap-2 px-6 py-2.5 font-display text-lg font-semibold"
            style={
              {
                backgroundColor: category.color,
                "--tilt": "-1deg",
              } as CSSVars
            }
          >
            <RotateCcw className="h-5 w-5" strokeWidth={2.5} />
            retake it
          </Link>
          <Link
            to="/"
            className="btn-brutal inline-flex items-center gap-2 bg-white px-6 py-2.5 font-display text-lg font-semibold"
            style={{ "--tilt": "1deg", "--hover-bg": "#FFF4A3" } as CSSVars}
          >
            <HomeIcon className="h-5 w-5" strokeWidth={2.5} />
            back to home
          </Link>
        </div>

        {/* recommendations */}
        <section className="mt-20">
          <h2
            className="font-display text-center text-3xl font-semibold sm:text-4xl"
            style={{ transform: "rotate(-1deg)" }}
          >
            more quizzes you'll love
          </h2>
          <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recs.map((rec, i) => (
              <QuizCard
                key={rec.quiz.id}
                category={rec.category}
                quiz={rec.quiz}
                tilt={TILTS[i % TILTS.length] ?? "1deg"}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
