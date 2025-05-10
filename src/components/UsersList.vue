<template>
  <h1>{{ title }}</h1>
  <h2 v-if="loading">Loading...</h2>
  <div v-if="!loading" v-for="user in users">
    <h3>{{ user.name }}</h3>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types'
import { onMounted, ref } from 'vue'

const title = 'Users List'
const loading = ref(false)
const users = ref<User[]>([])

onMounted(fetchData)

async function fetchData() {
  loading.value = true
  const usersData = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersParsed = await usersData.json()
  users.value = usersParsed
  loading.value = false
}
</script>
