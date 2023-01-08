import { Button, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { some } from "utils/helpers";
import "./Record.scss";
import recordLogo3 from "assets/images/MyRecommend-1.jpg";
import recordLogo4 from "assets/images/MyRecommend-2.jpg";
import recordLogo5 from "assets/images/MyRecommend-3.jpg";

import { dataChart } from "features/desktop/dashboard/utilts";
import { BUTTON_TYPE_LISTS, dataDiaryFake, dataDiaryFake1 } from "./utils";
import RecordChart from "./components/RecordChart";

interface IRecordProps {}

const Record: React.FunctionComponent<IRecordProps> = (props) => {
  const [buttonActive, setButtonActive] = React.useState<some>(
    BUTTON_TYPE_LISTS[0]
  );

  React.useEffect(() => {
    document.title = "My Record";
  }, []);
  return (
    <div className="record-container">
      <div className="record-diary-container" style={{ marginBottom: 56 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              style={{
                width: 288,
                height: 288,
                border: "24px solid #FFCC21",
                borderRadius: 0,
                display: "flex",
                position: "relative",
              }}>
              <img
                src={recordLogo3}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(120%)",
                  opacity: 1,
                  objectPosition: "left",
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  bottom: 0,
                  position: "absolute",
                  background:
                    "linear-gradient(rgba(29, 31, 32, 0) 0%, rgb(40 39 37) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  top: 0,
                  right: 0,
                }}>
                <Typography component="span" className="record-diary-exr-title">
                  <FormattedMessage id="IDS_BODY_RECORD" />
                </Typography>
                <Button
                  style={{
                    background: "#FF963C",
                    borderRadius: 0,
                    width: 160,
                    marginTop: 10,
                  }}>
                  <Typography
                    component="span"
                    className="record-diary-exr-content">
                    <FormattedMessage id="IDS_MY_BODY_RECORD" />
                  </Typography>
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              style={{
                width: 288,
                height: 288,
                border: "24px solid #FFCC21",
                borderRadius: 0,
                display: "flex",
                position: "relative",
              }}>
              <img
                src={recordLogo4}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(120%)",
                  opacity: 1,
                  objectPosition: "left",
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  bottom: 0,
                  position: "absolute",
                  background:
                    "linear-gradient(rgba(29, 31, 32, 0) 0%, rgb(40 39 37) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  top: 0,
                  right: 0,
                }}>
                <Typography component="span" className="record-diary-exr-title">
                  <FormattedMessage id="IDS_BODY_EXERCISE" />
                </Typography>
                <Button
                  style={{
                    background: "#FF963C",
                    borderRadius: 0,
                    width: 160,
                    marginTop: 10,
                  }}>
                  <Typography
                    component="span"
                    className="record-diary-exr-content">
                    <FormattedMessage id="IDS_MY_BODY_EXERCISE" />
                  </Typography>
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              style={{
                width: 288,
                height: 288,
                border: "24px solid #FFCC21",
                borderRadius: 0,
                display: "flex",
                position: "relative",
              }}>
              <img
                src={recordLogo5}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(120%)",
                  opacity: 1,
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  bottom: 0,
                  position: "absolute",
                  background:
                    "linear-gradient(rgba(29, 31, 32, 0) 0%, rgb(40 39 37) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  top: 0,
                  right: 0,
                }}>
                <Typography component="span" className="record-diary-exr-title">
                  <FormattedMessage id="IDS_DIARY" />
                </Typography>
                <Button
                  style={{
                    background: "#FF963C",
                    borderRadius: 0,
                    width: 160,
                    marginTop: 10,
                  }}>
                  <Typography
                    component="span"
                    className="record-diary-exr-content">
                    <FormattedMessage id="IDS_DIARY_RECORD" />
                  </Typography>
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Paper variant="outlined" className="record-diary-chart">
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 15,
              color: "white",
              width: 20,
            }}>
            BODY RECORD
          </div>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 22,
              color: "white",
              marginLeft: 70,
            }}>
            2021.05.21
          </div>
        </div>
        <RecordChart data={buttonActive.dataChart} />
        <div style={{ display: "flex", width: "100%" }}>
          {BUTTON_TYPE_LISTS.map((elm, index) => {
            return (
              <Button
                key={elm.id}
                style={{
                  borderRadius: 11,
                  width: 56,
                  height: 24,
                  background:
                    buttonActive.id === elm.id ? "#FFCC21" : "#FFFFFF",
                  color: buttonActive.id === elm.id ? "#FFFFFF" : "#FFCC21",
                  fontWeight: 300,
                  fontSize: 15,
                  marginRight: 16,
                }}
                onClick={() => setButtonActive(elm)}>
                {elm.name}
              </Button>
            );
          })}
        </div>
      </Paper>

      <Paper variant="outlined" className="record-diary-list">
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 15,
              color: "white",
              width: 20,
            }}>
            MY EXERCISE
          </div>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 22,
              color: "white",
              marginLeft: 70,
            }}>
            2021.05.21
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 240,
            overflow: "auto",
            marginTop: 0,
          }}>
          {dataDiaryFake1.map((elm: some, index: number) => {
            return (
              <div key={index} style={{ display: "flex", width: "100%" }}>
                <div
                  style={{
                    width: "45%",
                    height: 60,
                    borderBottom: "1px solid #777777",
                    padding: "8px 0px",
                    marginRight: "3%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <div>
                    <Typography
                      component="li"
                      style={{
                        fontWeight: 300,
                        fontSize: 15,
                        color: "#FFFFFF",
                      }}>
                      {elm.content}
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        fontSize: 15,
                        color: "#FFCC21",
                      }}>
                      {`${elm.calories}${elm.unit}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        color: "#FFCC21",
                      }}>
                      {`${elm.time} m`}
                    </Typography>
                  </div>
                </div>
                <div
                  key={index}
                  style={{
                    width: "45%",
                    height: 60,
                    borderBottom: "1px solid #777777",
                    padding: "8px 0px",
                    marginLeft: "3%",
                    marginRight: "1%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <div>
                    <Typography
                      component="li"
                      style={{
                        fontWeight: 300,
                        fontSize: 15,
                        color: "#FFFFFF",
                      }}>
                      {elm.content}
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 400,
                        fontSize: 15,
                        color: "#FFCC21",
                      }}>
                      {`${elm.calories}${elm.unit}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        color: "#FFCC21",
                      }}>
                      {`${elm.time} m`}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Paper>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography className="record-diary-title">
          <FormattedMessage id="IDS_DIARY" />
        </Typography>
        <div className="record-diary-container">
          {dataDiaryFake.map((elm: some, index: number) => {
            return (
              <div className="record-diary-item" key={index}>
                <Paper
                  variant="outlined"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#FFFFFF",
                    border: "2px solid #707070",
                    padding: 16,
                    borderRadius: 0,
                  }}>
                  <div className="record-diary-info">{elm.date}</div>
                  <div className="record-diary-info">{elm.time}</div>
                  <div
                    className="record-diary-info-note"
                    style={{ marginTop: 8 }}>
                    {elm.title}
                  </div>
                  <Typography
                    className="record-diary-info-note-content"
                    title={elm.content}>
                    {elm.content}
                  </Typography>
                </Paper>
              </div>
            );
          })}
        </div>
      </div>
      <div className="action-button-container">
        <Button variant="text" className="action-button">
          <Typography component="span">
            <FormattedMessage id="IDS_SEE_MORE_DIARIES" />
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Record;
