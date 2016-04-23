import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import configRouter from './routes'
import filters from './utils/filters'

import App from './App.vue'
import lazyload from 'vue-lazyload'
import Mock from 'mockjs'

import './assets/styles/base.css'

Vue.config.debug = true


Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

$.ajaxSettings.crossDomain = true;
// 使用 Mock
window.Mock = Mock;

Vue.use(lazyload, {
  error: '../../src/assets/images/common/error.png',
  loading: '../../src/assets/images/common/loading.gif',
  try: 3 // default 2
});

var router = new VueRouter({
  //abstract:true,
  //地址栏不会有变化
  //以下设置需要服务端设置
  //history: false,   //当使用 HTML5 history 模式时，服务器需要被正确配置 以防用户在直接访问链接时会遇到404页面。
  //saveScrollPosition: false
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true,
  linkActiveClass:'nav-active' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
})

configRouter(router)
sync(store, router)

router.start(Vue.extend(App), 'app')

window.router = router


