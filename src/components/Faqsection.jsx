import React, { useState } from 'react'
import AccordianItem from './AccordianItem'
import faq from '../Assests/faaq.jpg'
import Image from 'next/image'

const Faqsection = () => {

  const [open,setOpen] = useState(false);

  const toggle = (index) => {
     if(open === index){
      return setOpen(null)
     }
     setOpen(index)
  }
  
  const accordianData = [
    {
      title: "What is a vape detection system, and how does it work?",
      description: "A vape detection system is an electronic device that is designed to detect and alert the presence of vape smoke and vapors in a designated area. It works by utilizing sensors that can detect the chemicals present in the exhaled smoke and vapors from electronic cigarettes or other vaping devices."
    },
    {
      title: "Where are vape detectors usually installed?",
      description: "Vape detectors are typically installed in public spaces such as hospitals, schools, universities, hotels, and workplaces where smoking and vaping are prohibited. They are also installed in prisons and detention centers to prevent illegal smoking and vaping."
    },
    {
      title: "Can vape detectors detect both smoke and vapor emissions?",
      description: "Yes, modern vape detectors are capable of detecting both smoke and vapor emissions. They can differentiate between vape and smoke from tobacco cigarettes and other combustible materials."
    },
    {
      title: "How discreet are vape detectors, and can they be tampered with?",
      description: "Vape detectors are designed to be discreet and can blend seamlessly into the environment. They are usually mounted on ceilings, walls, or other inconspicuous areas. Vape detectors are tamper-proof and can detect any attempt to remove or disable them."
    },
    {
      title: "What are the benefits of installing vape detectors in public spaces like schools and hospitals?",
      description: "Installing vape detectors in public spaces like schools and hospitals can help to enforce no-smoking/no-vaping policies, protect the health and safety of staff and patients, and prevent potential legal liability and costly cleaning fees associated with smoke and vape damage. Vape detectors can also deter underage vaping and promote healthier and safer environments for everyone."
    },
    {
      title: "Are vape detectors easy to install and maintain?",
      description: "Yes, vape detectors are easy to install and maintain. They can be installed by professionals and require little maintenance. Most vape detectors come with a user manual and can be easily integrated with existing security systems."
    },
    {
      title: "How do vape detectors alert staff or security personnel of a violation?",
      description: "When a vape detector detects smoke or vapor, it triggers an alarm or sends a notification to designated staff or security personnel. This allows for a swift response to the violation, and the violator can be promptly identified and disciplined."
    },
    {
      title: "Are vape detectors expensive?",
      description: "The cost of a vape detection system depends on the number of sensors, the size of the area to be monitored, and the type of detection technology used. However, the cost of installing vape detectors is relatively affordable, and the benefits of improved safety and health outcomes can outweigh the initial investment."
    },
  ]




  return (
    <div className='w-full h-full bg-gray-900'>
      <div className='max-w-[1240px] mx-auto p-4'>
       
      <section className='grid place-items-center'>
        <div className='flex justify-center items-center my-10'> <p className='text-3xl text-white'>Frequently Asked Question</p>
        
        </div>
        <div className='px-[40px] max-w-[800px]'>
         
           {accordianData.map((data,index)=>{
            return <AccordianItem key={index} open={index === open} title={data.title} description={data.description} toggle={()=>toggle(index)} />
           })}
        

        </div>

      </section>
      </div>
    </div>
  )
}

export default Faqsection