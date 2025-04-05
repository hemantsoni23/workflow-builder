import { Card, CardContent } from "@/components/ui/card";
import { ExternalLinkIcon } from "lucide-react";

export default function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  linkText, 
  badge, 
  onClick 
}) {
  return (
    <Card
      className="group relative overflow-hidden border border-border hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLinkIcon className="h-4 w-4" />
      </div>
      <CardContent className="p-6 md:p-8">
        <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-6">
          {Icon}
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-primary">{linkText}</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{badge}</span>
        </div>
      </CardContent>
    </Card>
  );
}