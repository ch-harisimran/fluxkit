"use client";

import { motion } from "framer-motion";
import { BellIcon, BillingIcon, DatabaseIcon, ShieldIcon, SparkIcon, TerminalIcon } from "@/components/icons";

const items = [
  { icon: ShieldIcon, title: "Authentication", outcome: "Skip days of auth implementation." },
  { icon: BillingIcon, title: "Stripe Billing", outcome: "Start charging customers immediately." },
  { icon: BellIcon, title: "Push Notifications", outcome: "Ship engagement features without backend setup." },
  { icon: DatabaseIcon, title: "Supabase Backend", outcome: "Launch with a solid database and backend foundation." },
  { icon: SparkIcon, title: "Onboarding", outcome: "Help new users get to value faster." },
  { icon: SparkIcon, title: "User Profiles", outcome: "Give users a polished account experience from day one." },
  { icon: BillingIcon, title: "Subscription System", outcome: "Turn free users into paid users with less friction." },
  { icon: DatabaseIcon, title: "Storage", outcome: "Keep files and assets organized in the stack." },
  { icon: TerminalIcon, title: "CI/CD Setup", outcome: "Keep shipping without manual deploy friction." },
  { icon: TerminalIcon, title: "Production Architecture", outcome: "Build on a structure meant for real SaaS products." }
];

export function EverythingIncluded() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-white/55 uppercase">
            Everything Included
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Understand the product in seconds, not after a long feature tour.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/64">
            This is the full starter foundation buyers want to see immediately: the parts that remove setup pain and get a SaaS moving faster.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                className="glass-panel rounded-[1.5rem] p-5 transition hover:border-white/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.outcome}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
