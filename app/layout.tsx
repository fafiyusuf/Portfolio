import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garaad Systems",
  description:
    "Garaad Systems delivers e-government, digital engineering, and institutional modernization solutions that strengthen public and private sector institutions across Ethiopia and the Horn of Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
