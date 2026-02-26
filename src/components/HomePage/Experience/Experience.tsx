"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCE_DATA } from "@/data/experience";
import Card from "@/components/Global/Card/Card";

const MAX_JOBS_TO_SHOW = 4;
const summaryData = EXPERIENCE_DATA.slice(0, MAX_JOBS_TO_SHOW);

export default function ExperienceSummary() {
  return (
    <section id="experience" className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Career
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryData.map((job, index) => {
            const variant = index % 2 === 0 ? "cyan" : "pink";
            const accentColor =
              variant === "cyan"
                ? "var(--color-secondary)"
                : "var(--color-primary)";

            return (
              <Card
                key={job.id}
                variant={variant}
                className="h-full min-h-[220px] md:min-h-[280px]"
              >
                <Card.Header>
                  <div className="flex justify-between items-start">
                    <h3
                      className="text-xl font-bold leading-tight"
                      style={{ color: accentColor }}
                    >
                      {job.title}
                    </h3>
                    {/* Active role pulse indicator */}
                    {job.id === 1 && (
                      <span
                        className="flex h-2 w-2 mt-1.5 rounded-full animate-pulse shadow-lg"
                        style={{
                          backgroundColor: accentColor,
                          boxShadow: `0 0 8px ${accentColor}`,
                        }}
                      />
                    )}
                  </div>
                </Card.Header>

                <Card.Body>
                  <p className="text-white/90 text-lg font-semibold">
                    {job.company}
                  </p>
                  <p className="text-xs italic text-white/50 mt-1">
                    {job.duration}
                  </p>
                </Card.Body>

                <Card.Footer className="mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {job.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] rounded font-medium border"
                        style={{
                          color: accentColor,
                          borderColor: `${accentColor}30`,
                          backgroundColor: `${accentColor}10`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Footer>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/career"
            className="text-lg font-bold transition-all hover:brightness-125 group inline-flex items-center gap-2"
            style={{ color: "var(--color-secondary)" }}
          >
            <span>View All Roles</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
