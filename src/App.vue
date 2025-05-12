<script setup lang="ts">
import { provide, ref, type Ref } from 'vue'
import Navigation from './components/Navigation.vue'

const welcomeTitle = ref('WELCOME TO MY APP')
const updateWelcomeTitle = (string: string) => (welcomeTitle.value = string)

provide<{ welcomeTitle: Ref<string, string>; updateWelcomeTitle: (string: string) => void }>(
  'welcomeTitleObject',
  {
    welcomeTitle,
    updateWelcomeTitle,
  },
)
</script>

<template>
  <header>
    <Navigation />
    <RouterView />
  </header>
</template>
