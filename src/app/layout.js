import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";
import next from "next";

const logoFont = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${logoFont.className}`}>
        {children}
      </body>
    </html>
  );
}
