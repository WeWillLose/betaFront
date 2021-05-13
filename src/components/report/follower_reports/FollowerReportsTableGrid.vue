<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-table
      grid
      title="Отчеты учителей из моей группы"
      :rows="reports"
      grid-header
      :columns="columns"
      class="full-width"
      no-data-label="у нас нет отчетов"
      no-results-label="мы ничего не нашли"
      row-key="id"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Поиск" style="min-width: 250px">
          <template v-slot:append>
            <q-icon name="search"/>
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
                        <q-item clickable @click="deleteReportHandler(props.row.id)">
                          <q-item-section>Удалить</q-item-section>
                        </q-item>
                        <q-item clickable @click="toggleEditStatusDialog(props.row)">
                          <q-item-section>Изменить статус</q-item-section>
                        </q-item>
                        <q-item clickable @click="editReport(props.row.id)">
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

    <q-dialog v-model="status_dialog">
      <q-card class="bg-secondary my-card">
        <q-form
        @submit="updateFollowerReportStatus">
          <q-card-section>
            <div class="text-h6">Изменить статус отчета: {{edited_report.reportName}}</div>
          </q-card-section>
          <q-card-section class="">
            <div class="row q-gutter-md q-ma-md">
              <q-select
                class="col-12"
                v-model="edited_report.status"
                :options="['COMPLETED','CHECKED','UNCHECKED']"
              >
              </q-select>
            </div>
          </q-card-section>
          <q-card-actions align="right">
              <q-btn flat label="Изменить" color="accent" type="submit" ></q-btn>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref, computed,reactive } from 'vue';
  import ReportDownloadUtils from 'src/utils/report/reportDownloadUtils';
  import { EReportStatus } from 'src/model/report/ReportStatus';
  import dateUtils from 'src/utils/date/date';
  import userUtils from 'src/utils/user/user';
  import reportUtils from 'src/utils/report/ReportUtils';
  import { IReport } from 'src/model/report/Report';
  import {useStore} from 'src/store'
  import notifyApi from 'src/api/NotifyApi';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'FollowerReportTableGrid',
    setup() {
      const store = useStore()
      const router = useRouter()

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
      const reports = computed(()=>store.getters['report/getFollowerReports'])

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
      const columns = computed(()=>store.getters['report/getColumns'])

      const edited_report = reactive({} as  IReport)

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getColorByStatus = store.getters['report/getColorByStatus'] as unknown

      const status_dialog = ref(false)
      const filter = ref('')
      const expanded = ref(false)

      function downloadReport(id: number): void {
        void ReportDownloadUtils.downloadReportById(id);
      }

      function downloadScoreList(id: number): void {

        void ReportDownloadUtils.downloadScoreListById(id);

      }
      function updateFollowerReportStatus():void {
        store.dispatch('report/editReportStatus',edited_report).then(success => {if(success){
          notifyApi.showPositive('Статус успешно изменен')
        }}).finally(()=>status_dialog.value = false)
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function toggleEditStatusDialog(report: IReport) {
        status_dialog.value = !status_dialog.value
        edited_report.id = report.id
        edited_report.reportName = report.reportName
        edited_report.status = report.status
      }

      function editReport(id: number): void {
        {
          void store.dispatch('report/fetchReportByIdAndSetTablesData',id).then((success:boolean) => {if(success) void router.push('createReport')})
        }
      }
      function deleteReportHandler(id: number): void{
        confirm('Вы подтверждаете удаление?') && void store.dispatch('report/deleteReportById',id).then((success:boolean) => {if(success) notifyApi.showPositive('Успешно удалено')})
      }

      return {
        deleteReportHandler,
        filter,
        reports,
        columns,
        dateUtils,
        userUtils,
        reportUtils,
        expanded,
        EReportStatus,
        getColorByStatus,
        downloadReport,
        downloadScoreList,
        status_dialog,
        toggleEditStatusDialog,
        edited_report,
        updateFollowerReportStatus,
        editReport
      };
    }
  });
</script>


