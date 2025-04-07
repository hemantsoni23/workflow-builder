import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noyco Platform – Automation & AI Workspace",
  description:
    "Noyco is your all-in-one platform to build no-code automation workflows and leverage AI tools to boost business productivity.",
  keywords:
    "automation workflows, no-code workflow automation platform, AI-driven solutions, AI assistant for business productivity, integrated workspace, task automation and AI tools, no-code automations, automate business processes with AI, AI workflow builder, business automation platform",
  openGraph: {
    title: "Noyco Platform – Automation & AI Workspace",
    description:
      "Noyco is your all-in-one platform to build no-code automation workflows and leverage AI tools to boost business productivity.",
    url: "https://www.noyco.com",
    type: "website",
    images: [
      {
        url: "https://www.noyco.com/og-image.jpg",
        alt: "Noyco Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noycohq",
    title: "Noyco Platform – Automation & AI Workspace",
    description:
      "Noyco is your all-in-one platform to build no-code automation workflows and leverage AI tools to boost business productivity.",
    images: ["https://www.noyco.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.noyco.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        >
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster position="top-center" expand={true} richColors />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
