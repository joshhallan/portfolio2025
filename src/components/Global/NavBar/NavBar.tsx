"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`w-full h-20 sticky top-0 z-50 ${styles.navbar}`}>
      <div className="max-w-[1200px] mx-auto h-full px-8 flex justify-between items-center">
        <Link href="/" className={`${styles.logo} text-2xl`}>
          FIND<span className="text-[var(--color-primary)]">JOSH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/projects" className={`${styles.navLink}`}>
            Projects
          </Link>
          <Link href="/career" className={`${styles.navLink}`}>
            Career
          </Link>
          <Link
            href="https://github.com/joshhallan"
            target="_blank"
            className={styles.navLink}
          >
            Github
          </Link>
          <Link
            href="https://linkedin.com/in/joshuaallan"
            target="_blank"
            className={styles.navLink}
          >
            LinkedIn
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] w-full bg-[var(--color-bg)] flex flex-col items-center justify-center gap-8 text-2xl z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className={styles.navLink}
        >
          Home
        </Link>
        <Link
          href="/career"
          onClick={() => setIsMenuOpen(false)}
          className={styles.navLink}
        >
          Career
        </Link>
        <Link
          href="/projects"
          onClick={() => setIsMenuOpen(false)}
          className={styles.navLink}
        >
          Projects
        </Link>
        <Link
          href="https://github.com/joshhallan"
          target="_blank"
          className={styles.navLink}
        >
          Github
        </Link>
        <Link
          href="https://linkedin.com/in/joshuaallan"
          target="_blank"
          className={styles.navLink}
        >
          LinkedIn
        </Link>
      </div>
    </nav>
  );
}
