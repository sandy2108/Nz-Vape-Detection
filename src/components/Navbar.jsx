import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../Assests/logo1.png";

const items = [
  { label: "MARKETS", to: "Vape_markets" },
 
  { label: "FAQ", to: "Faq" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => setToggleMenu(!toggleMenu);

  return (
    <div className="w-full h-90 bg-black">
      <div className="max-w-[1240px] mx-auto p-4">
        <div className="flex justify-between items-center mt-2">
          <div>
            <Link href="/"><Image src={logo} height={280} width={300} alt="Logo" /></Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-7 items-center justify-center mx-4">
              {items.map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.to}`}>
                    <h1 className="text-white font-bold py-2 text-18 leading-28">
                      {item.label}
                    </h1>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="Request_quote">
            <button className="text-white ml-3 rounded-lg bg-[#be123c] p-2 font-bold">
              Request Quote
            </button>
            </Link>
          </div>
          

          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <BiMenu
              fontSize={28}
              className="text-white mr-4 md:hidden cursor-pointer w-10 h-10"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-screen h-screen shadow-2xl md:hidden list-none flex flex-col justify-start rounded-md bg-zinc-900 animate-slide-in items-start">
              <div className="w-full mb-10 flex justify-between items-center ">
                <Image src={logo} height={250} width={250} alt="Logo" />
                <li className="text-xl w-fully my-2 ml-auto">
                  <AiOutlineClose
                    onClick={() => setToggleMenu(false)}
                    className="cursor-pointer w-8 h-5 mr-5 text-white"
                  />
                </li>
              </div>

              {items.map((item, index) => (
                <Link href={`/${item.to}`} >
                <li
                  key={index}
                  className="mx-2 my-6  font-mono font-bold hover:text-[#C004de] cursor-pointer text-lg text-[#FFFFFF]  w-full "
                  onClick={() => setToggleMenu(false)}
                >
                  {item.label}
                </li>
                </Link>
              ))}
               <Link href="Request_quote">
              <button className="ml-2 mt-10 text-white rounded-lg bg-[#be123c] p-2 font-bold" onClick={() => setToggleMenu(false)}>
                Request Quote
              </button>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
