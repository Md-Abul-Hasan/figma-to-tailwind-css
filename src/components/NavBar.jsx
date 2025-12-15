import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <NavLink
          to="/"
          className="relative h-10 w-10 border-2 border-black flex items-center justify-center font-bold text-lg"
        >
          H
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/project">Project</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="assets/images/images.jpg"
            download
            className="
    inline-flex items-center gap-2
    border-2 border-black
    px-4 py-2
    rounded-lg
    text-sm sm:text-base
    hover:bg-black hover:text-white
    transition
  "
          >
            Download Resume
          </a>
          <button className="border-2 px-4 py-2 rounded-lg">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white border-t`}
      >
        <ul className="flex flex-col items-center gap-6 py-6">
          <li><NavLink onClick={() => setOpen(false)} to="/about">About</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)} to="/experience">Experience</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)} to="/project">Project</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink></li>

          <div className="flex gap-4 pt-4">
            <button className="border-2 px-4 py-2 rounded-lg">
              Resume
            </button>
            <button className="border-2 px-4 py-2 rounded-lg">
              Hire Me
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
