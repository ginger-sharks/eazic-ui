import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import OktaVue from '@okta/okta-vue'
import { oktaAuth } from './okta';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(OktaVue, {
        oktaAuth,
        onAuthRequired: () => {
            router.push('/login')
        },
        onAuthResume: () => {
            router.push('/login')
        },
    })

app.mount('#app')
