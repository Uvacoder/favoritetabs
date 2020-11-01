import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from '../hooks/useDarkMode';
import { darkTheme, lightTheme } from '../styles/theme/theme';

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme, componentMounted] = useDarkMode();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) return <div />;

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};
