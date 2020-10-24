import Link from 'next/link';
import { func, string } from 'prop-types';
import React from 'react';

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import * as S from './styles';

function Header({ theme, toggleTheme }) {
  return (
    <S.header>
      <Link href="/">Favorite Tabs</Link>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </S.header>
  );
}

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export { Header };
