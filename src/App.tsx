import { makeStyles } from "@material-ui/styles";
import "assets/styles/App.scss";
import MainLayout from "layouts/desktop/MainLayout";
import React from "react";
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
  console.log('test')
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" style={{ width: 160, height: 160 }} />
      <MainLayout />
      <NotSupported />
    </div>
  );
};

export default App;
