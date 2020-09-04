<template>
  <div class="message-box" v-if="show">
    <!--具名插槽-->
    <slot name="title" title="来自message的标题">默认标题</slot>
    <!--通过slot获取传入内容-->
    <slot></slot>
    <span class="message-box-close" @click="toggle">X</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '开课吧购物车',
      show: false,
    }
  },
  mounted() {
    // this.$bus.$on('message-close', () => {
    //   this.toggle()
    // })
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
.message-box {
  padding: 10px 20px;
}
.message-box-close {
  float: right;
}
</style>
