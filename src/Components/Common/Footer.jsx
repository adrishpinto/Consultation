import React from "react";
import { Instagram, Globe, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-[10vh] bg-[#6e4f6b] flex items-center justify-end pr-[5%]">
      <div className="flex gap-6 text-white">
        <Instagram size={28} />
        <Globe size={28} />
        <Linkedin size={28} />
      </div>
    </footer>
  );
};

export default Footer;
