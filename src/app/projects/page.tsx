import { projects } from "@/data/projects/projects";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="pt-36 pb-24">
      <section className="section-container mb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-[#E20074] mb-6">
          What I Build
        </p>

        <h1 className="headline mb-8">Systems. Stories. Solutions.</h1>

        <p className="subheadline max-w-3xl">
          A collection of apps, dashboards, tools, business ideas, and
          human-centered systems built to organize chaos and create momentum.
        </p>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="story-card flex flex-col h-full">
              <div className="flex items-center gap-3 mb-5">
                <Layers className="text-[#E20074]" size={30} />
                <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {project.category}
                </span>
              </div>

              <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="text-[#E20074] inline-flex items-center gap-2 mt-auto"
              >
                View project <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}