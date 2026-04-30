import { siteConfig } from '@/lib/site';

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl w-full px-6 py-12 text-xs text-muted-foreground">
        <span>© 2026 {siteConfig.name}</span>
      </div>
    </footer>
  );
};
