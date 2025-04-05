import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subtrant Softworks",
  description:
    "Software development enthusiasts from the City of Education, Malang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased flex flex-col mt-30 w-full justify-center items-center text-center`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
