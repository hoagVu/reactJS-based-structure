import "assets/styles/App.scss";
import MainLayout from "layouts/desktop/MainLayout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "views/About";
import Home from "views/Home";
import LoginPage from "views/LoginPage";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
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
