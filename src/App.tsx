import React from "react";
import { Toaster } from "react-hot-toast";

import Routes from "./router";
import { GlobalStyles, ResetCSS } from "./styles/global.styles";

function App() {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <Toaster />
      <Routes />
    </>
  );
}

export default App;
