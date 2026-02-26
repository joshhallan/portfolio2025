import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../../Global/Button/Button";

const PROFILE_IMAGE_PATH = "/images/me2.jpg";

export default function Hero() {
  return (
    <section className="w-full pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-16">
          <div className="mb-10 md:mb-0">
            <div
              className={`w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden relative ${styles.profileWrapper}`}
            >
              <Image
                src={PROFILE_IMAGE_PATH}
                alt="Josh's professional head shot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 font-mono">
              HI, I&apos;M <span className="gradient-text">JOSH</span>.
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 font-sans leading-relaxed">
              Frontend Technical Lead with{" "}
              <span className="text-[var(--color-secondary)] font-bold">
                10+ years
              </span>{" "}
              of experience specializing in React, Next.js, and AWS.
            </p>

            <div className="flex flex-col sm:flex-row md:justify-start justify-center">
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
