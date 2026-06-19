import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "מוראלי מערכות תצוגה | פתרונות תצוגה מקצועיים לקמעונאות",
  description: "מוראלי — החברה המובילה בישראל לפתרונות תצוגה, מדפים, ריהוט חנות ותכנון חנות קמעונאית. קבלו הצעת מחיר עכשיו.",
  keywords: "מערכות תצוגה, מדפים לחנות, ריהוט קמעונאי, תכנון חנות, תצוגה קמעונאית",
  openGraph: {
    title: "מוראלי מערכות תצוגה",
    description: "פתרונות תצוגה מקצועיים לקמעונאות בישראל",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`h-full ${heebo.variable}`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-heebo), Heebo, sans-serif' }}>
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  );
}
