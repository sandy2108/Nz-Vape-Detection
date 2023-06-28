import Image from "next/image";
import suplogo from "../Assests/help.jpg";

const Contact = () => {
  return (
    <div className="w-full  h-screen">
      <div className="w-full bg-gray-900/90 absolute">
        <Image
          className="w-full h-screen object-cover mix-blend-overlay"
          src={suplogo}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-6">
          <h2 className="pt-8 text-center uppercase md:mt-10 text-slate-300 text-3xl font-bold">
            Request a Quote
          </h2>
          <h3 className="text-5xl py-12 font-bold text-center">
            Finding the Right team
          </h3>
        </div>
        <div class="px-4 mx-auto max-w-screen-xl  lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <p class=" font-light text-white md:text-xl">
              Leading the way in vape detection system installation, we are the
              trusted experts based in Auckland, New Zealand. Our top-quality
              services ensure a vape-free environment and strict adherence to
              vaping regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
