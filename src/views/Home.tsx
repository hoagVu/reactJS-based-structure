import MainLayout from "layouts/desktop/MainLayout";
import * as React from "react";
import { Link, Outlet, useRoutes } from "react-router-dom";
import About from "./About";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
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
    <div>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <MainLayout />
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
