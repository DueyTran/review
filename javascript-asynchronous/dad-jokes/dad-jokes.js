const axios = require('axios');

let jokePromise = axios.get('https://api.chucknorris.io/jokes/random');

jokePromise
.then (
    (res) => {
        console.log(res.data.value)
    },
    (error) => {
        console.log(error);
    }
)