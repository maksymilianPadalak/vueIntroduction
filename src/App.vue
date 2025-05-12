<script setup lang="ts">
import { provide, ref } from 'vue'
import Navigation from './components/Navigation.vue'

const test = ref('TEST')
provide('test', test)
</script>

<template>
  <header>
    <Navigation />
    <RouterView />
  </header>
</template>
