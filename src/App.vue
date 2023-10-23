<template>
  <nav>
    <div>
      <eazic-bar />
      <router-link to="/"> Home </router-link>
      <router-link to="/login" v-if="!authenticated"> Login </router-link>
      <router-link to="/profile" v-if="authenticated"> Profile </router-link>
      <router-link to="/about"> About </router-link>
      <a v-if="authenticated" v-on:click="logout()"> Logout </a>
    </div>
  </nav>
  <div id="content">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 3rem;
}
a {
  text-decoration: underline;
  cursor: pointer;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts" setup>
import EazicBar from '@/components/EazicBar.vue'
import { useAuth } from '@okta/okta-vue'
import { onMounted, ref } from 'vue'

const authenticated = ref<boolean>(false)
const auth = useAuth()

onMounted(async () => {
  await isAuthenticated()
  auth.authStateManager.subscribe(isAuthenticated)
})

async function isAuthenticated() {
  authenticated.value = await auth.isAuthenticated()
}

async function logout() {
  await auth.signOut()
}
</script>
