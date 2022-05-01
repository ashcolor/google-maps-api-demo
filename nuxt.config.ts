import { resolve } from "path";
import { defineNuxtConfig } from "nuxt";
import { createCommonJS } from "mlly";
const { __dirname } = createCommonJS(import.meta.url);

export default defineNuxtConfig({
  ssr: false,
  router: {
    base: "/google-maps-api-demo/dist/",
  },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "gh-pages",
        path: "/",
        file: resolve(__dirname, "pages/index.vue"),
      });
    },
  },
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
