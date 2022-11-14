import React from 'react';

import Routes from './router';
import { GlobalStyles, ResetCSS } from './styles/global.styles';

function App() {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
