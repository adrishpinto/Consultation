import React from "react";

const Banner = () => {
  return (
    <section className="flex h-screen overflow-hidden relative font-serif">
      {/* Left Side */}
      <div className="w-[52%] bg-[#FDFAF8] flex items-center justify-end pr-16 pl-20 relative z-[2]">
        {/* Decorative circle */}
        <div
          className="absolute top-[10%] -left-[60px] w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(91,44,79,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[520px]">
          <h1
            className="leading-[1.05] font-normal text-[#5B2C4F] mb-2 tracking-[-1px]"
            style={{ fontSize: "clamp(52px,5.5vw,80px)" }}
          >
            Aiva
            <br />
            <span className="italic text-[#7D4470]">Counselling</span>
          </h1>

          {/* Decorative rule */}
          <div className="w-[48px] h-[1px] bg-[#C4A0BB] my-7"></div>

          <p className="text-[17px] text-[#7A7070] leading-[1.8]">
            A warm and understanding space prioritizing your well-being. Our
            experienced team of psychologists offers compassionate,
            evidence-based support in a safe environment. Whether you seek
            healing, clarity, or resilience, we're here to support you on your
            journey toward a healthier, more fulfilling life.
          </p>

          {/* CTA */}
          <button className="mt-10 px-9 py-3.5 border border-[#5B2C4F] text-[#5B2C4F] text-[12px] tracking-[2px] uppercase transition-all duration-300 hover:bg-[#5B2C4F] hover:text-[#FDFAF8]">
            Book a Session
          </button>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="absolute left-[52%] top-[10%] h-[80%] w-[1px] bg-[#D4C4CE] z-[3] -translate-x-1/2"></div>

      {/* Right Side */}
      <div
        className="w-[48%] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #EDE5F2 0%, #DDD0E8 60%, #C9B8D8 100%)",
        }}
      >
        {/* Soft orb */}
        <div
          className="absolute top-[15%] right-[10%] w-[320px] h-[320px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 65%)",
          }}
        />

        {/* Quote */}
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[80%] text-center">
          <p className="italic text-[20px] text-[#5B2C4F] opacity-55 leading-[1.6] tracking-[0.2px]">
            "Healing begins with being heard."
          </p>
        </div>

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[rgba(91,44,79,0.15)] pointer-events-none"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-[rgba(91,44,79,0.1)] pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Banner;
