"use client";

import React, { useState } from "react";
import { EXPERIENCE_DATA, Job } from "@/data/experience";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";

interface RoleAccordionProps {
  role: Job;
  isDefaultOpen: boolean;
}

const RoleAccordion: React.FC<RoleAccordionProps> = ({
  role,
  isDefaultOpen,
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className="border-t border-white/5 first:border-t-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left transition-all hover:bg-white/[0.02] px-4 -mx-4 rounded-lg group"
      >
        <div className="space-y-1">
          <h4 className="text-xl font-bold text-white group-hover:text-[var(--neon-blue)] transition-colors">
            {role.title}
          </h4>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-white font-bold flex items-center gap-2">
              {role.duration}
            </span>
          </div>
        </div>
        <span className="text-[var(--neon-blue)] opacity-50 group-hover:opacity-100 transition-opacity">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1200px] opacity-100 pb-8" : "max-h-0 opacity-0"
        }`}
      >
        {/* Responsibilities */}
        <ul className="space-y-4">
          {role.responsibilities.map((res, index) => (
            <li
              key={index}
              className="text-sm md:text-base text-white leading-relaxed flex gap-4 items-start"
            >
              <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-[var(--neon-blue)]"></span>
              {res}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6 pt-10">
          {role.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-[12px] uppercase tracking-widest rounded border border-[var(--neon-pink)] text-[var(--neon-pink)] font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CompanySectionProps {
  company: string;
  roles: Job[];
  isFirstCompany: boolean;
}

const CompanySection: React.FC<CompanySectionProps> = ({
  company,
  roles,
  isFirstCompany,
}) => {
  const latestRole = roles[0];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-10 mb-12 shadow-2xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 gap-4">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            {company}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-white">
            <FaMapMarkerAlt className="text-[var(--neon-blue)] text-xs" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {latestRole.location}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {roles.map((role, index) => (
          <RoleAccordion
            key={role.id}
            role={role}
            isDefaultOpen={isFirstCompany && index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default function FullCareerTimeline() {
  const groupedExperience = EXPERIENCE_DATA.reduce<Record<string, Job[]>>(
    (acc, job) => {
      if (!acc[job.company]) {
        acc[job.company] = [];
      }
      acc[job.company].push(job);
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section id="full-career" className="container mx-auto max-w-5xl px-8">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tighter">
            CAREER
          </h1>
          <div className="h-1 w-20 bg-[var(--neon-blue)] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col">
          {Object.entries(groupedExperience).map(([company, roles], index) => (
            <CompanySection
              key={company}
              company={company}
              roles={roles}
              isFirstCompany={index === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
