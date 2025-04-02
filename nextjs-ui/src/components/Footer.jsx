export default function Footer() {
    return (
      <footer className="border-t border-border bg-muted/30 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center p-4">
            <p className="text-sm text-muted-foreground">© 2025 NOYCO. All rights reserved.</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </nav>
        </div>
      </footer>
    );
  }