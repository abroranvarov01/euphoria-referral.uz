import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    h1: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h2: {
      lineHeight: "29px",
      fontSize: "20px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
    },
  },
});

export default theme;
