"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon, PlayIcon } from "@/components/icons";

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4"
        >
          <div className="container-wrap">
            <div className="glass-panel flex items-center justify-between gap-3 rounded-2xl px-4 py-3 shadow-glow">
              <div className="hidden min-w-0 md:block">
                <p className="truncate text-sm font-medium text-white">Ready to launch faster?</p>
                <p className="truncate text-xs text-white/52">Try the live demo or buy the kit without extra setup.</p>
              </div>
              <div className="flex w-full items-center justify-end gap-2 md:w-auto">
                <motion.a
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition"
                >
                  <PlayIcon className="h-4 w-4" />
                  Try Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/86 transition hover:bg-white/[0.08]"
                >
                  Buy Now
                  <ArrowRightIcon className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
