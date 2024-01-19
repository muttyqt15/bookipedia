"use client"
import { useAuthContext } from "@/context/useAuthContext";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useAuthContext();
  const router = useRouter(); 
  const token = Cookies.get("token");

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!token && !isLoading) {
      router.push("/login");
    }
  }, [token, isLoading, router]);

  return <>{children}</>;
};

// export const AuthGuardAdmin = ({ children }: { children: React.ReactNode }) => {
//   // If authenticated, the default home page is not accessible
//   const { userData, isLoading } = useAuthContext();
//   const router = useRouter();

// }