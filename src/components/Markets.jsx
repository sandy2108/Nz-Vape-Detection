import Link from 'next/link';
import React from 'react';

const Markets = () => {
  const markets = [
    {
      title: 'Schools & Colleges',
      description: 'Create a vape-free environment for educational institutions with our advanced vape detection systems.',
      benefits: [
        'Protect students health',
        'Maintain compliance with regulations',
        'To Foster a conducive learning environment'
      ]
    },
    {
      title: 'Offices',
      description: 'Foster a professional and productive workspace with our vape detection systems designed for offices.',
      benefits: [
        'Maintain a smoke-free workplace',
        'Improve air quality',
        'Comply with occupational health and safety regulations'
      ]
    },
    {
      title: 'Apartments',
      description: 'Safeguard residents\' well-being by implementing vape detection solutions in apartment complexes.',
      benefits: [
        'Healthy & comfortable living space',
        'Ensure compliance with smoke-free policies',
        'Enhance residents\' safety'
      ]
    }
  ];

  return (
    <div className='w-full bg-gray-900'>
      <div className='max-w-[1240px] mx-auto p-4'>
        <section className=" py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">Vape Detection for business teams like yours</h2>
            <p className="mb-5 font-light text-gray-400 sm:text-xl ">We also offer vape detection solutions for other markets and industries. Contact us to discuss your specific requirements.</p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {markets.map((market, index) => (
              <div key={index} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900  rounded-lg border  shadow border-gray-600 xl:p-8bg-gray-800 ">
                <h3 className="mb-4 text-2xl font-bold text-[#be123c]">{market.title}</h3>
                <p className="font-light text-gray-100 sm:text-lg mb-10 ">{market.description}</p>
                <div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {market.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <svg style={{ transform: 'rotate(90deg)' }} className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M2.293 9.707a1 1 0 010-1.414L7.586 3.95a1 1 0 011.414 0l6.293 6.293a1 1 0 01-1.414 1.414L9 6.414V16a1 1 0 11-2 0V6.414L3.707 9.121a1 1 0 01-1.414.586z" clipRule="evenodd" />
                        </svg>
                        <span className="font-light text-gray-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                 
                </div>
                <Link href="Request_quote" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200">Get started</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Markets;
