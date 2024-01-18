"use client"
import { useAuthContext } from "@/context/useAuthContext";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { userData, isLoading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!userData && !isLoading) {
      router.push("/login");
    }
  }, [userData, isLoading, router]);

  return <>{children}</>;
};
