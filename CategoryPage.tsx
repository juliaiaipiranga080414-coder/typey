import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getCategory } from "../data";
import type { CSSVars } from "../types";
import { Header } from "../components/Header";
import { QuizCard } from "../components/QuizCard";
import { Heart, Sparkle, Star } from "../components/Doodles";
import { Footer } from "../components/Footer";
import NotFound from "./NotFound";

const TILTS = ["-1.25deg", "1deg", "-0.5deg", "1.25deg", "-1deg"];

export default function CategoryPage() {
  const { id } = useParams();
  const category = getCategory(id);

  if (!category) return <NotFound />;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col pb-12">
      <Header />

      <main className="px-4 pt-8">
        <Link
          to="/"
          className="btn-brutal inline-flex items-center gap-2 bg-white px-4 py-1.5 font-display text-sm font-semibold"
          style={{ "--tilt": "-1.5deg", "--hover-bg": "#FFF4A3" } as CSSVars}
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} />
          back home
        </Link>

        {/* category banner */}
        <div
          className="card-brutal relative mt-7 p-7 sm:p-10"
          style={{ backgroundColor: category.color, "--tilt": "-1deg" } as CSSVars}
        >
          <Star
            className="pointer-events-none absolute right-5 top-5 w-9 rotate-12 sm:w-12"
            color="#FFFFFF"
          />
          <Heart
            className="pointer-events-none absolute bottom-6 right-8 w-6 -rotate-12 sm:w-8"
            color="#FFFFFF"
          />
          <Sparkle
            className="pointer-events-none absolute bottom-9 right-24 w-5 rotate-6"
            color="#FFF4A3"
          />
          <span className="pill bg-white px-3 py-0.5 font-display text-sm font-semibold">
            {category.num}
          </span>
          <h1 className="font-display mt-4 text-5xl font-semibold leading-none sm:text-6xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-[30ch] text-2xl leading-tight">
            {category.tagline}
          </p>
          <div className="mt-6">
            <span className="pill bg-white/90 px-3 py-0.5 text-sm">
              {category.quizzes.length}{" "}
              {category.quizzes.length === 1 ? "quiz" : "quizzes"} live · more baking
            </span>
          </div>
        </div>

        {/* quiz grid */}
        <div className="mt-12 grid gap-9 sm:grid-cols-2">
          {category.quizzes.map((quiz, i) => (
            <QuizCard
              key={quiz.id}
              category={category}
              quiz={quiz}
              tilt={TILTS[i % TILTS.length] ?? "1deg"}
            />
          ))}

          {/* teaser for upcoming quizzes */}
          <div
            className="relative flex flex-col justify-center border-4 border-dashed border-black/50 bg-white/40 p-6"
            style={{ borderRadius: "1.25rem", transform: "rotate(1deg)" }}
          >
            <span className="font-display text-6xl font-bold leading-none text-black/60">
              ???
            </span>
            <p className="mt-3 max-w-[30ch] text-xl leading-snug text-black/70">
              more quiz chaos is currently in the oven. keep this tab rotting, bestie.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
