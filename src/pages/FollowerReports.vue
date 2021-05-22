<template>
  <q-page class="q-pa-md">
    <follower-reports-table-grid/>
  </q-page>
</template>

<script>
  import FollowerReportsTableGrid from 'src/components/report/follower_reports/FollowerReportsTableGrid';
  import { useStore } from 'src/store';
  import { onMounted,defineComponent } from 'vue';
  import userUtils from '../utils/user/user';



  export default defineComponent({
    name: 'FollowerReportsPage',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    components: { FollowerReportsTableGrid },
    setup() {
      const store =useStore()
      async function fetchFollowerOrAllForAdminReportsFromServerHelper() {
        if(userUtils.isCurrentUserAdmin()){
          await store.dispatch('report/fetchAllFollowerReports')
        }else
          await store.dispatch('report/fetchFollowerReports')
      }
      onMounted(fetchFollowerOrAllForAdminReportsFromServerHelper)
      return {}
    }
  });
</script>


