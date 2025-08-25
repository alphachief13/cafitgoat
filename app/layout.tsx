import type { Metadata } from "next";
import { Figtree } from 'next/font/google'
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Cafitgoat's Portolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
