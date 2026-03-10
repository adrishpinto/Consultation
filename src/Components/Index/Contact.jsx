import React from "react";
import coach from "../../assets/coach.png";
import frame from "../../assets/frame.jpg";
import { Instagram, Globe, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="h-[120vh] relative bg-gradient-to-b from-white from-[90%] to-[#C6AFC3] to-[10%] overflow-hidden">
      {/* Frame (center-left) */}
      <div className="absolute left-[18%] top-[35%] -translate-y-1/2">
        <div className="relative">
          <img src={frame} alt="frame" className="h-[420px] object-contain" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 w-[80%] h-[340px] text-[#5B2C4F] space-y-6">
              <div>
                <p className="font-bold text-[24px]">Location</p>
                <p>
                  Srinidhi Clinic, #6, Sapthagiri, 9th Cross, New Bank Colony,
                  Chunchgatta Main Road, Konanakunte, Bangalore
                </p>
              </div>

              <div>
                <p className="font-bold text-[24px]">Phone Number</p>
                <p>+91 7259755476</p>
              </div>

              <div>
                <p className="font-bold text-[24px]">E-Mail</p>
                <p>aivacounselling@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="absolute right-[12%] top-[35%] -translate-y-1/2 w-[420px]">
        <form className="space-y-6">
          {/* Name + Email */}
          <div className="flex gap-[5%]">
            <input
              type="text"
              placeholder="Name"
              className="w-[50%] bg-[#E7DED5] border-[3px] rounded-xl shadow-[#8A7561] border-[#8A7561] p-3 text-[#6E6565] placeholder-[#6E6565] outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-[50%] bg-[#E7DED5] border-[3px] rounded-xl border-[#8A7561] p-3 text-[#6E6565] placeholder-[#6E6565] outline-none"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full resize-none bg-[#E7DED5] border-[3px] border-[#8A7561] rounded-xl p-3 text-[#6E6565] placeholder-[#6E6565] outline-none"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full border-[3px] border-[#82687E] bg-[#AD93A9] rounded-xl text-[#5B2C4F] py-3 font-semibold"
          >
            Send
          </button>
        </form>
      </div>

      {/* Bottom Left Plant */}
      <img
        src={coach}
        alt="coach"
        className="absolute h-[500px] scale-x-[-1] bottom-[-5vh] left-[-10vh]"
      />

      {/* Footer Icons */}
      <div className="absolute bottom-[2%] right-[5%] flex gap-6 text-white">
        <Instagram size={28} />
        <Globe size={28} />
        <Linkedin size={28} />
      </div>
    </section>
  );
};

export default Contact;
