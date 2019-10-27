import nodemailer from 'nodemailer';
import { telegramConfig } from '../config';
import telegram from 'telegram-bot-api';
//const TelegramBot = require('node-telegram-bot-api');


/**
 * Sign in
 */
 const bot = new telegram({
        token: telegramConfig.token,
        updates: {
          enabled: true
    }
});

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

    bot.sendMessage({
      chat_id: telegramConfig.chatId,
      text: `Runebase Contact Message
Name: ${name}
email: ${email}
message:
${message}`
    })
    .then(function(data)
    {
      res.json({ name, email, message });
    })
    .catch(function(err)
    {
      console.log(err);
      return res.status(422).send({ error: "Send Fail" });

    });

};

