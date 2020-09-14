import React from 'react';
import { func, string } from 'prop-types';

import { Button } from './styles';
import MoonIcon from '../../public/icons/moon.svg';
import SunIcon from '../../public/icons/sun.svg';

function ThemeToggle({ theme, toggleTheme }) {
  const isLight = theme === 'light';

  return (
    <Button lightTheme={isLight} onClick={toggleTheme}>
      <img
        src={SunIcon}
        width="224"
        height="224"
        alt="Sun free icon"
        title="Sun free icon"
      />
      <img
        src={MoonIcon}
        width="224"
        height="224"
        alt="Moon free icon"
        title="Moon free icon"
      />
    </Button>
  );
}

ThemeToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export { ThemeToggle };
