
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationAR from './locales/ar/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
  ar: { translation: translationAR },
  fr: { translation: translationFR }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar',
  interpolation: { escapeValue: false }
});

export default i18n;
