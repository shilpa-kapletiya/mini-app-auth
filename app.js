const express = require('express')
const mongoose = require('mongoose')
const app = express()


const bodyParser = require('body-parser')
const { config } = require('dotenv')

require('dotenv/config')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const filmsRoute = require('./routes/films')
const authRoute = require('./routes/auth')

app.use('/api/film',filmsRoute)
app.use('/api/user',authRoute)

const connectToMongo = async () => {
  await mongoose.connect(process.env.DB_CONNECTOR);
  console.log("Connected to MongoDB");
};

connectToMongo();

app.listen(3000,()=>{
    console.log("Server is running!")
})