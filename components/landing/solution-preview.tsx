"use client";

import { motion } from "framer-motion";
import { CheckIcon, ShieldIcon, SparkIcon } from "@/components/icons";

const checklist = [
  "Weeks of setup saved before you write the first real feature",
  "A cleaner path from idea to revenue",
  "A premium foundation that helps your app feel real on day one"
];

export function SolutionPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.24em] text-white/60 uppercase">
              What you save
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stop paying the setup tax every time you want to launch a SaaS.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/62">
              Instead of stitching together half-finished pieces, you start with the critical systems already aligned so you can move faster and sell sooner.
            </p>
            <div className="mt-8 space-y-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/75">
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                    <CheckIcon className="h-4 w-4 text-emerald-300" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 26 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(124,200,255,0.16),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(167,92,255,0.18),transparent_36%)] blur-2xl" />
            <div className="glass-panel overflow-hidden rounded-[2rem] p-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0d19] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Starter overview</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">Everything is mapped out</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62">
                    Ready for production
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <ShieldIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50">Speed</p>
                        <p className="font-medium text-white">Launch sooner</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/58">You skip the setup grind and get straight to shipping something customers can use.</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(116,92,255,0.20),rgba(255,255,255,0.03))] p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white">
                        <SparkIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50">Trust</p>
                        <p className="font-medium text-white">Looks launch-ready</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/62">The first impression feels credible, which makes the product easier to sell and easier to trust.</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Supabase", "Database + realtime"],
                    ["Stripe", "Billing + webhooks"],
                    ["Push", "Mobile notifications"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[1.15rem] border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-xs tracking-[0.22em] text-white/40 uppercase">{label}</p>
                      <p className="mt-2 text-sm font-medium text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
