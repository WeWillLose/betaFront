import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { RestApi } from 'src/api/RestApi';
import notifyApi from 'src/api/NotifyApi';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

export const resource: AxiosInstance = axios.create({
  baseURL:'https://backend1234560.herokuapp.com/api/v1',
});

resource.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log(error);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.response) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if(error.response.status == 403){
        notifyApi.showNegative('У вас нет доступа или залогинтесь опять')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      } else if(error.response.status == 500){
        notifyApi.showNegative('Ошибка сервера')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      }  else if(error.response.status == 504){
      notifyApi.showNegative('Сервер не ответил')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      } else if(error.response.status == 409){
        notifyApi.showNegative('Проверьте данные. На сервере произошел конфликт(Возможно что-то уже есть с такими же данными)')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      } else if(error.response.status == 400){
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        notifyApi.showNegative(error?.response?.data?.messages[0] || 'Сервер ответил ошибкой')
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      else {
        notifyApi.showNegative('Сервер ответил ошибкой')
      }
    }
     return Promise.reject(error);
  });

const restApi = new RestApi(resource);


export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = restApi;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, restApi };
