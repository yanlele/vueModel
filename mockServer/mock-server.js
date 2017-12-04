const express = require('express')
const mockServer = express()
const bodyParser = require('body-parser')
const Mock = require('./mock.js')

mockServer.use(bodyParser.json())
mockServer.use(bodyParser.urlencoded({ extended: true }))

mockServer.use('/*', (req, res, next) => {
  const JsonPath =req.params[0].replace(/\//g,'.')
  res.json(eval(`Mock.${JsonPath}`))
})

const server = mockServer.listen(107, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("running in", host, port)
})