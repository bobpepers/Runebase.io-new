import nodemailer from 'nodemailer';
import { telegramConfig } from '../config';
import TelegramBot from 'node-telegram-bot-api';
//const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
//const token = 'YOUR_TELEGRAM_BOT_TOKEN';

/**
 * Sign in
 */
 const bot = new TelegramBot(telegramConfig.token, {polling: true});
export const contactSend = (req, res) => {
  console.log(req);
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(422).send({ error: "all fields are required" });
  }

  console.log(name);
  console.log(email);
  console.log(message);
  console.log(telegramConfig);


  bot.sendMessage(
    telegramConfig.chatId,
    `Runebase Contact Message
Name: ${name}
email: ${email}
message:
${message}`
    )
    .then (() => {
      res.json({ name, email, message });
    })
    .catch((error) => {
      console.log(error.code);  // => 'ETELEGRAM'
      console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
      return res.status(422).send({ error: "Send Fail" });
  });

};

