const express = require('express')

const route = express.Router()

route.get('/', (req, res) =>
    res.render('index')
) /* requisição e resposta, resposta vai renderizar o index */
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

module.exports = route /* define exportação da rota */
