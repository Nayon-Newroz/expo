import Image from "next/image";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '/images/free_entry_icon.png',
      title: 'Free Entry',
      description: 'No fee for registration\nor entry'
    },
    {
      icon: '/images/scholarship_icon.png',
      title: 'Scholarships',
      description: 'Get upto 100%\nscholarship'
    },
    {
      icon: '/images/spot_app_icon.png',
      title: 'On Spot Application',
      description: 'Apply directly to\n30+ universities'
    }
  ];

  return (
    <section className="relative w-full">
      {/* Gradient background as in Figma */}
      <div className="absolute inset-0 w-full h-[784px] md:h-[314px]" style={{ background: "linear-gradient(90deg, #EC4899 50%, #3B82F6 50%)" }} />
      <div className="absolute inset-0 w-full h-[784px] md:h-[314px] max-w-[1240px] mx-auto" style={{ background: 'linear-gradient(90deg, #EC4899 11.3%, #3B82F6 94.8%' }} />

      <div className="container mx-auto max-w-[900px] relative z-10 px-4 pt-[90px] pb-[30px] ">
        {/* Heading */}
        <h2 className="text-white text-[36px] font-bold leading-[1.21em] text-center ">
          Expo Highlights
        </h2>

        {/* Benefits Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-3.5 justify-center pt-6 items-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-full max-w-[420px] md:w-[280px] h-full rounded-[20px] bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.1)] flex flex-col items-center py-[38px]"
            >
              <div className="flex items-center justify-center h-[51px] w-auto">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={benefit.icon.includes('free_entry') ? 42 : benefit.icon.includes('scholarship') ? 65 : 36}
                  height={51}
                  className="object-contain"
                />
              </div>
              <div className="mt-3 flex flex-col items-center gap-[10px]">
                <h3 className="text-[24px] font-bold leading-[1.21em] text-center text-black">{benefit.title}</h3>
                <p className="whitespace-pre-line text-[16px] font-normal leading-[1.21em] text-center text-black">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 