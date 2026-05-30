"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { experiences } from "@/lib/data";

export default function Experience() {
  const [active, setActive] = useState(0);
  const current = experiences[active];

  return (
    <section id="experience" className="section">
      <SectionTitle label="Where I've worked" heading="Experience" />

      <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-10">
        <div
          className="flex md:flex-col overflow-x-auto md:overflow-x-visible gap-2"
          role="tablist"
        >
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`relative px-5 py-4 text-left whitespace-nowrap md:whitespace-normal
                         rounded-xl border transition-all duration-200
                         ${
                           active === i
                             ? "bg-brand text-white border-brand shadow-md"
                             : "bg-white text-ink-muted border-cream-line hover:border-brand/40 hover:text-brand"
                         }`}
            >
              <div className="font-semibold text-sm">{exp.company}</div>
              <div
                className={`text-xs mt-1 ${
                  active === i ? "text-white/80" : "text-ink-dim"
                }`}
              >
                {exp.period}
              </div>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="card-light p-7 md:p-9"
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
              <FiBriefcase className="w-5 h-5 text-brand" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-ink leading-tight">
                {current.role}
              </h3>
              <p className="text-brand font-semibold mt-1">{current.company}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-ink-dim">
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar className="w-3.5 h-3.5" />
              {current.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="w-3.5 h-3.5" />
              {current.location}
            </span>
            {current.current && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Current
              </span>
            )}
          </div>

          <ul className="space-y-3.5">
            {current.highlights.map((h, i) => (
              <li
                key={i}
                className="relative pl-7 text-ink-muted leading-relaxed"
              >
                <span className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
