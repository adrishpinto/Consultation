import React from "react";
import BannerImg from "../../assets/gallery/09.jpg";

const Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row h-auto lg:h-screen overflow-hidden relative font-serif">
      
      {/* Left Side */}
      <div className="w-full lg:w-[52%] bg-[#FDFAF8] flex items-center justify-center lg:justify-end px-6 sm:px-10 lg:pr-16 lg:pl-20 py-16 lg:py-0 relative z-[2]">
        
        <div
          className="hidden lg:block absolute top-[10%] -left-[60px] w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(91,44,79,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[520px] text-center lg:text-left">
          <h1
            className="leading-[1.1] font-light text-[#5B2C4F] mb-2 tracking-[-1px]"
            style={{ fontSize: "clamp(36px,6vw,80px)" }}
          >
            Aiva
            <br />
            <span className="italic text-[#7D4470]">Counselling</span>
          </h1>

          <div className="w-[48px] h-[1px] bg-[#C4A0BB] my-6 mx-auto lg:mx-0" />

          <p className="text-[14px] sm:text-[15px] text-[#7A7070] leading-[1.8] font-light tracking-[0.1px]">
            A warm and understanding space prioritizing your well-being. Our
            experienced team of psychologists offers compassionate,
            evidence-based support in a safe environment. Whether you seek
            healing, clarity, or resilience, we're here to support you on your
            journey toward a healthier, more fulfilling life.
          </p>

          <a
            href="https://wa.me/917259755476?text=Hi%2C%20I%20would%20like%20to%20book%20a%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 lg:mt-10 inline-block px-7 sm:px-9 py-3 border border-[#5B2C4F] text-[#5B2C4F] text-[11px] tracking-[2.5px] uppercase font-medium transition-all duration-300 hover:bg-[#5B2C4F] hover:text-[#FDFAF8]"
          >
            Book a Session
          </a>
        </div>
      </div>

      {/* Divider (desktop only) */}
      <div className="hidden lg:block absolute left-[52%] top-[10%] h-[80%] w-[1px] bg-[#D4C4CE] z-[3] -translate-x-1/2" />

      {/* Right Side — Image */}
      <div className="w-full lg:w-[48%] relative h-[300px] sm:h-[400px] lg:h-full overflow-hidden">
        
        <div
          className="hidden lg:block absolute inset-y-0 left-0 w-[80px] z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(253,250,248,0.22), transparent)",
          }}
        />

        <img
          src={BannerImg}
          alt="Counselling"
          className="w-full h-full object-cover object-top"
        />

        {/* Quote */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-[85%] sm:w-[78%] text-center z-[2]">
          <p
            className="italic text-white leading-[1.6] tracking-[0.2px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              textShadow: "0 1px 16px rgba(40,10,35,0.38)",
            }}
          >
            "Healing begins with being heard."
          </p>
          <div className="w-8 h-[1px] bg-white/50 mx-auto mt-2.5" />
        </div>
      </div>
    </section>
  );
};

export default Banner;