import home from './components/Home.vue'
import login from './components/Login.vue'
import searchOrder from './components/SearchOrder.vue'
import wishList from './components/WishList.vue'
import signUp from './components/Signup.vue'
import cart from './components/Cart.vue'
import store from './components/Store.vue'
import notFound from './components/NotFound.vue'
import test from './components/test.vue'

const routes = [
  { path: '/' , component: home, name: 'home'},
  { path: '/search-order', component: searchOrder, name: 'searchOrder'},
  { path: '/login', component: login, name: 'login' },
  { path: '/wish-list', component: wishList, name: 'wishList', meta:{ requiredLogin: false}},
  { path: '/sign-up', component: signUp, name: 'signUp' },
  { path: '/cart', component: cart, name: 'cart', meta:{ requiredLogin: false} },
  { path: '/store', component: store, name: 'store'},
  { path: '/test', component: test , name: 'test'},
  { path: '/:pathMatch(.*)*', component: notFound , name: 'pageNotFound'}
]
export default routes