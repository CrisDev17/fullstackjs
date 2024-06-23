import Vue from 'vue'
import App from './App.vue'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon  }  from '@fortawesome/vue-fontawesome'
library.add(fas,fab)
Vue.component('font-awesome-icon', FontAwesomeIcon )

// vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './Routes'
const router = new VueRouter({
  mode : 'history',
  routes 
})


//vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
// router.beforeEach((to,from,next) => {
//   if(to.meta.requiredLogin){
//     next({name: login})
//   }
// })

import store from './store'
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
  data(){
    return {message: "đây là ví dụ khởi tạo 1 instance trong vue"}
  }
}).$mount('#app')
