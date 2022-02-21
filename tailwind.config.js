module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    fontFamily: {
      sans: [
        "ヒラギノ角ゴ Pro W3",
        "Hiragino Kaku Gothic Pro",
        "メイリオ",
        "Meiryo",
      ],
    },
  },
};
