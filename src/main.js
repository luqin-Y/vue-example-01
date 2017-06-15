import Vue from 'vue'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from './store'
import plugins from './plugins'

Vue.config.productionTip = false

// 引入样式
import 'normalize.css/normalize.css'    // 重置样式
import './assets/styles/main.scss'      // 项目公共样式

// 注册插件
Vue.use(plugins)

// 同步路由到仓里
sync(store, router, {moduleName: 'route'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')