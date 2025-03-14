import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import useFlags from '@/hooks/useFlags';
import { LanguageContainer, LanguageOption, LanguageLabel } from './styles';

interface Flag {
  code: string;
  src: string;
  label: string;
}

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation('components');
  const flags: Flag[] = useFlags();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
    },
    [i18n],
  );

  return (
    <LanguageContainer>
      <LanguageLabel>{t('language_switcher.language')}</LanguageLabel>
      {flags.map((flag) => (
        <LanguageOption key={flag.code} onClick={() => handleLanguageChange(flag.code)}>
          <img src={flag.src} alt={flag.label} />
        </LanguageOption>
      ))}
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
