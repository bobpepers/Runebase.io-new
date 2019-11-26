const request = require('request-promise')
import ChainInfo from '../models/chainInfo';
const Client = require('bitcoin-core');
const client = new Client({
  network: 'mainnet',
  username: 'runebaseinfo',
  password: 'runebaseinfo',
  port: 9432
});

export const chainInfoBlock = async (req, res) => {
  const paprika = await request('https://api.coinpaprika.com/v1/ticker/runes-runebase', (error, response, body)=> {
      if (!error && response.statusCode === 200) {
        return;
      } else {
        console.log("Got an error: ", error, ", status code: ", response.statusCode);
      }
    })
  //console.log(req.body.payload);
  client.getBlockchainInfo().then((data) => {
    const id = 1;
    const blockNumber = data.blocks;
    const moneySupply = data.moneysupply;
    const paprikaResponse = JSON.parse(paprika);
    const currentPrice = paprikaResponse.price_usd;
    const query = { custom_id:id };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    let update = {};
    if (currentPrice != undefined) {
      update = { blockNumber: blockNumber, moneySupply:moneySupply, price: currentPrice };
    }
    else {
      update = { blockNumber: blockNumber, moneySupply:moneySupply };
    }

    // Update Database Record
    ChainInfo.findOneAndUpdate(query, update, options, function(error, result) {
        if (error) return;
        //console.log(result);
    });
  });
};
