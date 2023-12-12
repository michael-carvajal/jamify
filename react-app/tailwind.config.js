module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#111",
        "border-text": "#ddc",
        "ug-grey": "#929292",
        "ug-light-grey": "#a7a796",
        "ug-yellow": "#ffc600",
        "ug-red": "#ff5d55",
        "white-background": "#f8f8f8",
        "modal-background": "#1f1f1f",
      },
    },
  },
  plugins: [],
};
