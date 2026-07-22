"use client";

import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Cell, Grid, IconLink, Typography } from "fj-elements";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/joshhallan", Icon: FaGithub },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joshuaallan/",
      Icon: FaLinkedin,
    },
    {
      name: "Medium",
      href: "https://medium.com/@joshuaallan_73828",
      Icon: FaMedium,
    },
  ];

  const emailAddress = "hello@findjosh.dev";
  const mailtoHref = `mailto:${emailAddress}?subject=Hi, Josh&body=Thank you for getting in touch...`;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Grid>
          <Cell small={12} medium={6}>
            <div className={styles.sectionConnect}>
              <Typography as="h3" className={styles.headingConnect}>
                Connect
              </Typography>

              <div className="flex space-x-6">
                {socialLinks.map(({ name, href, Icon }) => (
                  <IconLink
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    label={`Visit my ${name}`}
                    icon={<Icon aria-hidden="true" />}
                  />
                ))}
              </div>
            </div>
          </Cell>

          <Cell small={12} medium={6}>
            <div className={styles.sectionContact}>
              <Typography as="h3" className={styles.headingTouch}>
                Get In Touch
              </Typography>

              <a href={mailtoHref} className={styles.emailLink}>
                {emailAddress}
              </a>
            </div>
          </Cell>

          <Cell small={12}>
            <div className={styles.bottomBar}>
              <p className={styles.techStackNote}>Built with &lt;3</p>
              <p className={styles.copyright}>
                &copy; {currentYear} FINDJOSH. All rights reserved.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    </footer>
  );
}
