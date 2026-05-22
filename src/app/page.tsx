import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="section-container min-h-screen flex flex-col justify-center py-24">
        <div className="max-w-5xl">
          <p className="uppercase tracking-[0.3em] text-sm text-primary mb-6">
            Built Anyway
          </p>

          <h1 className="headline mb-8">
            Builder. Analyst. Survivor.
            <span className="gradient-text block">
              Still Becoming.
            </span>
          </h1>

          <p className="subheadline max-w-3xl mb-10">
            A living digital memoir, innovation lab, and systems-thinking
            platform documenting growth, survival, analytics, creativity,
            rebuilding, leadership, and the unfinished process of becoming.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/story"
              className="primary-button"
            >
              Read My Story
            </Link>

            <Link
              href="/projects"
              className="secondary-button"
            >
              Explore Projects
            </Link>
          </div>
        </div>

        <div className="mt-24 glass-panel p-8 max-w-4xl">
          <p className="text-2xl md:text-3xl leading-relaxed font-light text-zinc-200">
            “I was already doing the work before anyone gave me the title.”
          </p>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <section className="section-container py-24">
        <div className="mb-16">
          <p className="text-primary uppercase tracking-[0.25em] text-sm mb-4">
            Foundation
          </p>

          <h2 className="section-title">
            Built from chaos.
            <span className="gradient-text"> Refined through survival.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="story-card">
            <h3 className="text-2xl font-semibold mb-4">
              My Story
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              From forensic accounting dreams to bulletproof-glass phone stores,
              operational leadership, rebuilding life in Ohio, analytics,
              layoffs, and still creating anyway.
            </p>

            <Link
              href="/story"
              className="nav-link"
            >
              Enter the timeline →
            </Link>
          </div>

          <div className="story-card">
            <h3 className="text-2xl font-semibold mb-4">
              What I Build
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Human-centered systems, dashboards, mobile apps, games,
              operational tools, and ideas focused on clarity, connection,
              growth, and empowerment.
            </p>

            <Link
              href="/projects"
              className="nav-link"
            >
              Explore projects →
            </Link>
          </div>

          <div className="story-card">
            <h3 className="text-2xl font-semibold mb-4">
              Dashboard of Becoming
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              A future-facing analytical space exploring growth, burnout,
              finances, creativity, career projections, and the reality behind
              the metrics.
            </p>

            <Link
              href="/dashboard"
              className="nav-link"
            >
              View concepts →
            </Link>
          </div>
        </div>
      </section>

      {/* CURRENT BUILD */}
      <section className="section-container py-24">
        <div className="glass-panel p-10">
          <p className="text-primary uppercase tracking-[0.25em] text-sm mb-4">
            Currently Building
          </p>

          <h2 className="section-title mb-8">
            The next chapter is under construction.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                AlphaSweep
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                A logic-driven mobile word and puzzle game built around pattern
                recognition, challenge, and strategic thinking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Property Management + Motivation App
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                A structured property management system designed for my husband,
                combining organization, analytics, emotional reinforcement, and
                grounding through family connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-container py-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Built Anyway
            </h3>

            <p className="text-zinc-500 max-w-xl">
              A documentary dashboard of becoming.
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="/story" className="nav-link">
              Story
            </Link>

            <Link href="/projects" className="nav-link">
              Projects
            </Link>

            <Link href="/beliefs" className="nav-link">
              Beliefs
            </Link>

            <Link href="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
