/* eslint-disable react/no-unescaped-entities */
import {
  AppBar,
  CssBaseline,
  Fab,
  Fade,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import { IconScroll } from "assets/icons/iconsDefined";
import "assets/styles/App.scss";
import Loading from "components/loading/Loading";
import ColumnPage from "features/desktop/columnPage/ColumnPage";
import Dashboard from "features/desktop/dashboard/Dashboard";
import Footer from "features/desktop/footer/Footer";
import Header from "features/desktop/header/Header";
import Record from "features/desktop/record/Record";
import React, { ReactNode } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { routes } from "utils/routes";
import LoginPage from "views/login/LoginPage";

interface IAppProps {}

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export const ScrollTop = (props: Props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
};
interface SomeComponentProps {
  redirectPath?: string;
  children?: ReactNode;
  isAllowed: boolean;
}

const ProtectedRoute: React.FunctionComponent<SomeComponentProps> = ({
  redirectPath = "/login",
  children = null,
  isAllowed,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <div style={{ height: "100%" }}>{children || <Outlet />}</div>;
};

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Header />
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <Box
        className="app-container"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}>
        <Loading />
        <Routes>
          <Route path={routes.LOGIN} element={<LoginPage />} />

          <Route
            path={routes.DASHBOARD}
            element={
              <ProtectedRoute
                redirectPath={routes.LOGIN}
                isAllowed={localStorage.getItem("LOGIN_ALLOWED") === "true"}
              />
            }>
            <Route path={routes.DASHBOARD} element={<Dashboard />} />
          </Route>

          <Route
            path={routes.RECORD}
            element={
              <ProtectedRoute
                redirectPath={routes.LOGIN}
                isAllowed={localStorage.getItem("LOGIN_ALLOWED") === "true"}
              />
            }>
            <Route path={routes.RECORD} element={<Record />} />
          </Route>

          <Route path={routes.COLUMNPAGE} element={<ColumnPage />} />

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Box>
      <Footer />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <IconScroll />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default App;
