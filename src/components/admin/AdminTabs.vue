<template>
  <div class="q-gutter-y-md" >
      <q-tabs
        v-model="tab"
        class="text-accent"
        align="justify"
        narrow-indicator
      >
        <q-tab name="createUser" icon="fas fa-user" label="Зарегистрировать"/>
        <q-tab name="info" icon="fas fa-user" label="Данные"/>
        <q-tab name="password" icon="password" label="Пароли"/>
        <q-tab name="roles" icon="fas fa-user-shield" label="Роли"/>
        <q-tab name="chairman" icon="fas fa-user-friends" label="Председатели"/>
      </q-tabs>

      <q-tab-panels
        keep-alive
        v-model="tab"
        animated
        class="main_background"
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="createUser">
          <new-user-form/>
        </q-tab-panel>
        <q-tab-panel name="info">
          <update-user-info-table/>
        </q-tab-panel>
        <q-tab-panel name="password">
          <update-user-password-table/>
        </q-tab-panel>
        <q-tab-panel name="roles">
            <update-user-roles-table/>
        </q-tab-panel>
        <q-tab-panel name="chairman">
            <update-user-chairman-table/>
        </q-tab-panel>
      </q-tab-panels>
  </div>
</template>

<script lang="ts">
  import NewUserForm from './NewUserForm.vue';
  import UpdateUserInfoTable from './tables/UpdateUserInfoTable.vue';
  import UpdateUserPasswordTable from './tables/UpdateUserPasswordTable.vue';
  import UpdateUserRolesTable from './tables/UpdateUserRolesTable.vue';
  import UpdateUserChairmanTable from './tables/UpdateUserChairmanTable.vue';
  import { defineComponent,ref } from 'vue';

  export default defineComponent({
    name: 'AdminTabs',
    components: { UpdateUserInfoTable, UpdateUserPasswordTable, UpdateUserRolesTable, UpdateUserChairmanTable, NewUserForm},
    setup() {
      const tab = ref('info');
      const splitterModel =  ref(5)
      return { tab,splitterModel };
    }
  });
</script>


