import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

export const metadata = {
  title: "Aryan Barde | Systems & AI Engineer",
  description: "Portfolio of Aryan Barde — Full-Stack Developer, IoT Systems Engineer & AI specialist. Building high-performance systems with React, Next.js, Three.js, and cloud-native architectures.",
  keywords: ["Aryan Barde", "Full-Stack Developer", "IoT Engineer", "AI Engineer", "React", "Next.js", "Three.js", "Portfolio"],
  authors: [{ name: "Aryan Barde", url: "https://github.com/aryanbarde80" }],
  creator: "Aryan Barde",
  metadataBase: new URL("https://aryan-os.vercel.app"),
  openGraph: {
    title: "Aryan Barde | Systems & AI Engineer",
    description: "Full-Stack Developer, IoT Systems Engineer & AI specialist building high-performance systems.",
    url: "https://aryan-os.vercel.app",
    siteName: "AryanOS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Barde | Systems & AI Engineer",
    description: "Full-Stack Developer, IoT Systems Engineer & AI specialist building high-performance systems.",
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased relative">
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <CursorGlow>
          <div className="noise-overlay"></div>
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
