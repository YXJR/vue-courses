const express = require('express')
const app = express()
app.get('/api/courses', (req, res) => {
  res.json([
    { name: '电电小坏蛋', price: '无价' },
    { name: 'web高级', price: 2990 },
    { name: 'web全栈', price: 7800 },
  ])
})
app.listen(3000)
