const Movie = require("../models/Movies");

exports.addOne = async  (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
}

exports.getOne = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            res.status(404).send();
        }

        res.json(movie);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send();
    }
}

exports.getAll = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
}

exports.updateOne =  async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!movie) {
        res.status(404).send();
    }

    res.json(movie);
}

exports.deleteOne = async (req, res) => {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

    if (!deletedMovie) {
        res.status(404).send();
    }
    
    res.json(deletedMovie);
}

