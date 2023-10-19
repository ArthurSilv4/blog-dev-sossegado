import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/page";
import Providers from "./providers";
import { Footer } from "@/components/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dev Sossegado",
  description: "Blog Dev Sossegado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
