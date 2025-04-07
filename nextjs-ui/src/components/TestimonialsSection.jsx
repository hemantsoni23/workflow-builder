export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "NOYCO has transformed how we handle customer inquiries. The combination of workflow automation and AI agents has reduced our response time by 78%.",
      author: "Sarah Johnson",
      role: "Customer Success Manager",
      company: "TechSolutions Inc.",
    },
    {
      quote:
        "Setting up complex workflows used to take weeks. With NOYCO's no-code platform, we can deploy new automation in hours, not days or weeks.It's a game changer!",
      author: "Michael Chen",
      role: "Operations Director",
      company: "Innovate Enterprises",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px]">
            Join hundreds of businesses that have revolutionized their
            operations with NOYCO.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg relative">
              <p className="text-foreground mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z"
                    />
                  </svg>
                </div>
                <div className="ml-3 flex items-center gap-2">
                  <p className="font-medium">{testimonial.author}</p>
                  <span className="text-muted-foreground">|</span>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
