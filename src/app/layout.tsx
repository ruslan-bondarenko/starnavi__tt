import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/base/layout";
import "./globals.css";
import { starwars } from "@/shared/assets";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarNavi",
  description: "by Ruslan Bondarenko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${starwars.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
