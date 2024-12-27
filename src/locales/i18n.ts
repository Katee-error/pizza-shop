import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import authEN from "./en/auth.json";
import homePageEn from './en/home-page.json'
import breakdownsEN from "./en/breakdowns.json";
import commandPanelEN from "./en/command-panel.json";
import commonEN from "./en/common.json";
import companyNameEN from "./en/company-name.json";
import goalsEN from "./en/goals.json";
import settingsEN from "./en/settings.json";
import sidebarEN from "./en/sidebar.json";
import userDetailsEN from "./en/user-details.json";
import viewportModalEN from "./en/viewport-modal.json";

export const resources = {
  en: {
    auth: authEN,
    homePage: homePageEn,
    breakdowns: breakdownsEN,
    common: commonEN,
    commandPanelEN,
    "company-name": companyNameEN,
    goals: goalsEN,
    settings: settingsEN,
    sidebar: sidebarEN,
    "user-details": userDetailsEN,
    "viewport-modal": viewportModalEN,
  },
} as const;

export const defaultNS = "common";

export const i18n = i18next.use(initReactI18next).init({
  resources,
  supportedLngs: ["en", "ru"],
  fallbackLng: "en",
  debug: true,
  ns: Object.keys(resources.en),
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});
