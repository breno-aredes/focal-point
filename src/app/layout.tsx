import type { Metadata } from "next";
import "../styles/global.scss";
import FavIcon from "@/assets/favicon.png";

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "Gerencie suas tarefas diarias de forma eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={FavIcon.src} />
      </head>
      <body>{children}</body>
    </html>
  );
}
