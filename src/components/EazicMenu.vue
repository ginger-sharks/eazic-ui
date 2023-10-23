<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  user?: {
    name: string
    avatar: string
  }
  isAuthenticated?: boolean
  isOpen?: boolean
  isLeftAligned?: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-menu'): void
  (e: 'open-settings'): void
  (e: 'logout'): void
  (e: 'login'): void
  (e: 'signup'): void
}>()

const isMobile = computed(() => window.innerWidth < 680)

function onToggleMenu() {
  emit('toggle-menu')
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
  <div class="eazic-user-widget" @click="onToggleMenu">
    <div
      :class="['dropdown', { 'is-up': isMobile, 'is-active': isOpen, 'is-right': !isLeftAligned }]"
    >
      <div class="dropdown-trigger is-flex">
        <img
          v-if="isAuthenticated"
          class="is-rounded"
          :src="user?.avatar"
          :alt="`${user?.name} avatar`"
        />
        <font-awesome-icon
          v-else
          :icon="['fas', 'user']"
          size="xl"
          class="navbar-link is-arrowless"
          aria-haspopup="true"
          aria-controls="user-dropdown"
        ></font-awesome-icon>
      </div>
      <div class="dropdown-menu" id="user-dropdown" role="menu">
        <div v-if="!isAuthenticated" class="dropdown-content">
          <a class="dropdown-item" @click.stop="logIn">
            <i class="fa-solid fa-right-to-bracket fa-xl mr-2"></i>
            <span class="dropdown-item__label">Log in</span>
          </a>
          <a class="dropdown-item" @click.stop="signUp">
            <i class="fa-solid fa-user-plus fa-xl mr-1"></i>
            <span class="dropdown-item__label">Sign up</span>
          </a>
        </div>
        <div v-else class="dropdown-content">
          <a class="dropdown-item" @click.stop="openSettings">
            <i class="fa-solid fa-gear fa-xl mr-1"></i>
            <span class="dropdown-item__label">Settings</span>
          </a>
          <a class="dropdown-item" @click.stop="logOut">
            <i class="fa-solid fa-right-from-bracket fa-xl mr-1"></i>
            <span class="dropdown-item__label">Logout</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base';

.eazic-user-widget {
  height: 100%;

  .dropdown {
    height: 100%;

    .dropdown-trigger {
      svg {
        color: $white;

        &:hover {
          color: $black;
          border-radius: 0 0 0.5rem 0.5rem;
        }
      }
    }

    .dropdown-menu {
      min-width: 10rem;
    }

    .dropdown-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 1rem;

      &__label {
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }

  img {
    max-height: max-content;
    object-fit: contain;
    padding: 0.5rem;
  }
}
</style>
