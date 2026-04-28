import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack SaaS application with real-time collaboration features, built for teams that need to move fast without breaking things.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    href: "#",
  },
  {
    title: "Project Beta",
    description:
      "An open-source CLI tool that automates repetitive developer workflows, saving hours of manual work per week.",
    tags: ["Node.js", "Go", "Shell"],
    href: "#",
  },
  {
    title: "Project Gamma",
    description:
      "A data visualization dashboard that turns complex datasets into clear, actionable insights for non-technical stakeholders.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    href: "#",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="px-6 py-24 mx-auto max-w-4xl w-full">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Featured Work
      </h2>
      <p className="mb-10 text-2xl font-semibold tracking-tight">
        Selected work
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
