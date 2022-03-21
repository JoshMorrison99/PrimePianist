import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/ubuntu";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
  },

  palette: {
    primary: {
      main: "#1c2331",
    },
    button: {
      main: "#6c757d",
    },
    hackerGreen: {
      main: "#88cc14",
    },
    buttonHover: {
      main: "#f8f9fa",
    },
    darkBlue: {
      main: "#161e2d",
    },
    white: {
      main: "#ffffff",
    },
  },
  overrides: {},
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
