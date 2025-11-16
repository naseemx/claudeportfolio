import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Premium Portfolio | Full-Stack Developer & Creative Designer",
  description: "A modern portfolio showcasing web development and design expertise with beautiful, interactive experiences.",
  keywords: ["web developer", "full-stack", "UI/UX designer", "portfolio", "React", "Next.js"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Premium Portfolio | Full-Stack Developer & Creative Designer",
    description: "Building fast, beautiful web experiences that blend clean code with creative design.",
    siteName: "Your Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark lenis" suppressHydrationWarning>
      <body className="bg-gray-950 text-gray-100 overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
