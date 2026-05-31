"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons";

export function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="glass-panel relative overflow-hidden rounded-[2.25rem] p-10 sm:p-12"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(124,200,255,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(167,92,255,0.16),transparent_35%)]" />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-[0.24em] text-white/46 uppercase">Final push</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Start building your SaaS today before another week disappears into setup work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/62">
              The fastest way to launch is to stop rebuilding the boring parts and move straight to selling, learning, and improving the product.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950"
              >
                Try Live Demo
                <ArrowRightIcon className="h-4 w-4" />
              </motion.a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/82 transition hover:bg-white/[0.08]"
              >
                Buy Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
