<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense @click="invertLeftDrawerState" icon="menu"></q-btn>
        <q-toolbar-title>
          <q-avatar class="q-mr-sm" >
            <q-icon name="description" size="lg" @click="toRoot"/>
          </q-avatar>
          Docx
        </q-toolbar-title>
        <q-btn round flat>
          <q-avatar size="26px">
            <q-icon name="fas fa-user"></q-icon>
          </q-avatar>
          <q-menu
            content-class="user_menu"
          >
            <q-list style="min-width: 150px">
              <q-item>
                <q-item-section>
                  <q-item-label>{{username}}</q-item-label>
                  <q-item-label caption>
                    {{ shortFio }}
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable @click="logout">
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="logout" color="blue"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Выход</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      :mini="miniLeftDrawerState"
      @mouseover="invertMiniLeftDrawerState"
      @mouseout="invertMiniLeftDrawerState"
      persistent
      show-if-above
      bordered
      :breakpoint="500"
      class="bg-secondary"
    >
      <template v-for="(menuItem, index) in leftDrawerMenuList">
        <template v-if="hasRole(menuItem.role)">
          <essential-link
            :key="index"
            :item="menuItem"
          />
          <q-separator :key="'sep' + index" v-if="menuItem.separator"/>
        </template>
      </template>
    </q-drawer>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import EssentialLink from './EssentialLink.vue';
  import { useStore } from 'src/store';
  import userUtils from 'src/utils/user/user';
  import { ERole } from 'src/model/role/Role';
  import notifyApi from 'src/api/NotifyApi';
  import { useRouter } from 'vue-router'


  export default defineComponent({

      name: 'CustomHeader',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      components: { EssentialLink },
      setup() {
        const store = useStore()
        const leftDrawerOpen = ref(false);
        const router = useRouter()
        const miniLeftDrawerState = ref(true);
        const isAdmin = ref(true);
        const leftDrawerMenuList = computed(()=> store.state.header.leftDrawerMenuList);
        const userMenuItems = computed(()=> store.state.header.userMenuList);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const isLogin = computed(()=> store.getters['user/getIsLoggedIn'] as boolean);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const username = computed(()=> store.getters['user/getUsername'] as string);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const shortFio =  computed(()=> store.getters['user/getShortFio'] as string);

        function toRoot(){
          void router.push('/')
        }
        function invertLeftDrawerState(): void {
          leftDrawerOpen.value = !leftDrawerOpen.value;
        }
        function invertMiniLeftDrawerState(): void {
          miniLeftDrawerState.value = !miniLeftDrawerState.value;
        }
        function hasRole(role: ERole | null): boolean {
          if (!role) return true;
          try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return userUtils.hasRole(store.state.user?.user, role);
          } catch (e) {
            return false;
          }
        }
        function logout(): void {
          setTimeout(() => {
            void userUtils.logout().then(isSuccess => {
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              if (isSuccess) router.push('/login');
              else notifyApi.showNegative('Ошибка')
            });
            }, 300
          );
        }
        return {
          leftDrawerOpen,
          miniLeftDrawerState,
          leftDrawerMenuList,
          isAdmin,
          isLogin,
          username,
          userMenuItems,
          shortFio,
          toRoot,
          invertLeftDrawerState,
          invertMiniLeftDrawerState,
          hasRole,
          logout
        };
      },
    }
  );
</script>

<style scoped type="scss">

</style>
