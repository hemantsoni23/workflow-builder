"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

// Import components
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
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
    if (path === "/pipeline") {
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
        "Build and manage automation workflows to streamline your processes with ease.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 20H22V18C22 16.3431 20.8807 15 19.5 15C18.1193 15 17 16.3431 17 18V20ZM17 20H7M17 20V18C17 16.3431 15.8807 15 14.5 15H9.5C8.11929 15 7 16.3431 7 18V20M7 20H2V18C2 16.3431 3.11929 15 4.5 15C5.88071 15 7 16.3431 7 18V20ZM14.5 7.5C14.5 9.433 12.933 11 11 11C9.067 11 7.5 9.433 7.5 7.5C7.5 5.567 9.067 4 11 4C12.933 4 14.5 5.567 14.5 7.5ZM22 7.5C22 8.88071 20.8807 10 19.5 10C18.1193 10 17 8.88071 17 7.5C17 6.11929 18.1193 5 19.5 5C20.8807 5 22 6.11929 22 7.5ZM7 7.5C7 8.88071 5.88071 10 4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      linkText: "Explore Workflows",
      badge: "No-code Low-Code Automations",
      path: "/pipeline",
    },
    {
      title: "AI Assistant",
      description:
        "Utilize AI-powered tools to enhance decision-making, automate responses, and improve efficiency.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 12H8.51M12 12H12.01M15.5 12H15.51M12 6C16.4183 6 20 8.686 20 12C20 13.8357 18.8712 15.4892 17 16.5M12 6C7.58172 6 4 8.686 4 12C4 13.8357 5.12876 15.4892 7 16.5M12 6V4M7 16.5L5 18M17 16.5L19 18M8.5 12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12 7.5 11.7239 7.72386 11.5 8 11.5 8.27614 11.5 8.5 11.7239 8.5 12ZM12 12C12 12.2761 11.7761 12.5 11.5 12.5C11.2239 12.5 11 12 11 11.7239 11.2239 11.5 11.5 11.5 11.7761 11.5 12 11.7239 12 12ZM15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12 14.5 11.7239 14.7239 11.5 15 11.5 15.2761 11.5 15.5 11.7239 15.5 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      linkText: "Explore AI Tools",
      badge: "AI-powered",
      path: "/agentbuilder",
    },

    {
      title: "Lead Generation",
      description:
        "Identify and qualify leads automatically with AI-driven tools.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 14C15.866 14 19 10.866 19 7C19 3.13401 15.866 0 12 0C8.13401 0 5 3.13401 5 7C5 10.866 8.13401 14 12 14ZM12 14V20M8 20H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      linkText: "Explore Leads",
      badge: "Automated",
      path: "/leads",
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

      <main className="flex-1 py-20 px-6 flex flex-col items-center bg-gradient-to-b from-background to-muted/10 dark:from-background dark:to-muted/20">
        <div className="w-full max-w-7xl flex flex-col gap-24">
          <section>
            <h2
              className="text-4xl font-extrabold mb-10 text-center"
              style={{ color: "var(--heading-color-light)" }}
            >
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {featureCardsData.map((card, index) => (
                <FeatureCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  linkText={card.linkText}
                  badge={card.badge}
                  onClick={() => handleNavigation(card.path)}
                />
              ))}
            </div>
          </section>

          <section>
            <h2
              className="text-4xl font-extrabold mb-10 text-center"
              style={{ color: "var(--heading-color-light)" }}
            >
              Marketplace
            </h2>
            <MarketplaceSection
              isAuthenticated={isAuthenticated}
              handleLogin={handleLogin}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
