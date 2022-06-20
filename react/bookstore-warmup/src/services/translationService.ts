import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export default function initTranslation() {
  const translationsEn = {};
  const translationsAl = {};

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: translationsEn },
      al: { translation: translationsAl },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}
