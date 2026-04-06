import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // ✅ Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "py-5"}
        px-6 md:px-10 flex justify-between items-center`}
      >
        {/* Desktop */}
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`cursor-pointer uppercase text-xs tracking-widest transition
              ${
                active === link.id
                  ? "text-purple-800 border-b border-purple-800"
                  : "text-gray-500 hover:text-purple-800"
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className={`transition-all duration-300 ${
            scrolled ? "h-12" : "h-16"
          }`}
        />

        {/* Mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-purple-800" />
          <span className="w-6 h-[2px] bg-purple-800" />
          <span className="w-6 h-[2px] bg-purple-800" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-10 z-40">
          {NAV_LINKS.map((link) => (
            <div
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-3xl font-light cursor-pointer hover:text-purple-800"
            >
              {link.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
