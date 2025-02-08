// components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isCatPage = location.pathname === '/my-cat';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${isCatPage 
                      ? 'bg-pink-200/70 backdrop-blur-sm' 
                      : 'bg-[#1E1E1E]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-[#A259FF] hover:text-[#7E57C2] transition-colors duration-300 neon-glow">
            <span className="font-sincopa text-xl">Vincent Zhan</span>
          </Link>
          
          <div className="flex space-x-8">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Research & Projects</NavLink>
            <NavLink to="/crypto">Crypto</NavLink>
            <NavLink to="/cat">My Cat</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="font-['Sincopa'] text-gray-300 hover:text-[#A259FF] transition-all duration-300
                 relative after:content-[''] after:absolute after:bottom-0 after:left-0 
                 after:w-0 after:h-0.5 after:bg-[#A259FF] after:transition-all after:duration-300
                 hover:after:w-full hover:shadow-[0_0_10px_#A259FF]"
    >
      {children}
    </Link>
  );
}

export default Navbar;