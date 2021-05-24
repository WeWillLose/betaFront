<template>
  <div>
    <q-form>
      <h5><strong>Иформация об учителе</strong></h5>
      <div class="row q-gutter-md">
        <q-input class="col-12 col-md" label="Фамилия" ref="lastNameField"
                 :rules="[ruleApi.required()]"
                 v-model="lastName"></q-input>
        <q-input class="col-12 col-md" label="Имя" ref="firstNameField"
                 :rules="[ruleApi.required()]"
                 v-model="firstName"></q-input>
        <q-input class="col-12 col-md" label="Отчество" ref="middleNameField"
                 :rules="[ruleApi.required()]"
                 v-model="middleName"></q-input>
      </div>
      <h5><strong>Информация об отчете</strong></h5>
      <div class="row q-gutter-md">
        <q-select :options="quarterOptions" class="col" ref="quarterField"
                  :rules="[ruleApi.required()]"
                  label="Квартал" hint="За какой квартал" v-model="quarter"></q-select>
        <q-input class="col-12 col-md" type="number" label="Год" ref="year1Field"
                 :rules="[ruleApi.required()]"
                 hint="С какого года" v-model="year1"></q-input>
        <q-input class="col-12 col-md" type="number" label="Год" ref="year2Field"
                 :rules="[ruleApi.required()]"
                 hint="По какой год" v-model="year2"></q-input>
      </div>
      <h5></h5>
      <div class="row q-gutter-md">
        <q-input class="col-12 col-md" type="text" label="Название отчета" ref="reportNameField"
                 hint="" v-model="reportName"></q-input>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
  import {computed, defineComponent, ref,Ref} from 'vue';
  import {useStore} from 'src/store';
  import { QFiledHasError } from 'src/store/report/types';
  import ruleApi from 'src/api/RuleApi';

  export default defineComponent({
    name: 'MetaTitle',
    setup() {
      const store = useStore();
      const quarterOptions = [1, 2, 3, 4]

      const firstName = computed({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        get: () => store.getters['report/meta/getFirstName'] as string,
        set: (val) => store.commit('report/meta/setFirstName', val)
      })
      const lastName = computed({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        get: () => store.getters['report/meta/getLastName'] as string,
        set: (val) => store.commit('report/meta/setLastName', val)
      })
      const middleName = computed({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        get: () => store.getters['report/meta/getMiddleName'] as string,
        set: (val) => store.commit('report/meta/setMiddleName', val)
      })
      const year1 = computed({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        get: () => store.getters['report/meta/getYear1'] as number,
        set: (val) => store.commit('report/meta/setYear1', val)
      })
      const year2 = computed({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        get: () => store.getters['report/meta/getYear2'] as number,
        set: (val) => store.commit('report/meta/setYear2', val)
      })
      const quarter = computed({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        get: () => store.getters['report/meta/getQuarter'] as number,
        set: (val) => store.commit('report/meta/setQuarter', val)
      })
      const reportName = computed({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        get: () => store.getters['report/meta/getReportName'] as string,
        set: (val) => store.commit('report/meta/setReportName', val)
      })

      let firstNameField = ref(null) as unknown as Ref<QFiledHasError>
      let lastNameField = ref(null) as unknown as Ref<QFiledHasError>
      let middleNameField = ref(null) as unknown as Ref<QFiledHasError>
      let year1Field = ref(null) as unknown as Ref<QFiledHasError>
      let year2Field = ref(null) as unknown as Ref<QFiledHasError>
      let quarterField = ref(null) as unknown as Ref<QFiledHasError>
      let reportNameField = ref(null) as unknown as Ref<QFiledHasError>

      function hasError(): boolean {
        void firstNameField.value.validate()
        void lastNameField.value.validate()
        void middleNameField.value.validate()
        void quarterField.value.validate()
        void year1Field.value.validate()
        void year2Field.value.validate()

        return firstNameField.value.hasError ||
          lastNameField.value.hasError ||
          middleNameField.value.hasError ||
          quarterField.value.hasError ||
          year1Field.value.hasError ||
          year2Field.value.hasError
      }
      return {
        firstName, lastName, middleName, quarter, year1, year2, quarterOptions,
        firstNameField, lastNameField, middleNameField, quarterField, year1Field, year2Field,reportNameField,reportName,
        hasError,ruleApi
      }
    },
  })
</script>

<style scoped>

</style>
