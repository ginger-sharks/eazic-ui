import '@/assets/main.scss'
import { OktaAuth } from '@okta/okta-auth-js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import OktaVue from '@okta/okta-vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faUser,
  faUserCircle,
  faMagnifyingGlass,
  faSearch,
  faCirclePlay,
  faRectangleList,
  faUsersRectangle
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faUser,
  faUserCircle,
  faMagnifyingGlass,
  faSearch,
  faCirclePlay,
  faRectangleList,
  faUsersRectangle
)

const app = createApp(App)

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
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
