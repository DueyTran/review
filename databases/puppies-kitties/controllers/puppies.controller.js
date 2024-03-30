const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');
client.connect();
const db = client.db('puppies');

exports.getAll = (req, res) => {
    res.json(puppies);
};

exports.addOne = async (req, res) => {
        const collection = db.collection('puppies');
        await collection.insertOne(req.body);
        const puppy = req.body;
        puppy.id = id;
        id++;
        puppies.push(puppy);
        res.json(puppy)
};

exports.getOne = (req, res) => {
    let id = req.params.id;
    let foundPuppy;

    for (let i = 0; i < puppies.length; i++) {
        if (puppies[i].id == id) {
            foundPuppy = puppies[i];
        }
    }

    if (foundPuppy) {
        res.json(foundPuppy);
    }
    else {
        res.status(404).send();
    }
};

exports.updateOne = (req, res) => {
    let id = req.params.id;
    let foundPuppy = puppies.find(puppy => puppy.id == id);

    if (foundPuppy) {
        let updatedProps = req.body;

        for (let key in updatedProps) {
            foundPuppy[key] = updatedProps[key];
        }
        res.json(foundPuppy);
    }
    else {
        res.status(404).send();
    }
};

exports.deleteOne = (req, res) => {
    let id = req.params.id;
    let foundIndex = puppies.findIndex(puppy => puppy.id == id)

    if (foundIndex >= 0) {
        let deletedPuppy = puppies.splice(foundIndex, 1);
        res.json(deletedPuppy[0]);
    }
    else {
        res.status(404).send();
    }
};