const axios = require('axios');

async function run() {
    let deckResponse = await axios.get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    
    let deckId = deckResponse.data.deck_id
    let drawCard = await axios.get(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let card = drawCard.data.cards[0];
    console.log(card.value + " " + card.suit); 
}

run();