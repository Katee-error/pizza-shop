import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/providers";
import { CustomCookieBanner } from "@/components/shared/cookie/cookie-banner";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Providers>{children}</Providers>
        <CustomCookieBanner />
      </body>
    </html>
  );
}
