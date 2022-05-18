import { IntlProvider } from "react-intl";
import useTranst from "hooks/useTranst";

const LanguagesProvider = (props) => {
  const { message, locale } = useTranst("vi");
  return <IntlProvider {...props} messages={message} locale={locale} />;
};

LanguagesProvider.propTypes = {};

export default LanguagesProvider;
