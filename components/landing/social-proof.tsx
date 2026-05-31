"use client";

import { motion } from "framer-motion";

const logos = ["Indie Hackers", "Founder OS", "Launchpad", "Moonbase", "BuildStack", "Venture Grid"];

export function SocialProof() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[2rem] p-8 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.24em] text-white/45 uppercase">
                Trusted by developers &amp; indie hackers
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for indie hackers, solo founders, and teams who want to ship faster.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/62">
                Premium presentation matters. When the page feels deliberate, the product feels safer to buy and easier to trust.
              </p>
              <div className="mt-5 text-sm text-white/52">500+ developers want the same thing: fewer setup headaches and a faster first release.</div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="flex h-20 items-center justify-center rounded-[1.35rem] border border-white/10 bg-white/[0.04] text-sm font-medium tracking-[0.18em] text-white/62 uppercase"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
