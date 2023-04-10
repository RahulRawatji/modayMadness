import CHAT_ICON from "../assets/chatIcon.svg";
import THUNDER_ICON from "../assets/thunderIcon.svg";
import HERO_IMG_2 from "../assets/heroImg2.jpg";
import BIGHERO_IMG_2 from "../assets/bigHeroImg2.jpg";

const AboutSection = () => {
  return (
    <>
    <div className="px-4 py-12 sm:w-10/12 mx-auto">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="sm:w-1/2">
            <p className="text-[#6941C6] font-medium">Who we are</p>
            <h4 className="text-3xl font-semibold font-inter mt-3">
              Commercial interior designers
            </h4>
            <p className="font-normal text-[#667085] mt-3 text-lg">
              Untitled are a commercial interior design studio. We specialise in
              customised office design, restaurant design, shop design, and
              studio design.
            </p>
          </div>
          <div className="sm:w-1/2">
            <div className=" flex flex-col gap-4">
              <div className="flex gap-3">
                <img src={CHAT_ICON} className="self-start" />
                <div className="mt-2">
                  <h4 className="font-medium text-lg">Share team inboxes</h4>
                  <p className="font-normal text-[#667085] mt-2 text-lg">
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <img src={THUNDER_ICON} className="self-start" />
                <div className="mt-2">
                  <h4 className="font-medium text-lg">
                    Deliver instant answers
                  </h4>
                  <p className="font-normal text-[#667085] mt-2 text-lg">
                    An all-in-one customer service platform that helps you
                    balance everything your customers need to be happy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <img
            srcSet={`${HERO_IMG_2} 480w,${BIGHERO_IMG_2} 800w`}
            sizes="(max-width:600px) 480px, 800px"
            src={BIGHERO_IMG_2}
            alt="About the company"
            className="w-full"
          />
        </div>
      </div>
    </>
  )
}

export default AboutSection