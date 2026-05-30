"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { profile, projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle label="Selected work" heading="Projects" />

      <div className="grid lg:grid-cols-3 gap-7">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-light group flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand/15 via-brand/5 to-cream-soft">
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-brand/70 mb-2">
                    {project.category}
                  </div>
                  <div className="font-display text-3xl font-bold text-ink leading-tight">
                    {project.title.split(" ").slice(0, 2).join(" ")}
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 bg-brand/90 flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8"
              >
                <p className="text-white text-sm leading-relaxed text-center">
                  {project.tagline}
                </p>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-brand transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-ink-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-2 mb-5">
                {project.highlights.slice(0, 3).map((h, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-sm text-ink-muted"
                  >
                    <span className="text-brand font-bold shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="chip-neutral text-[11px] px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-cream-line">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  Source code
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External link"
                  className="ml-auto p-2 text-ink-dim hover:text-brand hover:bg-brand/5 rounded-lg transition-all"
                >
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14 text-center"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md
                    border-2 border-ink text-ink font-semibold
                    hover:bg-ink hover:text-cream transition-all"
        >
          <FiGithub className="w-4 h-4" />
          See more on GitHub
          <FiArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
