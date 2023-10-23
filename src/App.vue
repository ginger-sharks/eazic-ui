<template>
  <div class="eazic-app">
    <div class="router-view">
      <RouterView />
    </div>
    <EazicBar
      :authenticated="authenticated"
      @logout="logout"
      @open-settings="openSettings"
      @login="login"
      @signup="login"
    />
  </div>
</template>

<script lang="ts" setup>
import EazicBar from '@/components/EazicBar.vue'
import { useAuth } from '@okta/okta-vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const authenticated = ref<boolean>(false)
const auth = useAuth()
const router = useRouter()

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

async function login() {
  await router.push('/login')
}

async function openSettings() {
  await router.push('/profile')
}
</script>

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
