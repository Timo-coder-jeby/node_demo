const express = require('express')
const app = express()
const port = 3000
app.get('/app',(req,res)=>{
  const data = {
    code:200,
    data:[
      {name:'数据1',no1:'1'},
      {name:'数据2',no1:'2'},
      {name:'数据3',no1:'3'},
      {name:'数据4',no1:'4'},
    ],
    msg:'success'
  }
  res.send(data)
})
app.post('/',(req,res)=>{
  res.send('POST 请求')
})
app.all('/secret',(req,res,next)=>{
  res.send('无状态请求')
  next()
})
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})