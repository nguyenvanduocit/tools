<script setup lang="ts"></script>

<template>
  <div
    class="Polaris-ShadowBevel"
    style="
      --pc-shadow-bevel-z-index: 32;
      --pc-shadow-bevel-content-xs: '';
      --pc-shadow-bevel-box-shadow-xs: var(--p-shadow-100);
      --pc-shadow-bevel-border-radius-xs: var(--p-border-radius-300);
    "
  >
    <div
      class="Polaris-Box"
      style="
        --pc-box-background: var(--p-color-bg-surface);
        --pc-box-min-height: 100%;
        --pc-box-overflow-x: hidden;
        --pc-box-overflow-y: hidden;
        --pc-box-padding-block-start-xs: var(--p-space-400);
        --pc-box-padding-block-end-xs: var(--p-space-400);
        --pc-box-padding-inline-start-xs: var(--p-space-400);
        --pc-box-padding-inline-end-xs: var(--p-space-400);
      "
    >
      <div
        class="Polaris-BlockStack"
        style="
          --pc-block-stack-order: column;
          --pc-block-stack-gap-xs: var(--p-space-200);
        "
      >
        <h2 class="Polaris-Text--root Polaris-Text--headingSm">
          <slot name="title"></slot>
        </h2>
        <div
          class="Polaris-BlockStack"
          style="
            --pc-block-stack-order: column;
            --pc-block-stack-gap-xs: var(--p-space-200);
          "
        >
          <slot></slot>
        </div>
        <div
          class="Polaris-InlineStack"
          style="--pc-inline-stack-align: end; --pc-inline-stack-wrap: wrap"
        >
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
