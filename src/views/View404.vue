<script setup lang="ts"></script>

<template>
  <div class="Polaris-Page">
    <div class="Polaris-Page__Content">
      <div
        class="Polaris-BlockStack"
        style="
          --pc-block-stack-inline-align: center;
          --pc-block-stack-order: column;
        "
      >
        <img
          alt=""
          src="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          class=""
          role="presentation"
        />
        <div class="Polaris-Box" style="--pc-box-max-width: 400px">
          <div
            class="Polaris-BlockStack"
            style="
              --pc-block-stack-inline-align: center;
              --pc-block-stack-order: column;
            "
          >
            <div
              class="Polaris-Box"
              style="--pc-box-padding-block-end-xs: var(--p-space-400)"
            >
              <div
                class="Polaris-Box"
                style="--pc-box-padding-block-end-xs: var(--p-space-150)"
              >
                <p
                  class="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--block Polaris-Text--center"
                >
                  404 Not Found!
                </p>
              </div>
              <span
                class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--block Polaris-Text--center"
              >
                The page you are looking for does not exist.
              </span>
            </div>
            <div
              class="Polaris-InlineStack"
              style="
                --pc-inline-stack-align: center;
                --pc-inline-stack-wrap: wrap;
                --pc-inline-stack-gap-xs: var(--p-space-200);
              "
            >
              <RouterLink
                class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
                to="/"
                data-polaris-unstyled="true"
              >
                <span class="">Back to home</span>
              </RouterLink>
              <RouterLink
                to="/help"
                class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
                type="button"
              >
                <span class="">Need help</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
