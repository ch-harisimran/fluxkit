"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = ""
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container-wrap">
        {(eyebrow || description) && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow ? (
              <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-white/70 uppercase">
                {eyebrow}
              </div>
            ) : null}
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/64 sm:text-lg">
                {description}
              </p>
            ) : null}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
