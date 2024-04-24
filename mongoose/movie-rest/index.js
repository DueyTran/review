const express  = require('express');
const routes  = require('./routes');
const  mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movieapp");
const db = mongoose.connection;

db.once("open", async () => {
    console.log("Connected!");
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

