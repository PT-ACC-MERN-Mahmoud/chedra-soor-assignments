const Joke = require('../models/jokes.models');

const getAllJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => res.json(allJokes))
    .catch((err) => console.log('ERROR! Failure to Find All Jokes', err));
};

const getJokeById = (req, res) => {
    Joke.findById(req.params.id)
    .then((joke) => res.status(201).json(joke))
    .catch((err) => console.log('ERROR! Failure to Find Jokes by ID', err));
};

const createJoke = (req, res) => {
    Joke.create(req, body)
    .then((newJoke) => res.status(201).json(newJoke))
    .catch((err) => console.log('ERROR! Creation Messed Up!', err));
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
    })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => console.log('ERROR! Failed to Update Joke',err));
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => console.log('ERROR! Joke was not DELETED!!',err));
};

module.exports = {
    getAllJokes,
    getJokeById,
    createJoke,
    updateJoke,
    deleteJoke,
};