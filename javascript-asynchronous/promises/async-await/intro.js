const axios = require('axios');

async function run() {
    console.log("start code");

    // async / await
    console.log("start lion request");
    let lionRes = await axios.get('http://www.omdbapi.com/?s=lion&apikey=8dc4c694');
    console.log("process lion request");
    console.log(lionRes.data.Search[0].Title);
    
    console.log("start star request");
    starRes = await axios.get('http://www.omdbapi.com/?s=star&apikey=8dc4c694');
    console.log("process star request");
    console.log(starRes.data.Search[0].Title);
    
    console.log("end of code");
    // .then() 
    // axios.get('http://www.omdbapi.com/?s=lion&apikey=8dc4c694')
    // .then(
    //     (res) => {
    //         console.log(res.data);
    //     }
    // )
    
}

// run();

async function run2() {
    console.log("start code");

    // async / await
    console.log("start lion request");
    let lionPromise = axios.get('http://www.omdbapi.com/?s=lion&apikey=8dc4c694');
    console.log("start star request");
    let starPromise = axios.get('http://www.omdbapi.com/?s=star&apikey=8dc4c694');

    // With Promise.all the resolved responses are place into an array
    let resolved = await Promise.all([lionPromise, starPromise]);

    let lionResponse = resolved[0];
    let starResponse = resolved[1];

    console.log("process lion request");
    console.log(lionResponse.data.Search[0].Title);
    
    console.log("process star request");
    console.log(starResponse.data.Search[0].Title);
    
    console.log("end of code");
       
}

run2();