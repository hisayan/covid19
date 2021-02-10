<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('陽性患者の属性')"
      :title-id="'attributes-of-confirmed-cases'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="Data.patients.date"
      :info="sumInfoOfPatients"
      :url="'https://www.pref.nagano.lg.jp/joho/kensei/tokei/johoka/opendata/'"
    />
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import Data from '@/data/data.json'
import formatTable from '@/utils/formatTable'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable
  },
  data() {
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)
    const dateAsOf = dayjs(Data.patients.date).format('YYYY/MM/DD')

    const sumInfoOfPatients = {
      lText: patientsTable.datasets.length.toLocaleString(),
      sText: this.$t('{date}の累計', {
        date: dateAsOf
      }),
      unit: this.$t('人')
    }

    // 陽性患者の属性 ヘッダー翻訳
    for (const header of patientsTable.headers) {
      header.text =
        header.value === '退院' ? this.$t('退院※') : this.$t(header.value)
    }
    // 陽性患者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      row['居住地'] = this.$t(row['居住地'])
      row['性別'] = this.$t(row['性別'])

      if (row['年代'].substr(-1, 1) === '代') {
        const age = row['年代'].substr(0, 2)
        row['年代'] = this.$t('{age}代', { age })
      } else {
        row['年代'] = this.$t(row['年代'])
      }
    }

    // 陽性患者の属性をソートする
    patientsTable.datasets.sort(function(a, b) {
      if (a['確定日'] > b['確定日']) return -1
      if (a['確定日'] < b['確定日']) return 1
      return 0
    })

    const data = {
      Data,
      patientsTable,
      sumInfoOfPatients
    }
    return data
  }
}
</script>
