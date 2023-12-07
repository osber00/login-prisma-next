import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lato = Lato({ subsets: ["latin"], weight: ["100", "400", "700", "900"] });

export const metadata = {
  title: "Login Next App",
  description: "Login con AuthNext",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={lato.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
