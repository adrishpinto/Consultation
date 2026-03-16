import React from "react";

const services = [
  { num: "01", title: "Psychotherapy", body: "A safe, supportive space to explore emotions, gain insight, and foster personal growth." },
  { num: "02", title: "Cognitive Behavioural Therapy", body: "Helps you identify and change unhelpful thoughts and behaviours to improve emotional well-being." },
  { num: "03", title: "Child Counselling", body: "Gentle guidance to help children navigate emotions, behaviour, and life challenges." },
  { num: "04", title: "Behavioural Therapy", body: "Targets and reshapes behaviours to encourage positive, lasting change." },
  { num: "05", title: "Parent Counselling", body: "Supports parents in understanding, guiding, and strengthening relationships with their children." },
  { num: "06", title: "Habit Reversal Therapy", body: "A structured approach to replace unwanted habits with healthier alternatives." },
];

const WeProvide = () => {
  return (
    <section className="py-20 px-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <p className="text-center text-[11px] tracking-[0.18em] uppercase text-[#C6AFC3] mb-3">
        Our services
      </p>
      <h2
        className="text-center text-[#5B2C4F] mb-2"
        style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 400, lineHeight: 1.1 }}
      >
        We <em className="text-[#9D6B93] italic">provide</em>
      </h2>
      <p className="text-center text-[15px] font-light text-gray-500 mb-14">
        Compassionate, evidence-based care for every stage of your journey.
      </p>

      <div
        className="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[1px] rounded-2xl overflow-hidden"
        style={{ background: "#D4BAD0" }}
      >
        {services.map(({ num, title, body }) => (
          <div
            key={num}
            className="group flex flex-col gap-3 p-8 transition-colors duration-200"
            style={{ background: "#FAF7FB" }}
            onMouseEnter={e => e.currentTarget.style.background = "#F0E8EE"}
            onMouseLeave={e => e.currentTarget.style.background = "#FAF7FB"}
          >
            <span className="text-[11px] tracking-[0.14em] text-[#C6AFC3]">{num}</span>
            <div className="w-6 h-px bg-[#C6AFC3]" />
            <h3
              className="text-[#5B2C4F] text-[1.15rem] leading-snug"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
            >
              {title}
            </h3>
            <p className="text-[13.5px] font-light text-gray-500 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeProvide;