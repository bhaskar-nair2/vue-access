const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      purple: colors.purple,
      green: colors.green,
      yellow: colors.yellow,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
