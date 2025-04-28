<script setup lang="ts">
  const { install: installPWA } = usePWAInstall()
  const pwa = usePWA()
</script>

<template>
    <div class="layout">
      <p>Authentication layout</p>
      <slot />
    </div>
</template>
  