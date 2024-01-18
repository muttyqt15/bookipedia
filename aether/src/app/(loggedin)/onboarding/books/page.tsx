import { AuthGuard } from "@/api/AuthGuard";
import PersonalBookPage from "@/pages/PersonalBookPage";
import React from "react";

const Page = () => {
  return (
    <AuthGuard>
      <PersonalBookPage />
    </AuthGuard>
  );
};

export default Page;
