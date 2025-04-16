"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

// Import components
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import EnhancedFeatureCard from "@/components/EnhancedFeatureCard";
import PlatformOverview from "@/components/PlatformOverview";
import UseCasesSection from "@/components/UseCasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import MarketplaceSection from "@/components/MarketplaceSection";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPortal, setIsPortal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("isLoggedIn");
    setIsAuthenticated(!!token);
    setMounted(true);
  }, []);

  const handleLogout = () => {
    Cookies.remove("noyco_token");
    Cookies.remove("isLoggedIn");
    setIsAuthenticated(false);
    setIsPortal(false);
    window.location.href = "/";
  };

  const handleLogin = () => setIsPortal(true);

  const handleNavigation = (path) => {
    if (path === "https://www.ai.noyco.com") {
      window.location.href = path;
      return;
    }
    isAuthenticated ? (window.location.href = path) : setIsPortal(true);
  };

  const toggleIsPortal = () => setIsPortal(!isPortal);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const featureCardsData = [
    {
      title: "Workflow Automation",
      description:
        "Build and manage automation workflows to streamline your processes without writing code.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 20H22V18C22 16.3431 20.8807 15 19.5 15C18.1193 15 17 16.3431 17 18V20ZM17 20H7M17 20V18C17 16.3431 15.8807 15 14.5 15H9.5C8.11929 15 7 16.3431 7 18V20M7 20H2V18C2 16.3431 3.11929 15 4.5 15C5.88071 15 7 16.3431 7 18V20ZM14.5 7.5C14.5 9.433 12.933 11 11 11C9.067 11 7.5 9.433 7.5 7.5C7.5 5.567 9.067 4 11 4C12.933 4 14.5 5.567 14.5 7.5ZM22 7.5C22 8.88071 20.8807 10 19.5 10C18.1193 10 17 8.88071 17 7.5C17 6.11929 18.1193 5 19.5 5C20.88071 5 22 6.11929 22 7.5ZM7 7.5C7 8.88071 5.88071 10 4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "100+ pre-built app integrations",
        "Visual workflow builder",
        "Conditional logic and branching",
        "Scheduled and triggered automations",
      ],
      linkText: "Explore Workflow Builder",
      badge: "Powered by NOYCO",
      path: "/",
    },
    {
      title: "AI Assistant Builder",
      description:
        "Create custom AI agents that understand your business context and can handle complex interactions.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 12H8.51M12 12H12.01M15.5 12H15.51M12 6C16.4183 6 20 8.686 20 12C20 13.8357 18.8712 15.4892 17 16.5M12 6C7.58172 6 4 8.686 4 12C4 13.8357 5.12876 15.4892 7 16.5M12 6V4M7 16.5L5 18M17 16.5L19 18M8.5 12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.72386 11.5 8 11.5C8.27614 11.5 8.5 11.7239 8.5 12ZM12 12C12 12.2761 11.7761 12.5 11.5 12.5C11.2239 12.5 11 12.2761 11 12C11 11.7239 11.2239 11.5 11.5 11.5C11.7761 11.5 12 11.7239 12 12ZM15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Custom knowledge base integration",
        "Multi-step conversation flows",
        "Contextual understanding",
        "Integration with your automation workflows",
      ],
      linkText: "Build Your First Agent",
      badge: "Powered by NOYCO.",
      path: "/", // Redirect to home page
    },
    {
      title: "AI Directory",
      description:
        "Explore a comprehensive directory of AI tools to find the perfect solution for your tasks.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4v16m8-8H4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Extensive collection of AI tools",
        "Search and filter by task or category",
        "Direct links to tool websites",
      ],
      linkText: "Visit AI Directory",
      badge: "Powered by NOYCO",
      path: "https://www.ai.noyco.com", // Redirect to AI Directory
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavBar
        isAuthenticated={isAuthenticated}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        resolvedTheme={resolvedTheme}
        toggleTheme={toggleTheme}
      />

      {isPortal && (
        <AuthModal
          close={toggleIsPortal}
          onAuthenticate={() => setIsAuthenticated(true)}
        />
      )}

      <HeroSection />

      <PlatformOverview />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Powerful Tools in One Platform
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto mb-10">
              <span className="brand-font">NOYCO</span> combines the power of
              Activepieces for workflow automation and FlowiseAI for intelligent
              agents
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {featureCardsData.map((card, index) => (
                <EnhancedFeatureCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  features={card.features}
                  linkText={card.linkText}
                  badge={card.badge}
                  onClick={() => handleNavigation(card.path)}
                />
              ))}
            </div>
          </div>

          <UseCasesSection />

          <div className="container mx-auto px-4">
            <TestimonialsSection />
          </div>

          <div className="container mx-auto px-4">
            <CTASection />
          </div>
        </div>

        <MarketplaceSection
          isAuthenticated={isAuthenticated}
          handleLogin={handleLogin}
        />
      </main>

      <Footer />
    </div>
  );
}
