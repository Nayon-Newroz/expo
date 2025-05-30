import ImageSlider from './ImgesSilder';
const WhyAttend = () => {
  return (
    <div style={{ background: "linear-gradient(90deg, #EC4899 50%, #3B82F6 50%)" }}
      className="w-full overflow-hidden"
    >
      <div className='flex flex-col w-full max-w-[1240px] mx-auto' style={{ background: 'linear-gradient(82deg, #EC4899 11.3%, #3B82F6 94.8%)' }} >
        <div className="flex flex-col w-full max-w-[900px] mx-auto">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full px-5 md:px-4 lg:px-0 md:w-1/2 flex flex-col justify-center">
              <div>
                <h1 className="text-[50px] md:max-w-[300px] font-bold leading-[1.21em] text-white mb-[20px]">
                  Why Attend?
                </h1>
                <ul className="text-white text-[16px] leading-[1.5em] space-y-[9px] ml-4 md:mr-4 list-disc">
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
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-full">
                <ImageSlider />
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
};

export default WhyAttend;
