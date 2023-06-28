import React from 'react'
import Image from "next/image";
import office from "../Assests/markets.jpg";
import Link from "next/link";

const VapeMarket = () => {
  return (
    <div>
    <section className="bg-white dark:bg-gray-900 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Vape Detection Solutions for Markets
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              At NZ Vape Detection, we understand the diverse needs of different
              markets. Our vape detection systems are tailored to provide
              reliable solutions for schools, colleges, apartments, senior
              living facilities, and offices throughout Auckland, NZ.
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
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact us
            </Link>
          </div>
          <div className="place-self-center lg:col-span-5 lg:flex md:my-0 my-10">
            <Image src={office} alt="mockup" width={450} height={350} />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default VapeMarket