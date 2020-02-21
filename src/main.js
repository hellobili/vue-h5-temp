import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// css样式
import '@/styles/index.styl'
// h5 rem适配
import 'amfe-flexible'
// 移动端延迟点击处理
import FastClick from 'fastclick'
FastClick.attach(document.body)

// FastClick 兼容 IOS12
// FastClick.prototype.focus = function(targetElement) {
//   let length
//   if (
//     deviceIsIOS &&
//     targetElement.setSelectionRange &&
//     targetElement.type.indexOf('date') !== 0 &&
//     targetElement.type !== 'time' &&
//     targetElement.type !== 'month'
//   ) {
//     length = targetElement.value.length
//     targetElement.setSelectionRange(length, length)
//     targetElement.focus()
//   } else {
//     targetElement.focus()
//   }
// }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
