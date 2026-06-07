import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { storyChapters } from "@/data/story/chapters";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function StoryChapterPage({ params }: Props) {
  const { slug } = await params;

  const currentIndex = storyChapters.findIndex((item) => item.slug === slug);
  const chapter = storyChapters[currentIndex];

  const previousChapter =
    currentIndex > 0 ? storyChapters[currentIndex - 1] : null;

  const nextChapter =
    currentIndex < storyChapters.length - 1
      ? storyChapters[currentIndex + 1]
      : null;

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
        <Link
          href="/story"
          className="inline-flex items-center gap-2 text-[#E20074] mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft size={18} />
          Back to story
        </Link>

        <article className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#E20074] mb-6">
            Chapter {currentIndex + 1}
          </p>

          <h1 className="headline mb-6">{chapter.title}</h1>

          <p className="subheadline mb-10">{chapter.subtitle}</p>

          <div className="quote-panel mb-12">
            <div className="quote-mark">“</div>
            <p className="relative z-10 text-2xl md:text-4xl leading-relaxed font-light text-zinc-100">
              {chapter.quote}
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 space-y-6">
            {chapter.body?.map((paragraph, index) => (
              <p
                key={index}
                className="text-zinc-300 leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl">
          {previousChapter ? (
            <Link
              href={`/story/${previousChapter.slug}`}
              className="story-card group"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Previous Chapter
              </p>

              <div className="flex items-center gap-3 text-[#E20074] mb-3">
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span>Go back</span>
              </div>

              <h3 className="text-xl font-semibold">
                {previousChapter.title}
              </h3>
            </Link>
          ) : (
            <div className="story-card opacity-40">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Previous Chapter
              </p>
              <p className="text-zinc-400">This is the beginning.</p>
            </div>
          )}

          {nextChapter ? (
            <Link
              href={`/story/${nextChapter.slug}`}
              className="story-card group"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Next Chapter
              </p>

              <div className="flex items-center gap-3 text-[#E20074] mb-3">
                <span>Keep reading</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>

              <h3 className="text-xl font-semibold">
                {nextChapter.title}
              </h3>
            </Link>
          ) : (
            <div className="story-card opacity-40">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Next Chapter
              </p>
              <p className="text-zinc-400">This chapter is still becoming.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return storyChapters.map((chapter) => ({
    slug: chapter.slug
  }));
}