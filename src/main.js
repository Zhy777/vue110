//入口文件
import Vue from "vue"

//导入app
import app from "./App.vue"

//1.1导入路由
import vueRouter from "vue-router"
//1.2使用路由
Vue.use(vueRouter)

// 2.1导入 vue-resource
import VueRedource from 'vue-resource'
// 2.2使用 vue-resource
Vue.use(VueRedource)
    //1.3导入自己的router.js
import router from "./router.js"

//导入mui
import "./lib/MUI/css/mui.min.css"

//导入mui font
import "./lib/MUI/fonts/mui-icons-extra.ttf"

//导入mui icons-extra
import "./lib/MUI/css/icons-extra.css"

//导入 mint-ui
import { Header, Swipe, SwipeItem } from 'mint-ui'; //按需导入
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router //1.4挂载路由对象
})