import { Button, Typography } from "@mui/material";
import { ReactComponent as DevelopingIcon } from "assets/icons/ic_developing.svg";
import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";

const NotSupported = ({ title, subTitle }) => {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}>
      <DevelopingIcon style={{ marginBottom: 20 }} />
      <Typography
        variant="body2"
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 10,
          color: "#757575",
        }}>
        <FormattedMessage id={title || "IDS_CHAT_CHOOSE_TITLE"} />
      </Typography>
      <Typography
        variant="body2"
        style={{ color: "#757575", marginBottom: 30 }}>
        <FormattedMessage id={subTitle || "IDS_CHAT_REQUIREMENT_DESCRIPTION"} />
      </Typography>
      {/* <Link to={{ pathname: ROUTES.homeDashboard }}> */}
      <Button
        variant="contained"
        color="secondary"
        style={{ height: 35 }}
        disableElevation>
        {/* <ArrowIcon style={{ marginRight: 8 }} /> */}
        <FormattedMessage id="IDS_CHAT_INSERT_ID_AGENCY" />
      </Button>
      {/* </Link> */}
    </div>
  );
};

NotSupported.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default NotSupported;
