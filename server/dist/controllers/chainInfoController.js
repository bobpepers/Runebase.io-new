'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchChainInfo = undefined;

var _chainInfo = require('../models/chainInfo');

var _chainInfo2 = _interopRequireDefault(_chainInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fetch user firstnames
 */
var fetchChainInfo = exports.fetchChainInfo = function fetchChainInfo(req, res, next) {
  _chainInfo2.default.find({}, function (err, users) {
    if (err) {
      return next(err);
    }
    console.log(users);
    res.json(users);
  });
};