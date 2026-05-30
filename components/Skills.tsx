"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section bg-cream-soft/40 -mx-0">
      <SectionTitle label="The toolkit" heading="Skills & Tech Stack" />

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="card-light p-7"
          >
            <h3 className="font-display text-xl font-bold text-ink mb-5">
              {cat.title}
            </h3>

            <ul className="flex flex-wrap gap-2.5">
              {cat.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.name}
                    className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg
                               bg-cream-soft border border-cream-line text-sm
                               hover:bg-brand hover:border-brand hover:text-white
                               transition-all duration-200 cursor-default"
                  >
                    {Icon && (
                      <Icon className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                    )}
                    <span className="font-medium text-ink group-hover:text-white">
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
