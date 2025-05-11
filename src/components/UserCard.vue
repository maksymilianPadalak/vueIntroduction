<template>
  <div class="root">
    <h3>Name: {{ user.name }}</h3>
    <h3>Username: {{ user.username }}</h3>
    <h3>Email: {{ user.email }}</h3>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types'

defineProps<{ user: User }>()
</script>

<style scoped>
.root {
  padding: 20px;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
}
</style>
