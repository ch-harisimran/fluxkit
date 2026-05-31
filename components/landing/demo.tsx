"use client";

import { motion } from "framer-motion";
import { PlayIcon, SparkIcon } from "@/components/icons";

const events = [
  { title: "User signed up", detail: "Authenticated via Supabase", time: "2m ago" },
  { title: "Pro plan activated", detail: "Stripe webhook confirmed", time: "7m ago" },
  { title: "Push sent", detail: "New release notification queued", time: "12m ago" }
];

export function Demo() {
  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="container-wrap">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.24em] text-white/60 uppercase">
              Try without signup
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              See a real SaaS workflow in under 60 seconds and picture your product at this level today.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">
              No setup required. Explore the app instantly and feel what you will ship on day one instead of guessing.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(255,255,255,0.12)] transition"
              >
                <PlayIcon className="h-4 w-4" />
                Try Live Demo
              </motion.button>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/82 transition hover:bg-white/[0.08]"
              >
                Buy Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(124,200,255,0.22),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(167,92,255,0.20),transparent_38%)] blur-2xl" />
            <div className="glass-panel rounded-[2rem] p-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0d19] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Live demo mode</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">This is what your app could look like today</h3>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    <SparkIcon className="h-3.5 w-3.5" />
                    Demo enabled
                  </div>
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/45">Acme Labs</p>
                      <p className="mt-1 text-2xl font-semibold text-white">$12,480 MRR</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                      Ready for launch
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {[
                      ["1,248", "active users"],
                      ["99.8%", "uptime"],
                      ["3.2s", "avg setup time"]
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-xl font-semibold text-white">{value}</p>
                        <p className="mt-1 text-sm text-white/52">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {events.map((event) => (
                    <div key={event.title} className="flex items-center justify-between rounded-[1.15rem] border border-white/10 bg-white/[0.035] px-4 py-3">
                      <div>
                        <p className="font-medium text-white">{event.title}</p>
                        <p className="text-sm text-white/52">{event.detail}</p>
                      </div>
                      <span className="text-xs text-white/38">{event.time}</span>
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
