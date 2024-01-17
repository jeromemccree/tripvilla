"use client";
import MobileSidebarModal from "@/app/components/modal/MobileSidebarModal";
import SearchModal from "@/app/components/modal/SearchModal";
import CheckEmailModal from "@/app/components/modal/CheckEmailModal";
import RegisterModal from "@/app/components/modal/RegisterModal";
import CompleteProfileModal from "@/app/components/modal/CompleteProfileModal";
import CropImageModal from "@/app/components/modal/CropImageModal";
const ModalsProvider = () => {
  return (
    <>
      <CropImageModal />
      <CompleteProfileModal />
      <SearchModal />
      <MobileSidebarModal />
      <CheckEmailModal />
      <RegisterModal />
    </>
  );
};

export default ModalsProvider;
