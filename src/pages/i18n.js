import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './Translation.json';  // Your JSON translation file

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translation.en },
      hi: { translation: translation.hi },
      te: { translation: translation.te }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
