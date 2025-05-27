import ImageSlider from "./ImgesSilder";

const WhyAttend = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-auto max-w-[900px] mx-auto">
      <div className="w-full  md:w-3/5 flex justify-center items-center px-3 md:px-0 py-10 md:py-0">
        <div className="w-[80%] md:w-[80%]">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Why <br />
            Attend
          </h1>
          <ul className="text-white list-disc pl-8 text-[14px] space-y-1 md:space-y-1">
            <li>Free Entry - No entry fee</li>
            <li>1 to 1 Consultation - Speak directly with university representatives</li>
            <li>On Spot Assessment - Get assessed instantly and apply</li>
            <li>Application Fee Waiver - Save on application fees</li>
            <li>Student Visa Desk- Get expert visa guidance</li>
            <li>
              Free Services- Admission, scholarships, GS/GTE & student visa application guidance
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full  md:w-2/5">
        <ImageSlider />
      </div>
    </div>
  );
};

export default WhyAttend;
