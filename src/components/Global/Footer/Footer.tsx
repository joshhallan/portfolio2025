// components/Global/Footer.tsx

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

  // Define the mailto link content
  const emailAddress = "hello@findjosh.dev";
  const emailSubject = "Hi, Josh";
  const emailBody =
    "Thank you for getting in touch, please leave a contact number and an email address :)";

  // Encode the subject and body for use in the URL
  const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  // Base classes for links, including transition, scale, and simple text hover
  const baseLinkClasses =
    "transition-all duration-300 hover:scale-110 hover:text-white";

  return (
    <footer className="bg-black/20 mt-20 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start flex-grow">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--neon-blue)" }}
            >
              Connect
            </h3>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={baseLinkClasses}
                  style={{ color: "var(--foreground)", fontSize: "1.75rem" }}
                  aria-label={`Visit my ${link.name}`}
                >
                  {/* Render the imported Icon component */}
                  <link.Icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right md:flex-shrink-0">
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "var(--neon-pink)" }}
            >
              Get In Touch
            </h3>
            <a
              href={mailtoHref}
              target="_blank"
              className="text-lg font-semibold neon-hover-link"
            >
              {emailAddress}
            </a>
          </div>
        </div>

        <hr className="border-white/10 my-6" />

        <div className="text-center text-sm text-white/50">
          <p>Built with NextJS and Tailwind</p>
        </div>
        <div className="text-center text-sm text-white/50">
          <p>&copy; {currentYear} FindJosh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
