// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages : true,
  devtools: { enabled: true },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"]
})