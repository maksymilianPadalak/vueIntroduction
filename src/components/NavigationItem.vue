<template>
  <button
    class="root"
    @click="router.push(url)"
    @keydown="
      (e) => {
        onKeyDown(e.key, id)
      }
    "
  >
    <h1>{{ title }}</h1>
  </button>
</template>

<script setup lang="ts">
import type { NavigationItem } from '../types'
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps<NavigationItem>()
</script>

<style scoped>
.root {
  margin: 20px;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
}
</style>
