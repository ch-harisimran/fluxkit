"use client";

import { motion } from "framer-motion";
import { CheckIcon, SparkIcon } from "@/components/icons";

export function ProofPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.24em] text-white/60 uppercase">
              Proof / Preview
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              This is what you get on day one.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">
              Production-ready structure included, so the first version of your app already feels like something real users can trust.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "A real-app feel from the first screen",
                "Production-ready structure included",
                "A cleaner path from first click to first payment"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/74">
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                    <CheckIcon className="h-4 w-4 text-emerald-300" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(124,200,255,0.20),transparent_42%),radial-gradient(circle_at_20%_100%,rgba(167,92,255,0.16),transparent_35%)] blur-2xl" />
            <div className="glass-panel rounded-[2rem] p-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0d19] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Day-one preview</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">Feels like a live product, not a template</h3>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    <SparkIcon className="h-3.5 w-3.5" />
                    Launch-ready
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(116,92,255,0.18),rgba(255,255,255,0.03))] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/46">Dashboard</p>
                        <p className="mt-1 text-2xl font-semibold text-white">$12,480 MRR</p>
                      </div>
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-300">
                        Stable
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {[
                        ["1,248", "users"],
                        ["98.8%", "uptime"],
                        ["3.1s", "setup"]
                      ].map(([value, label]) => (
                        <div key={label} className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-3">
                          <p className="text-lg font-semibold text-white">{value}</p>
                          <p className="mt-1 text-xs text-white/48">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {[
                      ["Auth", "Signed-in flow ready"],
                      ["Billing", "Stripe structure included"],
                      ["Push", "Notification path prepared"]
                    ].map(([title, detail]) => (
                      <div key={title} className="rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-4">
                        <p className="font-medium text-white">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-white/58">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
