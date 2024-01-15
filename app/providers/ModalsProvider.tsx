"use client";
import MobileSidebarModal from "@/app/components/modal/MobileSidebarModal";
import SearchModal from "@/app/components/modal/SearchModal";
import CheckEmailModal from "@/app/components/modal/CheckEmailModal";
import RegisterModal from "@/app/components/modal/RegisterModal";

const ModalsProvider = () => {
  return (
    <>
      <SearchModal />
      <MobileSidebarModal />
      <CheckEmailModal />
      <RegisterModal />
    </>
  );
};

export default ModalsProvider;
