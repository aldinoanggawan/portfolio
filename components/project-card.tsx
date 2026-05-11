import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: { src: string; alt: string };
}

export const ProjectCard = ({
  title,
  description,
  tags,
  href,
  image,
}: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-40 w-full overflow-hidden">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                'linear-gradient(135deg, oklch(0.72 0.18 55 / 0.6) 0%, oklch(0.22 0.02 255 / 0.9) 100%)',
            }}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-semibold leading-snug">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
