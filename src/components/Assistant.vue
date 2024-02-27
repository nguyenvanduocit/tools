<script setup lang="ts">
import UserIcon from '@icons/ChatIcon.svg?component'
import RefreshIcon from '@icons/RefreshIcon.svg?component'
import { computed, ref, useCssModule } from 'vue'
import Chat from '@src/components/Chat.vue'
import FormMessage from '@src/components/FormMessage.vue'
const showChat = ref(true)
const toggleChat = () => {
  showChat.value = !showChat.value
}

const cssModule = useCssModule()

const triggerClass = computed(() => {
  const list = [cssModule.trigger]

  if (showChat.value) {
    list.push(cssModule.open)
  }

  return list
})
</script>

<template>
  <div :class="triggerClass">
    <button
      v-show="showChat"
      class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-RadioButton--toneMagic Polaris-Button--iconOnly"
      type="button"
    >
      <RefreshIcon class="Polaris-Icon__Svg" />
    </button>
    <button
      class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-RadioButton--toneMagic Polaris-Button--iconOnly"
      type="button"
    >
      <UserIcon @click.prevent="toggleChat" class="Polaris-Icon__Svg" />
    </button>
  </div>
  <div v-show="showChat" :class="$style.chatContainer">
    <Chat />
    <FormMessage />
  </div>
</template>

<style lang="stylus" module>
.trigger
  --icon-size: 35px
  position: fixed
  bottom: var(--p-space-400)
  right: var(--p-space-400)
  height: 40px
  display: grid
  place-items: center
  gap: var(--p-space-200)
  grid-template-columns: var(--icon-size)
  &.open
    grid-template-columns: var(--icon-size) var(--icon-size)

.chatContainer
  --bottom: calc(var(--p-space-400) + 45px)
  position: fixed
  bottom: var(--bottom)
  right: var(--p-space-400)
  width: 400px
  min-height: 400px
  max-height: calc(100% - var(--bottom) - var(--p-space-400))
  background-color: var(--p-color-bg-surface)
  border-radius: var(--p-border-radius-300)
  box-shadow: var(--p-shadow-100)
  border: 1px solid var(--p-color-border)
  z-index: 9999
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
