import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    routes:[
        {
            path:'/other/:name'
        }
    ]
})

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
