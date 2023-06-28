import React from 'react';
import Image from 'next/image';
import wind from '../Assests/wind.png'
import vaping from  '../Assests/vaping.png'
import particles from '../Assests/particles.png'
import detectors from '../Assests/detectors.png'
import alarm from '../Assests/alarm.png'
import prompt from '../Assests/prompt.png'

const Vapeworks = () => {
  const data = [
    { 
      icon:wind,
      title: 'Airborne Particle Detection',
      description: 'Vape detectors use advanced sensors to detect and analyze airborne particles, ensuring accurate monitoring of the environment.',
    },
    {
      icon:vaping,
      title: 'Vaping Particle Emission',
      description: 'Vaping devices emit smoke, vapor, and aerosol particles, contributing to air pollution in the immediate vicinity.',
    },
    { 
      icon:particles,
      title: 'Particle Analysis',
      description: 'Detectors analyze the composition of airborne particles, enabling the identification of vaping emissions among other contaminants.'
    },
    { 
      icon:detectors,
      title: 'Identification of Vaping Particles',
      description: 'By comparing detected particles to known vaping emission profiles, detectors can determine if the particles originate from vaping devices.'
    },
    { 
      icon:alarm,
      title: 'Alarm or Notification Trigger',
      description: 'Vape detectors trigger alarms or send notifications when vaping particles are detected, alerting relevant personnel to the presence of vaping activity.'
    },
    { 
      icon:prompt,
      title: 'Prompt Response',
      description: 'Immediate response is facilitated by timely alerts, enabling facility managers or security personnel to address vaping incidents swiftly and implement necessary actions.'
    }
    // Add more data objects for each item
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto p-4">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              How Vape Detection Works
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Our mission is to help businesses create safe and compliant environments by detecting and preventing the use of vaping devices and substances.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {data.map((item, index) => (
              <div key={index}>
                <div className="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <Image src={item.icon} alt="/"/>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vapeworks;
