import './assets/main.css'
import { OktaAuth } from '@okta/okta-auth-js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import OktaVue from '@okta/okta-vue'

const app = createApp(App)

const yourOktaUri = 'https://dev-77536915.okta.com'
const clientId = '0oabnu0zcoU50WOG85d7'

const oktaAuth = new OktaAuth({
  issuer: `https://dev-77536915.okta.com/oauth2/default`,
  clientId: clientId,
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

app.use(createPinia())
app.use(router)
app.use(OktaVue, {
  oktaAuth,
  onAuthRequired: () => {
    router.push('/login')
  },
  onAuthResume: () => {
    router.push('/login')
  }
})

app.mount('#app')
