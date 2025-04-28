import pwaConfig from './pwa.config'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'nuxt-security',
    '@vite-pwa/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'ydApp',
      htmlAttrs: {
        lang: 'fr',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      meta: [
        { name: 'description', content: 'ydApp description' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
        { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png' },
      ],
    },
  },
  
  pwa: pwaConfig,

  $development: {
    devtools: { enabled: true },
  },
})