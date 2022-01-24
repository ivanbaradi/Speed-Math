//Express App
const express = require('express')
const app = express()

//Apply files from 'public' folder
app.use(express.static('public'))
//Sets EJS Engine to enable JS templates
app.set('view engine', 'ejs')

//API Library containing routes
const library = require('./library')
//Adding port 3000 to host the website
app.listen(3000, () => console.log("listening to port 3000"))

app.get('/', library.redirectToMathGame)
app.get('/game', library.directToMathGame)