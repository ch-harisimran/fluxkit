"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons";

const faqs = [
  {
    q: "Do I need backend experience?",
    a: "No. The kit is designed so you can move forward without becoming a backend expert first. It removes the setup work that usually slows launches down."
  },
  {
    q: "Does this include Stripe billing already?",
    a: "Yes. Billing is included so you can move to paid users faster instead of spending days wiring payments yourself."
  },
  {
    q: "Can I use this for production apps?",
    a: "Yes. It is built to help you launch a real product with a stronger starting point and less setup friction."
  },
  {
    q: "Is setup difficult?",
    a: "It is intentionally simpler than starting from scratch. You still customize it, but the heavy lifting is already done for you."
  },
  {
    q: "What technologies are included?",
    a: "The stack centers on React Native, Supabase, Stripe, authentication, and push notifications, with the landing page built in Next.js."
  },
  {
    q: "Is this beginner friendly?",
    a: "Yes, especially if you want to launch without getting lost in setup details. It helps beginners move faster with fewer decisions to make."
  },
  {
    q: "Can I customize everything?",
    a: "Yes. The goal is to give you a strong foundation you can shape into your own product, not lock you into a rigid template."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-white/55 uppercase">
            FAQ
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Clear answers remove hesitation and help people decide faster.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/62">
            If you are on the fence, these answers should make the next step feel safer and more obvious.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <motion.button
                key={faq.q}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="glass-panel block w-full rounded-[1.5rem] p-5 text-left transition hover:border-white/20"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-medium text-white sm:text-lg">{faq.q}</span>
                  <span className={`grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition ${open ? "rotate-45" : ""}`}>
                    <ArrowRightIcon className="h-4 w-4 text-white/75" />
                  </span>
                </div>
                <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-3xl text-sm leading-7 text-white/62">{faq.a}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
