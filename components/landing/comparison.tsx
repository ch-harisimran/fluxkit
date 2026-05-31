"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@/components/icons";

const rows = [
  ["Auth system", "Skip 2 to 3 days of work", "Build it yourself"],
  ["Stripe billing", "Start charging sooner", "Wire it from scratch"],
  ["Push notifications", "Ship engagement faster", "Decide the whole setup"],
  ["Project structure", "Clear and organized", "Starts messy and grows fast"],
  ["Setup time", "Hours, not weeks", "Usually days or weeks"],
  ["Production readiness", "Built for launch", "Easy to miss important pieces"],
  ["Error handling", "Already considered", "You discover issues later"]
];

export function Comparison() {
  return (
    <section id="comparison" className="relative py-24 sm:py-32">
      <div className="container-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-white/55 uppercase">
            Why this is better than building from scratch
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The shortcut feels obvious when you compare it side by side.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/62">
            The goal is simple: make DIY feel slow, risky, and expensive compared to starting with the kit.
          </p>
        </motion.div>

        <div className="glass-panel overflow-hidden rounded-[2rem]">
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-white/75">
            <div>Capability</div>
            <div className="text-white">This SaaS Kit</div>
            <div className="text-white/60">Building from scratch</div>
          </div>
          <div className="divide-y divide-white/10">
            {rows.map(([label, kit, diy]) => (
              <div key={label} className="grid grid-cols-3 gap-4 px-5 py-4 text-sm leading-6">
                <div className="font-medium text-white/80">{label}</div>
                <div className="flex items-start gap-2 text-white">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  <span>{kit}</span>
                </div>
                <div className="text-white/55">{diy}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
