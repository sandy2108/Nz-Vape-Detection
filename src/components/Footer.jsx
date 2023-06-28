import React from "react";
import logo from "../Assests/logo1.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900  border-t-2 border-gray-400">
      <div className="max-w-[1240px] mx-auto p-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="#" className="flex items-center">
                <Image
                  src={logo}
                  height={280}
                  width={300}
                  alt="NZ vape detection Logo"
                />
              </Link>
            </div>
            <div className="md:flex gap-10 items-center justify-center mx-4">
              <Link
                href="Vape_markets"
                className="text-white font-bold py-2 text-18 leading-28"
              >
                Markets
              </Link>
              <Link
                href="Vape_FAQ"
                className="text-white font-bold py-2 text-18 leading-28"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div class="sm:flex my-3 sm:items-center sm:justify-between">
            <span class="text-sm ml-2 text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com" class="hover:underline">
                NZ VAPE DETECTION™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
