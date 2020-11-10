import { useState } from 'react';

import { useTheme } from '../../context/useTheme';
import MoonIcon from '../../public/icons/moon-outline.svg';
import SunIcon from '../../public/icons/sun-outline.svg';
import { Container } from './styles';

function ToggleTheme() {
  const [theme, setTheme] = useTheme();
  const [active, setActive] = useState(theme);

  console.log('re-render')

  function handleClick() {
    setTheme();
    return active === 'light'
      ? setActive('dark')
      : setActive('light');
  }

  return (
    <Container>
      <img
        onClick={handleClick}
        src={SunIcon}
        alt="Sun icon"
        className={active}
      />
      <img
        onClick={handleClick}
        src={MoonIcon}
        alt="Moon icon"
        className={active === 'light' ? 'dark' : 'light'}
      />
    </Container>
  );
}

export { ToggleTheme };
