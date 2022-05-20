import { Alert, AlertTitle, Typography } from "@mui/material";
import * as React from "react";

export default function snackbarSetting(closeSnackbar, alertProps, alertTitle) {
  return {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    preventDuplicate: true,
    autoHideDuration: 3000,
    content: (key, msg) => (
      <Alert
        style={{ minWidth: "240px", display: "flex", alignItems: "center" }}
        onClose={() => closeSnackbar(key)}
        severity={alertProps?.color}
        {...alertProps}>
        {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
        <Typography variant="body2" color="inherit">
          {msg}
        </Typography>
      </Alert>
    ),
  };
}
