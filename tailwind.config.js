module.exports = {
  important: true,
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
