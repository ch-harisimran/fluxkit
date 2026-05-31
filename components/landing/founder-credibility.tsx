"use client";

import { motion } from "framer-motion";

const points = [
  "Why FluxKit was created: to remove the repeated setup work that slows down new SaaS launches.",
  "What problem it solves: weeks lost to authentication, billing, notifications, and backend wiring.",
  "Who it was built for: indie hackers, solo founders, React Native developers, and builders shipping MVPs."
];

export function FounderCredibility() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[2rem] p-8 sm:p-10"
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-white/55 uppercase">
              Founder credibility
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built by someone who knows how painful the blank-slate launch path feels.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/62">
              FluxKit exists to make the starting point feel less risky and far more practical for founders trying to ship a real SaaS.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-panel rounded-[1.5rem] p-5"
              >
                <p className="text-sm leading-7 text-white/70">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
