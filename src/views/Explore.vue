<template>
  <section class="explore">
    <h1>Explore</h1>
    <form
      class="explore__input mt-2 is-flex is-justify-content-center field has-addons has-addons-right"
      @submit.prevent="search"
    >
      <p class="control">
        <span class="select">
          <select>
            <option>Youtube</option>
            <option>Dailymotion</option>
            <option>SoundCloud</option>
            <option>Vimeo</option>
          </select>
        </span>
      </p>
      <p class="control">
        <input class="input" type="text" placeholder="Keywords..." required />
      </p>
      <p class="control">
        <a type="button" class="explore__submit button is-primary is-small">Search</a>
      </p>
    </form>
  </section>
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

<style lang="scss" scoped>
.explore {
  &__input > * {
    height: 50px;
  }

  &__submit {
    height: 1.75rem;
  }
}
</style>
