import MainLayout from "layouts/desktop/MainLayout";
import logo from "./logo.svg";

const App = () => {
  return (
    <>
      <img src={logo} alt="logo" style={{ width: 160, height: 160 }} />
      <MainLayout />
    </>
  );
};

export default App;
