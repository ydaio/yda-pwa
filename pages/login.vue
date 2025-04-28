<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800">
      <div class="p-8 bg-white shadow-lg rounded-lg max-w-md w-full text-center">
        
        <NuxtImg src="/favicon.svg" alt="Logo YDA" class="mx-auto mb-4 w-24 h-24 border-none" />
        
        <h1 class="text-3xl font-bold mb-2">L'application en ligne 🚀</h1>
        <p class="text-gray-600 mb-6">Veuillez vous identifier pour accéder à l'application.</p>
  
        <div class="flex flex-col gap-4">
          <button class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition" @click="installPWA">
            📲 Installer l'application
          </button>
  
          <button class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition">
            🔑 Se connecter
          </button>
        </div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
definePageMeta({
  layout: 'authentication'
})
</script>
