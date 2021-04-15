const express = require('express')
const server = express()

server.get('*', (req, res) => {
  res.redirect('https://' + req.headers.host + req.url)
})

server.listen(3000)
server.on('listening', () => {
  console.log("Redirecting traffic from http to https")
})