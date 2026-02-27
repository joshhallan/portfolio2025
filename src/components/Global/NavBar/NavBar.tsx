"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className="container flex justify-between items-center h-full">
        <Link href="/" className={styles.logo}>
          FIND<span className="gradient-text">JOSH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <Link href="/projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="/career" className={styles.navLink}>
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
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div
            className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
      >
        <Link href="/" onClick={closeMenu} className={styles.navLink}>
          Home
        </Link>
        <Link href="/career" onClick={closeMenu} className={styles.navLink}>
          Career
        </Link>
        <Link href="/projects" onClick={closeMenu} className={styles.navLink}>
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
