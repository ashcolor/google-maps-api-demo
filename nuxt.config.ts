import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ["@pinia/nuxt"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Oswald|Libre+Baskerville&display=swap",
      },
    ],
  },
});
