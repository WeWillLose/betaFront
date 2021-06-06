<template>
  <q-page class="q-pa-md">
    <report-stepper/>
  </q-page>
</template>

<script lang="ts">
  import ReportStepper from 'src/components/report/create_report/report_stepper/ReportStepper.vue';
  import { useQuasar } from 'quasar';
  import reportUtils from 'src/utils/report/ReportUtils';
  import { defineComponent } from 'vue';
  import { useStore } from 'src/store';
  import notifyApi from 'src/api/NotifyApi';
  import { IReport } from 'src/model/report/Report';

  export default defineComponent({
    name: 'CreateReportPage',
    components: { ReportStepper },
    setup() {
      const q = useQuasar();
      const store = useStore();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      function showDialog(): void {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        let report: IReport = store.getters['report/getReport'] as IReport;
        if (report) {
          if (report.id) {
            q.dialog({
              message: `Хотите сбросить данные. Вы редактируетете существуюущий отчет: ${report?.reportName || 'Unnamed'}`,
              cancel: true,
              ok: true
            }).onOk(() => {
              reportUtils.setDefaultReportTablesData();
              notifyApi.showPositive('Форма отчета успешно сброшена');
            });
          } else {
            q.dialog({
              message: 'Хотите сбросить данные',
              cancel: true,
              ok: true
            }).onOk(() => {
              reportUtils.setDefaultReportTablesData();
              notifyApi.showPositive('Форма отчета успешно сброшена');
            });
          }
        }
      }

      showDialog();
      return {};
    }
  });
</script>


