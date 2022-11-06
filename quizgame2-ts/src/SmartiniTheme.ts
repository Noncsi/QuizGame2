import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const smartiniTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[300],
    },
  },
  typography: {
    fontFamily: ["sans-serif", "BeautySchoolDropout"].join(","),
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          width: "80%",
          maxWidth: "300px",
          height: "50px",
          padding: "10px",
          margin: "5px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          width: "150px",
          height: "50px",
          padding: "10px",
          margin: "5px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          width: "500px",
          padding: "2px",
          margin: "5px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "center",
          padding: "2px",
          margin: "5px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'BeautySchoolDropout';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(./fonts/BeautySchoolDropout.ttf);
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
