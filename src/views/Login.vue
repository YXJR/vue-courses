<template>
  <div>
    <button
      @click="log"
      v-if='isLogin'
    >登录</button>
    <button
      v-else
      @click="logOut"
    >登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    log () {
      window.isLogin = true
      //登录成功之后去来之前的重定向
      // this.$router.push(this.$route.query.redirect)
      this.$router.addRoutes([
        {
          path: '/Admin',
          name: 'Admin',

          component: () =>
            import(/* webpackChunkName: "about" */ '../views/Admin.vue'), //路由懒加载
          children: [
            {
              path: ':name',
              name: 'Detail',
              component: () => import('../views/Detail.vue'),
            },
          ],
        },
      ])


      const redirect = this.$route.query.redirect || "/";
      alert(redirect);
      this.$router.push(redirect);
    },
    logOut () {
      window.isLogin = true
    }
  },
  computed: {
    isLogin () {
      return window.isLogin
    }
  },
}
</script>

<style lang="scss" scoped>
</style>