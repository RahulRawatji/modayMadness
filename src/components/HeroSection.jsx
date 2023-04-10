import { AiOutlinePlayCircle } from "react-icons/ai";

import HERO_IMG from "../assets/heroImg.jpg";
import BIGHERO_IMG from "../assets/bigHeroImg.jpg";
import CATALOG_LOGO from "../assets/Catalog.svg";
import CIRC_LOGO from "../assets/Circooles.svg";
import LAYERS_LOGO from "../assets/Layers.svg";
import QUOTIENT_LOGO from "../assets/Quotient.svg";
import SIS_LOGO from "../assets/Sisyphus.svg";
import HOURGLASS_LOGO from "../assets/Hourglass.svg";


const HeroSection = () => {
  return (
    <>
        <div className="bg-[#53389E] ">
        <div className="px-4 sm:w-10/12 mx-auto">
          <div className="pt-12 sm:pt-36">
            <h4 className="font-inter text-slate-200 text-4xl font-medium sm:text-6xl">
              We design physical <span className="underline">experiences</span>{" "}
              that create more happy in the world
            </h4>
            <p className="font-inter text-slate-200 text-lg mt-5 sm:w-2/4">
              — We’re a full-service interior design agency who specialise in
              simple, useful and beautiful solutions for any space.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#7F56D9] sm:order-last text-slate-200 rounded-md mt-8 p-3 text-base font-medium">
                Get in touch
              </button>
              <button className="bg-[#F9F5FF] text-[#6941C6] rounded-md mt-8 p-3 text-base font-medium flex justify-center items-center gap-2">
                {" "}
                <AiOutlinePlayCircle size={20} />
                Showreel
              </button>
            </div>
          </div>
          
          <div className="flex justify-center py-12">
            <img
              srcSet={`${HERO_IMG} 480w,${BIGHERO_IMG} 800w`}
              sizes="(max-width:600px) 480px, 800px"
              src={BIGHERO_IMG}
              className="w-full"
              alt="a hero image"
            />
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-slate-200 text-base font-medium">
              We’ve worked with some great startups
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-4 sm:gap-10 items-start place-items-center px-2 mt-8 mb-12">
              <img src={LAYERS_LOGO} />
              <img src={SIS_LOGO} />
              <img src={CIRC_LOGO} />
              <img src={CATALOG_LOGO} />
              <img src={QUOTIENT_LOGO} />
              <img src={HOURGLASS_LOGO} />
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default HeroSection