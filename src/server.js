const express = require('express')
const route = require('./route') /* importação da rota */
const path = require('path')

const server = express()

server.set('view engine', 'ejs') /* nossa view engine será o ejs */

server.use(express.static('public'))

server.set(
    'views',
    path.join(__dirname, 'views')
) /* dizendo onde está a pasta views para rodar direitinho dentro da pasta src */ // __dirname = src/views

server.use(express.urlencoded({ extended: true }))

server.use(route) /* usando a rota */

server.listen(3000, () =>
    console.log('Server listening on port')
) /* rodando em node */
