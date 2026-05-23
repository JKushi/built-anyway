import Link from "next/link";
import { BarChart3, BookOpen, Coffee, Laptop, Rocket } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pt-28">
      <section className="section-container min-h-[90vh] grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center py-20">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#E20074] mb-6">
            Built Anyway
          </p>

          <h1 className="headline mb-8">
            Builder. Analyst. Survivor.
            <span className="block text-[#E20074]">Still Becoming.</span>
          </h1>

          <p className="subheadline max-w-xl mb-10">
            A living digital memoir, innovation lab, and systems-thinking
            platform documenting growth, survival, analytics, creativity,
            rebuilding, leadership, and the unfinished process of becoming.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/story" className="primary-button">
              Read My Story
            </Link>

            <Link href="/projects" className="secondary-button">
              Explore Projects
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-skyline" />

            <div className="absolute inset-x-8 bottom-8 glass-panel p-6">
              <div className="flex items-center gap-4 mb-4">
                <Laptop className="text-[#E20074]" />
                <Coffee className="text-[#E20074]" />
              </div>

              <h2 className="text-3xl font-bold">
                Built<span className="text-[#E20074]">Anyway</span>
              </h2>

              <p className="text-zinc-400 mt-2">
                A documentary dashboard of becoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="quote-panel">
          <div className="quote-mark">“</div>
          <p className="text-2xl md:text-4xl leading-relaxed font-light text-zinc-100 max-w-4xl">
            I was already doing the work before anyone gave me the title.
          </p>
        </div>
      </section>

      <section className="section-container py-24">
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-10 items-start">
          <div>
            <p className="text-[#E20074] uppercase tracking-[0.25em] text-sm mb-4">
              Foundation
            </p>

            <h2 className="section-title max-w-sm">
              Built from chaos.{" "}
              <span className="text-[#E20074]">Refined</span> through survival.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="story-card">
              <BookOpen className="text-[#E20074] mb-5" size={34} />
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                From forensic accounting dreams to rebuilding, analytics,
                layoffs, and still creating anyway.
              </p>
              <Link href="/story" className="text-[#E20074]">
                Enter the timeline →
              </Link>
            </div>

            <div className="story-card">
              <Rocket className="text-[#E20074] mb-5" size={34} />
              <h3 className="text-2xl font-semibold mb-4">What I Build</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Human-centered systems, dashboards, mobile apps, games, tools,
                and ideas built for clarity.
              </p>
              <Link href="/projects" className="text-[#E20074]">
                Explore projects →
              </Link>
            </div>

            <div className="story-card">
              <BarChart3 className="text-[#E20074] mb-5" size={34} />
              <h3 className="text-2xl font-semibold mb-4">
                Dashboard of Becoming
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                A future-facing space exploring growth, burnout, finances,
                creativity, and career paths.
              </p>
              <Link href="/dashboard" className="text-[#E20074]">
                View concepts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-24">
        <div className="glass-panel p-10">
          <p className="text-[#E20074] uppercase tracking-[0.25em] text-sm mb-4">
            Currently Building
          </p>

          <h2 className="section-title mb-10">
            The next chapter is under construction.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="project-strip">
              <Rocket className="text-[#E20074]" size={36} />
              <div>
                <h3 className="text-xl font-semibold mb-2">AlphaSweep</h3>
                <p className="text-zinc-400 leading-relaxed">
                  A logic-driven mobile word and puzzle game built around
                  pattern recognition and strategic thinking.
                </p>
              </div>
            </div>

            <div className="project-strip">
              <BarChart3 className="text-[#E20074]" size={36} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Personalized Property Management App
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  A structured system combining organization, analytics,
                  emotional reinforcement, and grounding through family
                  connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-container py-10 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <h3 className="text-xl font-bold">
            Built<span className="text-[#E20074]">Anyway</span>
          </h3>

          <p className="text-zinc-500 text-center">
            A documentary dashboard of becoming.
          </p>

          <div className="flex md:justify-end gap-6">
            <Link href="/story" className="nav-link">Story</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/beliefs" className="nav-link">Beliefs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}