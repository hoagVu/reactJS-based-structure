import { makeStyles } from "@material-ui/styles";
import "assets/styles/App.scss";
import MainLayout from "layouts/desktop/MainLayout";
import React from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { fakeAuthProvider } from "utils/auth";
import About from "views/About";
import Home from "views/Home";
import LoginPage from "views/LoginPage";
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

  return (
    <>
      <h1>Auth Example</h1>

      <p>
        This example demonstrates a simple login flow with three pages: a public
        page, a protected page, and a login page. In order to see the protected
        page, you must first login. Pretty standard stuff.
      </p>

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
