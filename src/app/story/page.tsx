import Link from "next/link";
import { storyChapters } from "@/data/story/chapters";
import { ArrowRight } from "lucide-react";

export default function StoryPage() {
  return (
    <div className="pt-36 pb-24">
      <section className="section-container mb-20">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#E20074] mb-6">
            My Story
          </p>

          <h1 className="headline mb-8">
            The long way here
          </h1>

          <p className="subheadline max-w-3xl">
            This is not a story about perfection.
            <br />
            It is a story about becoming anyway.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {storyChapters.map((chapter, index) => (
            <div key={chapter.slug} className="relative">
              <div className="absolute -left-[3.25rem] md:-left-[3.65rem] top-1 w-5 h-5 rounded-full bg-[#E20074] shadow-[0_0_15px_rgba(226,0,116,0.8)]" />

              <div className="story-card">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#E20074] mb-2">
                      Chapter {index + 1}
                    </p>

                    <h2 className="text-3xl font-semibold">
                      {chapter.title}
                    </h2>
                  </div>

                  <span className="text-zinc-500 text-sm">
                    {chapter.status}
                  </span>
                </div>

                <p className="text-zinc-300 text-lg mb-6">
                  {chapter.subtitle}
                </p>

                <blockquote className="border-l-2 border-[#E20074] pl-5 italic text-zinc-400 mb-8">
                  {chapter.quote}
                </blockquote>

                <Link
                  href={`/story/${chapter.slug}`}
                  className="inline-flex items-center gap-2 text-[#E20074] hover:gap-3 transition-all"
                >
                  Read chapter
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}