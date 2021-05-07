<template>
  <q-stepper
    class="bg-transparent"
    v-model="step"
    ref="stepper"
    color="primary"
    keep-alive
    active-color="purple"
    vertical
    animated
    header-nav
  >
    <q-step
      :name="1"
      prefix="1"
      title="Инфорамция"
    >
      <meta-title ref="meta_title"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="2"
      prefix="2"
      title="Успеваемость по предметам, вынесенным на экзамены."
    >
      <progress-exam-table ref="progress_exam_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="3"
      prefix="3"
      title="Успеваемость по предметам, не вынесенным на экзамены."

    >
      <progress-table ref="progress_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="4"
      prefix="4"
      title="Комменарии"

    >
      <comment-table ref="comment_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="5"
      prefix="5"
      title="Вовлечение студентов в творческую работу"

    >
      <creation-table ref="creation_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="6"
      prefix="6"
      title="Вовлечение студентов в проектную, исследовательскую работу "
    >
      <proective-table ref="proective_table"/>
      <q-stepper-navigation>
        <q-btn @click="onPreFinish" color="primary" label="End"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="7"
      prefix="7"
      title="Сводка"
    >
      <report-summary/>
      <q-stepper-navigation>
        <q-btn @click="onFinish" color="primary" label="End"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

  </q-stepper>
</template>

<script lang="ts">

  import { Ref, ref, defineComponent, computed } from 'vue';
  import MetaTitle from 'components/report/create_report/report_tables/meta/MetaTitle.vue';
  import CommentTable from 'components/report/create_report/report_tables/1/CommentTable.vue';
  import ProgressExamTable from 'components/report/create_report/report_tables/1/ProgressExamTable.vue';
  import ProgressTable from 'components/report/create_report/report_tables/1/ProgressTable.vue';
  import CreationTable from 'components/report/create_report/report_tables/2/CreationTable.vue';
  import ProectiveTable from 'components/report/create_report/report_tables/2/ProectiveTable.vue';
  import ReportSummary from 'components/report/create_report/report_tables/meta/ReportSummary.vue';
  import { useStore } from 'src/store';
  import { QStepper } from 'quasar';
  import reportUtils from 'src/utils/report/ReportUtils';
  import { IReport } from 'src/model/report/Report';

  export default defineComponent({
    name: 'ReportStepper',
    components: { MetaTitle,CommentTable, ProgressExamTable, ProgressTable, CreationTable, ProectiveTable,ReportSummary },
    setup() {
      const store = useStore();
      const step = ref(1);
      const stepper = ref(null) as Ref<QStepper | null>
      const meta_title =ref({hasError:Function})
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // const reportData = computed(()=>store.getters['report/getData'] as Record<string, unknown>)
      // // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // const metaData = computed(()=>store.getters['report/meta/getData'] as Record<string, unknown>)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unused-vars
      const tablesStepperState = computed(()=> store.state.report.tablesState)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getReport = computed(()=> store.getters['report/getReport']as IReport)

      function onBack(): void {
        stepper.value?.previous();
      }

      function onNext(): void {
        stepper.value?.next();
      }
      function onPreFinish(): void {
        if(meta_title.value.hasError()){
          stepper.value?.goTo(1);
          return
        }
        prepareData()
        onNext()
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function prepareData(): IReport {
        const res = reportUtils.collectDataToReport();
        store.commit('report/setReport',res)
        return res
      }

      async function onFinish(){
        let res = false
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if(store.getters['report/meta/getId'] as number){
          res = await store.dispatch('report/editReport',getReport.value) as boolean
        }else{
          res = await store.dispatch('report/saveReport',getReport.value) as boolean
        }
        if(res) reportUtils.setDefaultReportTablesData()
      }

      return { meta_title,step, stepper, tablesStepperState, onBack, onNext, onPreFinish, onFinish };
    }
  });
</script>


