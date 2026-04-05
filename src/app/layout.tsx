import type { Metadata } from "next";
import "./globals.css";
import "wanted-sans/fonts/webfonts/variable/complete/WantedSansVariable.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Match Table",
  description: "Match Table 프로토타입",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
