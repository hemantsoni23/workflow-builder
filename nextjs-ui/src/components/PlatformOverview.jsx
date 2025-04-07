import { useState } from "react";

export default function PlatformOverview() {
  const [hoveredTile, setHoveredTile] = useState(null);

  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 hover:text-primary transition-all duration-300 hover:shadow-lg">
            The Integration Platform for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px]">
            NOYCO combines the best of workflow automation and AI agent
            technology in one seamless platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <button
              className="w-full text-left p-6 rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 group relative"
              onMouseEnter={() => setHoveredTile(1)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 hover:text-primary transition-all duration-300">
                    No-Code Automation
                  </h3>
                  <p className="text-muted-foreground">
                    Build powerful workflows connecting your apps and services
                    without writing a single line of code.
                  </p>
                </div>
              </div>
            </button>
            <button
              className="w-full text-left p-6 rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 group relative"
              onMouseEnter={() => setHoveredTile(2)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 hover:text-primary transition-all duration-300">
                    AI-Powered Agents
                  </h3>
                  <p className="text-muted-foreground">
                    Create intelligent agents that can understand, respond, and
                    take action based on your business needs.
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div className="bg-muted rounded-lg p-6 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-md flex items-center justify-center">
              {hoveredTile === 1 && (
                <svg
                  className="w-24 h-24 text-primary/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
              {hoveredTile === 2 && (
                <svg
                  className="w-24 h-24 text-primary/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              )}
              {!hoveredTile && (
                <svg
                  className="w-24 h-24 text-primary/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
