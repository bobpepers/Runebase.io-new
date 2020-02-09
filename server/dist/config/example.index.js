'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var runebaseConfig = exports.runebaseConfig = {
  ip: '127.0.0.1',
  port: 9432,
  user: 'xxxxx',
  password: 'xxxxx'
};

var recaptchaConfig = exports.recaptchaConfig = {
  RECAPTCHA_SECRET_KEY: 'xxxxx',
  RECAPTCHA_SITE_KEY: 'xxxxx',
  RECAPTCHA_SKIP_ENABLED: false
};

var pusherConfig = exports.pusherConfig = {
  app_id: 'xxxxx',
  key: 'xxxxx',
  secret: 'xxxx',
  cluster: 'eu',
  useTLS: true
};

var dbConfig = exports.dbConfig = {
  secret: 'SomeRandomSecretString',
  db: 'mongodb://localhost/mydbss?replicaSet=rs0'
};

var emailConfig = exports.emailConfig = {
  service: 'Gmail',
  auth: {
    user: 'xxxxx@gmail.com',
    pass: 'xxxxx'
  }
};

var telegramConfig = exports.telegramConfig = {
  token: 'telegrambottoken',
  chatId: -338893524
};

var ROOT_URL = exports.ROOT_URL = process.env.NODE_ENV === 'production' ? 'https://dev.runebase.io' : 'https://dev.runebase.io';