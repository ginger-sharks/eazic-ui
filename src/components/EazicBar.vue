<script setup lang="ts">
import EazicMenu from '@/components/EazicMenu.vue'
import { ref } from 'vue'

defineProps<{
  showPlayer?: boolean
  authenticated?: boolean
}>()

const emit = defineEmits<{
  (e: 'open-settings'): void
  (e: 'logout'): void
  (e: 'login'): void
  (e: 'signup'): void
}>()

const userMenuOpen = ref<boolean>(false)

function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value
}

function openSettings() {
  emit('open-settings')
}

function logOut() {
  emit('logout')
}

function logIn() {
  emit('login')
}

function signUp() {
  emit('signup')
}
</script>

<template>
  <div class="eazic-bar">
    <div class="eazic-bar__brand">
      <img src="@/assets/logo.gif" alt="eazic logo" />
      <h1><RouterLink to="/">EAZIC</RouterLink></h1>
    </div>
    <div class="eazic-bar__player">player</div>
    <nav class="eazic-bar__navigation">
      <div>
        <RouterLink to="explore">
          <font-awesome-icon :icon="['fas', 'search']" size="xl"></font-awesome-icon>
          <span class="is-hidden-mobile">Explore</span>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="explore">
          <font-awesome-icon :icon="['fas', 'circle-play']" size="xl"></font-awesome-icon>
          <span class="is-hidden-mobile">Player</span>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="explore">
          <font-awesome-icon :icon="['fas', 'rectangle-list']" size="xl"></font-awesome-icon>
          <span class="is-hidden-mobile">Playlist</span>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="explore">
          <font-awesome-icon :icon="['fas', 'users-rectangle']" size="xl"></font-awesome-icon>
          <span class="is-hidden-mobile">Salon</span>
        </RouterLink>
      </div>
    </nav>
    <div class="eazic-bar__user">
      <eazic-menu
        :is-open="userMenuOpen"
        :is-authenticated="authenticated"
        @toggle-menu="toggleUserMenu"
        @signup="signUp"
        @login="logIn"
        @logout="logOut"
        @open-settings="openSettings"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base';

.eazic-bar {
  width: 100%;
  height: 4rem;
  color: $white;
  background-color: $black;
  overflow: visible;
  display: grid;
  grid-template-columns: 3.1rem 1fr 3.1rem;
  padding: 0 0.5rem;
  text-align: center;

  &__brand {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      height: 2rem;
    }

    h1 {
      margin: 0;
      font-size: 1rem;
    }
  }

  &__player {
    display: none;
  }

  &__navigation {
    display: grid;
    padding: 0 0.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.2rem;
    align-items: center;
    font-size: calc(1rem);

    div {
      cursor: pointer;
      height: 4rem;
      line-height: 4rem;
      text-align: center;
      background-color: $black;
      transition: all 300ms ease;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        height: 100%;
      }

      &:hover {
        background-color: $white;
        font-size: calc(1rem + 1vw);

        a {
          color: $black;
        }
      }

      &:nth-child(1) {
        border-top: 0.3rem solid $yellow;
      }

      &:nth-child(2) {
        border-top: 0.3rem solid $red;
      }

      &:nth-child(3) {
        border-top: 0.3rem solid $green;
      }

      &:nth-child(4) {
        border-top: 0.3rem solid $blue;
      }
    }
  }

  &__user {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: $white;
    }
  }

  @media only screen and (min-width: 48rem) {
    grid-template-columns: auto 1fr 3.1rem;

    &__brand {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;

      img {
        height: 3.5rem;
      }

      h1 {
        font-size: 2rem;
      }
    }

    &__navigation {
      div {
        &:nth-child(1) {
          border-top: none;
          border-bottom: 0.3rem solid $yellow;
        }

        &:nth-child(2) {
          border-top: none;
          border-bottom: 0.3rem solid $red;
        }

        &:nth-child(3) {
          border-top: none;
          border-bottom: 0.3rem solid $green;
        }

        &:nth-child(4) {
          border-top: none;
          border-bottom: 0.3rem solid $blue;
        }
      }
    }
  }

  @media only screen and (min-width: 64rem) {
    &__brand {
      gap: 0.3rem;

      img {
        height: 4rem;
      }

      h1 {
        font-size: 2.5rem;
      }
    }

    &__navigation {
      padding: 0 1rem;

      div {
        font-size: calc(1rem + 0.5rem);

        &:hover {
          font-size: calc(1rem + 1vw);
        }
      }
    }
  }
}
</style>
