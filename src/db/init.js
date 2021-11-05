const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`)

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`)

        await db.close()
    }
}
/* await está falando para rodar o Database e espera que ele rode completamente para ir para próxima linha  */
/* async e await são dependentes */

initDb.init()
