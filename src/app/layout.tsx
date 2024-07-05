import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Aasif",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 sm:p-8 w-full sm:max-w-screen-xl mx-auto">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
