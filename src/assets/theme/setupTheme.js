// import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";

import { createTheme as createMuiTheme } from "@mui/material/styles";

export const BLACK = "#000000";
export const BLUE = "#276ef1";
export const GREEN = "#00ad50";
export const GREY = "#212121";
export const GREY_400 = "#BDBDBD";
export const GREY_900 = "#212121";
export const PRIMARY = "#000000";
export const SECONDARY = "#000000";
export const WHITE = "#ffffff";
export const ORANGE = "#ff6a39";
export const PINK_MT = "#FF3366";

export const THEME = {
  primary: PRIMARY,
  secondary: SECONDARY,
};

const typography = {
  fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
  htmlFontSize: 14,
  fontSize: 14,
  h1: { fontSize: 96, lineHeight: "134px", fontWeight: "light" },
  h2: { fontSize: 60, lineHeight: "90px", fontWeight: "light" },
  h3: { fontSize: 32, lineHeight: "38px", fontWeight: 700 },
  h4: { fontSize: 24, lineHeight: "28px", fontWeight: 600 },
  h5: { fontSize: 22, lineHeight: "26px", fontWeight: 600 },
  h6: { fontSize: 20, lineHeight: "24px", fontWeight: 600 },
  subtitle0: { fontSize: 18, lineHeight: "22px", fontWeight: 600 },
  subtitle1: { fontSize: 16, lineHeight: "20px", fontWeight: 600 },
  subtitle2: { fontSize: 14, lineHeight: "16px", fontWeight: 600 },
  subtitle3: { fontSize: 12, lineHeight: "14px", fontWeight: 600 },
  body0: { fontSize: 18, lineHeight: "22px", fontWeight: "normal" },
  body1: { fontSize: 16, lineHeight: "20px", fontWeight: "normal" },
  body2: { fontSize: 12, lineHeight: "14px", fontWeight: "normal" },
  caption: { fontSize: "14px", lineHeight: "22px" },
  button: {
    fontSize: 14,
    textTransform: "none",
    lineHeight: "auto",
    fontWeight: "500",
  },
};

export const MUI_THEME = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1180,
      xl: 1200,
    },
  },
  palette: {
    white: {
      main: "#ffffff",
      white1: "#fdfdfd",
      white2: "#fefefe",
    },
    black: {
      main: "#000000",
      black1: "#1d1d16",
      black2: "#333333",
      black3: "#1a202c",
    },
    gray: {
      grayDark1: "#16161d",
      grayDark2: "#354052",
      grayDark3: "#555555",
      grayDark4: "#aaaaaa",
      grayDark5: "#cccccc",
      grayDark6: "#f6f6f8",
      grayDark7: "#718096",
      grayDark8: "#4A5568",
      grayLight1: "#7f7f83",
      grayLight2: "#666666",
      grayLight3: "#6a6a6a",
      grayLight4: "#ededed",
      grayLight5: "#f9f9f9",
      grayLight6: "#888888",
      grayLight7: "#fffafa",
      grayLight8: "#eeeeee",
      grayLight9: "#d8d8d8",
      grayLight10: "#f0f7ff",
      grayLight11: "#f9f9fb",
      grayLight12: "#fef1f1",
      grayLight13: "#f7f7f7",
      grayLight14: "#fafcff",
      grayLight15: "#e1e1e1",
      grayLight16: "#f2f5f8",
      grayLight17: "#e6e6e6",
      grayLight18: "#979797",
      grayLight19: "#757575",
      grayLight20: "#2ebcf0",
      grayLight21: "#b5bcc8",
      grayLight22: "#EDF2F7",
      grayLight23: "#E2E8F0",
      grayLight24: "#A0AEC0",
      grayLight25: "#cbd5e0",
      grayLight26: "#F7FAFC",
      grayLight27: "#F1F2F4",
      grayLight28: "#C4C4C4",
      grayLight29: "#ecf1f6",
    },
    red: {
      redDark1: "#d70f0f",
      redDark2: "#de0262",
      redDark3: "#e01702",
      redDark4: "#f0282b",
      redDark5: "#E5322B",
      redLight1: "#e13955",
      redLight2: "#bb0253",
      redLight3: "#fff0f0",
      redLight4: "#feecec",
      redLight5: "#E53E3E",
      redLight6: "#FCECEC",
    },
    blue: {
      blueDark1: "#542aa8",
      blueDark2: "#0f60bd",
      blueDark3: "#0070f3",
      blueDark4: "#002957",
      blueDark5: "#0090c4",
      blueLight1: "#00adef",
      blueLight2: "#0070ef",
      blueLight3: "#2e8af1",
      blueLight4: "#0066da",
      blueLight5: "#24c2ff",
      blueLight6: "#bfddfe",
      blueLight7: "#1778f2",
      blueLight8: "#00B6F3",
      blueLight9: "#E5F8FE",
      blueLight10: "#CCF0FD",
      blueLight11: "#F3FCFF",
      blueLight12: "#007FF3",
      blueLight13: "#F2FBFE",
      blueLight14: "#F4F8FA",
      blueLight15: "#EBF9FE",
    },
    green: {
      greenDark1: "#4caf50",
      greenLight1: "#139029",
      greenLight2: "#18b934",
      greenLight3: "#f1fdf4",
      greenLight4: "#d4e8ff",
      greenLight5: "#d2f9d9",
      greenLight6: "#64AF53",
      greenLight7: "#48BB78",
      greenLight8: "#EDF8F1",
    },
    yellow: {
      yellowDark1: "#c7711a",
      yellowLight1: "#e4892d",
      yellowLight2: "#fcf2e8",
      yellowLight3: "#FFBC39",
    },
    orange: {
      main: "#ED8936",
      orangeLight1: "#FEEBC8",
      orangeLight2: "#FDF3EB",
    },
    pink: {
      main: "#FF1284",
      pink1: "#FFE7F3",
      pink2: "#FFF3F9",
    },
    purple: {
      main: "#6260DF",
      purpleLight1: "#EFEFFC",
      purpleLight2: "#8B5CF6",
      purpleLight3: "#F9F7FF",
    },
    brown: {
      brownLight1: "#D59E2A",
    },
    primary: {
      main: "#00B6F3",
    },
    secondary: {
      main: "#FF3366",
      background: "#FFD6E0",
      background1: "rgba(255, 51, 102, 0.1)",
    },
    error: {
      main: "#E5322B",
    },
    background: {
      default: "#fff",
    },
  },
  zIndex: {
    // common default
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    // page
    home: {},
    listing: {
      searchFixed: 1501,
    },
    hotelDetail: {},
  },
  typography,
  overrides: {
    MuiPaper: {
      root: {
        borderRadius: 8,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      outlined: {
        border: `1px solid ${GREY_400}`,
      },
      elevation1: {
        boxShadow:
          "2px 2px 4px rgba(0, 0, 0, 0.05), -2px -2px 4px rgba(0, 0, 0, 0.05)",
      },
      elevation2: {
        boxShadow:
          " 3px 3px 6px rgba(0, 0, 0, 0.05), -3px -3px 6px rgba(0, 0, 0, 0.05)",
      },
      elevation3: {
        boxShadow:
          "5px 5px 9px rgba(0, 0, 0, 0.05), -5px -5px 9px rgba(0, 0, 0, 0.05)",
      },
      elevation4: {
        boxShadow:
          "5px 5px 16px rgba(0, 0, 0, 0.05), -5px -5px 16px rgba(0, 0, 0, 0.05)",
      },
      elevation5: {
        boxShadow:
          "5px 5px 24px rgba(0, 0, 0, 0.05), -5px -5px 24px rgba(0, 0, 0, 0.05)",
      },
      elevation6: {
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 6px 14px rgba(0, 0, 0, 0.2);",
      },
      elevation7: {
        boxShadow:
          "0px 5px 10px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1);",
      },
    },
    MuiButton: {
      sizeLarge: {
        minHeight: "48px",
        padding: "0 8px",
        ...typography.subtitle1,
      },
      sizeSmall: {
        minHeight: "36px",
        padding: "0 8px",
        ...typography.body2,
      },
      outlined: {
        color: GREY_900,
        background: WHITE,
        ...typography.button,
      },
      root: {
        minHeight: "40px",
        minWidth: "unset",
        padding: "0 8px",
        ...typography.button,
      },
    },
    MuiInputLabel: {
      root: {
        ...typography.body2,
        color: BLACK,
        position: "relative",
      },
      shrink: {
        transform: "unset ",
      },
      formControl: {
        ...typography.body2,
        position: "relative",
        marginBottom: 4,
        // transform: "unset",
      },
    },
    MuiFormHelperText: {
      root: { marginTop: 0, ...typography.body2 },
    },
    MuiRadio: {
      colorSecondary: {
        "&$checked": {
          color: SECONDARY,
        },
      },
      colorPrimary: {
        "&$checked": {
          color: PRIMARY,
        },
      },
    },

    MuiCheckbox: {
      colorSecondary: {
        "&$checked": {
          color: BLUE,
        },
      },
      colorPrimary: {
        "&$checked": {
          color: "#00B6F3",
        },
      },
    },
    MuiSlider: {
      root: {},
      thumbColorPrimary: {
        background: "white",
        border: `1px solid ${PRIMARY}`,
        marginTop: -4,
      },
      rail: { height: 4 },
      track: { height: 4 },
    },
    MuiFormControl: {
      root: {
        marginRight: 16,
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
      },
    },
    MuiSwitch: {
      colorSecondary: {
        "&$checked": {
          color: BLUE,
        },
      },
      colorPrimary: {
        "&$checked": {
          color: GREEN,
        },
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 8,
      },
    },
  },
});
