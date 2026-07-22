"use client";
import { Cell, Section, Grid, Typography, Link } from "fj-elements";
import Image from "next/image";
import styles from "./Hero.module.css";
import { FaDownload } from "react-icons/fa6";
const PROFILE_IMAGE_PATH = "/images/me2.jpg";

export default function Hero() {
  return (
    <Section id="hero" size="lg">
      <Grid>
        <Cell small={12} medium={6}>
          <div className={styles.imageContainer}>
            <div className={styles.profileWrapper}>
              <Image
                src={PROFILE_IMAGE_PATH}
                alt="Josh's professional head shot"
                fill
                className={styles.profileImage}
                priority
              />
            </div>
          </div>
        </Cell>
        <Cell small={12} medium={6}>
          <Typography as="h2" style={{ color: "white", textAlign: "center" }}>
            Hi, I&apos;m{" "}
            <Typography as="span" gradient>
              Josh
            </Typography>
          </Typography>

          <Typography
            as="h3"
            style={{
              fontSize: "24px",
              color: "white",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <Typography as="span" gradient>
              Lead Frontend Engineer
            </Typography>{" "}
            | React, Next.js & Accessibility Specialist
          </Typography>

          <div className={styles.buttonGroup}>
            <Link
              href="/documents/Joshua-Allan-CV_2026_2.pdf"
              download
              variant="secondary"
            >
              Download CV{" "}
              <FaDownload aria-hidden="true" className={styles.icon} />
            </Link>
          </div>
        </Cell>
      </Grid>
    </Section>
  );
}
