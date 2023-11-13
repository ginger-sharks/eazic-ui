<template>
  <section class="explore">
    <form class="explore__input" @submit.prevent="search">
      <p class="control">
        <span class="select">
          <select>
            <option>Y</option>
            <option>D</option>
            <option>S</option>
            <option>V</option>
          </select>
        </span>
      </p>
      <p class="control">
        <input class="input" type="text" placeholder="Keywords..." required v-model="keywords" />
      </p>
      <p class="control">
        <a type="button" class="explore__submit button is-primary is-small" v-on:click="search()">Search</a>
      </p>
    </form>
    <section class="explore__results">
      <article
        v-for="item in results"
        :key="item.snippet.title"
        class="explore__result-item card has-addons has-addons-right"
      >
        <div class="card-image">
          <figure class="image is-5by3">
            <img :src="item.snippet.thumbnails.high?.url" :alt="item.snippet.title" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-6">{{ item.snippet.title }}</p>
              <p class="subtitle is-7">{{ item.snippet.description }}</p>
            </div>
          </div>

          <div class="content">
            <time :datetime="item.snippet.publishedAt"></time>
          </div>
        </div>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import type { YoutubeSearchResult, YoutubeSearchResultItem } from '@/models'
import { useAuth } from '@okta/okta-vue'
import { ref } from 'vue'
import axios from 'axios'

const keywords = ref<string>('')
const results = ref<YoutubeSearchResultItem[]>([])
const errore = ref<any>()
const auth = useAuth()
//search()
async function search() {
  let accessToken = auth.getAccessToken()
  try {
    let response = await axios.get<YoutubeSearchResult>(
      'http://localhost:8082/youtubefree/search?query=' + keywords.value,
      {
        headers: { Authorization: 'Bearer ' + accessToken }
      }
    )
    results.value = response.data.items
  } catch (error) {
    errore.value = `${error}`
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/base';

.explore {
  display: grid;
  grid-auto-rows: auto 1fr;

  .card-image img {
    object-fit: contain;
    background-color: black;
  }

  &__input {
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: 100%;
    max-width: 100%;
    padding: 1rem;
    margin-top: 1.5rem;

    & > * {
      height: 3.125rem;
    }
  }

  &__submit {
    height: 1.75rem;
  }

  &__results {
    display: grid;
    width: 100%;
    max-width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
    overflow: auto;

    & > *:last-child {
      margin-bottom: 5rem;
    }
  }

  @media only screen and (min-width: 48rem) {
    &__input {
      padding: 1rem 1.5rem;
    }

    &__results {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 0 1.5rem 5rem;

      & > *:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media only screen and (min-width: 64rem) {
    &__input {
      padding: 1rem 2rem;
    }
    &__results {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      padding: 0 2rem 5rem;
    }
  }
}
</style>
