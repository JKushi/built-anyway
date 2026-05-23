import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
export const metadata: Metadata = {
  title: "Built Anyway",
  description:
    "A living digital memoir, innovation lab, and systems-thinking platform documenting growth, survival, analytics, creativity, leadership, rebuilding, and becoming."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
