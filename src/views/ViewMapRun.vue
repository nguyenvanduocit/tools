<script setup lang="ts">
import AppPage from '@src/components/AppPage.vue'
import { ref } from 'vue'
import TablePaginate from '@src/components/TablePaginate.vue'

const tableData = ref([
  {
    name: 'Beach Map', // Replace with a map name from Path of Exile
    duration: '00:12',
    dies: '1'
  },
  {
    name: 'Desert Map', // Replace with a map name from Path of Exile
    duration: '05:21',
    dies: '3'
  },
  {
    name: 'Dungeon Map', // Replace with a map name from Path of Exile
    duration: '05:89',
    dies: '0'
  }
  // Add more data as needed
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
                  Map's name
                </th>
                <th
                  data-polaris-header-cell="true"
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric"
                  scope="col"
                >
                  Duration
                </th>

                <th
                  data-polaris-header-cell="true"
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric"
                  scope="col"
                >
                  Dies
                </th>
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
                  {{ row.duration }}
                </td>
                <td
                  class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric"
                >
                  {{ row.dies }}
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
