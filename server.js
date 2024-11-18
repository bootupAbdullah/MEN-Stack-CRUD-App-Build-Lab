//set up dotenv, (npm i mongoosed dotenv)
const dotenv = require('dotenv');
dotenv.config();

//load express
const express = require("express");

//set up mongoose
const mongoose = require('mongoose');

const app = express();


//Connect to MongoDB using he connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);
//log this connecttion status to the console to ensure connection is running smoothly and without error.
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}, eureka!`)
});

// import superhero model
const Superhero = require("./models/superhero.js");



//building first route/home page
//GET /
app.get('/', async (req, res) =>{ 
    res.render("index.ejs");
});





app.listen(3001, () => {
    console.log("Listening on port 3001");
});


