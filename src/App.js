import { Button, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import "./assets/styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <Typography variant="body2">
        h1. Heading
        <FormattedMessage id="IDS_CHAT_EVALUATE_SERVICE_QUESTION_2" />
      </Typography>
      <Typography variant="body2">
        <FormattedMessage id="IDS_CHAT_EVALUATE_SERVICE_QUESTION_2" />
      </Typography>
    </div>
  );
};

export default App;
