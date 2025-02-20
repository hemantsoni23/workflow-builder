const sqlite3 = require('sqlite3').verbose()

// Change the database path if needed
const db = new sqlite3.Database('E:/Office/Noyco/Agent_builder/workflow-builder/packages/server/database.sqlite', (err) => {
    if (err) {
        return console.error(err.message)
    }
    console.log('Connected to SQLite database.')
})

db.all("SELECT name FROM sqlite_master WHERE type='table';", [], (err, rows) => {
    if (err) {
        throw err
    }
    console.log('Existing Tables:', rows)
})

db.close()
