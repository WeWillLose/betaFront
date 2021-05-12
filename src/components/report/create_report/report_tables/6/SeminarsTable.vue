<template>
  <div class="q-gutter-sm">
    <q-table title="6.1.3 Участие в работе конференций, семинаров, заседаний городского МО (посещение), обучение на краткосрочных курсах" :rows="getRows" :columns="getColumns"
             :separator="separator" hide-bottom
             class="bg-transparent no-box-shadow">
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
                    <q-input class="col-12" type="text" v-model="getEditedItem.name" label="Название мероприятия"></q-input>
                    <q-input min="0" step="0.5" v-if="userUtils.isCurrentUserChairman()" class="col-12" type="number" v-model="getEditedItem.score"
                             label="Баллы" :rules="[ruleApi.withoutSpaces(),ruleApi.numberBetweenNotStrictScore(0.5,1)]"></q-input>
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat :label="is_edit?'Редактировать':'Добавить'" color="accent" v-close-popup
                         type="submit"></q-btn>
                </q-card-actions>
              </q-form>
            </q-card>
          </q-dialog>
        </div>

      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{props.row.name}}
          </q-td>
          <q-td key="score" :props="props">
            {{props.row.score}}
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
import { useStore } from 'src/store';
import { computed, defineComponent, ref } from 'vue';
import ruleApi from 'src/api/RuleApi';
import userUtils from 'src/utils/user/user'

export default defineComponent({
  name: 'SeminarsTable',
  setup() {
    const store = useStore();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const getColumns = computed(() => store.getters['report/seminars/getColumns'] as Record<string, unknown>[]);

    const show_dialog = ref(false);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const getRows = computed(() => store.getters['report/seminars/getRows'] as Record<string, unknown>[]);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const getDefaultItem = computed(() => store.getters['report/seminars/getDefaultItem'] as Record<string, unknown>);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const getEditedIndex = computed(() => store.getters['report/seminars/getEditedIndex'] as number);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const getEditedItem = computed(() => store.getters['report/seminars/getEditedItem'] as Record<string, unknown>);
    const separator = ref('vertical');

    const is_edit = ref(false);

    function addRowHandler(): void {
      if (is_edit.value) {
        store.commit('report/seminars/editItem', getEditedItem.value);
      } else store.commit('report/seminars/addRow', getEditedItem.value);
      is_edit.value = false;
      close();
    }

    function deleteItem(item: Record<string, unknown>) {
      confirm('Вы уверены что хотите удалить строку') && store.commit('report/seminars/deleteItem', item);
    }

    function showEditDialog(item: Record<string, unknown>) {
      store.commit('report/seminars/setEditedItem', item);
      is_edit.value = true;
      show_dialog.value = true;
    }

    function close() {
      show_dialog.value = false;
      is_edit.value = true;
      store.commit('report/seminars/setDefaultEditedItem');
    }

    function showAddRowDialog() {
      store.commit('report/seminars/setDefaultEditedItem');
      is_edit.value = false;
      show_dialog.value = true;
    }

    return {
      addRowHandler,
      deleteItem,
      showAddRowDialog,
      showEditDialog,
      close,
      getColumns,
      getRows,
      getDefaultItem,
      getEditedIndex,
      getEditedItem,
      ruleApi,
      separator,
      show_dialog,
      is_edit,
      userUtils
    };
  }


});
</script>


