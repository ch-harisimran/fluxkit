"use client";

import { motion } from "framer-motion";
import { SparkIcon, TerminalIcon } from "@/components/icons";

const reasons = [
  "SaaS founders should not spend weeks wiring the same foundation over and over.",
  "The fastest path to revenue is starting from a stack that already feels credible.",
  "Removing setup friction keeps the team focused on customers, feedback, and growth."
];

export function WhyThisExists() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[2rem] p-8 sm:p-10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.24em] text-white/60 uppercase">
              Why this exists
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Because SaaS is already hard enough without rebuilding the same foundation every time.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/62">
              This kit removes the friction that slows founders down, so the first version of your product feels more real, more trustworthy, and closer to revenue.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-panel rounded-[1.6rem] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white">
                    {index === 0 ? <TerminalIcon className="h-5 w-5" /> : <SparkIcon className="h-5 w-5" />}
                  </div>
                  <p className="pt-1 text-base leading-7 text-white/68">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
