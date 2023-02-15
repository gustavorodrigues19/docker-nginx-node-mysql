'use strict'

const express = require('express')
const mysql = require('mysql2')

const PORT = 3333
const HOST = '0.0.0.0'

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'peopledb',
})

const app = express()
app.get('/', async (req, res) => {
    let htmlString = '<h1>Full Cycle Rocks!</h1>'
    htmlString += '<ul>'
    connection.query('INSERT INTO people (name) VALUES(?)', ['new user added'])
    connection.query('SELECT * FROM people', function (err, results) {
        results.forEach((person) => (htmlString += `<li>${person.name}</li>`))
        htmlString += '</ul>'
        res.send(htmlString)
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})
