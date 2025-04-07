export default function UseCasesSection() {
  const useCases = [
    {
      title: "Customer Support Automation",
      description:
        "Automate ticket routing and initial responses while using AI agents to handle common inquiries. Reduce response times and improve customer satisfaction with intelligent workflows.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      title: "Lead Generation & Nurturing",
      description:
        "Capture leads from multiple sources and nurture them with personalized AI-driven communication. Streamline your sales funnel and increase conversion rates with automated follow-ups.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Workflow Optimization",
      description:
        "Design and deploy complex workflows with ease. Use our no-code platform to automate repetitive tasks, ensuring efficiency and accuracy in your operations.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Data-Driven Insights",
      description:
        "Leverage AI to analyze your business data and gain actionable insights. Make informed decisions with real-time analytics and predictive modeling.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 17a4 4 0 100-8 4 4 0 000 8zm0 0v5m0-5H6m5 0h5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            Transform Your Business with NOYCO
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px]">
            Discover how our platform can solve real-world challenges across
            various business functions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                {useCase.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
