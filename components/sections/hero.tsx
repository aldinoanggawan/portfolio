import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ScrollToButton } from '@/components/scroll-to-button';

export const Hero = () => {
  return (
    <section className="flex min-h-[75vh] flex-col items-start justify-center px-6 pt-24 pb-16 mx-auto max-w-4xl w-full">
      <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
        <span className="sm:hidden">Frontend Engineer</span>
        <span className="hidden sm:inline md:hidden">
          Frontend Engineer · Petaling Jaya, MY
        </span>
        <span className="hidden md:inline">
          Frontend Engineer · Petaling Jaya, MY · Open to Remote
        </span>
      </p>
      <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight sm:text-6xl">
        Aldino Anggawan.
      </h1>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Frontend engineer with 5+ years shipping React, React Native, and
        TypeScript across SaaS, edtech, and payroll. One of the earliest
        AI-native practitioners at my company.
      </p>
      <div className="flex flex-wrap gap-3">
        <ScrollToButton targetId="work" className="px-6">
          View my work
        </ScrollToButton>
        <Button asChild variant="outline" size="lg" className="px-6">
          <Link href="/contact">Say hello</Link>
        </Button>
      </div>
    </section>
  );
};
