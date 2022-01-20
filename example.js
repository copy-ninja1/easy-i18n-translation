let easyTranslation = require('easy-i18n-translation')

easyTranslation({ locales: ['en', 'fr'], characters: ['home'], apiTokensFilePath: './google-api-token.json' }).then((data) => {
    console.log(data)
    /**
     * { en: { home: 'home' }, fr: { home: 'domicile' } }
     */
})

async function callTranslate() {
    let translatdData = await easyTranslation({ locales: ['de', 'fr'], characters: ['home'], apiTokensFilePath: './google-api-token.json' })
    console.log(translatdData)
    /**
     * { de: { home: 'Heimat' }, fr: { home: 'domicile' } }
     */
}

callTranslate()