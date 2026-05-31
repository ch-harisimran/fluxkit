"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@/components/icons";

const items = [
  "Full source code",
  "Setup documentation",
  "Supabase schema",
  "Billing integration",
  "Demo environment",
  "Production architecture",
  "Deployment guidance",
  "Future updates"
];

export function WhatYouGetImmediately() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-wrap">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-white/55 uppercase">
              What you get immediately
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              After purchase, you know exactly what you are getting and what to do next.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/64">
              The goal is to reduce uncertainty: buyers should know the codebase, the docs, the schema, the billing layer, and the launch path are already waiting.
            </p>
          </motion.div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  className="flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-400/12 text-emerald-300">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm leading-6 text-white/74">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
