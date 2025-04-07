"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Navbar({
  isAuthenticated,
  handleLogin,
  handleLogout,
  resolvedTheme,
  toggleTheme,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 border-b border-border text-black dark:text-white dark:shadow-md dark:shadow-primary/20"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container flex justify-between items-center py-4 max-w-6xl mx-auto">
        <div className="flex items-center pl-4">
          <h1
            className={`text-2xl font-bold ${
              isScrolled ? "text-black dark:text-white" : "text-white"
            }`}
          >
            Noyco
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={isAuthenticated ? handleLogout : handleLogin}
            aria-label="Authentication"
            className={`rounded-sm px-6 py-4 ${
              isScrolled
                ? "hover:bg-primary/10 dark:hover:bg-primary/20"
                : "hover:bg-white/10"
            }`}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`rounded-full ${
              isScrolled ? "text-black dark:text-white" : "text-white"
            }`}
          >
            {resolvedTheme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
