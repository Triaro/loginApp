import Vue from 'nativescript-vue'
//import Home from './components/Home'
import Login from './components/Login'

import router from './router';


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
 

  render: h => h('frame', [h(Login)])
}).$start()
