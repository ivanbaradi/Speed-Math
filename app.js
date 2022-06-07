//Express App
const express = require('express')
const app = express()

//Connecting MongoDB
const mongoose = require('mongoose')
const dbURI = require('./dbURI')
mongoose.connect(dbURI.URI)
.then((res) => {
  console.log('mongo DB connected')
  app.listen(3000, () => console.log("listening to port 3000"))
})
.catch((err) => console.log('unable to connect to DB \n error:', err))


//Apply files from 'public' folder
app.use(express.static('public'))
//Sets EJS Engine to enable JS templates
app.set('view engine', 'ejs')

//API Library containing routes
const library = require('./library')
//Adding port 3000 to host the website
// app.listen(3000, () => console.log("listening to port 3000"))

app.get('/', library.homePage)

//Debugger
app.get('/test', library.addEntryPage)

//Error Page
app.use(library.errorPage)
