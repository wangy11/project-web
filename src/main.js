// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MyBread from '@/components/cuscom/myBread.vue'
import router from './router'
import MyServerHttp from '@/plugins/http.js'
import moment from 'moment'
//引用element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//重置样式
import '@/assets/css/reset.css'

Vue.use(ElementUI);
//axios插件
Vue.use(MyServerHttp)

Vue.config.productionTip = false

//全局过滤器
Vue.filter('fmtdata', (v) => {
    return moment(v).format('YYYY-MM-DD')
})

Vue.component(MyBread.name, MyBread)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})