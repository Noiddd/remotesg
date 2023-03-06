import "./globals.css";

import { Nunito } from "next/font/google";
import NavBar from "./(components)/navbar/page";

const nunito = Nunito({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "RemoteSG",
  description: "Remote jobs in Singapore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
