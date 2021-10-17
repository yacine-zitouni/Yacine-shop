module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: "26rem",
      },
      colors: {
        heading: "#1a1a1a",
      },
      fontFamily: {
        roboto: ['"Nunito Sans"', "Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        productScreen: "2fr 1fr 1fr",
        cartItem: "1fr 2fr 0.5fr 0.5fr 0.5fr",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "even", "odd"],
      opacity: ["disabled"],
      borderColor: ["active"],
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
