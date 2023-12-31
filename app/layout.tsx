import "./globals.css";
import { Comic_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Comic_Neue({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "FishoThenx",
  description: "Calisthenics, fitness, and nutrition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
