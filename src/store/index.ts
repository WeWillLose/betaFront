
import createPersistedState from 'vuex-persistedstate'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'
import user from './user'
import header from './header'
import report from './report'

import { UserStateInterface } from 'src/store/user/state';
import { HeaderStateInterface} from 'src/store/header/state';
import { ReportStateInterface } from 'src/store/report/state';


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  user: UserStateInterface,
  header: HeaderStateInterface,
  report: ReportStateInterface
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default  createStore<StateInterface>({
    modules: {
      user,
      header,
      report
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    // strict: !!process.env.DEBUGGING,
    strict:false,
    plugins: [createPersistedState()]
  })

export function useStore() {
  return vuexUseStore(storeKey)
}
