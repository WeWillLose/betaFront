<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="main_background">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
  import {defineComponent } from 'vue';
  export default defineComponent({
    name: 'LoginLayout',
    setup() {
      return { }
    },
  });
</script>


