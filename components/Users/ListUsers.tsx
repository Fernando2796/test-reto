"use client";

import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { User } from "../interfaces";

export const ListUsers = () => {
  const [listUsers, setListUsers] = useState<User[]>([]);
  const [userName, setuserName] = useState<string | null>(null);

  const loadUsers = async () => {
    try {
      const response = await axios.get("https://demo2910689.mockable.io/table");
      setListUsers(response.data.table);
    } catch (error) {}
  };

  const searchUser = useMemo(() => {
    return userName !== null && userName.length > 0
      ? listUsers.filter((user) => {
          return user.nombre.toLowerCase().includes(userName.toLowerCase());
        })
      : listUsers;
  }, [userName, listUsers]);

  const deleteUser = (id: number) => {
    const updateListUser = listUsers.filter((user, index) => index !== id);
    setListUsers(updateListUser);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24 w-4/5">
      <div className="p-4 bg-white light:bg-gray-900">
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 light:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => setuserName(e.target.value)}
            type="text"
            id="table-search"
            className="block h-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for name"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {searchUser.map((user, index) => (
            <tr
              key={index}
              className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
              >
                {user.nombre}
              </th>
              <td className="px-6 py-4">{user.apePaterno}</td>
              <td className="px-6 py-4">{user.edad}</td>
              <td className="px-6 py-4">
                <button
                  className="font-medium text-red-600 light:text-blue-500 hover:underline"
                  onClick={() => deleteUser(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
