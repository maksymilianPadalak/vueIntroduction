<template>{{ test }}</template>

<script setup lang="ts">
import { inject } from 'vue'

const test = inject('test')
</script>
