import React from "react";

const Banner = () => {
  return (
    <section className="flex h-screen">
      {/* Left Side (White) */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-lg">
          <h1 className="text-[80px] leading-none  font-[400] text-[#5B2C4F] wix">
            Aiva Counselling
          </h1>

          <p className="mt-6 text-[21px] font-[400] text-[#959393] leading-relaxed">
            A warm and understanding space prioritizing your well-being. Our
            experienced team of psychologists offers compassionate,
            evidence-based support in a safe environment. Whether you seek
            healing, clarity, or resilience, we’re here to support you on your
            journey toward a healthier, more fulfilling life.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-[#E9E4F0]"></div>
    </section>
  );
};

export default Banner;
