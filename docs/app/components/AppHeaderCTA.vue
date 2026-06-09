<script setup lang="ts">
const route = useRoute()
const { localePath } = useDocusI18n()

const isLanding = computed(() => route.path === '/' || route.path === '/en')
</script>

<template>
  <UButton
    v-if="isLanding"
    :to="localePath('/en/getting-started/introduction')"
    color="neutral"
    size="sm"
    class="hidden lg:inline-flex"
  >
    Get Started
  </UButton>
</template>
