import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import Script from "next/script";

export const metadata = {
  title: "Aryan Barde | Full-Stack Developer, IoT & AI Engineer",
  description: "Portfolio of Aryan Barde — Full-Stack Developer, IoT Systems Engineer & AI specialist with 2+ years experience. Building high-performance web apps, IoT platforms, and AI-powered solutions with React, Next.js, Node.js, and cloud-native architectures.",
  keywords: ["Aryan Barde", "Full-Stack Developer", "IoT Engineer", "AI Engineer", "React Developer", "Next.js Developer", "Node.js", "Three.js", "Portfolio", "Software Engineer", "Web Developer", "MERN Stack", "Python", "Cloud Computing", "AWS", "IoT Dashboard"],
  authors: [{ name: "Aryan Barde", url: "https://github.com/aryanbarde80" }],
  creator: "Aryan Barde",
  publisher: "Aryan Barde",
  metadataBase: new URL("https://aryan-os.vercel.app"),
  alternates: {
    canonical: "https://aryan-os.vercel.app",
  },
  openGraph: {
    title: "Aryan Barde | Full-Stack Developer, IoT & AI Engineer",
    description: "Full-Stack Developer with expertise in React, Node.js, IoT Systems & AI. 25+ projects delivered, 40% latency optimization, 95% AI defect detection accuracy.",
    url: "https://aryan-os.vercel.app",
    siteName: "AryanOS - Aryan Barde Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aryan Barde - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Barde | Full-Stack Developer, IoT & AI Engineer",
    description: "Full-Stack Developer with expertise in React, Node.js, IoT Systems & AI. Building high-performance systems.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
};

export const viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Barde",
  url: "https://aryan-os.vercel.app",
  jobTitle: "Full-Stack Developer & IoT Systems Engineer",
  description: "Full-Stack Developer, IoT Systems Engineer & AI specialist with expertise in React, Next.js, Node.js, Python, and cloud-native architectures.",
  email: "aryanbarde80@gmail.com",
  sameAs: [
    "https://github.com/aryanbarde80",
    "https://linkedin.com/in/aryanbarde80",
    "https://medium.com/@aryanbarde80",
    "https://leetcode.com/aryanbarde80"
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Gyan Ganga Institute of Technology and Sciences",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jabalpur",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN"
    }
  },
  knowsAbout: [
    "Full-Stack Development", "React.js", "Next.js", "Node.js", "Python",
    "IoT Systems", "AI/ML", "Cloud Computing", "AWS", "Docker",
    "Three.js", "PostgreSQL", "MongoDB", "Redis", "MQTT"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased relative">
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <CursorGlow>
          <div className="noise-overlay" aria-hidden="true"></div>
          <div className="bg-orb animate-pulse-slow" aria-hidden="true"></div>
          <div className="scanlines-overlay" aria-hidden="true"></div>
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        </CursorGlow>
      </body>
    </html>
  );
}
