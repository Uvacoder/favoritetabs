const { useState, useEffect } = require('react');

function useDarkMode() {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const localStorage = {
    get: () => window.localStorage.getItem('theme'),
    post: (useTheme) => window.localStorage.setItem('theme', useTheme),
  };

  const setStorageTheme = (useTheme) => {
    localStorage.post(useTheme);
    setTheme(useTheme);
  };

  const toggleTheme = () => {
    return theme === 'light'
      ? setStorageTheme('dark')
      : setStorageTheme('light');
  };

  /* eslint-disable */
  const hasTheme = (localTheme) => {
    return !localTheme
      ? setStorageTheme('dark')
      : localTheme
      ? setTheme(localTheme)
      : setStorageTheme();
  };
  
  /* eslint-enable */
  useEffect(() => {
    const localTheme = localStorage.get();
    window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches
      && hasTheme(localTheme);

    setComponentMounted(true);
  }, [hasTheme, localStorage]);
  return [theme, toggleTheme, componentMounted];
}

export { useDarkMode };
