/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        surface: "#12121A",
        primary: "#E20074",
        secondary: "#F8F9FA",
        muted: "#8A8F98",
        success: "#8CBC7F",
        warning: "#FFE766",
        danger: "#C5283E"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      boxShadow: {
        glow: "0 0 20px rgba(226, 0, 116, 0.35)"
      },

      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(226,0,116,0.15), transparent 60%)"
      }
    }
  },
  plugins: []
};
