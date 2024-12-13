/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(220deg) ",
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },

          "70%": { opacity: 1 },
          "100%": { transform: "rotate(220deg) translateX(-95vw)", opacity: 0 },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 5s steps(20) 1 alternate, blink 1s infinite",
        "meteor-effect": "meteor 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
