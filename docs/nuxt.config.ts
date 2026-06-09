const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://docs.alamostudio.dev'

// Pre-bundle icons used in content/navigation so they render on first client navigation.
const bundledIcons = [
  'lucide:arrow-right',
  'lucide:banknote',
  'lucide:bell',
  'lucide:boxes',
  'lucide:box',
  'lucide:brain',
  'lucide:circle-dollar-sign',
  'lucide:circle-help',
  'lucide:clipboard-check',
  'lucide:cog',
  'lucide:credit-card',
  'lucide:download',
  'lucide:file-code',
  'lucide:file-text',
  'lucide:house',
  'lucide:info',
  'lucide:languages',
  'lucide:list',
  'lucide:lock',
  'lucide:map-pin',
  'lucide:moon',
  'lucide:paintbrush',
  'lucide:palette',
  'lucide:pipette',
  'lucide:pointer',
  'lucide:rocket',
  'lucide:search',
  'lucide:server',
  'lucide:shield-check',
  'lucide:shopping-bag',
  'lucide:shopping-cart',
  'lucide:sliders-horizontal',
  'lucide:sparkles',
  'lucide:square-pen',
  'lucide:store',
  'lucide:sun',
  'lucide:swatch-book',
  'lucide:tag',
  'lucide:trash-2',
  'lucide:triangle-alert',
  'lucide:wrench',
  'lucide:zap',
  'simple-icons:discord',
  'simple-icons:x',
]

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
  icon: {
    serverBundle: 'local',
    clientBundle: {
      icons: bundledIcons,
      scan: {
        globInclude: [
          '{app,shared}/**',
          'content/**',
          '../layer/app/**',
          '../layer/modules/**',
          'node_modules/@nuxt/ui/dist/**',
        ],
      },
      includeCustomCollections: true,
      sizeLimitKb: 512,
    },
  },
})
