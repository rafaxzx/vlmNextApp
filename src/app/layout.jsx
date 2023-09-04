import Header from "@/components/Header/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "VLM App",
  description: "Aplicativo web para organizar o VLM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={
          roboto.className +
          " text-white bg-zinc-600 text-2xl h-screen flex flex-col"
        }
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
