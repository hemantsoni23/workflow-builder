"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, ExternalLinkIcon } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center pl-4">
            <h1 className="text-2xl font-bold">NOYCO</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 dark:bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Welcome to the Noyco Platform
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your integrated workspace for automation workflows and AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            className="group relative overflow-hidden border border-border hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
            onClick={() => handleNavigation("/activepieces")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLinkIcon className="h-4 w-4" />
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-6">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H22V18C22 16.3431 20.8807 15 19.5 15C18.1193 15 17 16.3431 17 18V20ZM17 20H7M17 20V18C17 16.3431 15.8807 15 14.5 15H9.5C8.11929 15 7 16.3431 7 18V20M7 20H2V18C2 16.3431 3.11929 15 4.5 15C5.88071 15 7 16.3431 7 18V20ZM14.5 7.5C14.5 9.433 12.933 11 11 11C9.067 11 7.5 9.433 7.5 7.5C7.5 5.567 9.067 4 11 4C12.933 4 14.5 5.567 14.5 7.5ZM22 7.5C22 8.88071 20.8807 10 19.5 10C18.1193 10 17 8.88071 17 7.5C17 6.11929 18.1193 5 19.5 5C20.8807 5 22 6.11929 22 7.5ZM7 7.5C7 8.88071 5.88071 10 4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Activepieces</h2>
                <p className="text-muted-foreground">
                  Build powerful automation workflows with a visual, intuitive interface. Connect your tools and automate your processes.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-primary">Explore Platform</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">No-code</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="group relative overflow-hidden border border-border hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
            onClick={() => handleNavigation("/flowise")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLinkIcon className="h-4 w-4" />
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-6">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 12H8.51M12 12H12.01M15.5 12H15.51M12 6C16.4183 6 20 8.686 20 12C20 13.8357 18.8712 15.4892 17 16.5M12 6C7.58172 6 4 8.686 4 12C4 13.8357 5.12876 15.4892 7 16.5M12 6V4M7 16.5L5 18M17 16.5L19 18M8.5 12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.72386 11.5 8 11.5C8.27614 11.5 8.5 11.7239 8.5 12ZM12 12C12 12.2761 11.7761 12.5 11.5 12.5C11.2239 12.5 11 12.2761 11 12C11 11.7239 11.2239 11.5 11.5 11.5C11.7761 11.5 12 11.7239 12 12ZM15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Flowise</h2>
                <p className="text-muted-foreground">
                  Build conversational AI agents and chatbots without writing code. Design intelligent workflows for customer support and automation.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-primary">Explore Platform</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">AI-powered</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center p-4">
            <p className="text-sm text-muted-foreground">© 2025 NOYCO. All rights reserved.</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}