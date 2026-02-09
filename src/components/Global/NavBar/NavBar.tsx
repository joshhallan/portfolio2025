'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinkClasses = `font-medium py-2 md:py-0`; 

  const navLinks = (
    <>
      <Link
        href="/projects"
        className={`${menuLinkClasses} neon-hover-link text-white`}
        onClick={() => setIsMenuOpen(false)} 
        rel="noopener noreferrer"
      >
        Projects
      </Link>

      <Link
        href="/career"
        className={`${menuLinkClasses} neon-hover-link text-white`}
        onClick={() => setIsMenuOpen(false)} 
        rel="noopener noreferrer"
      >
        Career
      </Link>
      
      <Link
        href="https://github.com/joshhallan"
        className={`${menuLinkClasses} neon-hover-link text-white`}
        onClick={() => setIsMenuOpen(false)} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Github
      </Link>

      <Link
        href="https://linkedin.com/in/joshuaallan"
        className={`${menuLinkClasses} neon-hover-link text-white`}
        onClick={() => setIsMenuOpen(false)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Link>

    </>
  );

  return (
    <nav
      className={`sticky top-0 z-50 py-4 -border-bottom-gradient`}
      style={{ backgroundColor: "#000" }}
    >
      <div className="container mx-auto max-w-6xl px-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-wider uppercase cursor-pointer text-white z-10" 
          style={{textShadow: '1px 1px 10px #fff, 1px 1px 10px #fff'}}
        >
          <span>FindJosh</span>
        </Link>

        <div className="hidden md:flex space-x-6">{navLinks}</div>

        <button
          className="md:hidden p-2 rounded-md z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 transition-transform duration-300 transform 
                   ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} 
                   flex flex-col items-center justify-center space-y-8 text-2xl`}
        style={{ paddingTop: "5rem" }} 
      >
        {navLinks}
      </div>
    </nav>
  );
}
