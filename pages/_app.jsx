import React from 'react';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
import { Header } from '../components/Header/Header';
import { SEO } from '../components/Head/Head';

import { lightTheme, darkTheme } from '../styles/theme/theme';
import { GlobalStyles } from '../styles/global';
import { layout as Layout } from '../styles/styles';

function App({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <SEO />
      <Layout>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
