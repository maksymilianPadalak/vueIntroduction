<template>
  <div class="root">
    <h1>{{ title }}</h1>
    <input v-model="searchQueryUser" placeholder="Serach for user" class="input" />
    <h2 v-if="loading">Loading...</h2>
    <div class="userCardWrapper" v-if="!loading" v-for="user in displayedUsers">
      <UserCard :user class="userCard" />
    </div>
    <h2 v-if="displayedUsers.length == 0">No user's name match the search query</h2>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types'
import { onMounted, ref, watch } from 'vue'
import UserCard from './UserCard.vue'

const title = 'Users List'
const loading = ref(false)
const displayedUsers = ref<User[]>([])
let users: User[] = []

onMounted(fetchData)

async function fetchData() {
  loading.value = true
  try {
    const usersData = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersParsed = await usersData.json()
    users = usersParsed
    displayedUsers.value = users
  } catch (error) {
    console.error
  } finally {
    loading.value = false
  }
}

const searchQueryUser = ref('')

watch(searchQueryUser, () => {
  displayedUsers.value = users.filter((user) => {
    return user.name.toUpperCase().includes(searchQueryUser.value.toUpperCase())
  })
})
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userCard {
  margin: 20px;
}

.userCardWrapper {
  width: 100%;
}

.input {
  font-size: 20px;
}
</style>
