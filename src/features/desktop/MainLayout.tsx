import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
  console.log("mainLayout");
  return (
    <div>
      <Header />
      自分の記録
      <Footer />
    </div>
  );
};

export default MainLayout;
