/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        methane: "var(--color-methane)",
        ethane: "var(--color-ethane)",
        propane: "var(--color-propane)",
        butane: "var(--color-butane)",
        pentane: "var(--color-pentane)",
        hexane: "var(--color-hexane)",
        heptane: "var(--color-heptane)",
        octane: "var(--color-octane)",
        nonane: "var(--color-nonane)",
        decane: "var(--color-decane)",

        exa: "var(--color-exa)",
        peta: "var(--color-peta)",
        giga: "var(--color-giga)",
        mega: "var(--color-mega)",
        kilo: "var(--color-kilo)",
        deca: "var(--color-deca)",
        tera: "var(--color-tera)",
        deci: "var(--color-deci)",
        centi: "var(--color-centi)",
      },
    },
  },
  plugins: [],
};
