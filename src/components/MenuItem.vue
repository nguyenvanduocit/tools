<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

declare type MenuItemProp = {
  to: string
}

const props = defineProps<MenuItemProp>()
const $route = useRoute()

const itemInnerWrapperClass = computed(() => {
  return $route.path === props.to
    ? 'Polaris-Navigation__ItemInnerWrapper Polaris-Navigation__ItemInnerWrapper--selected'
    : 'Polaris-Navigation__ItemInnerWrapper'
})
</script>

<template>
  <li class="Polaris-Navigation__ListItem">
    <div class="Polaris-Navigation__ItemWrapper">
      <div :class="itemInnerWrapperClass">
        <RouterLink
          :to="to"
          class="Polaris-Navigation__Item"
          active-class="Polaris-Navigation__Item--selected Polaris-Navigation--subNavigationActive"
          tabindex="0"
          data-polaris-unstyled="true"
        >
          <div class="Polaris-Navigation__Icon">
            <span class="Polaris-Icon">
              <span
                class="Polaris-Text--root Polaris-Text--visuallyHidden"
              ></span>
              <slot name="icon"> </slot>
            </span>
          </div>
          <span class="Polaris-Navigation__Text">
            <slot></slot>
          </span>
        </RouterLink>
      </div>
    </div>
  </li>
</template>

<style scoped></style>
