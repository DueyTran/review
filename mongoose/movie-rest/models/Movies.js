const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    year:  Number,
    director: String
});

const  Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;