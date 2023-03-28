import antdFa from "antd/lib/locale-provider/fa_IR";
import appLocaleData from "react-intl/locale-data/fa";
import faMessages from "../locales/fa_IR.json";

const FaLang = {
  messages: {
    ...faMessages
  },
  antd: antdFa,
  locale: 'fa-IR',
  data: appLocaleData
};
export default FaLang;
