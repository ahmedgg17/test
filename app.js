
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile("./public/index.html",{  root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})