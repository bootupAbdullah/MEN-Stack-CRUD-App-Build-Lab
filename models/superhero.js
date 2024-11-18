// models/superhero.js

const mongoose = require("mongoose");

const superheroSchema = new mongoose.Schema({
    name: String,
    canTheyFly: Boolean,
});

const Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = Superhero;