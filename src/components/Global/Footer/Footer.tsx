import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/joshhallan", Icon: FaGithub },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joshuaallan/",
      Icon: FaLinkedin,
    },
  ];

  const emailAddress = "hello@findjosh.dev";
  const mailtoHref = `mailto:${emailAddress}?subject=Hi, Josh&body=Thank you for getting in touch...`;

  return (
    <footer className={styles.footer}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Connect Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className={styles.headingConnect}>Connect</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={`Visit my ${link.name}`}
                >
                  <link.Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h3 className={styles.headingTouch}>Get In Touch</h3>
            <a href={mailtoHref} className={styles.emailLink}>
              {emailAddress}
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className="text-sm mb-1">Built with Next.js and Tailwind</p>
          <p className="text-sm">
            &copy; {currentYear} FINDJOSH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
