<script setup lang="ts">
const appConfig = useAppConfig()
const { hasLogo, headerLightUrl, headerDarkUrl, contextMenuItems } = useLogoAssets()
</script>

<template>
  <UContextMenu
    v-if="hasLogo"
    :items="contextMenuItems"
  >
    <UColorModeImage
      :light="headerLightUrl"
      :dark="headerDarkUrl"
      :alt="appConfig.header?.logo?.alt || appConfig.header?.title"
      :class="appConfig.header?.logo?.class || 'h-9 w-auto shrink-0'"
    />
  </UContextMenu>
  <span v-else>
    {{ appConfig.header?.title || '{appConfig.header.title}' }}
  </span>
</template>
