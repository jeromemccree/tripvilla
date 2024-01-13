"use client";

// import Image from "next/image";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import Navbar from "@/app/components/Navbar";
// import Dropdown from "@/app/components/dropdown/Dropdown";
// import Button from "@/app/components/Button";
// import { Avatar } from "./components/avatar/Avatar";

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
