import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getQuiz } from "../data";
import { saveAnswers } from "../lib/scoring";
import type { CSSVars } from "../types";
import { Header } from "../components/Header";
import { Sparkle, Star } from "../components/Doodles";
import { Footer } from "../components/Footer";
import NotFound from "./NotFound";

const LETTERS = ["a", "b", "c", "d", "e"];
const CHIP_COLORS = ["#FFB6D9", "#C8B6FF", "#B4E7CE", "#FFF4A3", "#FF6FB5"];

export default function QuizPage() {
  const { catId, quizId } = useParams();
  const navigate = useNavigate();
  const entry = getQuiz(catId, quizId);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const isAdvancing = useRef(false);

  // Unlock input after React has committed the next question.
  useEffect(() => {
    isAdvancing.current = false;
  }, [idx]);

  if (!entry) return <NotFound />;

  const { category, quiz } = entry;
  const total = quiz.questions.length;
  const question = quiz.questions[idx];

  if (!question) return <NotFound />;

  function choose(optionIndex: number) {
    // Prevent an accidental rapid double-click from recording two answers.
    if (isAdvancing.current) return;
    isAdvancing.current = true;

    const nextAnswers = [...answers, optionIndex];
    if (idx + 1 >= total) {
      /* quiz complete: persist for refresh safety, then head to the result */
      saveAnswers(category.id, quiz.id, nextAnswers);
      navigate(`/quiz/${category.id}/${quiz.id}/result`, {
        state: { answers: nextAnswers },
      });
    } else {
      setAnswers(nextAnswers);
      setIdx(idx + 1);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col pb-12">
      <Header />

      <main className="px-4 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/category/${category.id}`}
            className="btn-brutal inline-flex items-center gap-2 px-4 py-1.5 font-display text-sm font-semibold"
            style={
              {
                backgroundColor: category.color,
                "--tilt": "-1.5deg",
                "--hover-bg": "#FFFFFF",
              } as CSSVars
            }
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={3} />
            {category.name}
          </Link>
          <span
            className="pill bg-white px-4 py-1 font-display text-sm font-semibold"
            style={{ transform: "rotate(1deg)" }}
          >
            question {idx + 1} of {total}
          </span>
        </div>

        {/* chunky progress bar */}
        <div className="pill mt-4 h-5 overflow-hidden bg-white">
          <div
            className="h-full transition-[width] duration-200"
            style={{
              width: `${(idx / total) * 100}%`,
              backgroundColor: category.color,
            }}
          />
        </div>

        {/* big handwritten question card */}
        <div
          className="card-brutal relative mt-10 bg-[#FDF8F0] p-7 sm:p-10"
          style={{ "--tilt": idx % 2 === 0 ? "-1deg" : "1deg" } as CSSVars}
        >
          <div
            className="tape absolute -top-3 left-1/2"
            style={{
              backgroundColor: category.color,
              transform: "translateX(-50%) rotate(-4deg)",
            }}
          />
          <div className="flex items-center justify-between gap-3">
            <span
              className="pill px-3 py-0.5 font-display text-sm font-semibold"
              style={{
                backgroundColor: CHIP_COLORS[idx % CHIP_COLORS.length] ?? "#FFB6D9",
                boxShadow: "2px 2px 0 #000",
              }}
            >
              q{idx + 1}
            </span>
            <Star className="w-7 rotate-12" color={category.color} />
          </div>
          <h1 className="mt-5 text-3xl leading-snug sm:text-4xl">{question.text}</h1>
          <Sparkle
            className="pointer-events-none absolute bottom-5 right-6 w-5 -rotate-12"
            color={CHIP_COLORS[(idx + 1) % CHIP_COLORS.length] ?? "#B4E7CE"}
          />
        </div>

        {/* stacked chunky options */}
        <div className="mt-9 flex flex-col gap-5">
          {question.options.map((option, i) => (
            <button
              key={i}
              type="button"
              onClick={() => choose(i)}
              className="btn-brutal flex w-full min-w-0 items-center gap-4 bg-white px-5 py-4 text-left text-2xl"
              style={
                {
                  "--tilt": i % 2 === 0 ? "-0.4deg" : "0.4deg",
                  "--hover-bg": category.color,
                } as CSSVars
              }
            >
              <span
                className="pill flex h-9 w-9 shrink-0 items-center justify-center font-display text-base font-semibold"
                style={{
                  backgroundColor: CHIP_COLORS[i % CHIP_COLORS.length] ?? "#FFB6D9",
                  boxShadow: "2px 2px 0 #000",
                }}
              >
                {LETTERS[i] ?? i + 1}
              </span>
              <span className="min-w-0 break-words leading-tight">{option}</span>
            </button>
          ))}
        </div>

        <p
          className="mt-8 text-center text-lg opacity-70"
          style={{ transform: "rotate(-1deg)" }}
        >
          no overthinking. first instinct only.
        </p>
      </main>

      <Footer />
    </div>
  );
}
