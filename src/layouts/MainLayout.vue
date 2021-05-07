<template>
  <q-layout view="hHh lpR fFf">
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="primary"
      size="10px"
    />
  <custom-header></custom-header>
    <q-page-container class="main_background">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import CustomHeader from 'components/header/CustomHeader.vue';
  export default defineComponent({

    name: 'MainLayout',
    // eslint-disable-next-line vue/no-unused-components
    components: {CustomHeader},
    setup() {
      return {

      }
    },
    methods:{

    }
  });
</script>
