import vi from "../utils/intl/vi.json";
import en from "../utils/intl/en.json";

const useTranst = (locale) => {
  let result = { locale };
  if (locale.startsWith("vi")) {
    result = { ...result, message: vi };
  } else {
    result = { ...result, message: en };
  }
  return result;
};

export default useTranst;
