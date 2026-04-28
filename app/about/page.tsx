import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Home
        </Link>
      </div>
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">About</h1>
        <p className="text-muted-foreground">Coming soon</p>
      </main>
    </>
  );
};

export default AboutPage;
