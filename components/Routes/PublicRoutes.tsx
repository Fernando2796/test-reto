"use client";

import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
export const PublicRoutes = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isAuthorized = localStorage.getItem("isAuthorized");

  return !isAuthorized || isAuthorized === "false" ? (
    children
  ) : (
    <>{router.push("/ListUsers")}</>
  );
};
