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
const Superhero = require('./models/superhero.js');

//conver /new page form data to req.body so that express receive it
app.use(express.urlencoded({ extended: false }));


//building first route/home page
//GET /
app.get('/', async (req, res) =>{ 
    res.render("homepage.ejs");
});

// display index route - also the route which submits the '.create' functionality to mongoDB - previously was route only and not a 'page'
app.get('/superheroes', async (req, res) => {
    const allSuperheroes = await Superhero.find();
    console.log(allSuperheroes);
    res.render('superheroes/index.ejs', {superheroes: allSuperheroes})
})

//GET superhero/new - purpose is to display a form for data entry.
app.get('/superheroes/new', (req,res) => {
    res.render("superheroes/new.ejs")
});

// 1st iteration with 'redirect' the route when 'arrived at' by submitting the form or clicking the 'submit' button on the /new page will 'send the information' to the route below /superheroes/ which will in turn commnicate to express what the form values/or infromation was. If issue with route in future check ejs file for form 'action' and 'method' 
app.post("/superheroes", async (req, res) => {
    if (req.body.canTheyFly === "on") {
        req.body.canTheyFly = true;
    } else {
        req.body.canTheyFly = false;
    }
    await Superhero.create(req.body); // this is what is directly communicating to the mongoDB database and creating the input from the form
    res.redirect('/superheroes');
});


app.listen(3001, () => {
    console.log("Listening on port 3001");
});


