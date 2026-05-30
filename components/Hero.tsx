"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />

      <div className="section relative w-full">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-script text-5xl md:text-6xl text-ink mb-2"
            >
              Hi, I&apos;m
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink leading-none"
            >
              Dimas Alif <br />
              <span className="hollow-text">Rayhan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-2xl md:text-3xl font-medium text-ink-muted"
            >
              {profile.role} <span className="text-brand">specialist.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-ink-muted leading-relaxed"
            >
              {profile.tagline} Currently a{" "}
              <span className="text-brand font-semibold">
                Senior Associate — Business Process & IT at Ocean Network Express
              </span>
              , shipping low-code workflows, SQL dashboards, and process
              improvements that cut manual work and surface insight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="btn-primary group">
                View my work
                <FiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a href="#contact" className="btn-outline">
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-2"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 text-ink-muted hover:text-brand hover:scale-125 transition-all"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 text-ink-muted hover:text-brand hover:scale-125 transition-all"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="p-3 text-ink-muted hover:text-brand hover:scale-125 transition-all"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand/10 rounded-3xl rotate-6 scale-105" />
              <div className="relative w-72 h-80 rounded-3xl bg-gradient-to-br from-brand/20 via-brand/5 to-cream-soft border border-cream-line flex items-center justify-center overflow-hidden">
                <span className="font-display text-[180px] font-bold text-brand/30 leading-none select-none">
                  D
                </span>
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-cream-line">
                  <div className="text-xs font-mono text-ink-dim uppercase tracking-widest">
                    Based in
                  </div>
                  <div className="text-sm font-semibold text-ink">
                    {profile.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink"
        >
          <div className="flex items-center justify-center w-5 h-8 border-2 border-ink rounded-2xl">
            <span className="w-1 h-1.5 bg-ink rounded-sm animate-scroll-bounce" />
          </div>
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
