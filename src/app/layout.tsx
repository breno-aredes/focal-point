import type { Metadata } from "next";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
