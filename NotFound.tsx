import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";
import type { CSSVars } from "../types";
import { Header } from "../components/Header";
import { Star } from "../components/Doodles";
import { Footer } from "../components/Footer";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col pb-16">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <div
          className="card-brutal relative bg-[#FDF8F0] p-10"
          style={{ "--tilt": "-1deg" } as CSSVars}
        >
          <div
            className="tape absolute -top-3 left-8"
            style={{ backgroundColor: "#FFB6D9", transform: "rotate(-5deg)" }}
          />
          <Star className="mx-auto w-12 -rotate-12" color="#FF6FB5" />
          <h1 className="font-display mt-4 text-5xl font-bold">404</h1>
          <p className="mt-3 text-2xl leading-snug">
            this page ghosted you. it happens to the best of us.
          </p>
          <Link
            to="/"
            className="btn-brutal mt-7 inline-flex items-center gap-2 bg-[#FFF4A3] px-6 py-2.5 font-display text-lg font-semibold"
            style={{ "--hover-bg": "#FFB6D9" } as CSSVars}
          >
            <HomeIcon className="h-5 w-5" strokeWidth={2.5} />
            take me home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
