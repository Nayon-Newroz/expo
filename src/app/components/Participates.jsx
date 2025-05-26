import React from "react";

const Participates = () => {
  return (
    <div className="py-32">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-5">
        Participating Australian Universities
      </h1>

      <div className="flex flex-wrap justify-center gap-8 p-4">
        {[
          "UOA",
          "MQ",
          "MONASH",
          "CDU",
          "MIT",
          "VU",
          "QUT",
          "UTS",
          "UTSC",
          "WSU",
          "CU",
          "UWA",
          "CQU",
          "ECU",
          "RMIT",
          "JCU",
          "JCUB",
          "LTU",
          "TAFESA",
          "FU",
          "SUT",
          "UTAS",
          "UOC",
          "GU",
          "UOW",
          "CSU",
          "UNISQ",
          "UON",
          "UNE",
          "NAVITAS",
          "UP",
          "ECA",
          "ICMS",
        ].map((logo) => (
          <div
            key={logo}
            className="h-12 w-32 md:w-40 flex items-center justify-center  rounded"
          >
            <img
              src={`/university-logos/${logo}.png`}
              alt="University logo"
              className="h-8 md:h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participates;
