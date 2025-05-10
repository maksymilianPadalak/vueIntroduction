<template>
  <div
    @click="isNavigationOpened = !isNavigationOpened"
    :class="isNavigationOpened && 'visibleOverlay'"
  />

  <div class="root">
    <div class="mobileMenuTriggerWrapper">
      <button
        class="mobileMenuTrigger"
        @click="isNavigationOpened = !isNavigationOpened"
        @keydown="
          (e: KeyboardEvent) => {
            if (e.key == 'Enter') {
              isNavigationOpened = true

              nextTick(() => {
                if (items?.length) {
                  const firstItem = items[0] as ComponentPublicInstance
                  const element = firstItem.$el as HTMLElement
                  element.focus()
                }
              })
            }
          }
        "
        ref="triggerElement"
      >
        <i class="material-icons icon">{{ isNavigationOpened ? 'close' : 'menu' }}</i>
      </button>
    </div>

    <NavigationItem
      :class="isNavigationOpened ? 'visibleContentOnMobile' : 'hiddenContentOnMobile'"
      v-for="(item, index) in navItems"
      :key="index"
      :title="item.title"
      :url="item.url"
      ref="items"
      :id="index"
      :onKeyDown="
        (key, id) => {
          if (items?.length) {
            if (key === 'ArrowDown') {
              const nextItem = items[id + 1 >= items.length ? 0 : id + 1] as ComponentPublicInstance
              ;(nextItem.$el as HTMLElement).focus()
            }

            if (key === 'ArrowUp') {
              const nextItem = items[
                id - 1 < 0 ? items.length - 1 : id - 1
              ] as ComponentPublicInstance
              ;(nextItem.$el as HTMLElement).focus()
            }

            if (key === 'Escape') {
              isNavigationOpened = false
              triggerElement?.focus()
            }
          }
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, watch, watchEffect, nextTick } from 'vue'
import NavigationItem from './NavigationItem.vue'
import { useRoute } from 'vue-router'
import type { ComponentPublicInstance } from 'vue'

const route = useRoute()

const items = useTemplateRef<ComponentPublicInstance[]>('items')
const triggerElement = useTemplateRef('triggerElement')

watch(route, () => {
  isNavigationOpened.value = false
})

const isNavigationOpened = ref(false)

const navItems: { title: string; url: string }[] = [
  { title: 'Home', url: '/' },
  { title: 'Users', url: '/users' },
  { title: 'Pricing', url: '/pricing' },
]
</script>

<style scoped>
.visibleOverlay {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background-color: white;
  opacity: 80%;
}

.root {
  --desktop-breakpoint: 1000px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
  }

  background-color: aquamarine;
}

.hiddenContentOnMobile {
  display: none;

  @media screen and (min-width: 1000px) {
    display: flex;
  }
}

.mobileMenuTrigger {
  background: transparent;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
}

.mobileMenuTriggerWrapper {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  border-bottom: 3px solid black;

  @media screen and (min-width: 1000px) {
    display: none;
  }
}

.visibleContentOnMobile {
  display: flex;
}

.icon {
  font-size: 40px;
}
</style>
