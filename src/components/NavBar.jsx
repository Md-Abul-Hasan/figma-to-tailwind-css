// component/NavBar.js

import {
  HashRouter as Router,
  Link
} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="grid grid-rows-1 grid-cols-3 gap-4 p-4 fixed top-0 left-0 right-0 bg-white z-50 sm:hide">
      {/* logo */}
           <div
                to="/"
                className={`h-10 w-10 border-2 border-black flex justify-start items-center ${({ isActive }) => {
                  return isActive ? "active-link" : "";
                }}`}
              >
            <div className="logo absolute">J</div>
          </div>

      <ul className="grid grid-rows-1 grid-cols-4 gap-4 p-4">
       
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="project">Project</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <div className="flex justify-end items-center gap-4">
           <button className="border-2 text-black p-2 rounded hover:shadow-sm">Resume</button>
           <button className="border-2 text-black p-2 rounded hover:shadow-sm">Hire Me</button>
      </div>
    </nav>
    
  );
};

export default NavBar;