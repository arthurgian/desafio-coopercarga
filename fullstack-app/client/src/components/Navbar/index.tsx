import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaStore } from 'react-icons/fa';
import SearchInput from '@components/SearchInput';
import Dropdown from '@components/Dropdown';
import ToggleTheme from '@components/ToggleTheme';
import LanguageSwitcher from '@components/LanguageSwitcher';
import { Container, Nav, NavLink, NavLinks, RightSection, Logo, SettingsIcon } from './styles';

type FilterType = 'hot' | 'gender' | 'all';
type GenderValue = 'male' | 'female' | 'kids';

interface NavFilter {
  type: FilterType;
  value?: GenderValue;
  translationKey: string;
}

const navFilters: NavFilter[] = [
  { type: 'hot', translationKey: 'hot' },
  { type: 'gender', value: 'male', translationKey: 'male' },
  { type: 'gender', value: 'female', translationKey: 'female' },
  { type: 'gender', value: 'kids', translationKey: 'kids' },
  { type: 'all', translationKey: 'all' },
];

const Navbar = () => {
  const { t } = useTranslation('components');
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentFilterType = searchParams.get('hotProduct')
    ? 'hot'
    : searchParams.get('gender')
      ? 'gender'
      : null;
  const currentFilterValue = searchParams.get('gender');

  const handleFilterNavigation = (filterType: FilterType, value?: string) => {
    const params = new URLSearchParams();

    if (filterType === 'hot') {
      params.set('hotProduct', 'true');
    } else if (filterType === 'gender' && value) {
      params.set('gender', value);
    }

    navigate(`/marketplace?${params.toString()}`);
  };

  const getFilterActiveState = (filter: NavFilter) => {
    if (filter.type !== currentFilterType) return false;
    return filter.value ? currentFilterValue === filter.value : true;
  };

  return (
    <Container>
      <Nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>
            <FaStore size={24} />
            <span>{t('navbar.logo_title')}</span>
          </Logo>
        </Link>

        <NavLinks>
          {navFilters.map((filter) => (
            <NavLink
              key={`${filter.type}-${filter.value || ''}`}
              onClick={() => handleFilterNavigation(filter.type, filter.value)}
              isActive={getFilterActiveState(filter)}
            >
              {t(`navbar.${filter.translationKey}`)}
            </NavLink>
          ))}
        </NavLinks>

        <RightSection>
          <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />

          <Dropdown
            title={t('navbar.settings')}
            trigger={<SettingsIcon isOpen={isDropdownOpen} />}
            onOpen={() => setDropdownOpen(true)}
            onClose={() => setDropdownOpen(false)}
          >
            <ToggleTheme />
            <hr />
            <LanguageSwitcher />
          </Dropdown>
        </RightSection>
      </Nav>
    </Container>
  );
};

export default Navbar;
