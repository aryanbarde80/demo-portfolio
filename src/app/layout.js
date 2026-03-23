import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

export const metadata = {
  title: "Aryan Barde | High-Impact Systems & AI Engineer",
  description: "AI & Agentic Portfolio for Aryan Barde - Full-Stack & IoT Systems Engineer with proven performance optimizations.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased relative`}>
        <CursorGlow>
          <div className="bg-orb animate-pulse-slow"></div>
          <div className="scanlines-overlay"></div>
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        </CursorGlow>
      </body>
    </html>
  );
}
