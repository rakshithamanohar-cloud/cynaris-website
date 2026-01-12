"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Base light gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-light via-ice to-haze" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft blue glow */}
      <motion.div
        className="absolute -top-48 -left-48 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[160px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft accent glow */}
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-accent/20 blur-[160px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
