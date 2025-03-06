"use client";

import { Card, CardContent } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default function Home() {
  const handleNavigation = (path) => {
    redirect(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="p-4 shadow-md bg-primary text-primary-foreground">
        <h1 className="text-xl font-bold">Agent OS</h1>
      </nav>

      {/* Main Content */}
      <main className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => handleNavigation("/activepieces")}> 
          <CardContent className="p-10 text-center">
            <h2 className="text-2xl font-semibold">Activepieces</h2>
            <p className="text-muted-foreground">Build Automation Workflows</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => handleNavigation("/flowise")}>
          <CardContent className="p-10 text-center">
            <h2 className="text-2xl font-semibold">Flowise</h2>
            <p className="text-muted-foreground">Create AI Chatbots & Agents</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
