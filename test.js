let easyTranslation = require('./index')

test('translation', async () => {
    let translatdData = await easyTranslation({ locales: ['de', 'fr'], characters: ['home'], apiTokensFilePath: './google-api-token.json' })
    expect(translatdData).toEqual({ de: { home: 'Heimat' }, fr: { home: 'domicile' } });
});
