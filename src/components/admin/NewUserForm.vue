<template>
  <q-card>
    <q-form class="q-gutter-md q-ma-md" @submit="onSubmit">
      <div ><h4 class="q-ma-none"><strong>Новый пользователь</strong></h4></div>

      <q-input type="text" label="Логин" :rules="[ruleApi.required(),ruleApi.username()]" v-model="user.username"/>
      <q-input type="password" label="Пароль" v-model="user.password" :rules="[ruleApi.required(),ruleApi.password()]"/>
      <q-input type="text" label="Фамилия" v-model="user.lastName" :rules="[ruleApi.required(),ruleApi.alphaWithRus]"/>
      <q-input type="text" label="Имя" v-model="user.firstName" :rules="[ruleApi.required(),ruleApi.alphaWithRus()]"/>
      <q-input type="text" label="Отчество" v-model="user.middleName" :rules="[ruleApi.required(),ruleApi.alphaWithRus()]"/>

      <div class="row justify-end ">
        <q-btn label="Зарегистировать" :loading="loading" type="submit" icon="login" unelevated flat
               color="accent"
               class="login_btn_tmp"></q-btn>
      </div>
    </q-form>
  </q-card>
</template>

<script>
  import {defineComponent, ref, reactive} from 'vue';
  import {useStore} from 'src/store';
  import ruleApi from 'src/api/RuleApi';
  import { User} from 'src/model/user/User';
  import notifyApi from 'src/api/NotifyApi';

  export default defineComponent({
    name: 'NewUserForm',
    setup() {
      const loading = ref(false)
      const store = useStore()
      const user = ref(new User())

      function onSubmit() {
        loading.value = true;
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          store.dispatch('user/createUser', user.value).then(isSuccess => {
            if (isSuccess) {
              notifyApi.showPositive('Пользователь успешно создан')
              user.value = new User()
            }
          }).finally(()=> loading.value = false)
        }, 300)
      }
      return {loading, user,ruleApi,onSubmit};
    },

  });
</script>


