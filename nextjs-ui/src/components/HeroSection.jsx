export default function HeroSection({ handleLogin }) {
  const scrollToPlatformOverview = () => {
    // Find the PlatformOverview section and scroll to it
    const platformOverviewSection = document.querySelector("#platform-overview");
    if (platformOverviewSection) {
      platformOverviewSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if ID is not found: scroll down one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 bg-cover bg-center opacity-100" />
      <div
        className="absolute inset-0 bg-grid-white/0"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 1px, transparent 1px), linear-gradient(to bottom, transparent 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-block animate-fade-in-up"></div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-black/80 to-black/60 dark:from-primary dark:via-primary/80 dark:to-primary/60">
          Welcome to the <span className="brand-font">NOYCO</span> Platform
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up [animation-delay:400ms] text-muted-foreground">
          Your integrated workspace for automation workflows and AI-driven
          solutions
        </p>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <button 
          onClick={scrollToPlatformOverview}
          aria-label="Scroll down to explore"
          className="flex flex-col items-center text-black dark:text-primary transition-colors hover:text-primary focus:outline-none"
        >
          <span className="text-sm font-medium mb-2 opacity-80">Explore</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7-7v14"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}