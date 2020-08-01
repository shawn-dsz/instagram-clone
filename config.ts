export const firebase = {
  apiKey: 'AIzaSyAZ8ogCpM9ZKOuE_x73d-hiCvqb84o6mZw',
  authDomain: 'psychic-lamp.firebaseapp.com',
  databaseURL: 'https://psychic-lamp.firebaseio.com',
  projectId: 'psychic-lamp',
  storageBucket: 'psychic-lamp.appspot.com',
  messagingSenderId: '61627531780',
  appId: '1:61627531780:web:1b841d5d28e2aea0a4ab51',
  measurementId: 'G-LQQQQGM6V3',
};

export const fireStore = {
  credential: {
    type: 'service_account',
    project_id: 'psychic-lamp',
    private_key_id: process.env.FIRE_STORE_PK_ID,
    private_key: String(process.env.FIRE_STORE_PK).replace(/\\n/g, '\n'),
    client_email:
      'firebase-adminsdk-73s2k@psychic-lamp.iam.gserviceaccount.com',
    client_id: '110362667495748274200',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-73s2k%40psychic-lamp.iam.gserviceaccount.com',
  },
  databaseURL: 'https://psychic-lamp.firebaseio.com',
};
