import { Button, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const App = () => {
  return (
    <>
      <Button variant="contained">Hello World</Button>
      <Typography variant="body2">
        h1. Heading
        <FormattedMessage id="IDS_CHAT_EVALUATE_SERVICE_QUESTION_2" />
      </Typography>
      <Typography variant="body2">
        <FormattedMessage id="IDS_CHAT_EVALUATE_SERVICE_QUESTION_2" />
      </Typography>
    </>
  );
};

export default App;
