/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, Popover, Typography } from "@mui/material";
import {
  IconChallenge,
  IconCount,
  IconInfo,
  IconLogo,
  IconMemo,
  IconMenu,
} from "assets/icons/iconsDefined";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { some } from "utils/helpers";
import { routes } from "utils/routes";
import "./Header.scss";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  const dropDownList = [
    { id: 1, name: "自分の記録" },
    { id: 2, name: "体重グラフ" },
    { id: 3, name: "目標" },
    { id: 4, name: "選択中のコース" },
    { id: 5, name: "コラム一覧" },
    { id: 6, name: "設定" },
  ];

  return (
    <div className="header-container">
      <div className="badge-header" onClick={() => navigate(routes.DASHBOARD)}>
        <IconLogo />
      </div>

      <div className="info-container">
        <Button variant="text" className="info-header">
          <IconMemo />
          <Typography component="span" className="header-title">
            <FormattedMessage id="IDS_PROFLIE" />
          </Typography>
        </Button>
        <Button variant="text" className="info-header">
          <IconChallenge />
          <Typography component="span" className="header-title">
            <FormattedMessage id="IDS_CHALLENGE" />
          </Typography>
        </Button>
        <Button variant="text" className="info-header">
          <IconInfo />

          <div className="info-badger-noti-container">
            <div className="info-badger-noti">
              <IconCount />
            </div>
          </div>

          <Typography component="span" className="header-title">
            <FormattedMessage id="IDS_NOTE" />
          </Typography>
        </Button>
        <Button variant="text" className="info-header" onClick={handleClick}>
          <IconMenu />
        </Button>
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            borderRadius: 0,
            background: "#777777",
            minWidth: 280,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          },
        }}>
        {dropDownList.map((elm: some) => {
          return (
            <React.Fragment key={elm.id}>
              <Button
                style={{
                  color: "#ffffff",
                  width: "100%",
                  padding: "22px 32px",
                  borderBottom: "1px solid #8f8989",
                  borderRadius: 0,
                }}>
                <Typography style={{ width: "100%", textAlign: "left" }}>
                  {elm.name}
                </Typography>
              </Button>
            </React.Fragment>
          );
        })}
      </Popover>
    </div>
  );
};

export default Header;
