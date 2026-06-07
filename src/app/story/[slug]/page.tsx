import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { storyChapters } from "@/data/story/chapters";

type Props = {
  params: {
    slug: string;
  };
};

export default function StoryChapterPage({ params }: Props) {
  const chapter = storyChapters.find((item) => item.slug === params.slug);

  if (!chapter) {
    return (
      <div className="pt-36 section-container">
        <h1 className="headline">Chapter not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-24">
      <section className="section-container">
        <Link href="/story" className="inline-flex items-center gap-2 text-[#E20074] mb-12">
          <ArrowLeft size={18} />
          Back to story
        </Link>

        <article className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#E20074] mb-6">
            {chapter.status}
          </p>

          <h1 className="headline mb-6">{chapter.title}</h1>

          <p className="subheadline mb-10">{chapter.subtitle}</p>

          <div className="quote-panel mb-12">
            <div className="quote-mark">“</div>
            <p className="relative z-10 text-2xl md:text-4xl leading-relaxed font-light text-zinc-100">
              {chapter.quote}
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10">
            <p className="text-zinc-400 leading-relaxed text-lg">
              This chapter is drafted in the story architecture and ready for writing.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}