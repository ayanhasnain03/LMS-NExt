import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Code Verse – Explore Creativity, Code & Community",
  description:
    "Code Verse is a dynamic platform where innovation meets creativity. Discover tools, stories, and resources crafted for developers, creators, and dreamers alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<ClerkProvider>
     <html lang="en">
      <body className={dmSans.className}>
        <Providers>
         <div className="root-layout">
         {children}

         </div>
         </Providers>
      </body>
    </html>
</ClerkProvider>
  );
}
