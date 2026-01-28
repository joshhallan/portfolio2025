import React from "react";

export default function About() {
  const neonAccentStyle = { color: "var(--neon-blue)", fontWeight: 700 };

  return (
    <section id="about" className="container mx-auto max-w-6xl px-8 py-16">
      <h2
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-2 text-lg text-white/90 space-y-6 leading-relaxed">
          <p>
            Hello! I&apos;m a highly motivated and solutions-driven{" "}
            <span style={neonAccentStyle}>Lead Frontend Engineer</span> with{" "}
            <span style={neonAccentStyle}>
              over 10 years of professional experience
            </span>
            , specializing in crafting responsive, high-performance user
            interfaces. My passion lies in bridging the gap between design and
            functionality, ensuring an exceptional user experience (UX) across
            all platforms.
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
            <span style={neonAccentStyle}>Dungeons and Dragons</span> with old
            school friends once a month, which is a great exercise in{" "}
            <span style={neonAccentStyle}>creative problem-solving</span> and
            teamwork!
          </p>
        </div>

        <div className="lg:col-span-1 flex flex-col items-center justify-start pt-4 space-y-6">
          <div
            className="w-full text-left space-y-3 p-4 rounded-lg"
            style={{
              border: "1px solid var(--neon-pink)",
              boxShadow: "0 0 15px var(--neon-pink)30",
            }}
          >
            <p
              className="text-white font-semibold uppercase tracking-wider text-sm mb-2 text-center"
              style={{ color: "var(--neon-pink)" }}
            >
              Qualifications
            </p>
            <div className="space-y-3 text-sm">
              <p className="text-white/90">
                <span style={neonAccentStyle}>Degree:</span> BSc Computing - 2:1
              </p>

              <p className="text-white/90 font-bold mt-4">
                <span style={neonAccentStyle}>Certifications:</span>
              </p>

              <div className="text-white/90 space-y-2">
                <div className="flex items-center">
                  <span
                    className="inline-block px-1 mr-2 text-xs font-bold"
                    style={{
                      color: "var(--neon-blue)",
                      textShadow: "0 0 5px var(--neon-blue)",
                    }}
                  >
                    —
                  </span>
                  AWS Cloud Practitioner
                </div>
                <div className="flex items-center">
                  <span
                    className="inline-block px-1 mr-2 text-xs font-bold"
                    style={{
                      color: "var(--neon-blue)",
                      textShadow: "0 0 5px var(--neon-blue)",
                    }}
                  >
                    —
                  </span>
                  AWS Partner Accreditation (Technical)
                </div>

                <div className="flex items-center">
                  <span
                    className="inline-block px-1 mr-2 text-xs font-bold"
                    style={{
                      color: "var(--neon-blue)",
                      textShadow: "0 0 5px var(--neon-blue)",
                    }}
                  >
                    —
                  </span>
                  Certified Scrum Master (CSM) (Formerly Accredited)
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full text-center space-y-3 p-4 rounded-lg"
            style={{
              border: "1px solid var(--neon-blue)",
              boxShadow: "0 0 15px var(--neon-blue)30",
            }}
          >
            <p
              className="text-white font-semibold uppercase tracking-wider text-sm text-center"
              style={{ color: "var(--neon-blue)" }}
            >
              Key Facts
            </p>
            <p className="text-white/80">
              <span style={neonAccentStyle}>10+</span> Years Industry Experience
            </p>
            <p className="text-white/80">
              Expert in <span style={neonAccentStyle}>React, Angular</span> &{" "}
              <span style={neonAccentStyle}>Next</span>
            </p>
            {/* <p className="text-white/80">
              Location: <span style={neonAccentStyle}>Sunderland</span>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
