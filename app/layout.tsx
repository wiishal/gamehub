import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GAME HUB - Your Ultimate Gaming Destination",
  description: "Discover the latest games, reviews, and gaming news at GAME HUB. Your one-stop destination for all things gaming!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="h-screen w-screen flex flex-col">{children}</body>
    </html>
  );
}
