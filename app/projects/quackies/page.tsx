import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Quackies',
  description:
    'An AI-powered calorie tracker built around a simple idea — snap a photo of your meal and let AI do the logging. No food databases, no manual entry.',
  alternates: { canonical: `${siteConfig.url}/projects/quackies` },
  openGraph: {
    url: `${siteConfig.url}/projects/quackies`,
    images: [{ url: '/og/projects/quackies', width: 1200, height: 630 }],
  },
};

const QuackiesPage = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-2xl px-6 pt-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Home
        </Link>
      </div>
      <main className="mx-auto max-w-2xl px-6 py-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Project
        </p>
        <h1 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
          Quackies
        </h1>
        <p className="mb-12 leading-relaxed text-muted-foreground">
          An AI-powered calorie tracker built around a simple idea — snap a
          photo of your meal and let AI do the logging. No food databases, no
          manual entry.
        </p>

        <hr className="mb-12 border-border" />

        <section className="mb-12">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Why I built it
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            I wanted a different way to track calories without the bloat of
            existing apps. As a software engineer I could build it myself — it
            became the perfect project to practise an AI-native mindset,
            building genuinely around AI capabilities rather than bolting AI on
            as an afterthought.
          </p>
        </section>

        <hr className="mb-12 border-border" />

        <section className="mb-12">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Key features
          </h2>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                Photo-based meal logging
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Snap before/after eating, AI returns food names, portions,
                calories, and a confidence score. Up to 10 analyses per day.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                Smart calorie budget
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                BMR via Harris-Benedict formula × activity PAL, adjusted for
                goal and pace. Live remaining figure: TDEE − eaten + burned.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                Workout tracking
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Log duration, estimates ~7 kcal/min, feeds directly into
                remaining calories.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                Hydration tracking
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Configure bottle size, log in fractions, visual progress on
                dashboard.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                Duck mascot with 10 moods
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Reacts to calorie status — happy on track, worried when under,
                grumpy when over.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                Onboarding flow
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                6-step setup to compute a personalised daily calorie target
                before the user sees the dashboard.
              </p>
            </div>
          </div>
        </section>

        <hr className="mb-12 border-border" />

        <section className="mb-12">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Stack
          </h2>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Framework</span>
              <span className="text-sm text-foreground">
                React 19 + React Router 7 (Vite)
              </span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Language</span>
              <span className="text-sm text-foreground">TypeScript</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Animation</span>
              <span className="text-sm text-foreground">Framer Motion</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">
                Backend &amp; Auth
              </span>
              <span className="text-sm text-foreground">
                Supabase (Postgres, Auth, Storage)
              </span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">AI</span>
              <span className="text-sm text-foreground">
                Supabase Edge Functions (image-based meal analysis)
              </span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">PWA</span>
              <span className="text-sm text-foreground">Vite PWA Plugin</span>
            </div>
          </div>
        </section>

        <hr className="mb-12 border-border" />

        <section className="mb-12">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Still in progress
          </h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Three screens are actively being built:
          </p>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Log</span>
              <span className="text-sm text-foreground">
                Full meal history with day-by-day breakdown
              </span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm text-foreground">
                Weekly summary view
              </span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Profile</span>
              <span className="text-sm text-foreground">
                Edit personal details and recalculate targets
              </span>
            </div>
          </div>
        </section>

        <hr className="mb-12 border-border" />

        <section className="mb-12">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Screenshots
          </h2>
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {[
              {
                src: '/projects/quackies/dashboard.png',
                alt: 'Dashboard with live calorie remaining',
                caption: 'Dashboard with live calorie remaining',
              },
              {
                src: '/projects/quackies/photo-logging.png',
                alt: 'AI meal analysis from a photo',
                caption: 'AI meal analysis from a photo',
              },
              {
                src: '/projects/quackies/analyzed-meal.png',
                alt: 'Analyzed meal',
                caption: 'Analyzed meal',
              },
              {
                src: '/projects/quackies/onboarding.png',
                alt: 'Personalised setup flow',
                caption: 'Personalised setup flow',
              },
            ].map(({ src, alt, caption }) => (
              <figure key={src} className="w-72 flex-none snap-start">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={alt}
                    width={390}
                    height={844}
                    className="w-full"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <hr className="mb-12 border-border" />

        <div className="flex gap-6">
          <a
            href="https://quackies.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-amber-500 transition-colors hover:text-amber-400"
          >
            View live app →
          </a>
          <a
            href="https://github.com/aldinoanggawan/quackies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View source →
          </a>
        </div>
      </main>
    </>
  );
};

export default QuackiesPage;
