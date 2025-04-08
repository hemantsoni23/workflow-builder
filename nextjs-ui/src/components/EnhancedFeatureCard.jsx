export default function EnhancedFeatureCard({
  title,
  description,
  icon,
  features,
  linkText,
  badge,
  onClick,
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 flex flex-col h-full cursor-pointer hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300" onClick={onClick}>
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {badge}
          </span>
        </div>
      )}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>

      {features && features.length > 0 && (
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4">
        <button
          onClick={onClick}
          className="inline-flex items-center text-primary hover:text-primary/90 font-medium"
        >
          {linkText}
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
