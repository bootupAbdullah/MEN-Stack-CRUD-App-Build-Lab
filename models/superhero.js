// models/superhero.js

const mongoose = require("mongoose");

const superheroSchema = new mongoose.Schema({
    name: String,
    canTheyFly: Boolean,
    superStrength: Boolean,
    heatVision: Boolean,
    superSpeed: Boolean
});

const Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = Superhero;