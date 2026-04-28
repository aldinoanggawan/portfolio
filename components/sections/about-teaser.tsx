export function AboutTeaser() {
  return (
    <section className="px-6 py-24 mx-auto max-w-4xl w-full">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        About
      </h2>
      <div className="max-w-xl">
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          I&apos;m a frontend engineer with 5+ years of experience building production React and React Native applications. I specialize in shipping complex UI within Agile teams and am an early{" "}
          <span className="text-primary font-medium">AI-native</span>{" "}
          practitioner. I care about code quality, clear communication with non-technical stakeholders, and sustainable pace.
        </p>
        <a
          href="#"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          About me →
        </a>
      </div>
    </section>
  );
}
