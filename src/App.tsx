import "assets/styles/App.scss";
import MainLayout from "layouts/desktop/MainLayout";
import React from "react";
import NotSupported from "views/NotSupported";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <img src={logo} alt="logo" style={{ width: 160, height: 160 }} />
      <MainLayout />
      <NotSupported />
    </>
  );
}

export default App;
