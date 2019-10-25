import nodemailer from 'nodemailer';
import { telegramConfig } from '../config';
import TelegramBot from 'node-telegram-bot-api';
//const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
//const token = 'YOUR_TELEGRAM_BOT_TOKEN';

/**
 * Sign in
 */
export const contactSend = (req, res) => {
  console.log(req);
  const { name, email, message } = req.body;
  console.log(name);
  console.log(email);
  console.log(message);
  console.log(telegramConfig);
  const bot = new TelegramBot(telegramConfig.token, {polling: true});
  bot.sendMessage(
    -338893524,
    `Runebase Contact Message
Name: ${name}
email: ${email}
message:
${message}

    `
    )
    .catch((error) => {
      console.log(error.code);  // => 'ETELEGRAM'
      console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
  });

  //res.json({ token: tokenForUser(req.user), firstname, lastname, email });
};

