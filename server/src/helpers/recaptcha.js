import { recaptchaConfig } from '../config';
const Bluebird = require('bluebird');
const Recaptcha = require('recaptcha-v2').Recaptcha;

  /**
   * Verify ReCaptcha
   * @param {Object} recaptchaData
   * @returns {Promise}
   */
  const verifyRecaptcha = (recaptchaData) => {
    if (recaptchaConfig.RECAPTCHA_SKIP_ENABLED === 'true') { // For development purpose only, you need to add SKIP_ENABLED in .env
      return Bluebird.resolve();
    }
    console.log(recaptchaData);
    return new Bluebird((resolve, reject) => {
      const recaptcha = new Recaptcha(recaptchaConfig.RECAPTCHA_SITE_KEY, recaptchaConfig.RECAPTCHA_SECRET_KEY, recaptchaData);
      console.log(recaptchaData);
      recaptcha.verify((success) => {
        if (success) {
          console.log('successfulll');
          return resolve();
        } else {
          console.log(reject),
          console.log('fail');
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
  exports.verifyMyCaptcha = (req, res, next) => {
    const { captchaResponse } = req.body;
    if (!captchaResponse) {
      return res.status(422).send({ error: "all fields are required" });
    }
    console.log('captchaResponse');
    console.log(captchaResponse);
    console.log('captchaResponse');
    const recaptchaData = {
      remoteip: req.connection.remoteAddress,
      response: captchaResponse,
      secret: recaptchaConfig.RECAPTCHA_SECRET_KEY,
    };

    verifyRecaptcha(recaptchaData).then(() => {
      console.log('Captcha Verified');
      return next();
    });
  };


