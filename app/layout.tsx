import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7PXD0QKL1C"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7PXD0QKL1C');
          `}
        </Script>
      </head>
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
