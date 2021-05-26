<template>
<q-page class="q-pa-md">
  <report-stepper/>
</q-page>
</template>

<script lang="ts">
  import ReportStepper from 'src/components/report/create_report/report_stepper/ReportStepper.vue';
  import { useQuasar } from 'quasar'
  import reportUtils from 'src/utils/report/ReportUtils';
  import {defineComponent} from 'vue'
  import {useStore} from 'src/store'
  import notifyApi from 'src/api/NotifyApi';

  export default defineComponent({
    name: 'CreateReportPage',
    components:{ReportStepper},
    setup(){
      const q = useQuasar()
      const store = useStore()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      function showDialog():void{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if(store.getters['report/getReport']){
          q.dialog({
            message:'Хотите сбросить данные',
            cancel:true,
            ok:true
          }).onOk(()=>{
            reportUtils.setDefaultReportTablesData()
            notifyApi.showPositive('Форма отчета успешно сброшена')
          })
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      }
      showDialog()
      return {}
    }
  });
</script>


