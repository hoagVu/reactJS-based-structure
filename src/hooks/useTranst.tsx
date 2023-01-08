import { some } from "utils/helpers";
import vi from "utils/intl/vi.json";
import en from "utils/intl/en.json";
import ja from "utils/intl/ja.json";

const resources = {
  en: { translation: en },
  ja: { translation: ja },
  vi: { translation: vi },
};

const useTranst = (locale) => {
  const result: some = { locale };
  return resources[`${locale}`]?.translation
    ? { ...result, message: resources[`${locale}`].translation }
    : { locale, message: en };
};

export default useTranst;
