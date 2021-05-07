<template>
  <div class="fullscreen">
    <q-img
      src="~assets/animeBoys.gif"
      class="gif_bg"
    >
      <div class="absolute-center text-white text-h3 text-center ">
        Упс! Что-то пошло не так
        <q-btn
          class="text-h6 q-mt-md"
          color="grey"
          text-color="white"
          unelevated
          to="/"
          label="Назад в изведанные земли"
          no-caps/>
      </div>

    </q-img>
    <!--    <div>-->
    <!--      <div style="font-size: 30vh">-->
    <!--        404-->
    <!--      </div>-->

    <!--      <div class="text-h2" style="opacity:.4">-->
    <!--        Упс. Что то пошло не так  &#128565;-->
    <!--      </div>-->

    <!--      <q-btn-->
    <!--        class="q-mt-xl"-->
    <!--        color="white"-->
    <!--        text-color="blue"-->
    <!--        unelevated-->
    <!--        to="/"-->
    <!--        label="Назад в изведанные земли"-->
    <!--        no-caps-->
    <!--      />-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Error404'
  });
</script>
<style>

</style>
