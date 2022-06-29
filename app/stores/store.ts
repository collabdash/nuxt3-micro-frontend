import { defineStore } from 'pinia'
import { initGlobalState } from 'qiankun'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {

    // Inspiration from 
    // https://github.com/FEMessage/nuxt-micro-frontend/blob/dev/examples/nuxt-main-register-demo/nuxt-qiankun-project/store/index.js
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            apps: [
                // {
                //     name: 'nuxt-about',
                //     activeRule: '/about',
                //     entry: 'http://localhost:7101/',
                // },
                {
                    name: 'nuxt-landing',
                    activeRule: '/landing',
                    entry: 'http://127.0.0.1:7102/',
                },
            ],
            name: 'Qiankun-MainApp',
            sdk: null
        }
    },
    actions: {
        init() {
            // initialize global variables 
            const globalState = initGlobalState({
                name: this.state.name,
            })

            // Use the sdk method for parent-child application communication, here you can add and delete according to your own project 
            const sdk = {
                globalState,
                name: this.state.name
            }

            // process the list of apps 
            const apps = this.apps.map((app) => ({
                ...app,
                container: '#subapp',
                props: {
                    sdk,
                }
            }))

            // process the routing table 
            const routes = this.apps.map((app, i) => ({
                path: ` ${app.activeRule} (.*)`,
                name: ` ${app.name} -i`,
                component: () => import('@/pages/index.vue').then(module => module.default || module)
            }))

            this.apps = apps
            this.sdk = sdk
        },
    }
})