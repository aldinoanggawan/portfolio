import { GitHubIcon, LinkedInIcon } from '@/components/icons';

export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 mx-auto max-w-4xl w-full">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Contact
      </h2>
      <p className="mb-6 text-2xl font-semibold tracking-tight">
        Let&apos;s work together
      </p>
      <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
        Have a project in mind or just want to say hello? My inbox is always
        open.
      </p>
      <a
        href="mailto:aldinoanggawan@gmail.com"
        className="mb-8 inline-block text-base font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
      >
        aldinoanggawan@gmail.com
      </a>
      <div className="flex gap-4">
        <a
          href="https://github.com/aldinoanggawan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://linkedin.com/in/aldinoanggawan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <LinkedInIcon />
        </a>
      </div>
    </section>
  );
};
