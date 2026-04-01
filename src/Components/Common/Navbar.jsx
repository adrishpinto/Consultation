import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";

const NAV_LINKS = ["Home", "Services", "About Us", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: ${scrolled ? "12px 40px" : "20px 40px"};
          background: ${scrolled ? "rgba(255,255,255,0.85)" : "transparent"};
          backdrop-filter: ${scrolled ? "blur(14px)" : "none"};
          border-bottom: ${
            scrolled
              ? "1px solid rgba(91, 44, 79, 0.08)"
              : "1px solid transparent"
          };
          box-shadow: ${
            scrolled ? "0 4px 30px rgba(91, 44, 79, 0.06)" : "none"
          };
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7a6b74;
          cursor: pointer;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #5B2C4F;
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover,
        .nav-link.active {
          color: #5B2C4F;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-logo {
          height: 72px;
          object-fit: contain;
          transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scrolled .nav-logo {
          height: 52px;
        }

        /* Mobile hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #5B2C4F;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255,252,254,0.97);
          backdrop-filter: blur(20px);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 36px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-link {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 40px;
          letter-spacing: 0.04em;
          color: #3d2235;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .mobile-link:hover {
          color: #5B2C4F;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu {
            display: flex;
          }
          .navbar {
            padding: ${scrolled ? "12px 24px" : "16px 24px"};
          }
        }
      `}</style>

      {/* Main Navbar */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className={`nav-link${active === link ? " active" : ""}`}
              onClick={() => setActive(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        <img
          src={logo}
          alt="logo"
          className="nav-logo"
          style={{ height: scrolled ? 52 : 72 }}
        />

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <div
            key={link}
            className="mobile-link"
            onClick={() => {
              setActive(link);
              setMenuOpen(false);
            }}
          >
            {link}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
