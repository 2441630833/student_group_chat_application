import App from './App'
import io from './common/uni-socket.io.js'
// #ifndef VUE3(VUE2)
import Vue from 'vue'
import { BASE_URL } from './config.js';
Vue.config.productionTip = false
Vue.prototype.socket= io(BASE_URL + ':8082'
,
{
  query: {},
  transports: [ 'websocket', 'polling' ],
  timeout: 5000,
},
)
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
