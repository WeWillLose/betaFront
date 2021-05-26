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
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="7"
      prefix="7"
      title="Разработка рабочей программы учебной дисциплины, модуля, междисциплинарного курса"
    >
      <working-program-table ref="working_program_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="8"
      prefix="8"
      title="Сохранение учебно-материальной базы, поддержание надлежащих санитарно-гигиенических условий s"
    >
      <class-rooms-table ref="programs_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="9"
      prefix="9"
      title="Пополнение учебно-методических и наглядных пособий"

    >
      <programs-table ref="class_rooms_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="10"
      prefix="10"
      title="Работа по развитию материальной базы кабинета (лаборатории), реконструкции кабинета (лаборатории)"
    >
      <reconstruction-table ref="reconstruction_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="11"
      prefix="11"
      title="Работа по созданию и совершенствованию учебно-методического комплекса по преподаваемым дисциплинам"

    >
      <complex-table ref="complex_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="12"
      prefix="12"
      title="Разработка методических пособий, адресованных обучающимся"
    >
      <teachingaids-table ref="teachingaids_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="13"
      prefix="13"
      title="Создание методических работ по методике обучения, воспитания"
    >
      <education-table ref="education_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="14"
      prefix="14"
      title=" Работа по созданию и внедрению СДО"
    >
      <s-d-o-table ref="sdo_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="15"
      prefix="15"
      title="Наличие плана, концепции воспитательной работы"
    >
      <plan-table ref="plan_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="16"
      prefix="16"
      title="Наличие предметного кружка, эффективность его работы"
    >
      <circle-table ref="circle_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="17"
      prefix="17"
      title="Использование возможностей культурных, научных, производственных и др. учреждений района, города и т.д. в организации внеурочной работы"
    >
      <institutions-table ref="institutions_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="18"
      prefix="18"
      title="Проведение мероприятий (отделение, колледж)"
    >
      <events-table ref="events_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="19"
      prefix="19"
      title="Наличие плана воспитательной работы с группой"
    >
      <plan-group-table ref="plan_group_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="20"
      prefix="20"
      title="Проведение тематических классных часов"
    >
      <coolhours-table ref="coolhours_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="21"
      prefix="21"
      title="Организация и проведение мероприятий (отделение, колледж)"
    >
      <activity-table ref="activity_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="22"
      prefix="22"
      title="Сопровождение обучающихся с ОВЗ"
    >
      <o-b-z-table ref="obz_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="23"
      prefix="23"
      title="Непрерывность повышения квалификации"
    >
      <selfeducation-table ref="selfeducation_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="24"
      prefix="24"
      title="Прохождение курсов повышения квалификации, стажировки"
    >
      <qualification-table ref="qualification_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="25"
      prefix="25"
      title="Участие в работе конференций, семинаров, заседаний городского МО (посещение), обучение на краткосрочных курсах"
    >
      <seminars-table ref="seminars_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="26"
      prefix="26"
      title="Работа  над методической темой, проведение открытых уроков, внеурочных мероприятий, тематические выступления на заседаниях цикловых комиссий, педсоветах"
    >
      <participation-table ref="participation_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="27"
      prefix="27"
      title="Участие преподавателя в профессиональных конкурсах, конференциях, проектах"
    >
      <contest-table ref="contest_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="28"
      prefix="28"
      title="Использование современных образовательных технологий в учебной деятельности и воспитательной работе"
    >
      <technologies-table ref="technologies_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="29"
      prefix="29"
      title="Обобщение и распространение опыта"
    >
      <experience-table ref="experience_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="30"
      prefix="30"
      title="Взаимодействие с представителями социума"
    >
      <interaction-table ref="interaction_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="31"
      prefix="31"
      title="Исполнительская дисциплина"
    >
      <subject-table ref="subject_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="32"
      prefix="32"
      title="Руководство региональным МО"
    >
      <manual-table ref="manual_table"/>
      <q-stepper-navigation>
        <q-btn @click="onPreFinish" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="33"
      prefix="33"
      title="Сводка"
    >
      <report-summary/>
      <q-stepper-navigation>
        <q-btn @click="onFinish" color="primary" label="Закончить"/>
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
  import EducationTable from 'components/report/create_report/report_tables/3/EducationTable.vue';
  import ProgramsTable from 'components/report/create_report/report_tables/3/ProgramsTable.vue';
  import ClassRoomsTable from 'components/report/create_report/report_tables/3/ClassRoomsTable.vue';
  import ComplexTable from 'components/report/create_report/report_tables/3/ComplexTable.vue';
  import ReconstructionTable from 'components/report/create_report/report_tables/3/ReconstructionTable.vue';
  import SDOTable from 'components/report/create_report/report_tables/3/SDOTable.vue';
  import TechnologiesTable from 'components/report/create_report/report_tables/7/TechnologiesTable.vue';
  import TeachingaidsTable from 'components/report/create_report/report_tables/3/TeachingaidsTable.vue';
  import WorkingProgramTable from 'components/report/create_report/report_tables/3/WorkingProgramTable.vue';
  import CircleTable from 'components/report/create_report/report_tables/4/CircleTable.vue';
  import EventsTable from 'components/report/create_report/report_tables/4/EventsTable.vue';
  import InstitutionsTable from 'components/report/create_report/report_tables/4/InstitutionsTable.vue';
  import PlanTable from 'components/report/create_report/report_tables/4/PlanTable.vue';
  import ActivityTable from 'components/report/create_report/report_tables/5/ActivityTable.vue';
  import CoolhoursTable from 'components/report/create_report/report_tables/5/CoolhoursTable.vue';
  import OBZTable from 'components/report/create_report/report_tables/5/OBZTable.vue';
  import PlanGroupTable from 'components/report/create_report/report_tables/5/PlanGroupTable.vue';
  import ContestTable from 'components/report/create_report/report_tables/6/ContestTable.vue';
  import ParticipationTable from 'components/report/create_report/report_tables/6/ParticipationTable.vue';
  import QualificationTable from 'components/report/create_report/report_tables/6/QualificationTable.vue';
  import SelfeducationTable from 'components/report/create_report/report_tables/6/SelfeducationTable.vue';
  import SeminarsTable from 'components/report/create_report/report_tables/6/SeminarsTable.vue';
  import ExperienceTable from 'components/report/create_report/report_tables/8/ExperienceTable.vue';
  import InteractionTable from 'components/report/create_report/report_tables/9/InteractionTable.vue';
  import SubjectTable from 'components/report/create_report/report_tables/10/SubjectTable.vue';
  import ManualTable from 'components/report/create_report/report_tables/11/ManualTable.vue';
  import ReportSummary from 'components/report/create_report/report_tables/meta/ReportSummary.vue';
  import { useStore } from 'src/store';
  import { useRouter } from 'vue-router'
  import { QStepper } from 'quasar';
  import reportUtils from 'src/utils/report/ReportUtils';
  import { IReport } from 'src/model/report/Report';
  import notifyApi from 'src/api/NotifyApi';

  export default defineComponent({
    name: 'ReportStepper',
    components: { MetaTitle,CommentTable, ProgressExamTable, ProgressTable, CreationTable, ProectiveTable, ReportSummary , ManualTable ,ClassRoomsTable,EducationTable,ReconstructionTable,SDOTable,ProgramsTable,ComplexTable,
      SubjectTable,
      InteractionTable,
      ExperienceTable,
      SeminarsTable,
      SelfeducationTable,
      QualificationTable,
      ParticipationTable,
      ContestTable,
      PlanGroupTable,
      OBZTable,
      CoolhoursTable,
      ActivityTable,
      PlanTable,
      InstitutionsTable,
      EventsTable,
      CircleTable,
      WorkingProgramTable,
      TeachingaidsTable,
      TechnologiesTable },
    setup() {
      const store = useStore();
      const step = ref(1);
      const stepper = ref(null) as Ref<QStepper | null>
      const meta_title =ref({hasError:Function})
      const router = useRouter()

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
        if(meta_title.value.hasError()){
          stepper.value?.goTo(1);
          return
        }
        stepper.value?.next();
      }
      function onPreFinish(): void {
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
        if(res) {
          reportUtils.setDefaultReportTablesData()
          notifyApi.showPositive('Отчет успешно сохранен')
          await router.push('myReports')
        }
      }

      return { meta_title,step, stepper, tablesStepperState, onBack, onNext, onPreFinish, onFinish };
    }
  });
</script>


