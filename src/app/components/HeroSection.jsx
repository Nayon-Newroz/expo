import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative px-4 mx-auto w-full bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.08] pointer-events-none z-[1]"></div>

      <div className="max-w-[900px] mx-auto h-min" >
        {/* Top Bar with Logos */}
        <div className="flex relative z-10 justify-between items-center pt-6">
          <div>
            {/* Executive Study Abroad logo */}
            <div className="flex flex-col">
              <Image src="/images/executive_logo.png" alt="Executive Study Abroad Logo" width={400} height={126} />
            </div>
          </div>

          <div>
            {/* EXPO logo and text */}
            <div className="flex items-center">
              <Image
                src="/images/expo_logo.png"
                alt="EXPO Logo"
                width={443}
                height={208}
                className="object-contain"
              />

            </div>
          </div>
        </div>

        {/* Sydney Opera House - exact dimensions from Figma */}
        <Image
          src="/images/soh.webp"
          alt="Sydney Opera House"
          width={752}
          height={298}
          className="object-cover relative bottom-[64px] mx-auto"
          priority
        />
      </div>

      {/* Date Banner - positioned based on Figma location */}
      <div className="absolute left-[calc(50%-445px)] top-[400px] z-10">
        <div className="w-[890px] flex justify-center items-center bg-white rounded-[20px] py-6 shadow-lg">
          <h2 className="font-['Inter',sans-serif] text-[32px] font-bold leading-[1.21em] text-center text-black whitespace-nowrap">
            27<sup>th</sup> June 2025 (All Day)
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;