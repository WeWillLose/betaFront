<template>
  <q-page class="row items-center justify-center">
    <login-form/>
  </q-page>
</template>
<script lang="ts">
  import {defineComponent } from 'vue';
  import LoginForm from 'src/components/login/LoginForm.vue';
  export default defineComponent({
    name: 'LoginPage',
    components:{LoginForm},
  });
</script>


