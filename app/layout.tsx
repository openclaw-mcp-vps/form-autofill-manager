import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormFill AI — Smart Browser Form Auto-Completion",
  description: "AI-powered form autofill profiles for sales reps and data entry workers. Context-aware templates that intelligently populate forms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0c148b0e-3f71-4321-99f2-74a2b98b4a7e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
