<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800">
      <div class="p-8 bg-white shadow-lg rounded-lg max-w-md w-full text-center">
        
        <NuxtImg src="/favicon.svg" alt="Logo YDA" class="mx-auto mb-4 w-24 h-24 border-none" />
        
        <h1 class="text-3xl font-bold mb-2">Bienvenue</h1>
        <p class="text-gray-600 mb-6">Votre application Nuxt 3 Progressive Web App est en place !</p>

        <ClientOnly>
          PWA Installed: {{ $pwa?.isPWAInstalled }}
        </ClientOnly>

      </div>
    </div>
</template>
