<script setup lang="ts">
import AppSidebar from '@src/components/AppSidebar.vue'
import {PhysicalSize, getCurrent} from '@tauri-apps/api/window'

import { onMounted } from 'vue'
import Assistant from '@src/components/Assistant.vue'
onMounted(async () => {
  await getCurrent().setMinSize(new PhysicalSize(800, 500));
})
</script>

<template>
  <AppSidebar></AppSidebar>
  <div class="Polaris-Frame__Main" :class="$style.frameMain">
    <div class="Polaris-Frame__Content">
      <RouterView />
      <Assistant />
    </div>
  </div>
</template>

<style lang="stylus">
#app
  height: 100vh
  width: 100vw
  overflow: hidden
  --c--sidebar--width: 13rem
</style>
<style lang="stylus" module>
.frameMain
  padding-left: calc(var(--c--sidebar--width) + env(safe-area-inset-left)) !important
</style>
