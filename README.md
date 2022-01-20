# easy-i18n-translation

[![NPM version][npm-image]][npm-url]
[![FOSSA Status][fossa-image]][fossa-url]

## Install

```sh
npm install easy-i18n-translation --save
```

## Synopsis

```js
let easyTranslation = require("easy-i18n-translation");

async function callTranslate() {
  let translatdData = await easyTranslation({
    locales: ["de", "fr"],
    characters: ["home"],
    apiTokensFilePath: "./google-api-token.json",
  });

  console.log(translatdData);
  /**
   * { de: { home: 'Heimat' }, fr: { home: 'domicile' } }
   */
}
```

Translate your site with easy, you only need an array of all the words or sentences in your site to get started.

---

## Usage

To get startd, you need a project that has the google Cloud Translation API enabled and credentials to make authenticated calls
[google Cloud Translation API](https://cloud.google.com/translate/docs/setup)

store you Cloud Translation API credentials in a file

```google-api-token.json```

```json 
{
  "type": "service_account",
  "project_id": "i18n-****",
  "private_key_id": "********************************",
  "private_key": "-----BEGIN PRIVATE KEY-----\/selokfersfdndflkajfjlanfljsdnfkndafnkadnbhifbadfkakfgfkhuoehqljnj4len dfjnbkjxzhfkhkhje,rhnalrshqw;elkjksnfjndjkf2bXRqvM68OfBIyyiNGzYJ1RlEPzn\nqv/WHjlvIeV1hBNDvUgO3+OkBkIWvRyY4NrNv/dfjk;asdmaemsl;qejdioshg/wqertyu\rzcvasd/retghfjkhlouiyuty==\n-----END PRIVATE KEY-----\n",
  "client_email": "site-translator@i18n-****.iam.gserviceaccount.com",
  "client_id": "**********************************",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/site-translator%40i18n-********.iam.gserviceaccount.com"
}

```
###  Arguments
```md

easy-i18n-translation takes in one argument which is it's config object

let easyTranslation = require("easy-i18n-translation");

easyTranslation({
    services:"" - defualt "google",
    locales: ['en','fr','nl'] -  i18n-locales,
     characters:["who are you", "welcome home", "eat"]
     apiTokensFilePath :'./google-api-token.json'
})
```

## Test

```sh
npm test
```
