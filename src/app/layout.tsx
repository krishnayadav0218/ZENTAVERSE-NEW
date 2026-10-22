import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zyntaverse.com"),
  title: "ZYNTAVERSE TECHNOLOGIES — Full-Stack Technology Partner (Idea to Scale)",
  description:
    "Innovate • Build • Scale. Top-tier web & app development, AI chatbots, data analytics, and cloud solutions based in Mumbai, India.",
  keywords: [
    "Zyntaverse Technologies",
    "Web Development Mumbai",
    "App Development India",
    "Full-Stack Technology Partner",
    "Next.js Development Agency",
    "AI & Chatbot Solutions",
    "Cloud & DevOps Services",
    "Startup MVP Development",
    "Custom Software Mumbai",
  ],
  authors: [{ name: "Zyntaverse Technologies", url: "https://www.zyntaverse.com" }],
  creator: "Zyntaverse Technologies",
  publisher: "Zyntaverse Technologies",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zyntaverse.com",
    siteName: "Zyntaverse Technologies",
    title: "ZYNTAVERSE TECHNOLOGIES — Full-Stack Technology Partner",
    description:
      "Innovate • Build • Scale. We build innovative digital solutions that help businesses grow, operate smarter, and stay ahead in a digital world.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Zyntaverse Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYNTAVERSE TECHNOLOGIES — Idea to Scale",
    description:
      "Modern web platforms, cross-platform mobile apps, AI copilots, and cloud architecture.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zyntaverse Technologies",
  image: "https://www.zyntaverse.com/logo.png",
  "@id": "https://www.zyntaverse.com",
  url: "https://www.zyntaverse.com",
  telephone: "+917992153750",
  email: "zyntaversetechnologies@gmail.com",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.076,
    longitude: 72.8777,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "20:00",
  },
  sameAs: [
    "https://linkedin.com/company/zyntaverse-technologies",
    "https://github.com/zyntaverse",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#080B11] text-slate-100 selection:bg-blue-600/30 selection:text-blue-100">
        {children}
      </body>
    </html>
  );
}
