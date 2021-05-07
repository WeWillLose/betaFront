<template>
  <q-page class="q-pa-md">
    <report-table-grid/>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, onMounted} from 'vue';
  import { useStore} from 'src/store';
  import ReportTableGrid from 'components/report/my_reports/ReportTableGrid.vue'

  export default defineComponent({
    name: 'MyReportsPage',
    components: {
      ReportTableGrid
    },
    setup() {
      const store = useStore()
      async function fetchReportsFromServerHelper() {
        await store.dispatch('report/fetchReports')
      }
      onMounted(fetchReportsFromServerHelper)
      return {}
    }
  })
</script>


