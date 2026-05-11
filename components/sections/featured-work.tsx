import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'Quackies',
    description:
      'AI-powered calorie tracker. Snap a photo of your meal and let AI handle the logging.',
    tags: ['React', 'TypeScript', 'Supabase', 'PWA'],
    href: '/projects/quackies',
    image: { src: '/projects/quackies/card.png', alt: 'Quackies card' },
  },
];

export const FeaturedWork = () => {
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
};
