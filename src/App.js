import { Button, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: "red" }}>
      <Button variant="contained">Hello World</Button>
      <Typography variant="h1" component="h2">
        h1. Heading
        <FormattedMessage id="IDS_HMS_CMS_DISABLE_NOTE" />
      </Typography>
      <Typography variant="h1" component="h2">
        <FormattedMessage id="IDS_CHAT_EVALUATE_SERVICE_QUESTION_2" />
      </Typography>
    </div>
  );
};

export default App;
