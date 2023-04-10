import LOGO from "../assets/HourG2.svg";

const Footer = () => {
  return (
    <div className="px-4 sm:w-10/12 mx-auto">
      <div className="mx-auto h-px rounded-md bg-slate-200 mb-10"></div>
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <img src={LOGO} alt="hourglass colored logo" />
          <div className="grid grid-cols-2 mt-8 sm:flex sm:gap-5">
            <ul className="flex flex-col gap-3 sm:gap-5 sm:flex-row">
              <li className="text-[#667085]">Overview</li>
              <li className="text-[#667085]">Features</li>
              <li className="text-[#667085]">Pricing</li>
            </ul>
            <ul className="flex flex-col gap-3 sm:gap-5 sm:flex-row">
              <li className="text-[#667085]">Careers</li>
              <li className="text-[#667085]">Help</li>
              <li className="text-[#667085]">Pricing</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4  md:w-1/4">
            <label className="font-semibold text-sm" htmlFor="email">Stay up to date</label>
            <div className="flex flex-col sm:flex-row gap-3 items-center ">
            <input className="px-2 border py-1 rounded-md w-full " id="email" type="email" placeholder="Enter your email"/>
            <button className="w-full bg-[#7F56D9] sm:w-1/3 text-slate-200 rounded-md p-2 text-base font-medium">Subscribe</button>
            </div>
           
        </div>
      </div>


      <div className="mb-10 mt-12">
        <div className="mx-auto h-px rounded-md bg-slate-200 mb-10"></div>
        <div className="flex flex-col gap-4 sm:flex-row-reverse sm:justify-between ">
            <ul className="flex gap-4">
                <li className="text-[#98A2B3] text-base">Terms</li>
                <li className="text-[#98A2B3] text-base">Privacy</li>
                <li className="text-[#98A2B3] text-base">Cookies</li>
            </ul>
            <p className="text-[#98A2B3]">© 2077 Fake Company. All rights reserved.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
