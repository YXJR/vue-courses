<template>
  <div>
    <button
      @click="log"
      v-if="!isLogin"
    >登录</button>
    <button
      v-else
      @click="user/logout"
    >登出</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    log () {
      //1.commit一个mutation来触发login事件
      //window.isLogin = true
      // this.$store.commit('login')
      //登录成功之后去来之前的重定向
      // this.$router.push(this.$route.query.redirect)
      // this.$router.addRoutes([
      //   {
      //     path: '/Admin',
      //     name: 'Admin',

      //     component: () =>
      //       import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'), //路由懒加载
      //     // children: [
      //     //   {
      //     //     path: 'Detail/:name',
      //     //     name: 'Detail',
      //     //     component: () => import(/* webpackChunkName: "Detail" */'../views/Detail.vue'),
      //     //   },
      //     // ],
      //   },
      // ])
      // const redirect = this.$route.query.redirect || "/";
      // alert(redirect);
      // this.$router.push(redirect);

      //2.dispatch一个Action来触发login事件
      //this.$store.dispatch('login', 'admin') //引入模块化之前
      //this.$store.dispatch('user/login', 'admin')
      this['user/login']('admin')
        .then(() => {
          this.$router.addRoutes([
            {
              path: '/Admin',
              name: 'Admin',

              component: () =>
                import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'), //路由懒加载
              // children: [
              //   {
              //     path: 'Detail/:name',
              //     name: 'Detail',
              //     component: () => import(/* webpackChunkName: "Detail" */'../views/Detail.vue'),
              //   },
              // ],
            },
          ])
          this.$router.push(this.$route.query.redirect)


        })
        .catch(() => { alert('用户名或密码错误') })


    },
    // logOut () {
    //   //window.isLogin = false
    //   this.$store.commit('logout')

    // }
    ...mapActions(['user/login', 'user/logout']) //使用映射后的修改
  },
  // computed: {
  //   isLogin () {
  //     return window.isLogin
  //   }
  // },
  computed: { ...mapState('user', ['isLogin']) }

}
</script>

<style lang="scss" scoped>
</style>