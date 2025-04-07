export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-20 bg-primary/5 dark:bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Ready to Transform Your Workflows?
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Join thousands of businesses that are saving time and resources with
            NOYCO's integrated automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="px-8 py-3 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 text-lg font-medium bg-transparent border-2 border-primary text-primary rounded-md hover:bg-primary/10 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required. 14-day free trial with full access to all
            features.
          </p>
        </div>
      </div>
    </section>
  );
}
