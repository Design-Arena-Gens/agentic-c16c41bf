import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinematic Stage Performer",
  description: "Energetic, cinematic SVG scene of a performer on stage",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
