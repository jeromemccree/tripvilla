"use client";
import MobileSidebarModal from "@/app/components/modal/MobileSidebarModal";
import SearchModal from "@/app/components/modal/SearchModal";

const ModalsProvider = () => {
  return (
    <>
      <SearchModal />
      <MobileSidebarModal />
    </>
  );
};

export default ModalsProvider;
