import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="h-[10vh] bg-[#6e4f6b] flex items-center justify-end pr-[5%]">
      <div className="flex gap-6 text-white">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/aivacounselling"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition duration-300 transform "
        >
          <Instagram size={28} />
        </a>

        {/* Threads */}
        <a
          href="https://threads.com/@aivacounselling"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition duration-300 transform "
        >
          <FontAwesomeIcon icon={faThreads} className="text-[26px]" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/aiva-counselling/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300 transform "
        >
          <Linkedin size={28} />
        </a>

      </div>
    </footer>
  );
};

export default Footer;