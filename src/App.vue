<script setup lang="ts">
import EazicBar from '@/components/EazicBar.vue'
import { useAuth } from '@okta/okta-vue'
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

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

<template>
  <!--  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Hello world" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>-->
  <div class="eazic-app">
    <div class="router-view">
      <RouterView />
    </div>
    <EazicBar />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base';
.eazic-app {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 1fr auto;

  .eazic-bar {
    grid-row: 0;
  }

  .router-view {
    background-color: $black;
    color: $white;
  }

  @media only screen and (min-width: 42.5rem) {
    grid-template-rows: auto 1fr;

    .eazic-bar {
      grid-row: 1;
    }
  }
}
</style>
