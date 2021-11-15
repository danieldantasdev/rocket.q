const express = require('express')
const route = require('./route') /* importação da rota */
const path = require('path')

const server = express()

const port = process.env.PORT || 3000 //deploy heroku para

server.set('view engine', 'ejs') /* nossa view engine será o ejs */

server.use(express.static('public'))

server.set(
    'views',
    path.join(__dirname, 'views')
) /* dizendo onde está a pasta views para rodar direitinho dentro da pasta src */ // __dirname = src/views

server.use(express.urlencoded({ extended: true }))

server.use(route) /* usando a rota */

server.listen(port, () =>
    console.log('Aplicação rodando em http://localhost:3000')
) /* rodando em node */
