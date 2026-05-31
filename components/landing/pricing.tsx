"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const plans = [
  {
    name: "Starter",
    price: "$49",
    blurb: "Best if you want to validate fast and keep momentum.",
    features: ["Core app structure", "Auth starter", "Setup validation"],
    cta: "Buy Now",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$99",
    blurb: "Best for launching your first SaaS and moving toward revenue faster.",
    features: ["Everything in Starter", "Billing + webhook structure", "Push notifications backend", "Demo mode system"],
    cta: "Buy Now",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$149",
    blurb: "Best for teams that want the strongest starting point from day one.",
    features: ["Everything in Pro", "Architecture polish", "Priority setup guidance"],
    cta: "Buy Now",
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-white/55 uppercase">
            Pricing
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Pro plan is the easiest way to launch without second-guessing the stack.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/62">
            You are buying speed, confidence, and a foundation that helps you launch sooner without feeling like you cut corners.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-[1.9rem] border p-6 transition duration-300 ${
                plan.highlighted
                  ? "border-white/18 bg-[linear-gradient(180deg,rgba(116,92,255,0.20),rgba(255,255,255,0.04))] shadow-glowStrong"
                  : "glass-panel hover:border-white/20 hover:shadow-glow"
              }`}
            >
              {plan.highlighted ? (
                <div className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-950">
                  Most popular
                </div>
              ) : null}
              <p className="text-sm tracking-[0.24em] text-white/46 uppercase">{plan.name}</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
                <span className="pb-2 text-sm text-white/45">one-time</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/64">{plan.blurb}</p>
              {plan.highlighted ? (
                <p className="mt-3 text-sm font-medium text-cyan-200">Best value for launching your first SaaS faster.</p>
              ) : null}
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/78">
                    <div className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-400/12 text-emerald-300">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <motion.a
                whileHover={{ x: 2 }}
                href="#demo"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-semibold transition ${
                  plan.highlighted ? "bg-white text-slate-950" : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                }`}
              >
                {plan.cta}
                <ArrowRightIcon className="h-4 w-4" />
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
