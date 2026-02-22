"use client";
import React, { useState } from "react";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { HiUser } from "react-icons/hi";
import { useApp } from "../context/AppContext";
import SearchSidebar from "../sections/search/SearchSidebar";

export default function Navbar() {
  const { cartItems } = useApp();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="py-8 md:w-10/12 mx-auto px-4">
        <div className="navbar  bg-white rounded-2xl md:h-24  h-13 p-4">
          <div className="navbar-start space-x-2 lg:hidden ">
            <div className="dropdown">
              <label tabIndex={0} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-semibold"
              >
                <li>
                  <a>New Drops 🔥</a>
                </li>
                <li>
                  <details>
                    <summary>Men</summary>
                    <ul className="p-2 bg-base-100 w-40 z-1">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Women</summary>
                    <ul className="p-2 bg-base-100 w-40 z-1">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
             <IoSearch
              size={24}
              className="cursor-pointer md:hidden"
              onClick={() => setIsSearchOpen(true)}
            />
          </div>

          <div className="navbar-start hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <li>
                <a className=" px-0">New Drops 🔥</a>
              </li>
              <li>
                <details>
                  <summary>Men</summary>
                  <ul className="p-2 bg-base-100 w-40 z-1">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2 bg-base-100 w-40 z-1">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Image src={logo} alt="Logo" width="128px" height="32px" />

          <div className="navbar-end md:space-x-10 space-x-3">
            <IoSearch
              size={24}
              className="cursor-pointer hidden md:block"
              onClick={() => setIsSearchOpen(true)}
            />
            <a className="cursor-pointer">
              <HiUser size={24} />
            </a>
            <p className="bg-[#FFA52F]  rounded-full w-6 h-6 font-semibold text-center">
              {cartItems.length}
            </p>
          </div>
        </div>
      </div>

      <SearchSidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
