import React, { useState } from "react";
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/917259755476?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative sm:h-screen h-fit overflow-hidden font-[Georgia,serif] bg-[linear-gradient(160deg,#faf7f5_0%,#f3ece8_50%,#e8d8e2_100%)]">
      {/* Heading */}
      <div className="pt-7 pb-4 text-center">
        <p className="uppercase tracking-[0.25em] text-[12px] mb-2 text-[#AD93A9]">
          Reach Out
        </p>
        <h2 className="text-[42px] leading-tight text-[#5B2C4F]">
          Get in Touch
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-[48px] rounded-full bg-[#C6AFC3]" />
      </div>

      <div className="relative flex flex-col lg:flex-row items-start justify-center gap-10 px-2 lg:px-24 mt-10 pb-10">
        {/* Contact Card */}
        <div className="w-full lg:w-[380px] rounded-3xl p-8 shadow-xl flex-shrink-0 bg-[linear-gradient(145deg,#5B2C4F,#7B4470)] text-white">
          <h3 className="text-[22px]  mb-1">
            Contact Details
          </h3>
          <p className="text-[13px] opacity-60 mb-8 tracking-wide">
            We'd love to hear from you
          </p>

          <div className="space-y-7">
            {/* Location */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 p-2 rounded-xl bg-white/15">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest opacity-60 mb-1">
                  Location
                </p>
                <p className="text-[14px] leading-relaxed opacity-90">
                  Ground Floor, 64, Bikasipura Main Rd, Paul Chinnappa Layout,
                  Kumaraswamy Layout, Bengaluru, Karnataka 560062
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 p-2 rounded-xl bg-white/15">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest opacity-60 mb-1">
                  Phone Number
                </p>
                <p className="text-[14px] leading-relaxed opacity-90">
                  +91 7259755476
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 p-2 rounded-xl bg-white/15">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest opacity-60 mb-1">
                  E-Mail
                </p>
                <p className="text-[14px] leading-relaxed opacity-90">
                  aivacounselling@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            {[Instagram, Globe, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="p-2 rounded-xl bg-white/15 transition-all duration-200 hover:scale-110"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-[440px]">
          <div className="rounded-3xl sm:p-8 p-4 shadow-xl bg-white/75 backdrop-blur-md">
            <h3 className="text-[22px] mb-1 text-[#5B2C4F]">
              Send a Message
            </h3>
            <p className="text-[13px] mb-8 text-[#9e8a8a]">
              Fill in the form and we'll get back to you shortly.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                {["Name", "Email Address"].map((ph, i) => (
                  <div key={ph} className="w-1/2">
                    <input
                      type={i === 1 ? "email" : "text"}
                      placeholder={ph}
                      value={i === 0 ? formData.name : formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [i === 0 ? "name" : "email"]: e.target.value,
                        })
                      }
                      onFocus={() => setFocused(ph)}
                      onBlur={() => setFocused(null)}
                      className={`w-full rounded-2xl px-4 py-3 text-[14px] outline-none transition-all duration-200 bg-[#f5ede8] text-[#5B2C4F] border-2 ${
                        focused === ph
                          ? "border-[#8A6880]"
                          : "border-[#ddd0ca]"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
                className={`w-full resize-none rounded-2xl px-4 py-3 text-[14px] outline-none transition-all duration-200 bg-[#f5ede8] text-[#5B2C4F] border-2 ${
                  focused === "msg"
                    ? "border-[#8A6880]"
                    : "border-[#ddd0ca]"
                }`}
              />

              <button
                type="submit"
                className="w-full font-sans flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-[15px] transition-all duration-200 hover:opacity-90 hover:scale-[1.01] bg-[linear-gradient(135deg,#7B4470,#AD93A9)] text-white tracking-[0.04em]"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
