import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  ssr: false,
  target: "static",
  router: {
    base: "/ashcolor/google-maps-api-demo/",
  },
  css: ["@/assets/css/tailwind.css", "~/assets/fontawesome/all.min.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
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
