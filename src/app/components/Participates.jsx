"use client";
import Image from "next/image";


const Participates = () => {
  const logos = [
    { id: "AU", width: 133.5, height: 41.5 },
    { id: "MQ", width: 135, height: 40 },
    { id: "MONASH", width: 133, height: 39 },
    { id: "CDU", width: 114, height: 40 },
    { id: "MIT", width: 133.5, height: 46.5 },
    { id: "VU", width: 126, height: 45 },
    { id: "QUT", width: 121, height: 43 },
    { id: "UTS", width: 152, height: 34 },
    { id: "UTSC", width: 73, height: 35 },
    { id: "WSU", width: 161, height: 24 },
    { id: "CU", width: 136, height: 23 },
    { id: "UWA", width: 122, height: 41 },
    { id: "CQU", width: 133, height: 38 },
    { id: "ECU", width: 59, height: 44 },
    { id: "RMIT", width: 118, height: 41 },
    { id: "JCU", width: 119, height: 54 },
    { id: "JCUB", width: 80, height: 46 },
    { id: "LTU", width: 158, height: 36 },
    { id: "TAFESA", width: 85, height: 42 },
    { id: "FU", width: 131, height: 38 },
    { id: "SUT", width: 85, height: 42 },
    { id: "UTAS", width: 149, height: 32 },
    { id: "UOC", width: 162, height: 33 },
    { id: "GU", width: 126, height: 32 },
    { id: "UOW", width: 137, height: 45 },
    { id: "CSU", width: 130, height: 37 },
    { id: "UNISQ", width: 117, height: 46 },
    { id: "UON", width: 133, height: 47 },
    { id: "UNE", width: 48, height: 48 },
    { id: "NAVITAS", width: 140, height: 47 },
    { id: "UP", width: 63, height: 48 },
    { id: "ECA", width: 109, height: 48 },
    { id: "ICMS", width: 114, height: 36 },
  ];

  return (
    <div className="py-[50px] pb-[100px] w-full max-w-[900px] mx-auto px-4 md:px-0">
      <h1 className="text-center text-[32px] sm:text-[36px] font-bold leading-[1.21em] pb-[5px]">
        Participating Australian Universities
      </h1>

      <div className="grid grid-cols-3 gap-10 place-items-center mx-auto sm:flex sm:flex-wrap sm:justify-between sm:items-center max-w-[434px] sm:max-w-[900px] sm:gap-[16px] pt-6 md:pt-[24px]">
        {logos.map((logo, index) => (
          <div
            key={logo.id}
            className={`flex items-center justify-center ${index >= logos.length - 5 ? "last-row" : ""
              }`}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: logo.width,
              maxHeight: logo.height,
            }}
          >
            <Image
              src={`/university-logos/${logo.id}.png`}
              alt={`${logo.id} logo`}
              className="h-full w-full object-contain"
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Participates;
