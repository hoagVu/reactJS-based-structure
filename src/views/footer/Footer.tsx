import { Button } from "@mui/material";
import * as React from "react";
import "./Footer.scss";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const footerList = [
    { id: 1, name: "会員登録" },
    { id: 2, name: "運営会社" },
    { id: 3, name: "利用規約" },
    { id: 4, name: "個人情報の取扱について" },
    { id: 5, name: "特定商取引法に基づく表記" },
    { id: 6, name: "お問い合わせ" },
  ];

  return (
    <div className="footer-container">
      <div className="footer-item-container">
        {footerList.map((elm, index) => {
          return (
            <Button className="footer-item" key={index}>
              {elm.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
