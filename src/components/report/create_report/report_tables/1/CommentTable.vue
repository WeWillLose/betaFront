<template>
  <div class="q-gutter-sm">
    <q-table title="Коментарии" :rows="rows" :columns="columns" :separator="separator" hide-bottom
             class="bg-transparent no-box-shadow"
    >
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
                    <q-input class="col-12" type="textarea" v-model="getEditedItem.comment" dense maxlength="500" counter autofocus
                             debounce="530"
                             label="Коментарии"
                             autogrow></q-input>
                    <q-input
                      v-if="userUtils.isCurrentUserChairman()"
                      class="col-12" type="number"  v-model="getEditedItem.score" dense counter
                             label="Баллы"
                             maxlength="500"
                             debounce="530"
                             ></q-input>
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
          <q-td key="comment" :props="props">
            {{props.row.comment}}
          </q-td>
          <q-td key="score" :props="props">
            {{props.row.score}}
          </q-td>
          <q-td key="actions" :props="props" auto-width>
            <q-btn color="blue" label="Редактировать" @click="showEditDialog(props.row)" size=sm
                   no-caps></q-btn>
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
    name: 'CommentTable',
    setup() {
      const show_dialog = ref(false);
      const store = useStore();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const columns = computed(() => store.getters['report/comment/getColumns'] as Record<string, unknown>[])
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const rows = computed(() => store.getters['report/comment/getRows'] as Record<string, unknown>[])
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const getEditedItem = computed(() => store.getters['report/comment/getEditedItem'] as Record<string, unknown>);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const defaultItem = computed(() => store.getters['report/comment/getDefaultItem'] as Record<string, unknown>)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const editedIndex = computed(() => store.getters['report/comment/getEditedIndex'] as number)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const editedItem = computed(() => store.getters['report/comment/getEditedItem'] as Record<string, unknown>)
      const separator = ref('vertical');

      const is_edit = ref(false);

      function addRowHandler(): void {
        if (is_edit.value) {
          store.commit('report/comment/editItem', getEditedItem.value);
        } else store.commit('report/comment/addRow', getEditedItem.value);
        is_edit.value = false;
        close();
      }

      function deleteItem(item: Record<string, unknown>) {
        confirm('Вы уверены что хотите удалить строку') && store.commit('report/comment/deleteItem', item);
      }

      function showEditDialog(item: Record<string, unknown>) {
        store.commit('report/comment/setEditedItem', item);
        is_edit.value = true;
        show_dialog.value = true;
      }

      function close() {
        show_dialog.value = false;
        is_edit.value = true;
        store.commit('report/comment/setDefaultEditedItem');
      }

      function showAddRowDialog() {
        store.commit('report/comment/setDefaultEditedItem');
        is_edit.value = false;
        show_dialog.value = true;
      }

      return {
        addRowHandler,
        deleteItem,
        showEditDialog,
        showAddRowDialog,
        close,
        is_edit,columns, rows, defaultItem, editedIndex, editedItem, show_dialog, getEditedItem, ruleApi, separator,userUtils };
    }
  });
</script>
<style>
</style>
