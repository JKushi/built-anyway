import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-36 pb-24">
      <section className="section-container">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[#E20074] mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft size={18} />
          Back to projects
        </Link>

        <article className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#E20074] mb-6">
            {project.category} · {project.status}
          </p>

          <h1 className="headline mb-6">{project.title}</h1>

          <p className="subheadline mb-10">{project.longDescription}</p>

          <div className="glass-panel p-8 md:p-10 mb-10">
            <h2 className="text-2xl font-semibold mb-6">Technology</h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-4 py-2 rounded-full border border-white/10 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">Goals</h2>

            <ul className="space-y-4">
              {project.goals.map((goal) => (
                <li key={goal} className="flex gap-3 text-zinc-300">
                  <span className="text-[#E20074]">◆</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}