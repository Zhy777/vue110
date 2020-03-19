//1，导入vue-router包
import VueRouter from "vue-router"

import homeContainer from "./compontents/tabber/homeContainer.vue"
import membeContainer from "./compontents/tabber/membeContainer.vue"
import shoppingContainer from "./compontents/tabber/shoopingContainer.vue"
import searchContainer from "./compontents/tabber/searchContainer.vue"




//3，创建路由对象
var router = new VueRouter({
    routes: [ //配置路由规则
        { path: "/", redirect: '/home' },
        { path: "/home", component: homeContainer },
        { path: "/member", component: membeContainer },
        { path: "/shopping", component: shoppingContainer },
        { path: "/search", component: searchContainer }

    ],
    linkActiveClass: "mui-active" //设置默认高亮的类
})

export default router