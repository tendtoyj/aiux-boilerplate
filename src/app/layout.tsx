import type { Metadata } from "next";
import "./globals.css";
import "wanted-sans/fonts/webfonts/variable/complete/WantedSansVariable.css";
import Providers from "./providers";
import FloatingMenu from "@/components/floating-menu";

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
        <Providers>
          {children}
          <FloatingMenu />
        </Providers>
      </body>
    </html>
  );
}
