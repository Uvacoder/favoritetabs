import { func, string } from 'prop-types';
import React from 'react';

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import * as S from './styles';

function Header({ theme, toggleTheme }) {
  return (
    <S.header>
      <h1>Favorite Tabs</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </S.header>
  );
}

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export { Header };
