/* eslint-disable react/no-unescaped-entities */
import "assets/styles/App.scss";
import Loading from "components/loading/Loading";
import ColumnPage from "features/desktop/columnPage/ColumnPage";
import Dashboard from "features/desktop/dashboard/Dashboard";
import Footer from "features/desktop/footer/Footer";
import Header from "features/desktop/header/Header";
import Record from "features/desktop/record/Record";

import React, { ReactNode } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { HEADER_HEIGHT } from "utils/constant";
import { routes } from "utils/routes";
import LoginPage from "views/login/LoginPage";

interface IAppProps {}

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
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}>
      <Loading />
      <Header />
      <div style={{ marginTop: HEADER_HEIGHT, height: "100%" }}>
        {children || <Outlet />}
        <Footer />
      </div>
    </div>
  );
};

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="app-container">
      <Loading />
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />

        <Route
          path={routes.DASHBOARD}
          element={<ProtectedRoute redirectPath={routes.LOGIN} isAllowed />}>
          <Route path={routes.DASHBOARD} element={<Dashboard />} />
        </Route>

        <Route
          path={routes.RECORD}
          element={<ProtectedRoute redirectPath={routes.LOGIN} isAllowed />}>
          <Route path={routes.RECORD} element={<Record />} />
        </Route>

        <Route
          path={routes.COLUMNPAGE}
          element={<ProtectedRoute redirectPath={routes.LOGIN} isAllowed />}>
          <Route path={routes.COLUMNPAGE} element={<ColumnPage />} />
        </Route>

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
};

export default App;
