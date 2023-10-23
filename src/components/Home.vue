<template>
  <div id="home">
    <h1>Okta Single-Page App Demo</h1>
    <div v-if="isAuthenticated">
      <p>
        How much caffeine has your developer had today?
        <router-link role="button" to="/login">Log in to find out!</router-link>
      </p>
    </div>

    <div v-if="isAuthenticated">
      <p v-if="claims">Welcome, {{ claims }}!</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CustomUserClaims, UserClaims } from '@okta/okta-auth-js'
import { useAuth } from '@okta/okta-vue'
import { onMounted, ref } from 'vue'

const claims = ref<UserClaims<CustomUserClaims>>()
const isAuthenticated = ref<boolean>()
const auth = useAuth()

onMounted(async () => {
  isAuthenticated.value = await auth.isAuthenticated()
  if (isAuthenticated.value) {
    claims.value = await auth.getUser()
    let accessToken = auth.getAccessToken()
    console.log(`Authorization: Bearer ${accessToken}`)
  }
})
</script>
