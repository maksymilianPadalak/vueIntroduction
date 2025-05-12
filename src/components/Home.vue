<template>
  <div class="root">
    <h1>
      {{ welcomeTitleObject?.welcomeTitle }}
    </h1>
    <h2>Count from Pinia: {{ count }}</h2>
    <h3>Double count from Pinia: {{ doubleCount }}</h3>
    <button
      @click="
        () => {
          welcomeTitleObject?.updateWelcomeTitle(
            welcomeTitleObject?.welcomeTitle.value === 'New Welcome Title!'
              ? 'Old Welcome Title!'
              : 'New Welcome Title!',
          )
        }
      "
    >
      Change the title using provide inject syntax
    </button>
    <button @click="increment">Increment the Pinia store's count</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/useAuthenticationStore'
import type { WelcomeTitleObject } from '@/types'

const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store

const welcomeTitleObject: WelcomeTitleObject | undefined = inject('welcomeTitleObject')
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

button {
  padding: 10px;
  font-size: 20px;
  background-color: pink;
  border-radius: 40px;
}
</style>
