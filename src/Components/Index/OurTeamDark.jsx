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
    role: "Therapist",
    name: "Aishwarya Sathya",
    bio: "Aishwarya offers a grounded, neurodiversity-affirming approach with culturally sensitive care. Her warm, reflective style fosters self-awareness, resilience, and meaningful personal growth.",
    tags: ["Neurodiversity", "Cultural Sensitivity", "Resilience"],
  },
];

const OurTeam = () => {
  return (
    <section
      style={{ background: "#1a0a14", fontFamily: "'Jost', sans-serif" }}
      className="min-h-screen py-20 px-8"
    >
      <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#b88caa] font-medium mb-4">
        The people behind your care
      </p>

      <h2
        className="text-center text-[clamp(2.8rem,6vw,4.5rem)] text-[#f5e8f0] font-normal leading-none mb-16"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our <em className="italic text-[#d4a0c4]">Team</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[860px] mx-auto">
        {members.map(({ num, img, initials, role, name, bio, tags }, i) => (
          <div
            key={name}
            className="group p-12 transition-colors duration-500"
            style={{
              background: "#241020",
              borderRight: i === 0 ? "1px solid #3a1a30" : "none",
            }}
          >
            <div
              className="text-[72px] leading-none mb-8 select-none transition-colors duration-500 group-hover:text-[#6e3060]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#3a1a30",
                fontWeight: 700,
              }}
            >
              {num}
            </div>

            <div
              className="w-[88px] h-[88px] rounded-full flex items-center justify-center mb-7 transition-all duration-400"
              style={{
                background: "#3a1a30",
                border: "1.5px solid #6e3060",
                overflow: "hidden",
              }}
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
                  fontSize: 26,
                  color: "#b88caa",
                  display: "none",
                }}
              >
                {initials}
              </span>
            </div>

            <p className="text-[10px] tracking-[0.25em] uppercase text-[#b88caa] font-medium mb-2">
              {role}
            </p>

            <h3
              className="text-[1.7rem] text-[#f5e8f0] font-normal leading-[1.15] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {name}
            </h3>

            <div
              className="h-px mb-5 transition-all duration-400 group-hover:w-[72px]"
              style={{ width: 36, background: "#6e3060" }}
            />

            <p className="text-[14px] leading-[1.8] text-[#9a7090] font-light mb-7">
              {bio}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-[0.12em] uppercase px-3 py-1 transition-all duration-300"
                  style={{
                    color: "#c48ab8",
                    border: "1px solid #3a1a30",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="max-w-[860px] mx-auto flex justify-between items-center pt-8"
        style={{ borderTop: "1px solid #3a1a30" }}
      >
        {["Evidence-based care", "Empathy-led practice", "Tailored to you"].map(
          (label, i) => (
            <React.Fragment key={label}>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#4a2040] font-medium">
                {label}
              </span>
              {i < 2 && (
                <div
                  className="w-[5px] h-[5px] rounded-full"
                  style={{ background: "#6e3060" }}
                />
              )}
            </React.Fragment>
          ),
        )}
      </div>
    </section>
  );
};

export default OurTeam;
