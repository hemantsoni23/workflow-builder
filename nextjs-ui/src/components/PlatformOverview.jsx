export default function PlatformOverview() {
  return (
    <section className="w-full py-16 md:py-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block mb-2">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Platform Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 tracking-tight">
            The Integration Platform for{" "}
            <span className="text-primary">Modern Teams</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-[800px] leading-relaxed">
            NOYCO combines the best of workflow automation and AI agent
            technology in one seamless platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {/* No-Code Automation Card */}
          <div className="rounded-xl border bg-card text-card-foreground shadow-md overflow-hidden hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 md:p-8">
              <div className="mb-6 bg-primary/10 p-4 rounded-lg inline-block">
                <svg
                  className="w-8 h-8 text-primary"
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
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                No-Code Automation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Build powerful workflows connecting your apps and services
                without writing a single line of code.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Visual workflow builder</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>100+ app integrations</span>
                  </li>
                </ul>
                <button className="text-primary font-medium hover:underline inline-flex items-center group">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* AI-Powered Agents Card */}
          <div className="rounded-xl border bg-card text-card-foreground shadow-md overflow-hidden hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 md:p-8">
              <div className="mb-6 bg-primary/10 p-4 rounded-lg inline-block">
                <svg
                  className="w-8 h-8 text-primary"
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
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                AI-Powered Agents
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Create intelligent agents that can understand, respond, and take
                action based on your business needs.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Custom knowledge base integration</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Multi-step conversation flows</span>
                  </li>
                </ul>
                <button className="text-primary font-medium hover:underline inline-flex items-center group">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* AI Directory Card */}
          <a
            href="https://www.ai.noyco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border bg-card text-card-foreground shadow-md overflow-hidden hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 group relative h-full block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 md:p-8">
              <div className="mb-6 bg-primary/10 p-4 rounded-lg inline-block">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                AI Directory
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Explore a comprehensive directory of AI tools to find the
                perfect solution for your tasks.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Extensive collection of AI tools</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Search and filter by task or category</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Direct links to tool websites</span>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
