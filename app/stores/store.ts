import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {

    // Inspiration from 
    // https://github.com/FEMessage/nuxt-micro-frontend/blob/dev/examples/nuxt-main-register-demo/nuxt-qiankun-project/store/index.js
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            apps: [],
            name: 'femessage',
            sdk: null
        }
    }
})