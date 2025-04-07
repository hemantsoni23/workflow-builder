export default function HeroSection({ handleLogin }) {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-100" />
      <div
        className="absolute inset-0 bg-grid-white/0"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 1px, transparent 1px), linear-gradient(to bottom, transparent 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-block animate-fade-in-up"></div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white dark:from-primary dark:via-primary/80 dark:to-primary/60">
          Welcome to the Noyco Platform
        </h1>
        <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-8 animate-fade-in-up [animation-delay:400ms] dark:text-muted-foreground">
          Your integrated workspace for automation workflows and AI-driven
          solutions
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
          <button
            className="group bg-primary hover:bg-primary/90 transition-colors text-base px-6 py-2 rounded-lg text-white"
            onClick={handleLogin}
          >
            Get Started Free
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button className="text-base px-6 py-2 rounded-lg border border-primary text-white hover:bg-primary/10 transition-colors dark:text-primary">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
}
