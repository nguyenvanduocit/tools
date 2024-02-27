<script setup lang="ts">
import AppPage from '@src/components/AppPage.vue'
import { ref } from 'vue'
import TablePaginate from '@src/components/TablePaginate.vue'
import TradeTableActions from '@src/components/TradeTableActions.vue'

const tableData = ref([
  {
    name: 'pizzahotxd',
    item: 'Solaris Circlet',
    price: '30c',
    type: 'sell'
  },
  {
    name: 'Sategojug',
    item: 'The Aylardex',
    price: '10c',
    type: 'buy'
  },
  {
    name: 'RandomAfflictionSorcaCD',
    item: 'Prismatic Burst Support',
    price: '90c',
    type: 'sell'
  }
])
</script>

<template>
  <AppPage>
    <div class="Polaris-LegacyCard">
      <div class="Polaris-DataTable Polaris-DataTable__ShowTotals">
        <div class="Polaris-DataTable__ScrollContainer">
          <table class="Polaris-DataTable__Table">
            <thead>
              <tr>
                <th
                  data-polaris-header-cell="true"
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header"
                  scope="col"
                >
                  User
                </th>
                <th
                  data-polaris-header-cell="true"
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric"
                  scope="col"
                >
                  Item
                </th>

                <th
                  data-polaris-header-cell="true"
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric"
                  scope="col"
                >
                  Price
                </th>
                <th
                  data-polaris-header-cell="true"
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric"
                  scope="col"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable"
                v-for="(row, index) in tableData"
                :key="index"
              >
                <th
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
                  scope="row"
                >
                  {{ row.name }}
                </th>
                <td
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric"
                >
                  {{ row.item }}
                </td>
                <td
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric"
                >
                  {{ row.price }}
                </td>
                <td
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric"
                >
                  <TradeTableActions
                    :item="row.item"
                    :price="row.price"
                    :type="row.type"
                    :name="row.name"
                  ></TradeTableActions>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <TablePaginate></TablePaginate>
      </div>
    </div>
  </AppPage>
</template>

<style scoped></style>
