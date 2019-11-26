export const runebaseConfig = {
  ip: '127.0.0.1',
  port: 9432,
  user: 'xxxxx',
  password: 'xxxxx',
};

export const recaptchaConfig = {
  RECAPTCHA_SECRET_KEY: 'xxxxx',
  RECAPTCHA_SITE_KEY: 'xxxxx',
  RECAPTCHA_SKIP_ENABLED: false
};

export const pusherConfig = {
  app_id: 'xxxxx',
  key: 'xxxxx',
  secret: 'xxxx',
  cluster: 'eu',
  useTLS: true
};

export const dbConfig = {
  secret: 'SomeRandomSecretString',
  db: 'mongodb://localhost/mydbss?replicaSet=rs0',
};

export const emailConfig = {
  service: 'Gmail',
  auth: {
    user: 'xxxxx@gmail.com',
    pass: 'xxxxx',
  },
};

export const telegramConfig = {
  token: 'telegrambottoken',
  chatId: -338893524,
};

export const ROOT_URL = process.env.NODE_ENV === 'production' ? 'https://dev.runebase.io' : 'https://dev.runebase.io';

