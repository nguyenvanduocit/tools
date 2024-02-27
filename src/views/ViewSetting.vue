<script setup lang="ts">
import AppPage from '@src/components/AppPage.vue'
import AppCard from '@src/components/AppCard.vue'
</script>

<template>
  <AppPage>
    <AppCard>
      <template #title>Client credentials</template>
      <form method="post">
        <div
          class="Polaris-BlockStack"
          style="
            --pc-block-stack-order: column;
            --pc-block-stack-gap-xs: var(--p-space-400);
          "
        >
          <div class="Polaris-FormLayout__Item Polaris-FormLayout--grouped">
            <div class="Polaris-Labelled__LabelWrapper">
              <div class="Polaris-Label">
                <label class="Polaris-Label__Text">POESESSID</label>
              </div>
            </div>
            <div class="Polaris-Connected">
              <div
                class="Polaris-Connected__Item Polaris-Connected__Item--primary"
              >
                <div class="Polaris-TextField">
                  <input class="Polaris-TextField__Input" type="password" />
                  <div class="Polaris-TextField__Backdrop"></div>
                </div>
              </div>
            </div>
            <div class="Polaris-Labelled__HelpText">
              <span
                class="Polaris-Text--root Polaris-Text--break Polaris-Text--subdued"
              >
                <span
                  >We do not submit your token to any server outside your
                  computer</span
                >
              </span>
            </div>
          </div>

          <div class="Polaris-FormLayout__Item Polaris-FormLayout--grouped">
            <div class="Polaris-Labelled__LabelWrapper">
              <div class="Polaris-Label">
                <label class="Polaris-Label__Text">Path to client.txt</label>
              </div>
            </div>
            <div class="Polaris-Connected">
              <div
                class="Polaris-Connected__Item Polaris-Connected__Item--primary"
              >
                <div class="Polaris-TextField">
                  <input
                    class="Polaris-TextField__Input Polaris-TextField__Input--hasClearButton"
                    type="text"
                    readonly
                  />
                  <div class="Polaris-TextField__Backdrop"></div>
                </div>
              </div>
            </div>
            <div class="Polaris-Labelled__HelpText">
              <span
                class="Polaris-Text--root Polaris-Text--break Polaris-Text--subdued"
              >
                <span
                  >This file can be found under your game installation
                  path</span
                >
              </span>
            </div>
          </div>
        </div>
      </form>
      <template #actions>
        <div class="Polaris-ButtonGroup">
          <div class="Polaris-ButtonGroup__Item">
            <button
              class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
              type="button"
            >
              <span class="">Save settings</span>
            </button>
          </div>
        </div>
      </template>
    </AppCard>
  </AppPage>
</template>

<style scoped></style>
