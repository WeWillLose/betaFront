<template>
  <q-page class="q-pa-md">
    <follower-reports-table-grid/>
  </q-page>
</template>

<script>
  import FollowerReportsTableGrid from 'src/components/report/follower_reports/FollowerReportsTableGrid';
  import { useStore } from 'src/store';
  import { onMounted,defineComponent } from 'vue';



  export default defineComponent({
    name: 'FollowerReportsPage',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    components: { FollowerReportsTableGrid },
    setup() {
      const store =useStore()
      async function fetchFollowerReportsFromServerHelper() {
        await store.dispatch('report/fetchFollowerReports')
      }
      onMounted(fetchFollowerReportsFromServerHelper)
      return {}
    }
  });
</script>


