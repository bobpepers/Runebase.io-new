'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var chainInfoSchema = new Schema({
  custom_id: { type: Number, required: true, index: true },
  blockNumber: String,
  moneySupply: String,
  price: String
}, {
  collection: 'ChainInfo',
  autoCreate: true
});

chainInfoSchema.pre('save', function (next) {
  var chainInfo = this;
});

exports.default = _mongoose2.default.model('chainInfo', chainInfoSchema);