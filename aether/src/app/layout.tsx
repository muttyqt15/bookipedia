import type { Metadata } from "next";
import {
  Inter,
  Libre_Baskerville,
  Playfair_Display,
  Merriweather,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar/Nav";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });
const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Bookipedia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#A87C7C] ${libre.className}`}>
        <AuthProvider>
          <Nav />
          <main className="">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}