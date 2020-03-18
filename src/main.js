//入口文件
import Vue from "vue"

//导入app
import app from "./App.vue"

//导入mui
import "./lib/MUI/css/mui.min.css"
//导入 mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
var vm = new Vue({
    el: "#app",
    render: c => c(app)
})