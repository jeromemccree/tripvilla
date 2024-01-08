// import Image from "next/image";
"use client";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";

export default function Home() {
  const { data: session, status } = useSession();
  console.log("status", status);
  console.log("session", session);

  return (
    <>
      <Navbar />
    </>
  );
}
