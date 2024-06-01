//components
import { Layout } from "@/components/Layout";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himanshu Jain",
  description: "Himanshu Jain's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontSize: "62.5%" }}>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
