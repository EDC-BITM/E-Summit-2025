import React, { useState, useMemo } from "react";
import { Link } from "react-scroll";
import logo from "../assets/esummitlogo.png";
import bitlogo from "../assets/70years.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const memoizedNavbar = useMemo(() => {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-black shadow-sm z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-3 xl:px-2">
          <img
            draggable={false}
            src={logo}
            alt="E-Summit'25 Logo"
            className="h-14 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <img
            draggable={false}
            src={bitlogo}
            alt="BIT Mesra Logo"
            className="md:h-10 h-8 md:ml-0 -ml-32 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <div className="md:hidden">
            {menuOpen ? (
              <ImCross
                onClick={() => setMenuOpen(false)}
                className="transition-transform duration-300 text-primaryText cursor-pointer"
                size={24}
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setMenuOpen(true)}
                className="transition-transform duration-300 text-primaryText cursor-pointer"
                size={24}
              />
            )}
          </div>
          
          <div className="hidden md:flex items-center lg:space-x-8 space-x-3 ml-auto">
            <Link to="about" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
              About
            </Link>
            <Link to="events" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
              Events
            </Link>
            <Link to="speakers" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
              Speakers
            </Link>
            <Link to="sponsors" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
              Sponsors
            </Link>
            <Link to="faq" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
              FAQ
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
              Contact
            </Link>
          </div>
        </div>
        <div
          className={`md:hidden flex flex-col items-center bg-black transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          } space-y-6 text-lg`}
        >
          <Link to="about" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
            About
          </Link>
          <Link to="events" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
            Events
          </Link>
          <Link to="speakers" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
            Speakers
          </Link>
          <Link to="sponsors" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
            Sponsors
          </Link>
          <Link to="faq" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
            FAQ
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer text-primaryText text-xl hover:text-primaryGreen transition font-medium">
            Contact
          </Link>
        </div>
      </nav>
    );
  }, [menuOpen]);

  return memoizedNavbar;
};

export default Navbar;
