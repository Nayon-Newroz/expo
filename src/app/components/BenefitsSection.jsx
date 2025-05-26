import Image from 'next/image';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '/images/free_entry_icon.png',
      title: 'Free Entry',
      description: 'No registration fee\nor entry fee'
    },
    {
      icon: '/images/scholarship_icon.png',
      title: 'Scholarships',
      description: 'Get 10%-100%\nscholarships'
    },
    {
      icon: '/images/spot_app_icon.png',
      title: 'On Spot Application',
      description: 'Apply directly to\n30+ universities'
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#EC4899] to-[#3B82F6] -mt-[50px] md:-mt-[90px]" >
      <div className="container mx-auto relative z-10 px-4 pt-[40px] md:pt-[80px]">
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-[36px] font-semibold leading-[1.21em] text-center relative top-[30px] md:top-[20px]">
          Benefits of Joining This Expo
        </h2>

        {/* Benefits Cards */}
        <div className="flex flex-wrap gap-4 justify-center relative top-[46px] md:top-[54px]">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-8px)] md:w-[280px] rounded-[20px] bg-white shadow-lg justify-center flex flex-col items-center p-4 md:p-6"
            >
              <div className="flex items-center justify-center h-[50px] md:h-[60px] w-full relative">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-semibold leading-[1.21em] text-center mt-3 mb-2.5">{benefit.title}</h3>
              <p className="whitespace-pre-line text-sm md:text-base font-normal leading-[1.21em] text-center m-0">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 