"use client";

// import Image from "next/image";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import Navbar from "@/app/components/Navbar";
// import Dropdown from "@/app/components/dropdown/Dropdown";
import Button from "@/app/components/Button";
import Image from "next/image";
import FeaturedIcon from "@/app/components/FeaturedIcon";
import { General } from "untitledui-js";
// import { Avatar } from "./components/avatar/Avatar";

export default function Home() {
  const { data: session, status } = useSession();
  console.log("status", status);
  console.log("session", session);

  return (
    <>
      <Navbar maxWidth="max-w-7xl" />

      <header>
        <div className="max flex max-h-screen w-full flex-row items-center">
          {/* <div className="max-w-screen-sm  flex  flex-col">
            <h1 className="text-display_xl font-semibold text-gray-900">
              Find Your Perfect Stay at Tripvilla
            </h1>
            <p>
              Step into a world of hospitality and exploration, where every destination holds a new
              promise of adventure.
            </p>
            <div>
              <Button variant="default" hierarchy="primary" size="2xl" text="Explore Now" />
            </div>
          </div> */}

          {/* <Image
            src="/homepageImage.png"
            alt="hero"
            layout="responsive"
            width={1920}
            height={1080}
            priority={true}
            quality={100}
          /> */}
          <FeaturedIcon icon={<General.UploadCloud02 />} size="lg" color="gray" theme="modern" />
          <FeaturedIcon
            icon={<General.UploadCloud02 />}
            size="xl"
            color="gray"
            theme="lightOutline"
          />
        </div>
      </header>
    </>
  );
}
