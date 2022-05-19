import useTranst from "hooks/useTranst";
import * as React from "react";
import { IntlProvider } from "react-intl";

interface ILanguagesProviderProps {}

const LanguagesProvider: React.FunctionComponent<ILanguagesProviderProps> = (
  props
) => {
  const { message, locale } = useTranst("vi");
  return <IntlProvider {...props} messages={message} locale={locale} />;
};

export default LanguagesProvider;
