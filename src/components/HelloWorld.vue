<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="hello-world">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10%;
}

.greetings h1 {
  text-align: center;
}
</style>
