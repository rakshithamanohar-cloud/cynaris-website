/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ===== BASE BACKGROUNDS ===== */
        light: "#F9FBFD",        // primary light page bg
        ice: "#EFF7FA",          // card & panel bg
        haze: "#DDE7EF",         // accent section bg
        cloud: "#C8D6E5",        // mild secondary bg
        white: "#FFFFFF",

        /* ===== ACCENTS ===== */
        primary: "#7BBBFF",      // main blue accent
        primaryLight: "#AED9FF", // light hover / accent BG
        accent: "#B8A9FF",       // purple accent
        accentSoft: "#DCCFFF",   // soft purple bg
        highlight: "#FFD477",    // optional warm accent

        /* ===== TEXT ===== */
        textDark: "#1F2937",     // primary dark text
        textDim: "#4B5563",      // secondary text
        textLight: "#FFFFFF",    // white text
        muted: "#6B7280",        // subtle text UI

        /* ===== NEUTRALS ===== */
        borderLight: "#E5E7EB",
        overlay: "rgba(255, 255, 255, 0.7)",
      },

      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 24px rgba(0, 0, 0, 0.08)",
        glow: "0 0 12px rgba(123, 187, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
