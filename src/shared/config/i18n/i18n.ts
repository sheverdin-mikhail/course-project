import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(Backend)  
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "ru",
        debug: __IS__DEV__ ? true : false,

        interpolation: {
            escapeValue: false
        }
    }
  );
