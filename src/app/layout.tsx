import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData, { 
  organizationStructuredData, 
  websiteStructuredData 
} from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "CMS - Ayurvedic Heritage & Natural Wellness",
    template: "%s | CMS",
  },
  description: "Discover the timeless healing power of Ayurveda through our carefully curated collection of natural products, rooted in 5000 years of traditional wisdom.",
  keywords: [
    "Ayurveda",
    "Natural wellness",
    "Herbal medicine",
    "Traditional healing",
    "Holistic health",
    "Natural products",
    "Indian herbs",
    "Wellness supplements",
  ],
  authors: [{ name: "Corner Softwares" }],
  creator: "Corner Softwares",
  publisher: "Corner Softwares",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cornerayurveda.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cornerayurveda.com",
    siteName: "Corner Medical Stores",
    title: "CMS - Ayurvedic Heritage & Natural Wellness",
    description: "Discover the timeless healing power of Ayurveda through our carefully curated collection of natural products.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CMS - Ayurvedic Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMS - Ayurvedic Heritage & Natural Wellness",
    description: "Discover the timeless healing power of Ayurveda through our carefully curated collection of natural products.",
    images: ["/images/twitter-image.jpg"],
    creator: "@cornerayurveda",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <StructuredData data={organizationStructuredData}/>
      <StructuredData data={websiteStructuredData}/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
          href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Cinzel:wght@400..900&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Jura:wght@300..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
          href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Cinzel:wght@400..900&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Jura:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"/>
    </head>
    <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
    <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange={false}
    >
      <div className="flex min-h-screen flex-col font-[afacad]">
        <Navbar/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}

