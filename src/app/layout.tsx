import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { navigation, profile, socialLinks } from "@/lib/content";
import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
});

const description =
  "Zihan You is an undergraduate researcher at Southeast University working on multimodal foundation models, agentic AI, embodied intelligence, and real-world AI systems.";

const themeBoot = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Zihan You | AI Researcher",
    template: "%s · Zihan You",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zihan You | AI Researcher",
    description,
    url: "/",
    siteName: "Zihan You",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Zihan You, undergraduate AI researcher at Southeast University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zihan You | AI Researcher",
    description,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const sameAs = socialLinks.filter((link) => link.href.startsWith("https://")).map((link) => link.href);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nameZh,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: `${profile.siteUrl}/`,
    image: `${profile.siteUrl}${profile.avatar}`,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Southeast University",
      department: "School of Instrument Science and Engineering",
    },
    sameAs,
    knowsAbout: [
      "Multimodal foundation models",
      "Agentic AI",
      "Embodied intelligence",
      "Vision-language-action models",
      "Agent evaluation",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header items={navigation} siteName={profile.name} />
        <main id="content">{children}</main>
        <Footer updated={profile.lastUpdated} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
