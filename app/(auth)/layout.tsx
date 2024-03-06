"use client"
import { Poppins } from "next/font/google";
import AuthNavbar from "@/components/auth-navbar/auth-navbar";
import Authfooter from "@/components/auth-footer/auth-footer";

const poppins = Poppins({
  weight: ["400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
         <AuthNavbar/>
        {children}
        <Authfooter/>
      </body>
    </html>
  );
}
