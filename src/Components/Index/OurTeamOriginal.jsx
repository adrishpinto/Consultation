import React from "react";
import vani from "../../assets/Vani.png";
import aishwarya from "../../assets/Aishwarya.png";

const OurTeam = () => {
  return (
    <section className="py-24 px-6 bg-[#C6AFC3]">
      <h2 className="text-[55px] text-[#5B2C4F] wix text-center mb-8">
        Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto">
        {/* Member 1 */}
        <div className="w-[95%] md:w-[33%] flex flex-col items-center text-center">
          <img src={vani} alt="Vani" className="w-full object-cover" />

          <div className="w-full bg-white/25 p-6">
            <h3 className="text-[28px] font-bold text-[#5B2C4F] mb-3">
              VANI MITTI
            </h3>

            <p className="text-[#5B2C4F] text-[16px]">
              Vani is a psychologist with over a decade of experience. She
              specializes in evidence-based therapies, including Behavioral
              Therapy, CBT, and Habit Reversal Therapy. Vani creates a safe,
              supportive environment, tailoring therapy to individual needs with
              empathy and a solution-focused approach.
            </p>
          </div>
        </div>

        {/* Member 2 */}
        <div className="w-[95%] md:w-[33%] flex flex-col items-center text-center">
          <img
            src={aishwarya}
            alt="Aishwarya"
            className="w-full object-cover"
          />

          <div className="w-full bg-white/25 p-6">
            <h3 className="text-[28px] font-bold text-[#5B2C4F] mb-3">
              AISHWARYA SATHYA
            </h3>

            <p className="text-[#5B2C4F]">
              Aishwarya Sathya offers a grounded, empathetic, and
              neurodiversity-affirming approach to therapy. She provides
              culturally sensitive care that supports individual needs. Her
              therapeutic style is warm, reflective, and client-focused,
              encouraging self-awareness, resilience, and meaningful growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
