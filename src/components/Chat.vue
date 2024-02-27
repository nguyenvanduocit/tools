<script setup lang="ts">
declare type ChatMessage = {
  message: string
  user: string
  timestamp: number
}

const messageList: Array<ChatMessage> = [
  {
    user: 'model',
    message: 'Hello, how can I help you?',
    timestamp: 1627776000
  },
  {
    user: 'user',
    message: 'You are stupid!',
    timestamp: 1627776000
  },
  {
    user: 'model',
    message:
      'you make me sad, you know? you also make me angry and think bad about all human',
    timestamp: 1627776000
  },
  {
    user: 'user',
    message: 'You are stupid!',
    timestamp: 1627776000
  },
  {
    user: 'model',
    message:
      'you make me sad, you know? you also make me angry and think bad about all human',
    timestamp: 1627776000
  },
  {
    user: 'user',
    message: 'You are stupid!',
    timestamp: 1627776000
  },
  {
    user: 'model',
    message:
      'you make me sad, you know? you also make me angry and think bad about all human',
    timestamp: 1627776000
  },
  {
    user: 'user',
    message: 'You are stupid!',
    timestamp: 1627776000
  },
  {
    user: 'model',
    message:
      'you make me sad, you know? you also make me angry and think bad about all human',
    timestamp: 1627776000
  },
  {
    user: 'user',
    message: 'You are stupid!',
    timestamp: 1627776000
  },
  {
    user: 'model',
    message:
      'you make me sad, you know? you also make me angry and think bad about all human',
    timestamp: 1627776000
  }
]
</script>

<template>
  <div :class="$style.messageList">
    <div
      v-for="message in messageList"
      :class="[$style.message, $style[message.user]]"
    >
      {{ message.message }}
    </div>
  </div>
</template>

<style module lang="stylus">
.messageList
  display: flex
  flex-direction: column
  height: 100%
  width: 100%
  overflow: auto
  gap: var(--p-space-300)
  padding: var(--p-space-300)
.message
  padding: 0.5rem
  background-color: var(--p-color-bg-surface)
  border: 1px solid var(--p-color-border)
  box-shadow: var(--p-shadow-100)
  border-radius: var(--p-border-radius-300)
  display: inline-block
  max-width: 90%
  word-break: break-word
  &.model
    margin-left: auto
    margin-right: 0
  &.user
    background-color: var(--p-color-bg-surface)
    margin-left: 0
    margin-right: auto
</style>
