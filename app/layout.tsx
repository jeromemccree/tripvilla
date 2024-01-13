import "@/app/globals.css";
import type { Metadata } from "next";
import { NextAuthProvider } from "@/app/providers/NextAuthProvider";
import ModalsProvider from "@/app/providers/ModalsProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <ModalsProvider />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
