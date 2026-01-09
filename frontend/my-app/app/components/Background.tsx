"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1931] via-[#1B1240] to-[#2E1A5E]" />

      {/* Soft violet glow – top left */}
      <motion.div
        className="absolute top-[-160px] left-[-160px] h-[520px] w-[520px] rounded-full 
                   bg-gradient-to-tr from-[#5B3FD1]/30 to-[#7C6EE6]/20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Indigo glow – bottom right */}
      <motion.div
        className="absolute bottom-[-180px] right-[-180px] h-[620px] w-[620px] rounded-full 
                   bg-gradient-to-tr from-[#2E1A5E]/35 to-[#5B3FD1]/25 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle center ambient glow */}
      <motion.div
        className="absolute top-[35%] left-[45%] h-[420px] w-[420px] rounded-full 
                   bg-gradient-to-tr from-white/10 to-transparent blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
