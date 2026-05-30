"use client";

import { motion } from "framer-motion";

type Props = {
  label?: string;
  heading: string;
};

export default function SectionTitle({ label, heading }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      {label && (
        <p className="font-script text-2xl md:text-3xl text-brand mb-1">
          {label}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-ink relative inline-block">
        {heading}
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-16 h-1 bg-brand rounded-full" />
      </h2>
    </motion.div>
  );
}
