import { useTheme } from '../../context/useTheme';
import MoonIcon from '../../public/icons/moon.svg';
import SunIcon from '../../public/icons/sun.svg';
import { Button } from './styles';

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <Button lightTheme={isLight} onClick={setTheme}>
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

export { ToggleTheme };
