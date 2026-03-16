import React, { useState } from "react";
import coach from "../../assets/coach.png";
import {
  Instagram,
  Globe,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

const Contact = () => {
  const [focused, setFocused] = useState(null);

  return (
    <section
      className="relative min-h-screen h-[135vh] overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #faf7f5 0%, #f3ece8 50%, #e8d8e2 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C6AFC3, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #AD93A9, transparent 70%)",
        }}
      />

      {/* Section Heading */}
      <div className="pt-16 pb-4 text-center">
        <p
          className="uppercase tracking-[0.25em] text-[12px] mb-2"
          style={{ color: "#AD93A9" }}
        >
          Reach Out
        </p>
        <h2 className="text-[42px] leading-tight" style={{ color: "#5B2C4F" }}>
          Get in Touch
        </h2>
        <div
          className="mx-auto mt-3 h-[2px] w-[48px] rounded-full"
          style={{ background: "#C6AFC3" }}
        />
      </div>

      {/* Main content row */}
      <div className="relative flex flex-col lg:flex-row items-start justify-center gap-10 px-8 lg:px-24 mt-10 pb-40">
        {/* Contact Info Card */}
        <div
          className="w-full lg:w-[380px] rounded-3xl p-8 shadow-xl flex-shrink-0"
          style={{
            background: "linear-gradient(145deg, #5B2C4F, #7B4470)",
            color: "white",
          }}
        >
          <h3
            className="text-[22px] font-semibold mb-1"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Contact Details
          </h3>
          <p className="text-[13px] opacity-60 mb-8 tracking-wide">
            We'd love to hear from you
          </p>

          {/* Info Items */}
          <div className="space-y-7">
            {[
              {
                icon: <MapPin size={18} />,
                label: "Location",
                value:
                  "Srinidhi Clinic, #6, Sapthagiri, 9th Cross, New Bank Colony, Chunchgatta Main Road, Konanakunte, Bangalore",
              },
              {
                icon: <Phone size={18} />,
                label: "Phone Number",
                value: "+91 7259755476",
              },
              {
                icon: <Mail size={18} />,
                label: "E-Mail",
                value: "aivacounselling@gmail.com",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex gap-4 items-start">
                <div
                  className="mt-1 p-2 rounded-xl flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest opacity-60 mb-1">
                    {label}
                  </p>
                  <p className="text-[14px] leading-relaxed opacity-90">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10">
            {[Instagram, Globe, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="p-2 rounded-xl transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[440px]">
          <div
            className="rounded-3xl p-8 shadow-xl"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h3
              className="text-[22px] mb-1"
              style={{ color: "#5B2C4F", fontFamily: "'Georgia', serif" }}
            >
              Send a Message
            </h3>
            <p className="text-[13px] mb-8" style={{ color: "#9e8a8a" }}>
              Fill in the form and we'll get back to you shortly.
            </p>

            <form className="space-y-5">
              <div className="flex gap-4">
                {["Name", "Email Address"].map((ph, i) => (
                  <div key={ph} className="w-1/2 relative">
                    <input
                      type={i === 1 ? "email" : "text"}
                      placeholder={ph}
                      onFocus={() => setFocused(ph)}
                      onBlur={() => setFocused(null)}
                      className="w-full rounded-2xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
                      style={{
                        background: "#f5ede8",
                        border: `2px solid ${focused === ph ? "#8A6880" : "#ddd0ca"}`,
                        color: "#5B2C4F",
                      }}
                    />
                  </div>
                ))}
              </div>

              <textarea
                placeholder="Your Message"
                rows={5}
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
                className="w-full resize-none rounded-2xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
                style={{
                  background: "#f5ede8",
                  border: `2px solid ${focused === "msg" ? "#8A6880" : "#ddd0ca"}`,
                  color: "#5B2C4F",
                }}
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-[15px] transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                style={{
                  background: "linear-gradient(135deg, #7B4470, #AD93A9)",
                  color: "white",
                  letterSpacing: "0.04em",
                }}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Coach image bottom-left */}
      <img
        src={coach}
        alt="coach"
        className="absolute bottom-[-40px] left-[-0px] h-[440px] object-contain scale-x-[-1] pointer-events-none"
        style={{ filter: "drop-shadow(4px 0px 12px rgba(91,44,79,0.08))" }}
      />
    </section>
  );
};

export default Contact;
