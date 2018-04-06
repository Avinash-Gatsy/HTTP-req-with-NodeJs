const axios = require('axios');
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

/* jshint ignore:start */
const getBitcoinPrice = async url => {
    try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(`BTC-USD : ${data.bpi.USD.rate}\n`,
        `BTC-GBP : ${data.bpi.GBP.rate}\n`,
        `BTC-EUR : ${data.bpi.EUR.rate}`);
    } catch (err){
        console.log(err);
    }
};
/* jshint ignore:end */
getBitcoinPrice(url);