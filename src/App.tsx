import { makeStyles } from "@material-ui/styles";
import "assets/styles/App.scss";
import MainLayout from "layouts/desktop/MainLayout";
import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import About from "views/About";
import Home from "views/Home";
import NotSupported from "views/NotSupported";
import logo from "./logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
}));

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const classes = useStyles();
  const element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Home /> },
    // {
    //   path: "/cryptocurrencies",
    //   element: <Cryptocurrencies />,
    //   // Nested routes use a children property
    //   children: [{ path: ":coinId", element: <CryptoDetails /> }],
    // },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" style={{ width: 160, height: 160 }} />
      <NotSupported />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
      {element}
    </div>
  );
};

export default App;
