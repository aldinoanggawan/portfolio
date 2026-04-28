import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-65px)] flex-col items-start justify-center px-6 py-24 mx-auto max-w-4xl w-full">
      <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Frontend Engineer · Petaling Jaya, MY · Open to Remote
      </p>
      <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight sm:text-6xl">
        Aldino Anggawan.
      </h1>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Frontend engineer with 5+ years shipping React, React Native, and TypeScript across SaaS, edtech, and payroll. One of the earliest AI-native practitioners at my company.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg" className="px-6">
          <a href="#work">View my work</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="px-6">
          <a href="#contact">Say hello</a>
        </Button>
      </div>
    </section>
  );
}
