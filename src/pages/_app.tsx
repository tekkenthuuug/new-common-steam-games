import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import React from 'react';

import theme from '../theme';

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
