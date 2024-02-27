<script setup lang="ts"></script>

<template>
  <div :class="$style.form">
    <div class="Polaris-TextField">
      <input
        class="Polaris-TextField__Input Polaris-TextField__Input--hasClearButton"
        type="text"
      />
      <div class="Polaris-TextField__Backdrop"></div>
    </div>
  </div>
</template>

<style module lang="stylus">
.form
  padding: var(--p-space-300)
  border-top: 1px solid var(--p-color-border)
</style>
