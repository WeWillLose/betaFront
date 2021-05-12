<template>
  <div class="q-gutter-sm">
    <q-table title="1.1 Успеваемость по предметам, вынессеным на экзамены" :hide-no-data="true" :rows="getRows"
             :columns="getColumns"
             class="bg-transparent no-box-shadow"
    >
      <template v-slot:top-right>
        <div>
          <q-btn dense color="primary" label="Добавить строку" @click="showAddRowDialog" no-caps></q-btn>
        </div>
        <div class="q-pa-sm q-gutter-sm">
          <q-dialog v-model="show_dialog">
            <q-card class="add_row_dialog bg-secondary">
              <q-form @submit="addRowHandler">
                <q-card-section>
                  <div class="text-h6">{{is_edit?'Редактировать строку':'Добавить строку'}}</div>
                </q-card-section>

                <q-card-section>
                  <div class="row q-gutter-md q-ma-md">
                    <q-input class="col-12 " type="textarea" counter maxlength="500" clearable
                             v-model="getEditedItem.group" label="Группа"></q-input>
                    <q-input class="col-12 " type="textarea" counter maxlength="500"
                             v-model="getEditedItem.subject" label="Дисциплина"></q-input>
                    <q-input class="col-12 " type="number" v-model="getEditedItem.amount"
                             label="Колво студентов"></q-input>
                  </div>
                  <div class="row q-gutter-md  q-ma-md">
                    <q-input min="0" class="col-12 col-md" type="number" v-model="getEditedItem.mark5"
                             label="Кол-во оценок 5"></q-input>
                    <q-input class="col-12 col-md" type="number" v-model="getEditedItem.mark4"
                             label="Кол-во оценок 4"></q-input>
                    <q-input class="col-12 col-md" type="number" v-model="getEditedItem.mark3"
                             label="Кол-во оценок 3"></q-input>
                    <q-input class="col-12 col-md" type="number" v-model="getEditedItem.mark2"
                             label="Кол-во оценок 2"></q-input>
                  </div>
                  <div class="row q-gutter-md  q-ma-md">
                    <q-input class="col-12 col-md" type="number" v-model="getEditedItem.progress"
                             label="Успеваемость  (%)"></q-input>
                    <q-input class="col-12 col-md" type="number" v-model="getEditedItem.quality"
                             label="Качество зананий (%)"></q-input>
                  </div>
                  <div class="row q-gutter-md  q-ma-md">
                    <q-input class="col-12" type="textarea" counter maxlength="500"
                             v-model="getEditedItem.unsuccs" label="Неуспевающие"></q-input>
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat :label="is_edit?'Редактировать':'Добавить'" type="submit" color="accent"
                         v-close-popup></q-btn>
                </q-card-actions>
              </q-form>
            </q-card>
          </q-dialog>
        </div>

      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="group" :props="props">
            {{props.row.group}}
          </q-td>
          <q-td key="subject" :props="props">
            {{props.row.subject}}
          </q-td>
          <q-td key="amount" :props="props">
            {{props.row.amount}}
          </q-td>
          <q-td key="mark5" :props="props">
            {{props.row.mark5}}
          </q-td>
          <q-td key="mark4" :props="props">
            {{props.row.mark4}}
          </q-td>
          <q-td key="mark3" :props="props">
            {{props.row.mark3}}
          </q-td>
          <q-td key="mark2" :props="props">
            {{props.row.mark2}}
          </q-td>
          <q-td key="progress" :props="props">
            {{props.row.progress}}
          </q-td>
          <q-td key="quality" :props="props">
            {{props.row.quality}}
          </q-td>
          <q-td key="unsuccs" :props="props">
            {{props.row.unsuccs}}
          </q-td>
          <q-td key="actions" :props="props" auto-width>
            <q-btn color="blue" label="Редактировать" @click="showEditDialog(props.row)" size=sm no-caps></q-btn>
            <q-btn color="red" label="Удалить" @click="deleteItem(props.row)" size=sm no-caps></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, Ref } from 'vue';
  import { useStore } from 'src/store';
  import ruleApi from 'src/api/RuleApi';
  import { QFiledHasError } from 'src/store/report/types';

  export default defineComponent({
    name: 'ProgressExamTable',
    setup() {
      const show_dialog = ref(false);
      const store = useStore();
      const amountRef = ref(null) as unknown as Ref<QFiledHasError[]>;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getColumns = computed(() => store.getters['report/progress_exam/getColumns'] as Record<string, unknown>[]);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getRows = computed(() => store.getters['report/progress_exam/getRows'] as Record<string, unknown>[]);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getEditedItem = computed(() => store.getters['report/progress_exam/getEditedItem'] as Record<string, unknown>);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getEditedIndex = computed(() => store.getters['report/progress_exam/getEditedIndex'] as number);

      const is_edit = ref(false);

      function addRowHandler(): void {
        if (is_edit.value) {
          store.commit('report/progress_exam/editItem', getEditedItem.value);
        } else store.commit('report/progress_exam/addRow', getEditedItem.value);
        is_edit.value = false;
        close();
      }

      function deleteItem(item: Record<string, unknown>) {
        confirm('Вы уверены что хотите удалить строку') && store.commit('report/progress_exam/deleteItem', item);
      }

      function showEditDialog(item: Record<string, unknown>) {
        store.commit('report/progress_exam/setEditedItem', item);
        is_edit.value = true;
        show_dialog.value = true;
      }

      function close() {
        show_dialog.value = false;
        is_edit.value = true;
        store.commit('report/progress_exam/setDefaultEditedItem');
      }

      function showAddRowDialog() {
        store.commit('report/progress_exam/setDefaultEditedItem');
        is_edit.value = false;
        show_dialog.value = true;
      }

      return {
        show_dialog,
        getColumns,
        getRows,
        getEditedItem,
        getEditedIndex,
        ruleApi,
        close,
        addRowHandler,
        deleteItem,
        amountRef,
        showAddRowDialog,
        showEditDialog,
        is_edit

      };
    }
  });
</script>
