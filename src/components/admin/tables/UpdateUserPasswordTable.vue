<template>
  <q-table
    title="Изменить Пароль"
    no-data-label="у нас нет никого"
    no-results-label="мы ничего не нашли"
    :filter="filter"
    :rows="rows"
    :columns="columns"
    row-key="id"
    binary-state-sort
  >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Поиск" style="min-width: 250px">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="id" :props="props">
          <q-tr :props="props" dense autofocus>{{props.row.id}}</q-tr>
        </q-td>
        <q-td key="username" :props="props">
          <q-tr :props="props" dense autofocus>{{props.row.username}}</q-tr>
        </q-td>
        <q-td key="firstName" :props="props">
          <q-tr :props="props" dense autofocus>{{props.row.firstName}}</q-tr>
        </q-td>
        <q-td key="lastName" :props="props">
          <q-tr :props="props" dense autofocus>{{props.row.lastName}}</q-tr>
        </q-td>
        <q-td key="middleName" :props="props">
          <q-tr :props="props" dense autofocus>{{props.row.middleName}}</q-tr>
        </q-td>
        <q-td key="actions" :props="props" auto-width>
          <q-btn color="blue" label="Изменить Пароль" @click="showEditUserDialog(props.row)" size=sm no-caps></q-btn>
        </q-td>
      </q-tr>
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
  <q-dialog v-model="user_dialog">
    <q-card class="bg-secondary my-card">
      <q-form
        @submit="updateUserPassword">
        <q-card-section>
          <div class="text-h6">Изменить Пароль</div>
        </q-card-section>
        <q-card-section class="">
          <div class="row q-gutter-md q-ma-md">
            <q-input class="col-12 col-md-12 " type="text" label="Пароль" v-model="edited_user.password"
                     :rules="[ruleApi.required(),ruleApi.password()]"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Изменить" color="accent" type="submit"></q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
  import { defineComponent, computed, ref, reactive } from 'vue';
  import { useStore } from 'src/store';
  import { IUser, User } from 'src/model/user/User';
  import ruleApi from 'src/api/RuleApi';
  import notifyApi from 'src/api/NotifyApi';

  const _column_names = ['id', 'username', 'firstName', 'lastName', 'middleName', 'actions'];
  export default defineComponent({
    name: 'UpdateUserPasswordTable',
    setup() {
      const store = useStore();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
      const rows = computed(() => store.getters['user/getUsers']);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
      const columns = computed(() => store.getters['user/getColumns'].filter((column: { name: string }) => _column_names.includes(column.name)));

      const edited_user = reactive(new User());
      const user_dialog = ref(false);
      const filter = ref('')
      function showEditUserDialog(user: IUser) {
        user_dialog.value = true;
        edited_user.id = user.id;
      }

      function updateUserPassword(): void {
        void store.dispatch('user/updateUserPassword', edited_user).then(success => {
            if (success) {
              notifyApi.showPositive('Пароль успешно измененн');
              user_dialog.value = false;
            }
          }
        );
      }

      return { rows, columns, user_dialog, edited_user, showEditUserDialog, updateUserPassword, ruleApi,filter };
    }
  });
</script>

