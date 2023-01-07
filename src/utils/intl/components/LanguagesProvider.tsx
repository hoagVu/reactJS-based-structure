import { useAppSelector } from "hooks/redux";
import useTranst from "hooks/useTranst";
import * as React from "react";
import { IntlProvider } from "react-intl";
import { some } from "utils/helpers";

interface ILanguagesProviderProps {}

const LanguagesProvider: React.FunctionComponent<ILanguagesProviderProps> = (
  props
) => {
  const { locale: systemLocale } = useAppSelector((state: some) => {
    return state?.systemReducer?.locale;
  });
  const { message, locale } = useTranst(systemLocale || "ja");
  return <IntlProvider {...props} messages={message} locale={locale} />;
};

export default LanguagesProvider;
