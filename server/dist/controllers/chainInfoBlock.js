'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chainInfoBlock = undefined;

var _chainInfo = require('../models/chainInfo');

var _chainInfo2 = _interopRequireDefault(_chainInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = require('request-promise');

var Client = require('bitcoin-core');
var client = new Client({
  network: 'mainnet',
  username: 'runebaseinfo',
  password: 'runebaseinfo',
  port: 9432
});

var chainInfoBlock = exports.chainInfoBlock = async function chainInfoBlock(req, res) {
  var paprika = await request('https://api.coinpaprika.com/v1/ticker/runes-runebase', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      return;
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode);
    }
  });
  //console.log(req.body.payload);
  client.getBlockchainInfo().then(function (data) {
    var id = 1;
    var blockNumber = data.blocks;
    var moneySupply = data.moneysupply;
    var paprikaResponse = JSON.parse(paprika);
    var currentPrice = paprikaResponse.price_usd;
    var query = { custom_id: id };
    var options = { upsert: true, new: true, setDefaultsOnInsert: true };
    var update = {};
    if (currentPrice != undefined) {
      update = { blockNumber: blockNumber, moneySupply: moneySupply, price: currentPrice };
    } else {
      update = { blockNumber: blockNumber, moneySupply: moneySupply };
    }

    // Update Database Record
    _chainInfo2.default.findOneAndUpdate(query, update, options, function (error, result) {
      if (error) return;
      //console.log(result);
    });
  });
};