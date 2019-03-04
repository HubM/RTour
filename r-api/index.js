const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome on RTour api service')
})

app.listen(3000, function () {
  console.log('Rtour api running on localhost:3000 !')
})