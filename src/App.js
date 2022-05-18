import MainLayout from "layouts/desktop/MainLayout";
import NotSupported from "views/NotSupported";
import logo from "./logo.svg";

const App = () => {
  return (
    <>
      <img src={logo} alt="logo" style={{ width: 160, height: 160 }} />
      <MainLayout />
      <NotSupported title={20} />
    </>
  );
};

export default App;
