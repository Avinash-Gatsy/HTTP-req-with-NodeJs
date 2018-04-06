const fetch = require('node-fetch');
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

/* jshint ignore:start */
const bitcoinPrice = async url => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
  } catch (err){
      console.log(err);
  }
};
/* jshint ignore:end */
bitcoinPrice(url);