import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thijn Opperman — Front-end developer",
    template: "%s | Thijn Opperman",
  },
  description:
    "Portfolio van Thijn Opperman: front-end development, UI/UX en projecten met React en Next.js. ICT Media, Fontys.",
  keywords: [
    "Thijn Opperman",
    "front-end developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "Fontys",
    "stage",
  ],
  openGraph: {
    title: "Thijn Opperman — Front-end developer",
    description:
      "Portfolio: front-end, UI/UX en geselecteerde projecten. Beschikbaar voor stage en meewerkplekken.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
