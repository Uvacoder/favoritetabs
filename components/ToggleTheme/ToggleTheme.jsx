import { useTheme } from '../../context/useTheme';
import MoonIcon from '../../public/icons/moon-outline.svg';
import SunIcon from '../../public/icons/sun-outline.svg';
import { Icon } from './styles';

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <Icon
      ightTheme={isLight}
      onClick={setTheme}
      src={isLight ? MoonIcon : SunIcon}
      alt="Sun free icon"
      title="Sun free icon"
    />
  );
}

export { ToggleTheme };
