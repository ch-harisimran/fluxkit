"use client";

import { motion } from "framer-motion";
import {
  BellIcon,
  BillingIcon,
  CheckIcon,
  DatabaseIcon,
  GlobeIcon,
  LayersIcon,
  RocketIcon,
  ShieldIcon,
  SparkIcon,
  TerminalIcon
} from "@/components/icons";

const features = [
  {
    icon: ShieldIcon,
    title: "Skip auth setup",
    description: "Save 2 to 3 days by starting with sign-in and access flows already wired in."
  },
  {
    icon: BillingIcon,
    title: "Charge sooner",
    description: "Start billing customers immediately with Stripe-ready payment and webhook structure."
  },
  {
    icon: BellIcon,
    title: "Ship engagement faster",
    description: "Add push notifications without spending days on backend plumbing."
  },
  {
    icon: DatabaseIcon,
    title: "Use Supabase from day one",
    description: "Avoid early data mistakes with a clean, scalable database foundation."
  },
  {
    icon: CheckIcon,
    title: "Catch setup issues early",
    description: "Save onboarding time by catching missing steps before they block your launch."
  },
  {
    icon: RocketIcon,
    title: "Show the product instantly",
    description: "Let buyers explore the app before the full live flow is finished."
  },
  {
    icon: LayersIcon,
    title: "Keep shipping faster",
    description: "A clean structure makes the next feature easier to build and safer to ship."
  },
  {
    icon: TerminalIcon,
    title: "Launch-ready structure",
    description: "Skip folder chaos and start from a codebase that feels ready for real customers."
  },
  {
    icon: SparkIcon,
    title: "Look worth paying for",
    description: "Make the app feel credible before users try the first feature."
  },
  {
    icon: GlobeIcon,
    title: "Launch with less friction",
    description: "Get to market with less doubt and a more confident first release."
  }
];

export function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-white/55 uppercase">
            What this unlocks
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Every core system you need, framed around speed to revenue.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/64">
            This is not about listing parts. It is about giving founders a faster path to shipping something people can pay for.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.03 }}
                whileHover={{ y: -6 }}
                className="glass-panel group rounded-[1.6rem] p-6 transition duration-300 hover:border-white/18 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/90 transition group-hover:scale-105 group-hover:bg-white/[0.1]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
