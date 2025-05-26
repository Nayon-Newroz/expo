import React from "react";
import ImageSlider from "./ImgesSilder";

const WhyAttend = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-auto">
      <div className="w-full md:w-full lg:w-1/2 flex justify-center items-center px-3 lg:px-0 py-10 lg:py-0">
        <div className="w-[80%] md:w-[80%]">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-white">
            Why <br />
            Attend
          </h1>
          <ul className="text-white list-disc pl-8 text-[16px] space-y-1 md:space-y-3">
            <li>Free Entry for everyone</li>
            <li>1 to 1 Consultation - Speak directly with university staff.</li>
            <li>On Spot Assessment - Get assessed instantly and apply.</li>
            <li>Application Fee Waiver* - Save on application fees. </li>
            <li>Student Visa Desk - Get expert visa guidance.</li>
            <li>
              Free Services- Admission, scholarships, GS/GTE & visa support.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2">
        <ImageSlider />
      </div>
    </div>
  );
};

export default WhyAttend;
