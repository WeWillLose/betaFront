<template>
  <div class="std_form_container">
    <q-form class="q-gutter-md q-ma-md" @submit="onSubmit">
      <div><h4><strong>Авторизация</strong></h4></div>

      <q-input type="text" label="Логин" :rules="[ruleApi.required(),ruleApi.username()]" v-model="user.username"/>

      <q-input type="password" label="Пароль" v-model="user.password" :rules="[ruleApi.required(),ruleApi.withoutSpaces()]"/>

      <div class="row justify-end ">
        <q-btn label="Войти" :loading="loading" type="submit" icon="login" unelevated flat
               class="login_btn_tmp"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref, reactive} from 'vue';
  import {useStore} from 'src/store';
  import { useRouter } from 'vue-router'
  import ruleApi from 'src/api/RuleApi';
  import { UserLogin } from 'src/model/user/User';
  import notifyApi from 'src/api/NotifyApi';


  export default defineComponent({
    name: 'LoginForm',
    components: {},
    setup() {
      const loading = ref(false)
      const router = useRouter()
      const store = useStore()
      const user = reactive(new UserLogin('',''))

      function onSubmit() {
        loading.value = true;
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          store.dispatch('user/login', user).then(isSuccess => {
            if (isSuccess) {
              notifyApi.showPositive('Вы успешно залогинились')
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              router.push('/')
            }else{
              notifyApi.showNegative('Авторизация провалена')
            }
          }).finally(()=> loading.value = false)
        }, 300)
      }
      return {loading, user,ruleApi,onSubmit};
    },

  });
</script>


