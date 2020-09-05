<template>
  <div class='detail'>
    <h1>this is detail page!</h1>
    <p>{{$route.params.name}}</p>
  </div>
</template>

<script>
export default {
  watch: {
    //由于组件复用,组件只会渲染一次,动态路由切换更改参数,若要根据此参数请求ajax时,只会请求一次;所以要监测路由变化

    $route: {
      immediate: true,
      handle: () => {
        //console.log('route change')
        alert('route change')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>