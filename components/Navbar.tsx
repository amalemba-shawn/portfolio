import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { resumeData } from '../data/resumeData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-slate-950 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold tracking-wider">
          {resumeData.name}
        </NavLink>

        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white text-lg font-medium hover:text-cyan-400 transition-colors ${
                isActive ? 'border-b-2 border-cyan-400' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `text-white text-lg font-medium hover:text-cyan-400 transition-colors ${
                isActive ? 'border-b-2 border-cyan-400' : ''
              }`
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-white text-lg font-medium hover:text-cyan-400 transition-colors ${
                isActive ? 'border-b-2 border-cyan-400' : ''
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/labs"
            className={({ isActive }) =>
              `text-white text-lg font-medium hover:text-cyan-400 transition-colors ${
                isActive ? 'border-b-2 border-cyan-400' : ''
              }`
            }
          >
            Labs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white text-lg font-medium hover:text-cyan-400 transition-colors ${
                isActive ? 'border-b-2 border-cyan-400' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="block text-white text-lg font-medium hover:text-cyan-400 transition-colors px-4 py-2 bg-slate-800 rounded"
          >
            Home
          </NavLink>
          <NavLink
            to="/resume"
            onClick={toggleMenu}
            className="block text-white text-lg font-medium hover:text-cyan-400 transition-colors px-4 py-2 bg-slate-800 rounded"
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            onClick={toggleMenu}
            className="block text-white text-lg font-medium hover:text-cyan-400 transition-colors px-4 py-2 bg-slate-800 rounded"
          >
            Projects
          </NavLink>
          <NavLink
            to="/labs"
            onClick={toggleMenu}
            className="block text-white text-lg font-medium hover:text-cyan-400 transition-colors px-4 py-2 bg-slate-800 rounded"
          >
            Labs
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="block text-white text-lg font-medium hover:text-cyan-400 transition-colors px-4 py-2 bg-slate-800 rounded"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;