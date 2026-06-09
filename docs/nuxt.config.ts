const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://docs.alamostudio.dev'

export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n'],
  devtools: { enabled: false },
  site: {
    name: 'Alamo Studio',
    url: siteUrl,
  },
  nitro: {
    preset: 'node-server',
  },
  mdc: {
    highlight: {
      shikiEngine: 'javascript',
    },
  },
  routeRules: {
    '/': { redirect: '/en' },
  },
  compatibilityDate: '2025-07-18',
  vite: {
    build: {
      sourcemap: false,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }],
  },
  llms: {
    domain: siteUrl,
    title: 'Alamo Studio',
    description: 'Official documentation for Alamo Studio FiveM scripts.',
    full: {
      title: 'Alamo Studio',
      description: 'Official documentation for Alamo Studio FiveM scripts.',
    },
  },
  mcp: {
    name: 'Alamo Studio documentation',
    browserRedirect: '/en/getting-started/introduction',
  },
})
