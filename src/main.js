import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式
import './styles/index.less'

// 加载 Vant 核心组件库
import Vant from 'vant'
// // 加载 Vant 全局样式
import 'vant/lib/index.css'

// 注册使用 Vant 组件库
Vue.use(Vant)

// 单个组件映入
// import { Button, Cell, CellGroup } from 'vant'
// Vue.use( Button, Cell )报错
// Vue.use(Button)
// Vue.use(Cell)
// Vue.use(CellGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
