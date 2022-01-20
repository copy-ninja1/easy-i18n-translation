
/**
 * 
 * @param {object}  config             the configuration object
 * @param {string}  config.service     the translation service been used (defualt = google)
 * @param {array}   config.locales   An array of locales to be used eg: ["en","nl","fr"]
 * @param {array}   config.characters  an array of characters eg: ["hello", "you are wellcom"]
 * @param {apiTokensFilePath}  config.apiTokensFilePath the path to your Cloud Translation API credentials
 * @returns {object}
 */
async function easyTranslation({ service = 'google', locales = ['en'], characters, apiTokensFilePath, } = {}) {
    // let supportedServices = ['google']
    // let supportedLocales = [],
    let translatedData = {}

    //TODO: add more translation services (eg : yandex, amazon translate, IBM watson translator etc.)
    //TODO: handle error for invalid language
    //TODO: handle error for undefined apiTokensFilePath
    if (service === 'google') {
        if (characters && characters.length > 0) {
            if (locales && locales.length > 0) {
                const { Translate } = require('@google-cloud/translate').v2;

                process.env.GOOGLE_APPLICATION_CREDENTIALS = apiTokensFilePath;

                const translate = new Translate();


                async function translateText() {

                    for (const target of locales) {
                        translatedData[target] = {}

                        let [translations] = await translate.translate(characters, target);

                        translations = Array.isArray(translations) ? translations : [translations];

                        translations.forEach((translation, i) => {
                            translatedData[target][characters[i]] = translation
                        });
                    }
                }
                // console.log(await translateText())
                await translateText()
            } else {
                throw new Error('No language available')
            }

        } else {
            throw new Error('No character available for translation')
        }

    }
    return translatedData
}

module.exports = easyTranslation