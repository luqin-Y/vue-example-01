import { axios } from '../utils'

export default Vue => {
    // mount the axios to Vue  (Vue.axios = axios)
    Object.defineProperties(Vue, {
        axios: {get: () => axios}
    });

    // mount the axios to Vue component instance (Vue.prototype.$axios = axios)
    Object.defineProperties(Vue.prototype, {
        $axios: {get: () => axios}
    });
}