<script setup lang="ts">
import DeleteIcon from '@icons/DeleteIcon.svg?component'
import ChatIcon from '@icons/ChatIcon.svg?component'
import InviteIcon from '@icons/DockSideIcon.svg?component'
declare type TradeItem = {
  name: string
  item: string
  price: string
  type: 'buy' | 'sell'
}

defineProps<TradeItem>()
</script>

<template>
  <div
    class="Polaris-ButtonGroup Polaris-ButtonGroup--variantSegmented Polaris-ButtonGroup--loose"
    data-buttongroup-variant="segmented"
  >
    <div class="Polaris-ButtonGroup__Item">
      <button
        id="nextURL"
        class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText"
        aria-label="Next"
        type="button"
      >
        <span class="Polaris-Button__Icon">
          <span class="Polaris-Icon">
            <ChatIcon class="Polaris-Icon__Svg" />
          </span>
        </span>
        <span>PM</span>
      </button>
    </div>
    <div
      class="Polaris-ButtonGroup__Item Polaris-ButtonGroup--variantSegmented"
      v-if="type === 'sell'"
    >
      <button
        id="nextURL"
        class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText"
        aria-label="Next"
        type="button"
      >
        <span class="Polaris-Button__Icon">
          <span class="Polaris-Icon">
            <InviteIcon class="Polaris-Icon__Svg" />
          </span>
        </span>
        <span>Invite</span>
      </button>
    </div>
    <div class="Polaris-ButtonGroup__Item">
      <button
        id="nextURL"
        class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--toneCritical Polaris-Button--textAlignCenter Polaris-Button--iconOnly"
        aria-label="Next"
        type="button"
      >
        <span class="Polaris-Button__Icon">
          <span class="Polaris-Icon">
            <DeleteIcon class="Polaris-Icon__Svg" />
          </span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
