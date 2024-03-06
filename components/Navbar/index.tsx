"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import LogoReto from "@/Images/logo-white.jpeg";

export const Navbar = () => {
  const router = useRouter();
  const logoutSession = () => {
    localStorage.removeItem("isAuthorized");
    router.push("/");
  };
  return (
    <nav className="bg-white light:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 light:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/ListUsers"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image width={40} height={40} src={LogoReto} alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
            RETO
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => logoutSession()}
          >
            Logout
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 dark:border-gray-700">
            <li>Welcome</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
