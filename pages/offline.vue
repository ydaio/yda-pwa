<!-- pages/offline.vue -->

<template>
    <div class="offline">
      <h1>🚫 Vous êtes hors-ligne</h1>
      <p>Pas d'inquiétude, reconnectez-vous et tout reviendra !</p>
      <button
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      @click="tryReconnect"
    >
      Réessayer maintenant
    </button>
    </div>
  </template>
  
  <script setup lang="ts">
    // import { onMounted, onBeforeUnmount } from 'vue'
    // import { useRouter } from 'vue-router'

    // definePageMeta({
    //   layout: 'authentication',
    // })

    // const router = useRouter()

    // Si on est déjà en ligne au chargement de la page offline,
    // on renvoie immédiatement vers la home
    // if (navigator.onLine) {
    //   router.replace('/')
    // }

    // Fonction manuelle avec le bouton « Réessayer maintenant »
    // function tryReconnect() {
    //   console.log('[offline] tryReconnect called, online:', navigator.onLine)
    //   if (navigator.onLine) {
    //     console.warn('AAAAA')
    //     router.replace('/') // redirige vers la home
    //   } else {
    //     alert('Toujours hors-ligne ! Vérifiez votre connexion.')
    //   }
    // }

    // tryReconnect()

  //   onMounted(() => {
  //       // Si on est déjà en ligne **au moment où le composant est monté**, on redirige.
  //       if (navigator.onLine) {
  //         router.replace('/')
  //         return
  //       }
  //       // Sinon on reste sur /offline et on écoute le prochain 'online'
  //       window.addEventListener('online', handleOnline)
  //   })

  //   onBeforeUnmount(() => {
  //     window.removeEventListener('online', () => {
  //       router.replace('/')
  //     })
  //   })
  </script>
  
  <style scoped>
  .offline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background: #f0f0f0;
    color: #333;
    /* max-width: 400px; */
    margin: 0 auto;
  }
  </style>
  