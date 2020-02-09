'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactSend = undefined;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _config = require('../config');

var _telegramBotApi = require('telegram-bot-api');

var _telegramBotApi2 = _interopRequireDefault(_telegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const TelegramBot = require('node-telegram-bot-api');


/**
 * Sign in
 */
var bot = new _telegramBotApi2.default({
  token: _config.telegramConfig.token,
  updates: {
    enabled: true
  }
});

var contactSend = exports.contactSend = function contactSend(req, res) {
  console.log(req);
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      message = _req$body.message;

  if (!name || !email || !message) {
    return res.status(422).send({ error: "all fields are required" });
  }

  console.log(name);
  console.log(email);
  console.log(message);
  console.log(_config.telegramConfig);

  bot.sendMessage({
    chat_id: _config.telegramConfig.chatId,
    text: 'Runebase Contact Message\nName: ' + name + '\nemail: ' + email + '\nmessage:\n' + message
  }).then(function (data) {
    res.json({ name: name, email: email, message: message });
  }).catch(function (err) {
    console.log(err);
    return res.status(422).send({ error: "Send Fail" });
  });
};