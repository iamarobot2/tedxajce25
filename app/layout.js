import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "../utils/lenis";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TEDxAJCE 2025",
  description:
    "Welcome to TEDxAJCE, where passionate minds share ideas worth spreading. We're a student-organized event at Amal Jyothi College of Engineering bringing together innovators and inspiring speakers from our Kerala community.",
  keywords:
    "TEDx, TEDxAJCE, Choices, innovation, ideas worth spreading, creativity, technology, community",
  authors: [{ name: "TEDxAJCE Team" }],
  openGraph: {
    title: "TEDxAJCE 2025",
    description:
      "Welcome to TEDxAJCE, where passionate minds share ideas worth spreading.",
    url: "https://www.tedxajce.in/", // Replace with actual domain
    siteName: "TEDxAJCE",
    images: [
      {
        url: "/assets/tedxajce.png", // Ensure this image exists in /public
        width: 1200,
        height: 630,
        alt: "TEDxAJCE Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tedxajce", // Replace with actual Twitter handle if available
    title: "TEDxAJCE 2025",
    description:
      "Welcome to TEDxAJCE, where passionate minds share ideas worth spreading.",
    images: ["/assets/tedxajce.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ReactLenis root>
        {children}
        </ReactLenis>
      </body>
    </html>
  );
}
