"use client";

import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/config/store";
export const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isAuthorized = useSelector(
    (state: RootState) => state.userStatus.authorized
  );

  return isAuthorized ? children : <>{router.push("/")}</>;
};
