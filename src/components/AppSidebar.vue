<script setup lang="ts">
import HomeIcon from '@icons/HomeIcon.svg?component'
import HelpIcon from '@icons/QuestionCircleIcon.svg?component'
import EconomyIcon from '@icons/PriceListIcon.svg?component'
import StashesIcon from '@icons/InventoryIcon.svg?component'
import TradeIcon from '@icons/TransactionIcon.svg?component'
import SettingsIcon from '@icons/SettingsIcon.svg?component'
import MapRunIcon from '@icons/ClockIcon.svg?component'
import StrategiesIcon from '@icons/CompassIcon.svg?component'
import MenuItem from '@src/components/MenuItem.vue'
</script>

<template>
  <div aria-label="Navigation" class="Polaris-Frame__Navigation">
    <nav class="Polaris-Navigation" :class="$style.container">
      <div
        class="Polaris-Navigation__PrimaryNavigation Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--horizontal"
        data-polaris-scrollable="true"
      >
        <ul class="Polaris-Navigation__Section">
          <MenuItem to="/">
            <template #icon>
              <HomeIcon class="Polaris-Icon__Svg" />
            </template>
            <span>Home</span>
          </MenuItem>
          <MenuItem to="/stashes">
            <template #icon>
              <StashesIcon class="Polaris-Icon__Svg" />
            </template>
            <span>Stashes</span>
          </MenuItem>
          <MenuItem to="/economy">
            <template #icon>
              <EconomyIcon class="Polaris-Icon__Svg" />
            </template>
            <span>Economy</span>
          </MenuItem>
          <MenuItem to="/map-run">
            <template #icon>
              <MapRunIcon class="Polaris-Icon__Svg" />
            </template>
            <span>Map run</span>
          </MenuItem>
          <MenuItem to="/trade">
            <template #icon>
              <TradeIcon class="Polaris-Icon__Svg" />
            </template>
            <span>Trade</span>
          </MenuItem>
          <MenuItem to="/strategies">
            <template #icon>
              <StrategiesIcon class="Polaris-Icon__Svg" />
            </template>
            <span>Strategies</span>
          </MenuItem>
        </ul>
        <ul class="Polaris-Navigation__Section">
          <li class="Polaris-Navigation__SectionHeading">
            <span
              class="Polaris-Text--root Polaris-Text--headingXs Polaris-Text--subdued"
              >Resources</span
            >
          </li>
          <MenuItem to="/setting">
            <template #icon>
              <SettingsIcon class="Polaris-Icon__Svg" />
            </template>
            <span>Setting</span>
          </MenuItem>
          <MenuItem to="/about">
            <template #icon>
              <HelpIcon class="Polaris-Icon__Svg" />
            </template>
            <span>Help</span>
          </MenuItem>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style module lang="stylus">
.container
  max-width: calc(var(--c--sidebar--width) + env(safe-area-inset-left))
  min-width: var(--c--sidebar--width)
</style>
