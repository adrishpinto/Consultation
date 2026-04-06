import React from "react";
import vani from "../../assets/Vani.png";
import aishwarya from "../../assets/Aishwarya.png";

const members = [
  {
    num: "01",
    img: vani,
    initials: "VM",
    role: "Psychologist",
    name: "Vani Mitti",
    bio: "Vani brings over a decade of experience creating safe, supportive environments tailored to each individual. She specialises in evidence-based approaches with deep empathy and a solution-focused lens.",
    tags: ["CBT", "Behavioral Therapy", "Habit Reversal"],
  },
  {
    num: "02",
    img: aishwarya,
    initials: "AS",
    role: "Psychologist",
    name: "Aishwarya Sathya",
    bio: "Aishwarya offers a grounded, neurodiversity-affirming approach with culturally sensitive care. Her warm, reflective style fosters self-awareness, resilience, and meaningful personal growth.",
    tags: ["Neurodiversity", "Cultural Sensitivity", "Resilience"],
  },
];

const OurTeam = () => (
  <section
    style={{ background: "#f7f0f5", fontFamily: "'Jost', sans-serif" }}
    className="min-h-screen py-20 px-8"
  >
    <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#a07090] font-medium mb-4">
      The people behind your care
    </p>

    <h2
      className="text-center font-normal leading-none mb-16 text-[#2a0a20]"
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
      }}
    >
      Our <em className="italic text-[#8a3a6e]">Team</em>
    </h2>

    <div
      className="grid grid-cols-1 md:grid-cols-2 max-w-[860px] mx-auto"
      style={{ border: "1px solid #e0ccd8" }}
    >
      {members.map(({ num, img, initials, role, name, bio, tags }, i) => (
        <div
          key={name}
          className="group bg-white hover:bg-[#fdf6fb] transition-colors duration-400 p-12"
          style={{ borderRight: i === 0 ? "1px solid #e0ccd8" : "none" }}
        >
          {/* <div
            className="text-[72px] leading-none mb-8 select-none transition-colors duration-400 text-[#f0e0ec] group-hover:text-[#d4a0c4]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            {num}
          </div> */}

          <div
            className="w-[130px] h-[130px] rounded-full flex items-center justify-center mb-7 overflow-hidden"
            style={{ background: "#f5eaf2", border: "1.5px solid #d4a0c4" }}
          >
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 24,
                color: "#a07090",
                display: "none",
              }}
            >
              {initials}
            </span>
          </div>

          <p className="text-[10px] tracking-[0.25em] uppercase text-[#a07090] font-medium mb-2">
            {role}
          </p>
          <h3
            className="text-[1.65rem] text-[#2a0a20] font-normal leading-[1.15] mb-[18px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {name}
          </h3>

          <div
            className="h-px mb-[18px] transition-all duration-400 group-hover:w-16"
            style={{ width: 32, background: "#c490b4" }}
          />

          <p className="text-[14px] leading-[1.85] text-[#6a4460] font-light mb-6">
            {bio}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[10px] tracking-[0.12em] uppercase px-3 py-1 transition-all duration-300 text-[#8a3a6e]"
                style={{ border: "1px solid #e0ccd8", background: "#fdf6fb" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div
      className="max-w-[860px] mx-auto flex justify-between items-center pt-7"
      style={{ borderTop: "1px solid #e0ccd8" }}
    >
      {["Evidence-based care", "Empathy-led practice", "Tailored to you"].map(
        (label, i) => (
          <React.Fragment key={label}>
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#c4a0b8] font-medium">
              {label}
            </span>
            {i < 2 && <div className="w-1 h-1 rounded-full bg-[#d4a0c4]" />}
          </React.Fragment>
        ),
      )}
    </div>
  </section>
);

export default OurTeam;
