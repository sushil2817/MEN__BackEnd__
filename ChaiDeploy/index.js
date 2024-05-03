require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000// in our pc 65555 port almost



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res)=>{
      res.json({githubData})//add github user json data
})

app.get('/twitter',(req,res)=>{
    res.send("<h1>This is sushil twitter account</h1>")
})



app.get('/login',(req,res)=>{
     res.send("<h1>login at backend</h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})