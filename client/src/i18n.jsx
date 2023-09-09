import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Import your translations files
import translationEN from './locales/en.json';
import translationCN from './locales/cn.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    cn: {
      translation: translationCN,
    },
  },
  lng: 'cn', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;