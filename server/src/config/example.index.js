export const dbConfig = {
  secret: 'SomeRandomSecretString',
  db: 'mongodb://localhost:mydbs',
};

export const emailConfig = {
  service: 'Gmail',
  auth: {
    user: 'bagostra@gmail.com',
    pass: 'Hserfog05',
  },
};

export const ROOT_URL = process.env.NODE_ENV === 'production' ? 'http://dimitrimikadze.com:3000' : 'http://localhost:3000';
