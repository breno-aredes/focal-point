import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/global.scss";

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "To do list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
