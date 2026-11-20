import { Inter } from "next/font/google";
import "./globals.css";

// Inter is the single typeface used everywhere on the site. Loading it through
// next/font exposes a CSS variable (`--font-inter`) we can reference from any
// global CSS rule, while `inter.className` applies it as the default font on
// the body so every component inherits it automatically.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://portfolioo-seven-gilt.vercel.app";
const TITLE = "Shaker Abdallah · Founder of Lo2ta · Full-Stack & AI Engineer";
// Same positioning as the LinkedIn headline, so search results, link
// previews and the profile all tell one story.
const DESCRIPTION =
  "Founder of Lo2ta (getlo2ta.com) and Mechanical Engineering student at Al-Azhar in Cairo, building AI-native products: full-stack (Django · Next.js) and Arabic-first AI agents.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  authors: [{ name: "Shaker Abdallah", url: SITE_URL }],
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Shaker Abdallah",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Shaker Abdallah portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/icon.png",
  },
};

// Structured data so search engines and AI answer engines can connect the
// person, the company and the profiles (sameAs) to each other.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shaker Abdallah",
  url: SITE_URL,
  image: `${SITE_URL}/shaker_portrait_red.jpg`,
  jobTitle: "Founder",
  description: DESCRIPTION,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  worksFor: {
    "@type": "Organization",
    name: "Lo2ta (لقطة)",
    url: "https://getlo2ta.com",
    sameAs: [
      "https://www.instagram.com/getlo2ta/",
      "https://www.tiktok.com/@getlo2ta",
      "https://www.facebook.com/profile.php?id=61596381527460",
    ],
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Al-Azhar University" },
  knowsAbout: [
    "Full-Stack Development",
    "Django",
    "Next.js",
    "AI Agents",
    "LLM Evaluation",
    "Product Development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/shaker-abdallah-8a648a451/",
    "https://github.com/shaker15s",
    "https://getlo2ta.com",
  ],
};

// Tiny script that runs synchronously before the body paints. It reads the
// theme the user previously picked from localStorage and applies the
// corresponding `data-theme` attribute on the <html> element. Without this,
// the page would flash the default light theme for one frame on every reload
// when the user is using dark mode. Default is light when nothing is saved.
const themeBootstrap = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
