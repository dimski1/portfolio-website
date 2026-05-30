"use client";

import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiStar, FiGlobe } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import {
  educationItems,
  certifications,
  achievements,
  languages,
} from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section bg-cream-soft/40">
      <SectionTitle label="The foundation" heading="Education & Credentials" />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
        <div className="space-y-5">
          {educationItems.map((edu, idx) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-light p-7"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                  <FiBookOpen className="w-5 h-5 text-brand" />
                </div>

                <div className="flex-1">
                  <div className="text-xs font-medium text-brand uppercase tracking-widest mb-1">
                    {edu.period} · {edu.location}
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-ink-muted mb-4">
                    {edu.degree} ·{" "}
                    <span className="font-mono text-sm font-semibold text-ink">
                      GPA {edu.gpa}
                    </span>
                  </p>

                  <div>
                    <div className="text-xs text-ink-dim uppercase tracking-widest mb-3 font-semibold">
                      Relevant coursework
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((c) => (
                        <span key={c} className="chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-light p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <FiStar className="w-4 h-4 text-brand" />
              <h3 className="font-display text-lg font-bold text-ink">
                Achievements
              </h3>
            </div>
            <ul className="space-y-5">
              {achievements.map((a) => (
                <li
                  key={a.title}
                  className="border-l-2 border-brand/40 pl-4"
                >
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-semibold text-ink">{a.title}</span>
                    <span className="text-brand font-semibold text-sm">
                      @ {a.issuer}
                    </span>
                  </div>
                  <div className="text-xs text-ink-dim mt-0.5">{a.date}</div>
                  <p className="text-ink-muted text-sm mt-1.5 leading-relaxed">
                    {a.detail}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 mb-3">
            <FiAward className="w-4 h-4 text-brand" />
            <h3 className="font-display text-lg font-bold text-ink">
              Certifications
            </h3>
          </div>

          {certifications.map((cert) => (
            <div key={cert.name} className="card-light p-5 group">
              <div className="font-semibold text-ink group-hover:text-brand transition-colors">
                {cert.name}
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-ink-dim">
                <span>{cert.issuer}</span>
                <span>·</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-2 mt-8 mb-3">
            <FiGlobe className="w-4 h-4 text-brand" />
            <h3 className="font-display text-lg font-bold text-ink">
              Languages
            </h3>
          </div>
          <div className="card-light p-5 space-y-3">
            {languages.map((l) => (
              <div
                key={l.name}
                className="flex items-baseline justify-between gap-3"
              >
                <span className="text-ink font-medium">{l.name}</span>
                <span className="text-xs text-ink-dim font-mono">
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
