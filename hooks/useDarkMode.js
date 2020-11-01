const { useState, useEffect } = require('react');

function useDarkMode() {
  const [theme, setCurrentTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const localStorage = {
    post: (currentTheme) => window.localStorage.setItem('theme', currentTheme),
  };

  const setStorageTheme = (useTheme) => {
    localStorage.post(useTheme);
    setCurrentTheme(useTheme);
  };

  const setTheme = () => {
    return theme === 'light'
      ? setStorageTheme('dark')
      : setStorageTheme('light');
  };

  /* eslint-disable */
  const setStorageOrCurrentTheme = (localTheme) => {
    return !localTheme
      ? setStorageTheme('dark')
      : localTheme
      ? setCurrentTheme(localTheme)
      : setStorageTheme();
  };
  
  /* eslint-enable */
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    setStorageOrCurrentTheme(localTheme);

    setComponentMounted(true);
  }, [setStorageOrCurrentTheme]);
  return [theme, setTheme, componentMounted];
}

export { useDarkMode };
