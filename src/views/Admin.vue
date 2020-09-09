<template>
  <div class="admin">
    <h2 :title="title">
      <svg class="icon">
        <use xlink:href="#icon-gouwuche"></use>
      </svg>
      <!-- 插值文本 -->
      {{ title }}
    </h2>
    <!-- 弹窗组件 -->
    <!-- <message :show.sync="show" class="success"> -->
    <message
      ref="msgSuccess"
      class="success"
    >
      <!-- 命名为title插槽内容 -->
      <template v-slot:title="slotProps">
        <strong>{{ slotProps.title }}</strong>
      </template>
      <!-- 默认插槽内容 -->
      <template v-slot:default>
        新增课程成功!
      </template>
    </message>

    <!-- <message :show.sync="showWarn" class="warning"> -->
    <message
      ref="msgWarning"
      class="warning"
    >
      <!-- 命名为title插槽内容 -->
      <template v-slot:title>
        <strong>警告</strong>
      </template>
      <!-- 默认插槽内容 -->
      <template v-slot:default>
        请输入课程名称!
      </template>
    </message>

    <!-- 新增课程 -->
    <course-add
      v-model="course"
      @add-course="addCourse"
    ></course-add>
    <!-- <course-add :value="course" @input="course=$event" @add-course="addCourse"></course-add> -->

    <!-- 批量更新价格 -->
    <p>
      <input
        type="text"
        v-model.number="price"
      />
      <button @click="batchUpdate">批量更新价格</button>
    </p>

    <!-- 列表组件 -->
    <course-list :courses="courses"></course-list>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import message from '@/components/message.vue'
import courseAdd from '@/components/addCourse.vue'
import courseList from '@/components/courseList.vue'
import { getCourses } from '@/api/getCourse.js'
export default {
  components: {
    message,
    courseAdd,
    courseList,
  },

  data () {
    return {
      title: '开课吧购物车',
      course: '',
      courses: [],
      //totalCount: 0,
      // show: false,
      // showWarn: false,
      price: 0,
    }
  },
  async created () {
    // 组件实例已创建，由于未挂载，dom不存在
    const courses = await getCourses()
    this.courses = courses

    // 批量更新商品价格
    this.batchUpdate()
  },
  // mounted(){},
  methods: {
    addCourse () {
      if (this.course) {
        // 添加course到数组
        this.courses.push({ name: this.course })
        this.course = ''

        // 显示提示信息
        // this.show = true
        this.$refs.msgSuccess.toggle()
      } else {
        // 显示错误信息
        // this.showWarn = true
        this.$refs.msgWarning.toggle()
      }
    },
    batchUpdate () {
      this.courses.forEach((c) => {
        // c.price = this.price
        this.$set(c, 'price', this.price)
        // Vue.set(c, 'price', this.price)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.success {
  background: #4fc08d;
  border: 1px solid #42b983;
}

.warning {
  background: #f66;
  border: 1px solid #d63200;
}
</style>
