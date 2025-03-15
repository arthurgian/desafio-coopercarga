import { useTheme } from '@/contexts/ThemeContext';
import { ToggleContainer, ToggleInput, ToggleSlider, Label } from './styles';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const { t } = useTranslation('components');

  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <ToggleContainer>
      <Label>{t('theme_toggle.dark_mode')}</Label>
      <ToggleInput type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <ToggleSlider isDark={isDarkMode}>
        {isDarkMode ? <FaMoon size={14} color="#fff" /> : <FaSun size={14} color="#fff" />}
      </ToggleSlider>
    </ToggleContainer>
  );
};

export default ThemeToggle;
