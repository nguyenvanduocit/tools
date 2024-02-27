<script setup lang="ts">
import PreviousIcon from '@icons/ChevronLeftIcon.svg?component'
import NextIcon from '@icons/ChevronRightIcon.svg?component'
</script>

<template>
  <nav
    aria-label="Pagination"
    class="Polaris-Pagination Polaris-Pagination--table"
  >
    <div
      class="Polaris-Box"
      style="
        --pc-box-background: var(--p-color-bg-surface-secondary);
        --pc-box-padding-block-start-xs: var(--p-space-150);
        --pc-box-padding-block-end-xs: var(--p-space-150);
        --pc-box-padding-inline-start-xs: var(--p-space-300);
        --pc-box-padding-inline-end-xs: var(--p-space-200);
      "
    >
      <div
        class="Polaris-InlineStack"
        style="
          --pc-inline-stack-align: end;
          --pc-inline-stack-block-align: center;
          --pc-inline-stack-wrap: wrap;
        "
      >
        <div
          class="Polaris-ButtonGroup Polaris-ButtonGroup--variantSegmented"
          data-buttongroup-variant="segmented"
        >
          <div class="Polaris-ButtonGroup__Item">
            <button
              id="previousURL"
              class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly Polaris-Button--disabled"
              aria-label="Previous"
              aria-disabled="true"
              type="button"
              tabindex="-1"
            >
              <span class="Polaris-Button__Icon">
                <span class="Polaris-Icon">
                  <PreviousIcon class="Polaris-Icon__Svg" />
                </span>
              </span>
            </button>
          </div>
          <div class="Polaris-ButtonGroup__Item">
            <button
              id="nextURL"
              class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly"
              aria-label="Next"
              type="button"
            >
              <span class="Polaris-Button__Icon">
                <span class="Polaris-Icon">
                  <NextIcon class="Polaris-Icon__Svg" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
