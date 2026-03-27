import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: "SevaLink | Healthcare Support",
  description: "Mini healthcare support platform for NGOs to coordinate patient assistance, volunteers, and support communication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FFFDF9] relative selection:bg-orange-100 selection:text-orange-900 text-stone-800 flex flex-col">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/80 via-[#FFFDF9] to-[#FFFDF9]" />
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
