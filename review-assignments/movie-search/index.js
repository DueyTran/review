const omdb = require("./omdb");

async function run() {
    let axiosResponse = await omdb.search('lion')
    
        for (let i = 0; i < 3; i++) {
        let movie = axiosResponse.data.Search[i];
            console.log(movie.Title + " " + movie.Year)  
        }

    console.log("Total Results: " + axiosResponse.data.totalResults);       
     
}

run();