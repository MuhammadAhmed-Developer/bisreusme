import { ToastContainer } from 'react-toastify'
import '@/utils/toastify'
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const poppins = Poppins({
  weight: ["400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bisresume",
  description: "Build in Seconds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        <Navbar/>
          {children}
          <Script id="script">
            {`
          const checkbox = document.getElementById("nav-check");
          function closeNavbar() {
            if (checkbox){
              checkbox.checked = false;
            }
          }
           const linkTextElements = document.querySelectorAll(".linkText");
             linkTextElements.forEach((element) => {
              element.addEventListener("click", closeNavbar);
            });  
          `}
          </Script>
          <Footer/>
          <ToastContainer/>
      </body>
    </html>
  );
}
