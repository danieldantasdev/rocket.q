const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
/* Js vai dentro do sqlite e procura somente a função open, que vamos usar no projeto atual */

module.exports = () => {
    open({
        filename: '/src/db/rocketq.sqlite',
        driver: sqlite3.Database
    })
}
