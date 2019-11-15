const express = require('express')
const {join} = require('path')
const app = express()


const mysql = require('mysql2')
const db = mysql.createConnection({
host: 'localhost',
user:'root',
password: 'password',
database: `burger_time_db`
})

app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')

db.query(`SELECT * FROM burgers`, (e, data) => {
    if (e) {console.log(e)}
    console.log(data)
    })


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    res.render('index')
})

app.put('/', (req, res) => {
    res.render('index')
})

app.delete('/', (req, res) => {
    res.render('index')
})



app.listen(3000)