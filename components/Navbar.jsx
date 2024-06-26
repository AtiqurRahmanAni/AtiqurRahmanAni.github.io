"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { navItems } from "@/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);
  const pathName = usePathname();

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full flex justify-center items-center border border-b-gray-500/10 lg:flex-row flex-col p-6 z-10 backdrop-blur-xl bg-white/80"
      ref={navbarRef}
    >
      <Link href="/" className="font-semibold text-gray-500 text-lg xl:mr-20">
        Md Atiqur Rahman
      </Link>
      <ul
        className={`${
          open ? "flex" : "hidden"
        } gap-x-0 gap-y-2 lg:gap-y-0 lg:ml-14 lg:flex-row lg:gap-x-10 flex-col justify-center items-center mt-4 lg:mt-0 lg:flex`}
      >
        {navItems.map((navItem, idx) => (
          <li key={idx} className="relative group text">
            <Link
              href={navItem.href}
              className={`text-md text-gray-500 hover:text-gray-500 ${
                pathName.split("/").filter(Boolean)[0] ===
                  navItem.href.split("/").filter(Boolean)[0] && "text-gray-800"
              }`}
            >
              {navItem.name}
            </Link>
            <div
              className={`h-[4px] absolute bg-gray-400 -bottom-2 w-full rounded-md scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                pathName.split("/").filter(Boolean)[0] ===
                  navItem.href.split("/").filter(Boolean)[0] &&
                "scale-x-100 bg-gray-800"
              }`}
            />
          </li>
        ))}
      </ul>
      <div
        className="absolute right-2 top-5 w-[30px] h-[30px] cursor-pointer block lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FontAwesomeIcon
          className="w-full h-full"
          icon={!open ? faBars : faClose}
        />
      </div>
    </nav>
  );
};

export default Navbar;
