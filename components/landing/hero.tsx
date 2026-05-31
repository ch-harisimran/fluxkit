"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, PlayIcon, ShieldIcon, SparkIcon, UsersIcon } from "@/components/icons";

const trustMetrics = [
  { value: "This weekend", label: "from idea to launch" },
  { value: "No signup", label: "required to see the demo" },
  { value: "1 purchase", label: "covers the full starter" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10">
      <div className="absolute inset-0 -z-10">
        <div className="noise-overlay" />
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(98,116,255,0.42)_0%,rgba(98,116,255,0.12)_38%,transparent_72%)] blur-3xl"
          animate={{ scale: [1, 1.04, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[-8rem] top-24 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(163,92,255,0.24)_0%,rgba(163,92,255,0.08)_35%,transparent_70%)] blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container-wrap relative z-10">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-glow">
              <SparkIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">FluxKit</p>
              <p className="text-xs text-white/45">Built for indie hackers and solo founders</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <a href="#pricing" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition hover:bg-white/[0.08]">
              Buy Now
            </a>
            <a href="#demo" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:scale-[1.02]">
              Try Live Demo
            </a>
          </div>
        </div>

        <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
              <ShieldIcon className="h-4 w-4 text-cyan-300" />
              For indie hackers, solo founders, and MVP builders who want to launch fast
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Launch your React Native SaaS this weekend without rebuilding auth, billing, and backend plumbing.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/66 sm:text-xl">
              FluxKit removes the weeks you lose wiring authentication, Stripe billing, notifications, and backend setup so you can ship sooner and start charging sooner.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(255,255,255,0.12)] transition"
              >
                <PlayIcon className="h-4 w-4" />
                Try Live Demo
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/86 transition hover:bg-white/[0.08]"
              >
                Buy Now
                <ArrowRightIcon className="h-4 w-4" />
              </motion.a>
            </div>

            <div className="mt-4 text-sm text-white/50">
              Skip weeks of setup. See the product instantly, then decide if it fits.
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * index, duration: 0.55 }}
                  className="glass-panel rounded-3xl p-5"
                >
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/56">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(124,200,255,0.20),transparent_42%),radial-gradient(circle_at_20%_100%,rgba(161,92,255,0.16),transparent_34%)] blur-2xl" />
            <div className="glass-panel overflow-hidden rounded-[2rem] border-white/10 p-4 shadow-glowStrong">
              <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">FluxKit dashboard</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">Ship faster with everything connected</h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Live ready
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.4rem] border border-white/10 bg-[#0c1020]/85 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/55">Subscription health</span>
                      <span className="text-sm text-cyan-300">+32% MRR</span>
                    </div>
                    <div className="mt-4 h-36 rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(116,92,255,0.35),rgba(124,200,255,0.08))] p-4">
                      <div className="flex h-full items-end gap-2">
                        {[34, 58, 49, 78, 71, 90, 66, 96].map((value, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-2xl bg-white/85 shadow-[0_0_30px_rgba(124,200,255,0.18)]"
                            style={{ height: `${value}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {[
                      ["Auth", "Secure user flows", "green"],
                      ["Stripe", "Webhook-synced billing", "blue"],
                      ["Push", "Notification backend", "violet"]
                    ].map(([label, text, tone]) => (
                      <div key={label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">{label}</span>
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              tone === "green" ? "bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" : tone === "blue" ? "bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.8)]" : "bg-violet-400 shadow-[0_0_18px_rgba(192,132,252,0.8)]"
                            }`}
                          />
                        </div>
                        <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-white/70">
                      <UsersIcon className="h-4 w-4" />
                      Developer-ready
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/56">Validation, sensible defaults, and a clean architecture so your team can move without breaking the foundation.</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-white/70">
                      <SparkIcon className="h-4 w-4" />
                      Premium polish
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/56">Subtle motion, layered depth, and production UI patterns that make your product feel expensive immediately.</p>
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
