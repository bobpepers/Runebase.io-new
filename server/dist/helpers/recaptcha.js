'use strict';

var _config = require('../config');

var Bluebird = require('bluebird');
var Recaptcha = require('recaptcha-v2').Recaptcha;

/**
 * Verify ReCaptcha
 * @param {Object} recaptchaData
 * @returns {Promise}
 */
var verifyRecaptcha = function verifyRecaptcha(recaptchaData) {
  if (_config.recaptchaConfig.RECAPTCHA_SKIP_ENABLED === 'true') {
    // For development purpose only, you need to add SKIP_ENABLED in .env
    return Bluebird.resolve();
  }
  console.log(recaptchaData);
  return new Bluebird(function (resolve, reject) {
    var recaptcha = new Recaptcha(_config.recaptchaConfig.RECAPTCHA_SITE_KEY, _config.recaptchaConfig.RECAPTCHA_SECRET_KEY, recaptchaData);
    console.log(recaptchaData);
    recaptcha.verify(function (success) {
      if (success) {
        console.log('successfulll');
        return resolve();
      } else {
        console.log(reject), console.log('fail');
        return false;
      }
    });
  });
};

/**
 * Verify ReCaptcha
 * @param {Object} recaptchaData
 * @returns {Promise}
 */
exports.verifyMyCaptcha = function (req, res, next) {
  var captchaResponse = req.body.captchaResponse;

  if (!captchaResponse) {
    return res.status(422).send({ error: "all fields are required" });
  }
  console.log('captchaResponse');
  console.log(captchaResponse);
  console.log('captchaResponse');
  var recaptchaData = {
    remoteip: req.connection.remoteAddress,
    response: captchaResponse,
    secret: _config.recaptchaConfig.RECAPTCHA_SECRET_KEY
  };

  verifyRecaptcha(recaptchaData).then(function () {
    console.log('Captcha Verified');
    return next();
  });
};