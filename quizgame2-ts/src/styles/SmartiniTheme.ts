import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const smartiniTheme = createTheme({
  palette: {
    primary: {
      main: "#410A42",
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    fontFamily: "OpenSansCondLight",
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
          borderRadius: "100px",
          width: "150px",
          height: "50px",
          padding: "10px",
          margin: "5px",
          textTransform: "capitalize",
        },
        outlined: { color: "white", borderColor: "white" },
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
  },
});