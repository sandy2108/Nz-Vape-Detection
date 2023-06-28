import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-[1240px] mx-auto ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">
              Empowering Vape-Free Environments
            </h2>
            <p class="mb-6 font-light text-gray-600 md:text-xl">
              NZ Vape Detection is a team of qualified and registered master
              electricians specializing in professional vape detector
              installation services across Auckland, Tāmaki Makaurau. With our
              extensive experience and expertise, we deliver reliable and
              efficient vape detector installations that meet the highest
              industry standards.
            </p>
            <span class="font-semibold text-xl text-gray-400 uppercase">
              FEATURED IN
            </span>
            <div class="grid md:grid-cols-2 grid-cols-1 md:gap-10 mt-5 justify-between items-center">
              <button class="p-2 rounded-full border-2 border-gray-700 my-5">
                <p class="text-sm ml-1 leading-5 whitespace-nowrap">
                  Tailored Solutions for Various Industries
                </p>
              </button>
              <button class="p-2 rounded-full border-2 border-gray-700">
                <p class="text-sm ml-1 leading-5 whitespace-nowrap">
                  Certified Electricians
                </p>
              </button> 
            </div>
            <div>
            <button class="p-2 px-10 rounded-full my-5 md:my-0 border-2 border-gray-700">
                <p class="text-sm ml-1 leading-5 whitespace-nowrap">
                  Reliable Vape Detection Systems
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
