import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ReduxStoreProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import '@/utils/toastify'
const poppins = Poppins({
  weight: ["400"],
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
      <body className={poppins.className}>
        <ReduxStoreProvider>{children}</ReduxStoreProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
