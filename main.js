import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import * as filters from '@/filters/index.js'
Object.keys(filters).forEach((key => {
  Vue.filter(key, filters[key])
}))
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
