import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import al from "../locals/al/al";
import en from "../locals/en/en";

i18next.languages = ["en", "al"];
i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
  fallbackLng: "en",
  resources: {
    al,
    en,
  },
});

export default i18next;
