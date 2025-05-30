import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative px-4 mx-auto w-full bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_2px,transparent_2px)] bg-[length:20px_20px] opacity-[0.07] pointer-events-none"></div>

      <div className="w-full max-w-[900px] mx-auto h-min pt-[60px] md:pt-[85px]">
        {/* Top Bar with Logos */}
        <div className="flex relative z-10 flex-col gap-8 md:gap-[57px] justify-between items-center md:flex-row">
          <div className="flex justify-center w-full md:w-auto">
            {/* Executive Study Abroad logo */}
            <Image
              src="/images/executive_logo.png"
              alt="Executive Study Abroad Logo"
              width={399}
              height={126}
              className="w-[340px] sm:max-w-[340px] md:w-full md:max-w-[399px] h-auto"
              priority
            />
          </div>

          <div className="flex justify-center w-full md:w-auto">
            {/* EXPO logo and text */}
            <Image
              src="/images/expo_logo.png"
              alt="EXPO Logo"
              width={443}
              height={208}
              className="w-[340px] sm:max-w-[340px] md:w-full md:max-w-[443px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Sydney Opera House with responsive positioning */}
        <div className="relative -mb-1.5 mt-6 md:mt-[-64px] flex justify-center">
          <div className="relative w-full flex justify-center">
            <Image
              src="/images/soh.webp"
              alt="Sydney Opera House"
              width={752}
              height={298}
              className="w-full h-[160px] sm:w-[454px] md:w-[752px] sm:h-[180px] md:h-[298px] object-cover md:object-cover mx-auto"
              priority
            />
          </div>
          {/* Date Banner - positioned according to Figma design */}
          <div className="absolute w-full -bottom-10 sm:-bottom-14 md:-bottom-[44px] z-10 flex justify-center">
            <div className="w-[412px] md:w-full max-w-[890px] flex justify-center items-center bg-white rounded-[20px] py-4 sm:py-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <h2 className="text-[24px] sm:text-[32px] max-w-[402px] md:max-w-full font-bold leading-[1.21em] text-center text-black px-4">
                Friday, 27<sup>th</sup> June 2025 (10am-5.30pm)
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 