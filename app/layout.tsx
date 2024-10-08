import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const questrialReg = localFont({
  src: "./fonts/Questrial-Regular.ttf",
  variable: "--font-questrial-reg",
  weight: "400", // Questrial is regular weight only
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${questrialReg.variable} antialiased`}
      >
        <div className="md:px-20">
          <Header />
          {children}
        </div>{" "}
        <Footer />
      </body>
    </html>
  );
}
