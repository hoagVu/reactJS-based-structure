import { IntlProvider } from "react-intl";
import { useTranst } from "../../../hooks";

const LanguagesProvider = () => {
  const { message, locale } = useTranst("vi");
  return <IntlProvider message={message} locale={locale} />;
};

LanguagesProvider.propTypes = {};

export default LanguagesProvider;
