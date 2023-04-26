import "./globals.css";
import Header from "csc-start/components/Header";
import Footer from "csc-start/components/Footer";
import { Darker_Grotesque } from "next/font/google";

export const metadata = {
  title: "LinkBarge",
  description: "A link curation tool. Barge your links!",
};

const dG = Darker_Grotesque({
  weight: ["800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dG.className}>
      {/* <Header /> */}
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <Footer /> */}
    </html>
  );
}
