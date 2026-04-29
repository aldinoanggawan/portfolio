import Link from 'next/link';

const AboutPage = () => {
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
        <h1 className="mb-12 text-2xl font-bold text-foreground md:text-3xl">
          I build interfaces people actually enjoy using — and I care deeply
          about the team behind them.
        </h1>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          I didn&apos;t start in software. I studied mechanical engineering, and
          somewhere in the middle of it, I took a subject where we had to build
          something with an Arduino. The code was simple — just sending on and
          off signals to a device — but something about it stuck with me. The
          idea that you could write a few lines and make something real happen
          felt different from anything I&apos;d done before. That curiosity led
          me to a full-stack bootcamp, and within a year I was shipping
          production code.
        </p>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          Five years in, I&apos;m still most energised by the moment something
          I&apos;ve built lands in front of real users. That&apos;s what drives
          the craft for me — not technical elegance alone, but the impact on the
          person on the other side of the screen. I specialise in React and
          TypeScript, and I&apos;ve spent the last couple of years exploring
          what it means to be genuinely{' '}
          <span className="text-amber-500">AI-native</span> — not just using AI
          tools, but building custom workflows that make entire teams more
          effective.
        </p>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          I care a lot about the people I work with. When my team is blocked, I
          take it personally — and I&apos;ll look for ways to help, whether
          that&apos;s jumping into a technical discussion, flagging a risk
          early, or picking up backend work to keep delivery moving. I try to be
          the kind of engineer who makes the people around them a little more
          effective, not just the one who ships their own tasks.
        </p>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          I&apos;m currently open to senior frontend roles at companies with
          interesting problems and teams that care about how they work, not just
          what they ship. Learning opportunities and a collaborative engineering
          culture matter more to me than prestige. Based in Petaling Jaya,
          Malaysia — open to remote.
        </p>

        <p className="mb-12 leading-relaxed text-muted-foreground">
          Outside of code, I&apos;ve been getting into espresso. I started
          learning to pull shots at home — dialing in grind size, temperature,
          and pressure to bring out specific flavour profiles depending on the
          bean. More floral, more fruity, whatever the roast calls for. AI has
          been surprisingly useful here too. Someday I&apos;d like to open a
          coffee shop. For now, I just drink a lot of good coffee.
        </p>

        <hr className="mb-12 border-border" />

        <section className="mb-12">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Currently using
          </h2>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Day to day</span>
              <span className="text-sm text-foreground">
                React, TypeScript, styled-components, Redux
              </span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Mobile</span>
              <span className="text-sm text-foreground">
                React Native, Fastlane, AppCenter, CodePush
              </span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Tooling</span>
              <span className="text-sm text-foreground">
                Cursor, VS Code Copilot, GitHub Actions, Sentry, Storybook
              </span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-sm text-muted-foreground">Learning</span>
              <span className="text-sm text-foreground">
                System design, .NET, backend architecture
              </span>
            </div>
          </div>
        </section>

        <hr className="mb-12 border-border" />

        <p className="leading-relaxed text-muted-foreground">
          Want to chat? Reach me at{' '}
          <a
            href="mailto:aldinoanggawan@gmail.com"
            className="text-amber-500 underline underline-offset-4 transition-colors hover:text-amber-400"
          >
            aldinoanggawan@gmail.com
          </a>
        </p>
      </main>
    </>
  );
};

export default AboutPage;
