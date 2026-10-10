import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../data";
import type { CSSVars } from "../types";
import { Heart, ScribbleArrow, Sparkle, Squiggle, Star } from "../components/Doodles";
import { Footer } from "../components/Footer";

const TILTS = ["-1.5deg", "1.25deg", "-0.75deg", "1.5deg", "-1.25deg"];
const TAPES = ["#FFF4A3", "#C8B6FF", "#FFB6D9", "#B4E7CE", "#FFF4A3"];
const STAGGER = ["", "lg:mt-10", "", "lg:-mt-4", "lg:mt-6"];

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-12">
      {/* floating hero doodles */}
      <Star
        className="pointer-events-none absolute left-[3%] top-24 w-10 -rotate-12 sm:w-14"
        color="#FF6FB5"
      />
      <Heart
        className="pointer-events-none absolute right-[4%] top-36 w-9 rotate-12 sm:w-12"
        color="#C8B6FF"
      />
      <Sparkle
        className="pointer-events-none absolute right-[16%] top-16 w-6 -rotate-6"
        color="#B4E7CE"
      />
      <Sparkle
        className="pointer-events-none absolute left-[14%] top-56 w-5 rotate-6"
        color="#FFF4A3"
      />

      <main className="flex flex-col items-center pt-14 text-center sm:pt-16">
        <span
          className="pill inline-block bg-[#FFF4A3] px-4 py-1 text-base sm:text-lg"
          style={{ transform: "rotate(-2deg)" }}
        >
          100% unscientific · 200% accurate
        </span>

        <h1
          className="font-display mt-5 select-none font-bold leading-none tracking-tight"
          style={{
            fontSize: "clamp(4.5rem, 17vw, 10.5rem)",
            textShadow: "0.05em 0.05em 0 #FF6FB5, 0.1em 0.1em 0 #C8B6FF",
            transform: "rotate(-2deg)",
          }}
        >
          typey
        </h1>

        <p
          className="mt-4 text-3xl leading-tight sm:text-4xl"
          style={{ transform: "rotate(-1deg)" }}
        >
          quizzes that read you like a book.
        </p>

        <Squiggle className="mt-3 h-5 w-56 sm:w-72" color="#FF6FB5" />

        <div
          className="mt-9 hidden items-end gap-3 sm:flex"
          style={{ transform: "rotate(2deg)" }}
        >
          <span className="font-display text-lg font-medium">pick your fighter</span>
          <ScribbleArrow className="h-8 w-14 rotate-[100deg]" />
        </div>
      </main>

      <section className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className={`card-brutal hoverable group relative p-6 ${STAGGER[i % STAGGER.length] ?? ""}`}
            style={
              {
                backgroundColor: category.color,
                "--tilt": TILTS[i % TILTS.length] ?? "-1deg",
              } as CSSVars
            }
          >
            <div
              className="tape absolute -top-3 left-7"
              style={{
                backgroundColor: TAPES[i % TAPES.length] ?? "#FFF4A3",
                transform: "rotate(-5deg)",
              }}
            />
            <div className="flex items-start justify-between">
              <span className="pill bg-white px-3 py-0.5 font-display text-sm font-semibold">
                {category.num}
              </span>
              {i % 2 === 0 ? (
                <Star className="w-8 rotate-6" color="#FFFFFF" />
              ) : (
                <Heart className="w-8 -rotate-6" color="#FFFFFF" />
              )}
            </div>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-none">
              {category.name}
            </h2>
            <p className="mt-2 max-w-[26ch] text-xl leading-tight">
              {category.tagline}
            </p>
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="pill bg-white/90 px-3 py-0.5 text-sm">
                {category.quizzes.length}{" "}
                {category.quizzes.length === 1 ? "quiz" : "quizzes"} live
              </span>
              <ArrowRight
                className="h-7 w-7 shrink-0 transition-transform duration-150 group-hover:translate-x-1.5"
                strokeWidth={2.5}
              />
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
}
