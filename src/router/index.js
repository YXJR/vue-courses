import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: ':name',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
  },
  // {
  //   path: '/Admin',
  //   name: 'Admin',
  //   //路由独享守卫
  //   // beforeEnter: (to, from, next) => {
  //   //   if (to.meta.auth) {
  //   //     //有没有登录
  //   //     if (window.isLogin) {
  //   //       next()
  //   //     } else {
  //   //       next('/login?redirect=' + to.fullPath)
  //   //     }
  //   //   } else {
  //   //     next()
  //   //   }
  //   // },
  //   // meta: {
  //   //   auth: true,
  //   // },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/Admin.vue'), //路由懒加载
  //   children: [
  //     {
  //       path: ':name',
  //       name: 'Detail',
  //       component: () => import('../views/Detail.vue'),
  //     },
  //   ],
  // },

  {
    path: '*',
    name: 'Notfound',
    component: () => import('../views/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

//全局守卫
//1.根据路由的meta字段拦截的
// router.beforeEach((to, from, next) => {
//   //是否需要守卫:通过路由的meta字段来区分
//   if (to.meta.auth) {
//     //有没有登录
//     if (window.isLogin) {
//       next()
//     } else {
//       next('/login?redirect=' + to.fullPath)
//     }
//   } else {
//     next()
//   }
// })
//2.动态路由,根据你是不是登录,动态的添加路由权限.要求用户必须去登录,否则只能去登录页

router.beforeEach((to, from, next) => {
  if (window.isLogin) {
    //已经登录了还要去登录,去/,没有要去登录页则放行
    if (to.path === '/Login') {
      next('/')
    } else {
      next()
    }
  } else {
    //没有登录要去登录,放行,不是去登录就强制去登录页并登录完成以后重定向至想去的页面
    if (to.path === '/Login') {
      next()
    } else {
      next('/Login?redirect=' + to.fullPath)
    } //登录以后在登录页面动态的添加路由权限.上面的路由就只用留下home的还有login的,剩下的动态配置
  }
})
export default router
