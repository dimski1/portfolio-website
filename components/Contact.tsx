"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { profile } from "@/lib/data";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: profile.linkedinUsername,
    href: profile.linkedin,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: profile.githubUsername,
    href: profile.github,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-script text-3xl md:text-4xl text-brand mb-2">
          What&apos;s next
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 relative inline-block">
          Let&apos;s work together
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-16 h-1 bg-brand rounded-full" />
        </h2>

        <p className="text-ink-muted text-base md:text-lg leading-relaxed mt-10 mb-10 max-w-xl mx-auto">
          I&apos;m always open to chatting about business process automation,
          low-code/no-code tooling, data analytics, or any interesting problem
          worth automating. Drop a message — my inbox is always open.
        </p>

        <a href={`mailto:${profile.email}`} className="btn-primary text-base">
          <FiMail className="w-5 h-5" />
          Say hello
        </a>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="card-light p-5 group text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center mb-3 group-hover:bg-brand group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-brand group-hover:text-white" />
                </div>
                <div className="text-xs text-ink-dim uppercase tracking-widest mb-0.5 font-semibold">
                  {link.label}
                </div>
                <div className="text-sm text-ink truncate group-hover:text-brand transition-colors font-medium">
                  {link.value}
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-ink-dim text-sm">
          <FiMapPin className="w-3.5 h-3.5" />
          Based in {profile.location}
        </div>
      </motion.div>
    </section>
  );
}
