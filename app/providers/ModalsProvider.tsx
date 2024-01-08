"use client";
import MobileSidebarModal from "../components/Modal/MobileSidebarModal";
import SearchModal from "../components/Modal/SearchModal";

const ModalsProvider = () => {
  return (
    <>
      <SearchModal />
      <MobileSidebarModal />
    </>
  );
};

export default ModalsProvider;
