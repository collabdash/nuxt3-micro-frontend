import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@femessage/nuxt-micro-frontend',
    ],
    MFE: {
        force: true
    }
})
