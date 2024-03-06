"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/config/store";
export const PublicRoutes = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isAuthorized = useSelector(
    (state: RootState) => state.userStatus.authorized
  );
  return !isAuthorized ? children : <>{router.push("/ListUsers")}</>;
};
