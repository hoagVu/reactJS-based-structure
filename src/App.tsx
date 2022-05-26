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
