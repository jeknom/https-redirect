const express = require('express')
const http = require('http')
const app = express()
const port = 80

app.all('*', (req, res) => {
  res.redirect(`https://${req.headers.host}${req.url}`)
})

const httpServer = http.createServer(app)
httpServer.listen(port, () => console.log(`Redirect is listening on port ${port}!`))