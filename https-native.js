const https = require('https');

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

https.get(url, res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
        body += data;
    });
    res.on('end', () => {
        body = JSON.parse(body);
        console.log(
        `BTC-USD : ${body.bpi.USD.rate}\n`,
        `BTC-GBP : ${body.bpi.GBP.rate}\n`,
        `BTC-EUR : ${body.bpi.EUR.rate}`);
    });
});