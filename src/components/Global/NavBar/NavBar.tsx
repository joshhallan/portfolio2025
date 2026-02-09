'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuLinkClasses = `font-medium py-2 md:py-0 transition-all duration-300`; 

  const renderNavLink = (href, label, isExternal = false) => {
    const active = pathname === href;
    
    return (
      <Link
        href={href}
        onClick={() => setIsMenuOpen(false)} 
        target={isExternal ? "_blank" : undefined}
        rel="noopener noreferrer"
        /* We remove 'text-white' here because your CSS '.active-neon' 
           needs 'color: transparent' to show the gradient. 
        */
        className={`${menuLinkClasses} neon-hover-link ${active ? 'active-neon' : ''}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav
      className="sticky top-0 z-50 py-4 -border-bottom-gradient"
      style={{ backgroundColor: "#000" }} // Restored your explicit black background
    >
      <div className="container mx-auto max-w-6xl px-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-wider uppercase cursor-pointer text-white z-10" 
          style={{textShadow: '1px 1px 10px #fff'}}
        >
          <span>FindJosh</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {renderNavLink("/projects", "Projects")}
          {renderNavLink("/career", "Career")}
          {renderNavLink("https://github.com/joshhallan", "Github", true)}
          {renderNavLink("https://linkedin.com/in/joshuaallan", "Linkedin", true)}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md z-10 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 transition-transform duration-300 transform 
                   ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} 
                   flex flex-col items-center justify-center space-y-8 text-2xl`}
        style={{ paddingTop: "5rem" }} 
      >
        {renderNavLink("/projects", "Projects")}
        {renderNavLink("/career", "Career")}
        {renderNavLink("https://github.com/joshhallan", "Github", true)}
        {renderNavLink("https://linkedin.com/in/joshuaallan", "Linkedin", true)}
      </div>
    </nav>
  );
}