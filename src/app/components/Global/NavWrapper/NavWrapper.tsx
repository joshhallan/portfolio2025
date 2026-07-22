"use client";

import Link from "next/link";
import { Nav, Typography } from "fj-elements";

export default function NavWrapper() {
  return (
    <Nav
      links={[
        {
          href: "/",
          label: (
            <Typography as="span" style={{ fontSize: 24 }}>
              FIND
              <Typography as="span" gradient>
                JOSH
              </Typography>
            </Typography>
          ),
          ariaLabel: "Home",
        },
        { href: "/projects", label: "Projects" },
        { href: "/career", label: "Career" },
        { href: "/blog", label: "Blog" },
        { external: true, href: "https://github.com", label: "Github" },
        {
          external: true,
          href: "https://linkedin.com",
          label: "LinkedIn",
        },
      ]}
      renderLink={(link, className, onClick) => {
        if (link.external) {
          return (
            <a
              key={link.href}
              href={link.href}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          );
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            className={className}
            onClick={onClick}
            aria-label={link.ariaLabel}
          >
            {link.label}
          </Link>
        );
      }}
    />
  );
}
