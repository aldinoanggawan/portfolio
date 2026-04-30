import Link from 'next/link';
import { siteConfig } from '@/lib/site';

import { ContactForm } from '@/components/contact-form';

const ContactPage = () => {
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
        <h1 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
          Let&apos;s work together
        </h1>
        <p className="mb-10 text-base leading-relaxed text-muted-foreground">
          Have a project in mind or just want to say hello? Fill out the form
          and I&apos;ll get back to you as soon as I can.
        </p>
        <ContactForm />
        <p className="mt-10 text-sm text-muted-foreground">
          Prefer email? Reach me at{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-amber-500 underline underline-offset-4 transition-colors hover:text-amber-400"
          >
            {siteConfig.email}
          </a>
        </p>
      </main>
    </>
  );
};

export default ContactPage;
