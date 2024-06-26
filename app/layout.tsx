import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} custom-white dark:bg-slate-800 bg-slate-50`}>
        <header className={poppins.className}>
          <h1>Gen Recipe</h1>
        </header>
        {children}
        <footer className={poppins.className}>
          <span className="cc-text">&#169; 2024 Gen Recipes</span>
        </footer>
      </body>
    </html>
  );
}
