// ~/composables/usePWAInstall.client.ts
import { ref, onMounted } from 'vue'

export function usePWAInstall() {
  const deferredPrompt = ref<Event | null>(null)

  onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault()
      deferredPrompt.value = e
    })
  })

  async function install() {
    if (!deferredPrompt.value) {
      window.alert('Installation PWA non disponible pour l’instant.')
      return
    }
    // @ts-expect-error userChoice n’est pas typé
    deferredPrompt.value.prompt()
    // @ts-expect-error idem
    const { outcome } = await deferredPrompt.value.userChoice
    if (outcome === 'accepted') {
      console.log('PWA installée')
    }
    deferredPrompt.value = null
  }

  return { install }
}
