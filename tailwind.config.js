/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./web.js"],
  theme: {
    extend: {
      colors: {
        "ap-ink": "#0f172a",
        "ap-blue": "#123a73",
        "ap-sky": "#0ea5e9",
        "ap-sand": "#f4efe4",
      },
      fontFamily: {
        display: ["DM Serif Text", "Georgia", "serif"],
        body: ["Segoe UI", "Tahoma", "Verdana", "sans-serif"],
      },
      boxShadow: {
        "ap-soft": "0 15px 35px rgba(15, 23, 42, 0.12)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

