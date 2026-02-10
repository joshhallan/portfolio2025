"use client";

import React, { useState } from "react";
import { EXPERIENCE_DATA } from "@/data/experience";
import {
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const brandColor = "var(--neon-blue)";
const secondaryColor = "var(--neon-pink)";

interface JobProps {
  job: (typeof EXPERIENCE_DATA)[0];
}

const JobDetail: React.FC<JobProps> = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isLeighton = job.company === "Leighton";

  return (
    <div className="relative pb-6 last:pb-0">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#161818] shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                {job.title}
              </h3>
              {job.id === 1 && (
                <span className="flex h-3 w-3 rounded-full bg-[var(--neon-blue)] animate-pulse shadow-[0_0_12px_var(--neon-blue)]"></span>
              )}
            </div>
            <p
              className="text-xl font-medium"
              style={{ color: isLeighton ? brandColor : secondaryColor }}
            >
              {job.company}
            </p>
          </div>

          <div className="text-[10px] md:text-xs text-white/30 space-y-1.5 font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-white/20" /> {job.duration}
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white/20" /> {job.location}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {job.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] uppercase tracking-widest rounded border border-white/10 bg-white/5 text-white/60 font-bold"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] transition-all cursor-pointer text-[var(--neon-blue)]"
        >
          {isOpen ? "Close Summary" : "Responsibilities"}
          <span className="ml-3">
            {isOpen ? (
              <FaChevronUp className="w-3 h-3" />
            ) : (
              <FaChevronDown className="w-3 h-3" />
            )}
          </span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[1000px] opacity-100 mt-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 border-t border-white/5 pt-8">
            <ul className="space-y-4">
              {job.responsibilities.map((res, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-white/70 leading-relaxed flex gap-4 items-start"
                >
                  <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-white/20"></span>
                  {res}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FullCareerTimeline() {
  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <section id="full-career" className="container mx-auto max-w-5xl px-8">
        <div className="mb-16 border-b border-white/5 pb-8">
          <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
            Career
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {EXPERIENCE_DATA.map((job) => (
            <JobDetail key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
