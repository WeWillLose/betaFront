<template>
  <div class="q-gutter-sm">
    <q-table title="2.2 Познавательная активность обучающихся" :rows="getRows" :columns="getColumns"
             :separator="separator" hide-bottom
             class="bg-transparent no-box-shadow">
      <template v-slot:top-right>
        <div class="q-pa-sm q-gutter-sm">
          <q-dialog v-model="show_dialog">
            <q-card class="add_row_dialog bg-secondary">
              <q-form @submit="addRowHandler">
                <q-card-section>
                  <div class="text-h6">{{is_edit?'Редактировать строку':'Добавить строку'}}</div>
                </q-card-section>

                <q-card-section>
                  <div class="row q-gutter-md q-ma-md">
                    <q-input class="col-12" type="textarea" v-model="getEditedItem.proof" label="Обоснование (мероприятие, количество обучающихся)"></q-input>
                    <q-input min="0" step="0.5" class="col-12" v-if="userUtils.isCurrentUserChairman()" type="number" v-model="getEditedItem.score" label="Баллы"
                             :rules="[ruleApi.withoutSpaces(),ruleApi.numberBetweenNotStrictScore(1,2)]"></q-input>
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
          <q-td key="interesting" :props="props">
            {{props.row.interesting}}
          </q-td>
          <q-td key="proof" :props="props">
            {{props.row.proof}}
          </q-td>
          <q-td key="score" :props="props">
            {{props.row.score}}
          </q-td>
          <q-td key="actions" :props="props" auto-width>
            <q-btn color="blue" label="Редактировать" @click="showEditDialog(props.row)" size=sm no-caps></q-btn>
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
    name: 'ProectiveTable',
    setup() {
      const store = useStore();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getColumns = computed(() => store.getters['report/proective/getColumns'] as Record<string, unknown>[]);

      const show_dialog = ref(false);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getRows = computed(() => store.getters['report/proective/getRows'] as Record<string, unknown>[]);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getDefaultItem = computed(() => store.getters['report/proective/getDefaultItem'] as Record<string, unknown>);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getEditedIndex = computed(() => store.getters['report/proective/getEditedIndex'] as number);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getEditedItem = computed(() => store.getters['report/proective/getEditedItem'] as Record<string, unknown>);
      const separator = ref('vertical');

      const is_edit = ref(false);

      function addRowHandler(): void {
        if (is_edit.value) {
          store.commit('report/proective/editItem', getEditedItem.value);
        } else store.commit('report/proective/addRow', getEditedItem.value);
        is_edit.value = false;
        close();
      }

      function deleteItem(item: Record<string, unknown>) {
        confirm('Вы уверены что хотите удалить строку') && store.commit('report/proective/deleteItem', item);
      }

      function showEditDialog(item: Record<string, unknown>) {
        store.commit('report/proective/setEditedItem', item);
        is_edit.value = true;
        show_dialog.value = true;
      }

      function close() {
        show_dialog.value = false;
        is_edit.value = true;
        store.commit('report/proective/setDefaultEditedItem');
      }

      function showAddRowDialog() {
        store.commit('report/proective/setDefaultEditedItem');
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


