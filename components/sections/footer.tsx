export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-4xl flex items-center justify-between text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Aldino Anggawan</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
