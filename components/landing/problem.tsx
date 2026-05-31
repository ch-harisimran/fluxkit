"use client";

import { motion } from "framer-motion";

const painPoints = [
  "Most founders lose their first week to setup instead of learning whether anyone wants the product.",
  "Auth, billing, and backend details keep pulling you out of product work and delaying launch.",
  "A lot of starter kits look good in screenshots, then slow you down when it is time to ship."
];

export function Problem() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-wrap">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[2rem] p-8 sm:p-10"
          >
            <p className="text-sm font-medium tracking-[0.22em] text-white/45 uppercase">Why teams stall</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Building SaaS is hard because the setup eats your momentum.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/62">
              The idea is rarely the problem. The delay comes from everything around it: sign-in, payments, database decisions, push flows, and the invisible setup work that keeps killing launch speed.
            </p>
          </motion.div>
          <div className="grid gap-4">
            {painPoints.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="glass-panel group rounded-[1.6rem] p-5 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="text-base leading-7 text-white/68 group-hover:text-white/80">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
