import { Inter } from "next/font/google";
import "./globals.css";
import { DevotionContextProvider } from "../context/DataProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Devotion",
  description: "Created by Toismart Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DevotionContextProvider>{children}</DevotionContextProvider>
      </body>
    </html>
  );
}
