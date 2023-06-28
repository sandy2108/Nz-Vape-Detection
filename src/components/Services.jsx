import React from "react";
import Head from "next/head";
import Image from "next/image";
import workplace from "../Assests/workplace.jpg";
import hospital from '../Assests/s.jpg';
import schools from '../Assests/schools.jpg';

const Services = () => {
 
  const cardData = [
    {
      imageSrc: schools,
      alt: '/',
      title: 'Vape Detectors for Schools',
      description:
        'Combat the rising issue of vaping among students with discreet and tamper-proof vape detectors for schools. Ensure a safe and healthy environment by effectively monitoring and enforcing no-smoking/no-vaping policies.',
    },
    {
      imageSrc: workplace,
      alt: '/',
      title: 'Vape Detectors for Workplaces',
      description:
        'Enhance workplace safety measures with vape detection systems. Enforce no-smoking/no-vaping policies, protect employees from harmful smoke and vapors, and maintain a safe and healthy work environment.',
    },
    {
      imageSrc: hospital,
      alt: '/',
      title: 'Vape Detectors for Hospitals',
      description:
        'Maintain a safe environment in hospitals by installing vape detectors. Alert facility managers to vaping violations without compromising privacy, protecting the health and wellness of patients and staff.',
    },
  ];
  


  return (
    <div className="w-full bg-gray-900">
  
      <div className="max-w-[1240px] mx-auto p-4">
        <div className="py-7">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white ">
            Our Services
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {cardData.map((card, index) => (
        <div
          key={index}
          className="rounded-2xl border-2 border-[#999999] overflow-hidden"
        >
          <div>
            <Image src={card.imageSrc} height={200} width={400} layout="responsive" />
          </div>
          <div className="mt-5 p-2 text-left">
          <h1 className=" font-Inter font-bold text-2xl tracking-tight text-white leading-tight">
              {card.title}
            </h1>
            </div>
          <div className=" p-2 text-left">
           
            <p className="font-inter text-[15px] my-2 font-medium text-gray-400 md:text-xl">
              {card.description}
            </p>
          </div>
        </div>
      ))}
          
        </div>
      </div>
    </div>
  );
};

export default Services;
