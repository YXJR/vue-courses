// 模拟异步数据调用

import axios from 'axios'
// axios.defaults.url = 'http://localhost:3000'
export function getCourses() {
  return axios.get('/api/courses').then((res) => res.data)
}
