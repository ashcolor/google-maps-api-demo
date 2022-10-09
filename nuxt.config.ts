import { resolve } from "path";
import { defineNuxtConfig } from "nuxt";
import { createCommonJS } from "mlly";
const { __dirname } = createCommonJS(import.meta.url);

export default defineNuxtConfig({
  app: {
    baseURL: "/google-maps-api-demo",
  },
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
