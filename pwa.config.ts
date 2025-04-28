// pwa.config.ts
import type { PwaModuleOptions } from '@vite-pwa/nuxt'
import process from 'node:process'

const sw = process.env.SW === 'true'

const pwaConfig: PwaModuleOptions = {
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'service-worker' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
    registerWebManifestInRouteRules : true,
    manifest: {
        name: 'ydA-pp',
        short_name: 'ydA-pp',
        description: 'Progressive Web App for ydA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        lang: 'fr',
        icons: [
            { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
            { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
    },

    workbox: {
        cleanupOutdatedCaches: true,
        navigateFallback: '/offline.html',
        globPatterns: ['**/*.{js,css,html,png,svg,ico,map}'],
        /*runtimeCaching: [
            {
                // Pour toute requête HTML (mode navigation), essaye d'abord le réseau
                urlPattern: ({ request }) => request.mode === 'navigate',
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'html-navigation-cache',
                    networkTimeoutSeconds: 5,  // au-delà, on tombe en fallback   
                },
            },
            {
                urlPattern: /^https:\/\/.+\/api\//,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'api-cache',
                    expiration: {
                        maxEntries: 50,
                        maxAgeSeconds: 24 * 60 * 60,
                    },
                },
            },
            {
                urlPattern: /^https:\/\/(fonts|use)\.gstatic\.com\//,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'google-fonts-cache',
                    expiration: {
                        maxEntries: 20,
                        maxAgeSeconds: 30 * 24 * 60 * 60,
                    },
                },
            },
            //   {
            //     urlPattern: /^http.*\.css/,
            //     handler: 'CacheFirst',
            //     options: {
            //       cacheName: 'css-cache',
            //       expiration: {
            //         maxEntries: 20,
            //         maxAgeSeconds: 30 * 24 * 60 * 60,
            //       },
            //     },
            //   },
        ],*/
    },
    injectManifest: {
        // injectionPoint: undefined,
        globPatterns: ['**/*.{js,css,html,png,svg,ico,map}'],
    },
    client: {
        installPrompt: true,
        // you don't need to include this: only for testing purposes
        // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
        periodicSyncForUpdates: 20,
    },
    devOptions: {
        enabled: true,
        suppressWarnings: true,
        // navigateFallback: '/',
        // navigateFallbackAllowlist: [/^\/$/],
        navigateFallback: '/offline.html',  // servez explicitement votre offline.html
        // enlevez le allowlist pour que ça s’applique à toutes les routes
        navigateFallbackAllowlist: undefined,
        // type: 'module',
    },
}

export default pwaConfig
