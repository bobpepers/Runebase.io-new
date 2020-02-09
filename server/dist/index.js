'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _config = require('./config');

var _chainInfo = require('./models/chainInfo');

var _chainInfo2 = _interopRequireDefault(_chainInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pusher = require('pusher');

// Pusher init
var pusher = new Pusher({
  appId: _config.pusherConfig.app_id,
  key: _config.pusherConfig.key,
  secret: _config.pusherConfig.secret,
  cluster: _config.pusherConfig.cluster,
  encrypted: _config.pusherConfig.encrypted
});
var channel = 'chainInfos';

var app = (0, _express2.default)();

_mongoose2.default.connect(_config.dbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true });
_mongoose2.default.set('debug', true);

var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.on('open', function () {
  db.db.listCollections().toArray(function (err, collectionNames) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(collectionNames);
    var foundChainInfo = collectionNames.some(function (el) {
      return el.name === 'ChainInfo';
    });
    if (!foundChainInfo) {
      db.createCollection("ChainInfo");
    }
  });
});

app.use((0, _compression2.default)());
app.use((0, _morgan2.default)('combined'));
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json({ type: '*/*' }));
(0, _router2.default)(app);

var port = process.env.PORT || 3333;
var server = _http2.default.createServer(app);

db.once('open', function () {
  server.listen(port);
  console.log('server listening on:', port);
  var collectionChainInfo = db.collection('ChainInfo');
  //console.log(collectionChainInfo);
  var changeStream = collectionChainInfo.watch();
  changeStream.on('change', function (change) {
    console.log(change.operationType);
    if (change.operationType === 'update') {
      //console.log(change);
      var chainInfo = change.updateDescription.updatedFields;
      console.log(chainInfo);
      pusher.trigger(channel, 'inserted', {
        _id: chainInfo._id,
        custom_id: chainInfo.custom_id,
        blockNumber: chainInfo.blockNumber,
        moneySupply: chainInfo.moneySupply,
        price: chainInfo.price
      });
    }
    //console.log(change);
  });
});