//入口文件
import Vue from "vue"

//导入app
import app from "./App.vue"

//1.1导入路由
import vueRouter from "vue-router"
//1.2使用路由
Vue.use(vueRouter)
    //1.3导入自己的router.js
import router from "./router.js"

//导入mui
import "./lib/MUI/css/mui.min.css"

//导入mui font
import "./lib/MUI/fonts/mui-icons-extra.ttf"

//导入mui icons-extra
import "./lib/MUI/css/icons-extra.css"

//导入 mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router //1.4挂载路由对象
})