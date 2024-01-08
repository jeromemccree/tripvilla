"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/Logo.svg";

const Logo = ({ route = "/", className }: { route?: string; className?: string }) => {
  const router = useRouter();
  return (
    <button className={className} onClick={() => router.push(route)}>
      <Image src={logo} alt="Logo" width={111} height={22} />
    </button>
  );
};

export default Logo;
