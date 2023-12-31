import React from "react";
import Link from "next/link";
import Image from "next/image";
import sensor from '../Assests/sensor.png';

const Hero = () => {
  return (
    <section className="bg-gray-900 md:h-screen">
      <div className="max-w-[1240px] mx-auto">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-white leading-none md:text-5xl xl:text-6xl :text-white">
           Expert Vape Detection Installation Services
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl  :text-gray-400">
          Discover exclusive deals on NZ VaporSecures advanced vape detection solutions in Auckland, NZ. Enhance safety in schools, colleges, offices, apartments, and beyond with cutting-edge technology for a smoke-free environment.
          </p>
          <Link
            href="Request_quote"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base bg-[#be123c] font-medium text-center text-white rounded-lg "
          >
            Get in touch
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="tel:021 023 26040"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Contact us
          </Link>
        </div>
        <div className="place-self-center lg:col-span-5 lg:flex md:my-0 my-10">
          <Image src={sensor} alt="mockup" width={450} height={350} />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
