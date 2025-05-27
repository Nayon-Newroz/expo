import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative px-4 mx-auto w-full bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_2px,transparent_2px)] bg-[length:20px_20px] opacity-[0.07] pointer-events-none "></div>

      <div className="w-full max-w-[900px] mx-auto h-min pt-6 md:pt-12">
        {/* Top Bar with Logos */}
        <div className="flex relative z-10 flex-col gap-10 justify-between items-center pt-6 sm:gap-4 md:flex-row">
          <div>
            {/* Executive Study Abroad logo */}
            <Image src="/images/executive_logo.png" alt="Executive Study Abroad Logo" width={400} height={126} className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-auto z-[999]" />
          </div>

          <div>
            {/* EXPO logo and text */}
            <Image
              src="/images/expo_logo.png"
              alt="EXPO Logo"
              width={443}
              height={208}
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[443px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Sydney Opera House - now responsive */}
        <div className="mt-12 sm:mt-6 md:mt-0 relative bottom-[34px] md:bottom-[64px]">
          <Image
            src="/images/soh.webp"
            alt="Sydney Opera House"
            width={752}
            height={298}
            className="object-cover mx-auto sm:min-h-[140px] md:min-h-[298px] object-top"
            priority
          />
          {/* Date Banner - positioned based on Figma location */}
          <div className="absolute w-full -bottom-[54px] md:-bottom-[18px] z-10 ">
            <div className="w-full  flex justify-center items-center bg-white rounded-[20px] py-4 sm:py-6 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              <h2 className="hidden sm:block break-all text-[18px] sm:text-[24px] md:text-[32px] font-bold leading-[1.21em] text-center text-black">
                Friday, 27<sup>th</sup> June 2025 (10am-5.30pm)
              </h2>
              <h2 className="sm:hidden break-all text-[18px] sm:text-[24px] md:text-[32px] font-bold leading-[1.21em] text-center text-black">
                Friday, 27<sup>th</sup> June 2025 <br /> (10am-5.30pm)
              </h2>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;