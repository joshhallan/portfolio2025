import React from "react";
import { QUALIFICATIONS_DATA } from "../../../data/qualifications";
import Image from "next/image";

interface Certification {
  id: number;
  title: string;
  institution: string;
  shortName: string;
  classification: "Degree" | "Certification";
  grade: string;
  status: "Active" | "In progress" | "Lapsed";
  logo: string | null;
}

export default function About() {
  const neonAccentStyle = { color: "var(--neon-blue)", fontWeight: 700 };

  const degrees = QUALIFICATIONS_DATA.filter(
    (q) => q.classification === "Degree",
  );
  const certifications = QUALIFICATIONS_DATA.filter(
    (q) => q.classification === "Certification",
  );

  const scrollContainerClasses = `
    flex flex-row overflow-x-auto gap-6 pb-6 snap-x scrollbar-hide
    [mask-image:linear-gradient(to_right,white_85%,transparent_100%)]
  `;

  return (
    <section id="about" className="container mx-auto max-w-6xl px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        {/* BIO SECTION */}
        <div className="lg:col-span-2 text-lg text-white/90 space-y-6 leading-relaxed">
          <p>
            Hello! I&apos;m a highly motivated and solutions-driven{" "}
            <span style={neonAccentStyle}>Lead Frontend Engineer</span> with{" "}
            <span style={neonAccentStyle}>
              over 10 years of professional experience
            </span>
            , specializing in crafting responsive, high-performance user
            interfaces. My passion lies in bridging the gap between design,
            functionality, and inclusive accessibility, ensuring an exceptional
            user experience (UX) across all platforms.
          </p>

          <p>
            Professionally, I excel in{" "}
            <span style={neonAccentStyle}>
              organizational skills and decisiveness
            </span>
            . I appreciate the collaborative synergy of group work, leveraging
            collective knowledge and support, yet I thrive equally when highly{" "}
            <span style={neonAccentStyle}>self-motivated</span> to independently
            tackle complex problems. My enthusiasm for continuous learning fuels
            my proactive approach to seeking new opportunities for growth within
            any job role.
          </p>

          <p>
            Outside of work, my primary focus is on quality time with my two
            young sons. When I find free moments, I enjoy playing video games
            with my wife. Additionally, I also play{" "}
            <span style={neonAccentStyle}>Dungeons and Dragons</span>
            with old school friends once a month, which is a great exercise in{" "}
            <span style={neonAccentStyle}>creative problem-solving</span> and
            teamwork!
          </p>
        </div>

        {/* KEY FACTS */}
        <div className="p-8 rounded-lg bg-black/40 border border-[var(--neon-blue)] shadow-[0_0_15px_rgba(0,255,255,0.1)] space-y-6">
          <h3 className="font-semibold uppercase tracking-widest text-sm text-[var(--neon-blue)] text-center border-b border-white/10 pb-4">
            Key Facts
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <p className="text-[10px] uppercase text-white/40 tracking-[0.2em] mb-1">
                Experience
              </p>
              <p className="text-white/90 text-sm font-bold">
                <span style={{ color: "var(--neon-blue)" }}>10+</span> Years
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-white/40 tracking-[0.2em] mb-1">
                Primary Stack
              </p>
              <p className="text-white/90 text-sm">
                TypeScript, React, Next.js
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-white/40 tracking-[0.2em] mb-1">
                Current learning focus
              </p>
              <p className="text-white/90 text-sm">
                AWS Solutions Architect (SAA-C03)
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-white/40 tracking-[0.2em] mb-1">
                Leadership style
              </p>
              <p className="text-white/90 text-sm">
                Mentorship & Strategy
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-white/40 tracking-[0.2em] mb-1">
                D&D Alignment
              </p>
              <p className="text-white/90 text-sm">
                Forever DM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION*/}
      <div className="p-8 rounded-lg bg-black/40 backdrop-blur-md border border-[var(--neon-pink)] shadow-[0_0_15px_rgba(255,0,255,0.1)]">
        <h3
          className="font-semibold uppercase tracking-wider text-sm mb-8 text-center"
          style={{ color: "var(--neon-pink)" }}
        >
          Education & Certifications
        </h3>

        <div className="space-y-12">
          {degrees.length > 0 && (
            <div>
              <h4 className="text-[var(--neon-blue)] text-[10px] font-bold uppercase mb-4 tracking-[0.2em] opacity-80">
                Education
              </h4>
              <div className={scrollContainerClasses}>
                {degrees.map((cert) => (
                  <CertRow key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div>
              <h4 className="text-[var(--neon-blue)] text-[10px] font-bold uppercase mb-4 tracking-[0.2em] opacity-80">
                Certifications
              </h4>
              <div className={scrollContainerClasses}>
                {certifications.map((cert) => (
                  <CertRow key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] text-white/40 uppercase tracking-[0.3em]">
            Scroll to explore →
          </span>
          <a
            href="https://www.credly.com/users/your-profile-url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--neon-pink)] hover:opacity-80 transition-opacity"
          >
            Verify on Credly →
          </a>
        </div>
      </div>
    </section>
  );
}

const CertRow = ({ cert }: { cert: Certification }) => (
  <div className="flex items-start group flex-shrink-0 w-[85%] md:w-[320px] snap-start">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center mr-4 transition-transform group-hover:scale-110">
      {cert.logo ? (
        <Image
          src={cert.logo}
          alt={`${cert.title} badge`}
          width={48}
          height={48}
          className={`object-contain ${cert.status !== "Active" ? "opacity-40 grayscale" : ""}`}
        />
      ) : (
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
          <span className="text-[10px] font-bold text-white uppercase">
            {cert.shortName}
          </span>
        </div>
      )}
    </div>
    <div className="flex-grow min-w-0 pt-1">
      <h5 className="text-sm font-bold text-white leading-tight">
        {cert.title}
      </h5>
      <p className="text-xs text-white/50 mt-1">{cert.institution}</p>

      {cert.classification === "Certification" && (
        <div className="mt-2">
          {cert.status === "Active" && (
            <p className="text-[10px] text-[var(--neon-pink)] font-bold uppercase tracking-widest flex items-center gap-1">
              Active
            </p>
          )}
          {cert.status === "In progress" && (
            <p className="text-[10px] text-[var(--neon-blue)] font-bold uppercase tracking-widest flex items-center gap-1">
              In progress
            </p>
          )}
          {cert.status === "Lapsed" && (
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
              Formerly Accredited
            </p>
          )}
        </div>
      )}
    </div>
  </div>
);
