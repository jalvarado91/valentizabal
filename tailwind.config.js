const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cherry: "#E12D58",
        lime: "#64FF61",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui"),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "normal",
            fontNamedInstance: "Regular",
            fontDisplay: "swap",
            src:
              'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "italic",
            fontNamedInstance: "Italic",
            fontDisplay: "swap",
            src:
              'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
      ]);
    },
  ],
};
