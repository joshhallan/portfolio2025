"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../../Global/Button/Button";

const PROFILE_IMAGE_PATH = "/images/me2.jpg";

export default function Hero() {
  return (
    <section id="hero" className="page-wrapper">
      <div className="container">
        <div className={styles.heroLayout}>
          {/* Profile Image Container */}
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

          {/* Text Content */}
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              HI, I&apos;M <span className="gradient-text">JOSH</span>.
            </h1>

            <p className={styles.subtitle}>
              Frontend Technical Lead with over{" "}
              <span className={styles.peachHighlight}>10+ years</span> of
              experience specializing in React, Next.js, and AWS.
            </p>

            <div className={styles.buttonGroup}>
              <Button
                href="/documents/Joshua-Allan-CV_2026.pdf"
                download
                variant="primary"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
