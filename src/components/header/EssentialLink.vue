<template>
  <q-item
    clickable
    :to="item.link"
  >
    <q-item-section
      v-if="item.icon"
      avatar
    >
      <q-icon :name="item.icon" :color="item.iconColor"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.title }}</q-item-label>
      <q-item-label caption>
        {{ item.caption }}
      </q-item-label>
    </q-item-section>
  </q-item>

</template>

<script lang="ts">

  import { defineComponent, PropType } from 'vue';
  import { ItemInterface } from 'src/store/header/state';

  export default defineComponent({
    name: 'EssentialLink',
    props: {
      item: {
        type: Object as PropType<ItemInterface>,
        default: function() {
          return {};
        }
      },
    }
  });
</script>
