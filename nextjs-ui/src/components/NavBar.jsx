"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Navbar({ 
  isAuthenticated, 
  handleLogin, 
  handleLogout, 
  resolvedTheme,
  toggleTheme 
}) {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center pl-4">
          <h1 className="text-2xl font-bold">NOYCO</h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={isAuthenticated ? handleLogout : handleLogin}
            aria-label="Authentication"
            className="rounded-sm px-6 py-4 border-2"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full"
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