<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-table
      grid
      title="Мои отчеты"
      :rows="reports"
      grid-header
      :columns="columns"
      :filter="filter"
      class="full-width"
      no-data-label="у нас нет отчетов"
      no-results-label="мы ничего не нашли"
      row-key="id"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Поиск" style="min-width: 250px">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
        <q-card class="report_card_table_item bg-secondary" flat bordered>
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">Название: {{props.row.reportName}}</div>
                <q-separator class="q-my-sm"/>
                <div class="text-subtitle2">Автор: {{userUtils.getShortFio(props.row.author)}}</div>
                <div class="text-subtitle2">Статус:
                  <q-badge :color="getColorByStatus(props.row.status)">{{props.row.status}}</q-badge>
                </div>
                <div class="text-subtitle2">
                  дата создания : <b>{{dateUtils.toLocalString(props.row.createdDate)}}</b>
                </div>
              </div>
              <div class="col-auto">
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable @click="editReport(props.row.id)" v-if="props.row.status==='UNCHECKED'">
                        <q-item-section>Редактировать</q-item-section>
                      </q-item>
                      <q-item clickable @click="downloadReport(props.row.id)">
                        <q-item-section>Скачать отчет</q-item-section>
                      </q-item>
                      <q-item clickable @click="downloadScoreList(props.row.id)">
                        <q-item-section>Скачать оценочный лист</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
        </div>
      </template>
      <template v-slot:no-data="{message}">
        <div class="full-width row flex-center text-accent q-gutter-sm text-h6">
          <q-img
            src="~assets/notFoundData.gif" style="width: 64px;height: 64px"/>
          <span>
            <b>Так ужастно что ... {{ message }}</b>
          </span>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref,computed } from 'vue';

  import { useStore } from 'src/store';
  import { useRouter } from 'vue-router'
  import reportDownloadUtils from 'src/utils/report/reportDownloadUtils';
  import dateUtils from 'src/utils/date/date';
  import userUtils from 'src/utils/user/user';


  export default defineComponent({
    name: 'ReportTableGrid',
    components: {},
    setup() {
      const store = useStore()
      const router = useRouter()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
      const reports = computed(()=>store.getters['report/getReports'])
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
      const columns =  computed(()=>(store.getters['report/getColumns']))
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
      const getColorByStatus =  computed(()=>(store.getters['report/getColorByStatus']))

      const filter = ref('')
      const expanded = ref(false);

      function downloadReport(id: number): void {
        {
          void reportDownloadUtils.downloadReportById(id);
        }
      }

      function downloadScoreList(id: number): void {
        {
          void reportDownloadUtils.downloadScoreListById(id);
        }
      }
      function editReport(id: number): void {
        {
          console.log(id)
          void store.dispatch('report/fetchReportByIdAndSetTablesData',id).then((success:boolean) => {if(success) void router.push('createReport')})
        }
      }


      return { filter,reports, columns, editReport,dateUtils,userUtils, expanded, getColorByStatus, downloadReport, downloadScoreList };
    }
  });
</script>


