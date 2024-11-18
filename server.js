//load express
const express = require("express");

const app = express();

//building first route/home page
//GET /
app.get('/', async (req, res) =>{ 
    res.render("index.ejs");
});





app.listen(3001, () => {
    console.log("Listening on port 3001");
});


