import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { IconKnife } from "assets/icons/iconsDefined";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { some } from "utils/helpers";
import "./Dashboard.scss";
import recordLogo3 from "assets/images/d01.jpg";
import { dataRecordsFake, RECORD_LIST } from "./utilts";
import BodyWeightGraph from "./components/BodyWeightGraph";

interface IDashboardProps {}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  React.useEffect(() => {
    document.title = `Top Page`;
  }, []);
  return (
    <div className="dashboard-container">
      <div className="dashboard-diet-container">
        <Grid container>
          <Grid item xs={5} style={{ padding: 0 }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                src={recordLogo3}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: 316,
                  filter: "contrast(120%)",
                  opacity: 1,
                  mixBlendMode: "soft-light",
                  background:
                    "linear-gradient(225deg, #ffcc21 0%, #ff963c 100%)",
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: 316,
                  bottom: 0,
                  position: "absolute",
                  background:
                    "linear-gradient(rgba(29, 31, 32, 0) 0%, rgb(40 39 37) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: 316,
                }}>
                <div className="dashboard-diet-text">05/21</div>
                <div className="dashboard-diet-percent">75%</div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: 316,
                }}>
                <CircularProgress
                  variant="determinate"
                  value={75}
                  size={180}
                  thickness={0.5}
                  style={{ color: "#ffffff" }}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={7} style={{ padding: 0 }}>
            <BodyWeightGraph />
          </Grid>
        </Grid>
      </div>
      <div className="dashboard-record-button-container">
        {RECORD_LIST.map((elm: some, index: number) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                position: "relative",
                cursor: "pointer",
              }}>
              <div className="dashboard-record-button-item" />
              <div
                style={{
                  position: "absolute",
                  top: 60,
                  right: index === 0 ? 30 : 40,
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <IconKnife />
                  <div className="dashboard-record-button-info">{`${elm.type}`}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="dashboard-record-container">
        {dataRecordsFake.map((elm: some, index: number) => {
          return (
            <Button className="dashboard-record-item" key={index}>
              <img
                src={elm?.imgUrl}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="dashboard-record-info">{`${elm.time}.${elm.type}`}</div>
            </Button>
          );
        })}
      </div>
      <div className="action-button-container">
        <Button variant="text" className="action-button">
          <Typography component="span">
            <FormattedMessage id="IDS_SEE_MORE_RECORDS" />
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
