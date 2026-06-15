import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "דוגווקינג ודוגסיטינג בתל אביב | שירות מקצועי ואוהב",
  description:
    "שירות דוגווקינג ודוגסיטינג מקצועי ואוהב בתל אביב. טיולים יומיים, שמירה ביתית, ותשומת לב אישית לכלב שלכם. פעיל בכל אזורי תל אביב.",
  keywords: [
    "דוגווקר",
    "טיולי כלבים תל אביב",
    "דוגסיטינג",
    "שמירת כלבים",
    "dog walker tel aviv",
    "dog sitting tel aviv",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
