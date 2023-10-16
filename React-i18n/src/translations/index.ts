import i18next from 'i18next'
import { initReactI18next } from 'react-i18next';
import { hi, en } from './locales';

const options = {
    lng: 'hi',
    resources: {
      hi: {
        translation: hi
      },
      en: {
        translation: en
      }
    },
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'en'
  };

const i18n = i18next.createInstance().use(initReactI18next);
i18n.use(initReactI18next).init(options);

export default i18n;