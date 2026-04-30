import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import { siteConfig } from '@/lib/site';

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
        href={`mailto:${siteConfig.email}`}
        className="mb-8 inline-block text-base font-medium text-amber-500 underline underline-offset-4 hover:text-amber-400 transition-colors"
      >
        {siteConfig.email}
      </a>
      <div className="flex gap-4">
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <GitHubIcon />
        </a>
        <a
          href={siteConfig.linkedin}
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
