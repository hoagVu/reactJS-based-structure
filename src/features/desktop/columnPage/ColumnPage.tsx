import { Button, Paper, Typography } from "@mui/material";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { some } from "utils/helpers";
import "./ColumnPage.scss";
import { dataColumnFake, dataColumnInfoFake } from "./utils";

interface IColumnPageProps {}

const ColumnPage: React.FunctionComponent<IColumnPageProps> = (props) => {
  React.useEffect(() => {
    document.title = "Column Page";
  }, []);
  return (
    <div className="page-container">
      <div className="page-diary-container">
        {dataColumnFake.map((elm: some, index: number) => {
          return (
            <div className="page-diary-item" key={index}>
              <Paper
                key={index}
                variant="outlined"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#2E2E2E",
                  padding: "24px 8px",
                  borderRadius: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: 22,
                    textAlign: "center",
                    color: "#FFCC21",
                  }}>
                  {elm.title}
                </div>
                <div
                  style={{
                    width: 56,
                    textAlign: "center",
                    border: "1px solid #FFFFFF",
                    margin: "10px 0px 8px",
                  }}
                />
                <Typography
                  style={{
                    marginTop: 4,
                    fontWeight: 300,
                    fontSize: 18,
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}>
                  {elm.content}
                </Typography>
              </Paper>
            </div>
          );
        })}
      </div>
      <div className="page-record-container">
        {dataColumnInfoFake.map((elm: some, index: number) => {
          return (
            <Paper className="page-record-item" key={index}>
              <img
                src={elm?.imgUrl}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: 145 }}
              />
              <div className="page-record-info">
                <span>{`${elm.date}`}</span>
                <span>{`${elm.time}`}</span>
              </div>
              <Typography
                style={{
                  marginTop: 5,
                  fontWeight: 300,
                  fontSize: 15,
                  color: "#414141",
                }}
                className="page-record-info-content"
                title={elm.content}>
                {elm.content}
              </Typography>
              <Typography
                style={{
                  fontWeight: 300,
                  marginTop: 2,
                  fontSize: 12,
                  color: "#FF963C",
                }}>
                {elm.hashTag}
              </Typography>
            </Paper>
          );
        })}
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

export default ColumnPage;
