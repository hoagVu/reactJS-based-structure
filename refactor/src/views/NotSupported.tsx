import * as React from "react";
import { Button, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { DevelopingIcon } from "assets/icons/iconsDefined";

interface IAppProps {
  title?: string;
  subTitle?: string;
}

const App: React.FunctionComponent<IAppProps> = ({ title, subTitle }) => {
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
        <FormattedMessage id={title || "IDS_HMS_FEATURE_UN_SUPPORTED"} />
      </Typography>
      <Typography
        variant="body2"
        style={{ color: "#757575", marginBottom: 30 }}>
        <FormattedMessage id={subTitle || "IDS_HMS_FEATURE_TEXT"} />
      </Typography>
      {/* <Link to={{ pathname: ROUTES.homeDashboard }}> */}
      <Button
        variant="contained"
        color="secondary"
        style={{ height: 35 }}
        disableElevation>
        {/* <ArrowIcon style={{ marginRight: 8 }} /> */}
        <FormattedMessage id="IDS_HMS_GO_TO_HOMEPAGE" />
      </Button>
      {/* </Link> */}
    </div>
  );
};

export default App;
