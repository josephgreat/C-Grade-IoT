import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`
  },
  colors: {
    primary: "rgb(0 85 94)"
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  // {/* </React.StrictMode> */}
);
