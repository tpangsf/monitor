// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false

function getLocalLanguage () {
  var localLanguage = navigator.language
  var resLang = 'en'
  if (localLanguage) {
    var langArr = localLanguage.split('-')
    if (langArr.length > 0) {
      resLang = langArr[0]
    }
  }
  return resLang
}

const i18n = new VueI18n({
  locale: getLocalLanguage(),
  messages: {
    'zh': require('./locale/zh'),
    'en': require('./locale/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
