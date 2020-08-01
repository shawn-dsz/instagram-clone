import '../styles/global.css';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
