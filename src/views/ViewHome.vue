<script setup lang="ts"></script>

<template>
  <div class="Polaris-Page Polaris-Page--fullWidth">
    <div class="Polaris-Page__Content">
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
          <div class="Polaris-SettingAction">
            <div class="Polaris-SettingAction__Setting">
              <div
                class="Polaris-InlineStack"
                style="
                  --pc-inline-stack-wrap: wrap;
                  --pc-inline-stack-gap-xs: var(--p-space-400);
                "
              >
                <div
                  class="Polaris-BlockStack"
                  style="
                    --pc-block-stack-order: column;
                    --pc-block-stack-gap-xs: var(--p-space-100);
                  "
                >
                  <h2 class="Polaris-Text--root Polaris-Text--headingSm">
                    Example App
                  </h2>
                  <span class="Polaris-Text--root Polaris-Text--subdued"
                    >No account connected</span
                  >
                </div>
              </div>
            </div>
            <div class="Polaris-SettingAction__Action">
              <button
                class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
                type="button"
              >
                <span class="">Connect</span>
              </button>
            </div>
          </div>
          <div
            class="Polaris-Box"
            style="--pc-box-padding-block-start-xs: var(--p-space-400)"
          >
            <p>
              By clicking <strong>Connect</strong>, you agree to accept Sample
              App’s<!-- -->
              <a
                class="Polaris-Link"
                href="Example App"
                data-polaris-unstyled="true"
                >terms and conditions</a
              >. You’ll pay a commission rate of 15% on sales made through
              Sample App.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
