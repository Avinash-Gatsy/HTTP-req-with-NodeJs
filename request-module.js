const request = require('request');
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

request.get(url, (err, res, body)=>{
    let jsonRes = JSON.parse(body);
    console.log(`BTC-USD : ${jsonRes.bpi.USD.rate}\n`,
    `BTC-GBP : ${jsonRes.bpi.GBP.rate}\n`,
    `BTC-EUR : ${jsonRes.bpi.EUR.rate}`);
});

//the request module dosent support promises
//we can use util.promisify or request-promise, request which returns promises

