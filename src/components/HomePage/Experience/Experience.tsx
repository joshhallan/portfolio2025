"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCE_DATA } from "@/data/experience";

const MAX_JOBS_TO_SHOW = 4;
const summaryData = EXPERIENCE_DATA.slice(0, MAX_JOBS_TO_SHOW);

export default function ExperienceSummary() {
  const neonPink = "var(--neon-pink)";
  const neonBlue = "var(--neon-blue)";

  return (
    <section id="experience" className="container mx-auto max-w-6xl px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Career Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((job, index) => {
          const cardColor = index % 2 === 0 ? neonBlue : neonPink;

          return (
            <div
              key={job.id}
              className="group p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between h-auto min-h-[220px] md:h-[280px]"
              style={{
                borderColor: `${cardColor}40`,
                backgroundColor: "#00000040",
                boxShadow: `0 0 15px ${cardColor}10`,
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3
                    className="text-xl font-bold leading-tight transition-colors"
                    style={{ color: cardColor }}
                  >
                    {job.title}
                  </h3>
                  {job.id === 1 && (
                    <span
                      className="flex h-2 w-2 mt-1.5 rounded-full animate-pulse shadow-lg"
                      style={{
                        backgroundColor: cardColor,
                        boxShadow: `0 0 8px ${cardColor}`,
                      }}
                    ></span>
                  )}
                </div>
                <p className="text-white/90 text-lg font-semibold mb-2">
                  {job.company}
                </p>
                <p className="text-xs italic text-white/50 mb-4">
                  {job.duration}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-1">
                  {job.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] rounded font-medium border"
                      style={{
                        color: cardColor,
                        borderColor: `${cardColor}30`,
                        backgroundColor: `${cardColor}10`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {job.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] text-white/30 font-bold">
                      ...
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/career"
          className="text-lg font-bold transition-all hover:brightness-125"
          style={{ color: neonBlue }}
        >
          View All Roles →
        </Link>
      </div>
    </section>
  );
}
