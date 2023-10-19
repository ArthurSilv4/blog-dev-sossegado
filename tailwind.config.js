/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      orange: "#EE5626",
      white: "#F5F5F5",
      black: "#000000",
      blue: "#35109F",
      bgLight: "#F9F4EC",
      bgDark: "#201F1F",
      transparent: "transparent",
    },
  },
  darkMode: "class",
  plugins: [],
};
