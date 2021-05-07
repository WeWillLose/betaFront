<template>
<q-page class="q-pa-md">
  <report-stepper/>
</q-page>
</template>

<script lang="ts">
  import ReportStepper from 'src/components/report/create_report/report_stepper/ReportStepper.vue';
  import { useQuasar } from 'quasar'
  import { useStore } from 'src/store'
  import reportUtils from 'src/utils/report/ReportUtils';
  import {defineComponent} from 'vue'
  export default defineComponent({
    name: 'CreateReportPage',
    components:{ReportStepper},
    setup(){
      const q = useQuasar()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      function showDialog():void{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        q.dialog({
          message:'Хоите сбросить данные',
          cancel:true,
          ok:true
        }).onOk(()=>reportUtils.setDefaultReportTablesData())
      }
      showDialog()
      return {}
    }
  });
</script>


