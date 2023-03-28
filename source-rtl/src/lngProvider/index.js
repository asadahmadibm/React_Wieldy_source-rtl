import faLang from "./entries/fa-IR";
import enLang from "./entries/en-US";
import zhLang from "./entries/zh-Hans-CN";
import arLang from "./entries/ar_SA";
import itLang from "./entries/it_IT";
import esLang from "./entries/es_ES";
import frLang from "./entries/fr_FR";
import {addLocaleData} from "react-intl";

const AppLocale = {
  fa: faLang,
  en: enLang,
  zh: zhLang,
  ar: arLang,
  it: itLang,
  es: esLang,
  fr: frLang
};
addLocaleData(AppLocale.fa.data);
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.zh.data);
addLocaleData(AppLocale.ar.data);
addLocaleData(AppLocale.it.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.fr.data);

export default AppLocale;
