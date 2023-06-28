import Image from "next/image";
import Faq from "../Assests/faaq.jpg";

const Faqimage = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <div className="absolute inset-0">
        <Image className="w-full h-[70vh] object-cover"  src={Faq} alt="FAQ" />
      </div>
      <div className="max-w-[1240px] mx-auto p-4 relative">
        <div className="mt-20">
          <p className="text-4xl md:text-6xl text-white">FAQ</p>
          <p className="my-10 text-3xl md:text-4xl text-white max-w-xl">Curious about Vape detection ? Check out the frequency Asked questions.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Faqimage;

