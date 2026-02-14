import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";


export const metadata: Metadata = {
  title: "HYD HORSE ADVENTURE",
  description: "BY AURORA STUDIO-INFYSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='overflow-x-hidden min-h-screen'
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
