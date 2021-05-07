<template>
  <q-page >
    <admin-tabs></admin-tabs>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent} from 'vue';
  import { useStore } from 'src/store';
  import AdminTabs from 'src/components/admin/AdminTabs.vue';

  export default defineComponent({
    name: 'AdminPage',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    components: { AdminTabs },
    setup(){
      const store = useStore()
      void store.dispatch('user/getUsers')
    }
  });
</script>


