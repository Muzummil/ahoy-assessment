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
      primary: "#F5CB40",
      lightPrimary: "#F5CB40",
      btnBgColor: "#BC9733",
      cardBgColor: "#242424",
      borderColor: "#707070",
      tableBgBolor: "#242424",
      tableBtnBgBolor: "#FFCB40",
      tableKeyBgBolor: "#626262",
      tableValueBgBolor: "#141414",
      loginBgColor: "#1F1F1F",
      loginCardBgColor: "#121212",
      fullBodyBgColor: "#1b1818",
      white: colors.white,
      transparent: colors.transparent,
      black: colors.black,
      blue: colors.blue,
      red: colors.red,
    }),
    extend: {},
  },
  plugins: [],
};
