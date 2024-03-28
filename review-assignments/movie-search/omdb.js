const axios = require('axios');

function search(movie) {
    return axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=8dc4c694`);

}


module.exports = {
    search,
}