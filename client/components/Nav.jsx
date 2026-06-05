"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import NavApi from "@/lib/NavApi";
import {useEffect} from "react";


function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { user } = useAuth();
  const [navData, setNavData] = useState(null);

  useEffect(()=>{
    const FetchNav = async()=>{
      const data= await NavApi();
      console.log("Nav Data:", data);
      setNavData(data);
    };
    FetchNav();
  }, [])



  return (
    <nav
      className="
      bg-[linear-gradient(to_right,#FCF0D7_0%,#F6DD98_45%,#E3B96A_100%)]
      px-6
      py-4
      h-15"
    >
      <div className=" h-full flex items-center justify-between">
  <Link href="/" className="flex items-center gap-3">
  {navData?.logo && (
    <img
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${navData.logo.url}`}
      alt="Farmora"
      className="h-15 w-20  rounded-full"
    />
  )}

  <h1 className="text-2xl font-semibold text-black">
    Farm<span className="text-[#E88A17]">ora</span>
  </h1>
</Link>

        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {navData?.menuItems.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`transition duration-200 px-1 pb-1 text-black hover:text-white ${
                pathname === link.url
                  ? "underline underline-offset-4 decoration-2 decoration-black"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5 text-[22px] text-black">
          <button className="hover:text-white transition">
            <FiSearch />
          </button>

          {user ? (
            <Link href="/profile" className="hover:text-white transition">
              <FiUser />
            </Link>
          ) : (
            <Link href="/login" className="hover:text-white transition">
              <FiUser />
            </Link>
          )}

          <div className="relative">
            <Link href="/cart" className="hover:text-white transition text-xl">
              <FaCartShopping />
            </Link>

            {totalItems > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-3
                bg-[#E88A17]
                text-white
                text-[11px]
                min-w-[18px]
                h-[18px]
                px-1
                rounded-full
                flex
                items-center
                justify-center
                font-medium"
              >
                {totalItems}
              </span>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-5 pt-4 border-t border-[#E7DBC0] font-medium">
          {navData?.menuItems.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setOpen(false)}
              className={`text-black hover:text-white transition ${
                pathname === link.url
                  ? "underline underline-offset-4 decoration-2 decoration-black"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-black hover:text-white transition"
          >
            <FaCartShopping />
            Cart
            {totalItems > 0 && (
              <span
                className="
                bg-[#E88A17]
                text-white
                text-xs
                px-2
                py-[2px]
                rounded-full"
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
