import "assets/styles/App.scss";
import MainLayout from "features/desktop/MainLayout";
import { useAppSelector } from "hooks/redux";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Route, Routes } from "react-router-dom";
import { some } from "utils/helpers";
import About from "views/About";
import Home from "views/Home";
import LoginPage from "views/LoginPage";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const test = useAppSelector((state: some) => state);
  console.log(test);
  return (
    <>
      <FormattedMessage id="IDS_PROFLIE" />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/protected" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
