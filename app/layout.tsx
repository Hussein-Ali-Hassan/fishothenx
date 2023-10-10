import './globals.css'
import { Comic_Neue } from "next/font/google";

const inter = Comic_Neue({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "FishoThenx",
  description: "Calisthenics, fitness, and nutrition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
