// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: "/google-maps-api-demo",
  },
  ssr: false,
  css: ["@/assets/css/tailwind.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Oswald|Libre+Baskerville&display=swap",
      },
    ],
  },
  vite: {
    define: {
      "process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE": "1000000",
      "process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS": "1000000",
    },
  },
});
