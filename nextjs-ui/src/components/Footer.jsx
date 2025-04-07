export default function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-r from-muted/30 to-muted/40 py-10 dark:from-muted/20 dark:to-muted/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 w-full">
        <div className="flex items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 NOYCO. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
