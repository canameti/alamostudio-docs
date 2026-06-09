<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, isEnabled } = useDocusI18n()

const collectionName = computed(() => isEnabled.value ? `landing_${locale.value}` : 'landing')

const contentPath = computed(() => {
  if (route.path === '/') {
    return '/en'
  }
  return route.path
})

const { data: page } = await useAsyncData(
  () => `landing:${contentPath.value}`,
  () => queryCollection(collectionName.value as keyof Collections).path(contentPath.value).first(),
  { watch: [contentPath] },
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeo({
  title,
  description,
  type: 'website',
  ogImage: page.value?.seo?.ogImage as string | undefined,
})

if (!page.value?.seo?.ogImage) {
  defineOgImage('Landing', {
    title: title?.slice(0, 60),
    description: formatOgDescription(title, description),
  })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :key="contentPath"
  />
</template>
