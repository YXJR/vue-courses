<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Admin">Admin</router-link>
    </div>
    <div v-if='isLogin'>
      {{welcome}}
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {

  computed: {
    ...mapGetters('user', ['welcome']),
    ...mapState('user', ['isLogin'])
  },
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
