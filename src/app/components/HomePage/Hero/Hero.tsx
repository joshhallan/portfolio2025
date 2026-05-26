"use client";
import {
  Cell,
  Container,
  GridX,
  Typography,
  Button,
  Section,
} from "fj-elements";
import Image from "next/image";
import styles from "./Hero.module.css";
const PROFILE_IMAGE_PATH = "/images/me2.jpg";

export default function Hero() {
  return (
    <Section id="hero" size="lg">
      <Container>
        <GridX align="center" gap="xxl">
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
            <Typography as="h2" style={{ color: "white" }}>
              Hi, I&apos;m{" "}
              <Typography as="span" gradient>
                Josh
              </Typography>
            </Typography>

            <Typography
              as="h3"
              style={{ fontSize: "24px", color: "white", marginBottom: "2rem" }}
            >
              <Typography as="span" gradient>
                Lead Frontend Engineer
              </Typography>{" "}
              | React, Next.js & Accessibility Specialist
            </Typography>

            <div className={styles.buttonGroup}>
              <Button
                href="/documents/Joshua-Allan-CV_2026_2.pdf"
                download
                variant="primary"
              >
                Download CV
              </Button>
            </div>
          </Cell>
        </GridX>
      </Container>
    </Section>
  );
}
