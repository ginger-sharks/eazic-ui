<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form @submit.prevent="search">
      <input type="text" placeholder="search..." v-model="keywords" />
    </form>
    <pre>
      {{ JSON.stringify(result, undefined, 2) }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@okta/okta-vue'
import { ref } from 'vue'
import axios from 'axios'

const keywords = ref<string>('')
const result = ref<any[]>([])
const errore = ref<any>()
const auth = useAuth()

async function search() {
  console.log('searching with ' + keywords.value)
  let accessToken = auth.getAccessToken()
  console.log(accessToken)
  try {
    let response = await axios.get('http://localhost:8082/youtubefree/search/' + keywords.value, {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
    result.value = response.data
    console.log(result.value)
  } catch (error) {
    errore.value = `${error}`
    console.log(errore.value)
  }
}
</script>
