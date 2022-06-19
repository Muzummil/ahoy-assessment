/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{ts,html}",
    "./src/pages/*.{ts,html}",
    "./src/components/*.{ts,html}",
  ],
  theme: {
    colors: ({ colors }) => ({
      backgroundColor: {
        DEFAULT: "#5A33E4",
        400: "#5e4aa7",
        800: "#5A33E4",
      },
      white: colors.white,
      transparent: colors.transparent,
      black: colors.black,
      blue: colors.blue,
      red: colors.red,
      gray: colors.gray,
    }),
    extend: {},
  },
  plugins: [],
};
