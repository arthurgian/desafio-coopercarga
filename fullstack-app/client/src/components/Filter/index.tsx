import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Header,
  RemoveAllButton,
  FilterGroup,
  FilterOption,
  SelectedFilters,
  SizeContainer,
  SizeButton,
  FilterTag,
  NumberInput,
} from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';

interface Filters {
  price?: string;
  type?: string[];
  size?: string[];
  hotProduct?: boolean;
  gender?: string;
}

interface FilterProps {
  currentFilters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const priceRanges = [
  { value: '50-200', labelKey: 'filter.price_range.50_200' },
  { value: '200-500', labelKey: 'filter.price_range.200_500' },
  { value: '500-700', labelKey: 'filter.price_range.500_700' },
  { value: '700-1000', labelKey: 'filter.price_range.700_1000' },
];

const typeOptions = ['Camiseta', 'Regata', 'Calção', 'Acessório'];
const sizeOptions = ['XPP', 'PP', 'P', 'M', 'G', 'GG', 'XGG'];

const FilterSidebar = ({ currentFilters, onFilterChange }: FilterProps) => {
  const { t } = useTranslation('components');
  const [selectedFilters, setSelectedFilters] = useState<Filters>(currentFilters);
  const [numberSize, setNumberSize] = useState('');

  useEffect(() => {
    setSelectedFilters(currentFilters);
  }, [currentFilters]);

  const updateFilters = useCallback(
    (newFilters: Filters) => {
      setSelectedFilters(newFilters);
      onFilterChange(newFilters);
    },
    [onFilterChange],
  );

  const handleFilterChange = useCallback(
    (filterKey: keyof Filters, value: string) => {
      const newFilters = { ...selectedFilters };

      if (filterKey === 'price') {
        newFilters.price = newFilters.price === value ? undefined : value;
      } else if (filterKey === 'type' || filterKey === 'size') {
        const current = Array.isArray(newFilters[filterKey]) ? newFilters[filterKey]! : [];
        newFilters[filterKey] = current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
      }

      updateFilters(newFilters);
    },
    [selectedFilters, updateFilters],
  );
  const handleRemoveFilter = useCallback(
    (filterKey: keyof Filters, value?: string) => {
      const newFilters = { ...selectedFilters };

      if (filterKey === 'price' || filterKey === 'hotProduct' || filterKey === 'gender') {
        delete newFilters[filterKey];
      } else if (value && (filterKey === 'type' || filterKey === 'size')) {
        const currentArray = newFilters[filterKey] || [];
        const filtered = currentArray.filter((v: string) => v !== value);
        newFilters[filterKey] = filtered.length ? filtered : undefined;
      }

      updateFilters(newFilters);
    },
    [selectedFilters, updateFilters],
  );

  const handleNumberSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 2);
    setNumberSize(sanitizedValue);
  };

  const handleNumberSizeKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && numberSize) {
      handleFilterChange('size', numberSize);
      setNumberSize('');
    }
  };

  const handleRemoveAll = () => updateFilters({});

  const filterCount =
    (selectedFilters.price ? 1 : 0) +
    ((selectedFilters.type && selectedFilters.type.length) || 0) +
    ((selectedFilters.size && selectedFilters.size.length) || 0);

  return (
    <Container>
      <Header>
        <h3>{t('filter.title', { count: filterCount })}</h3>
        {filterCount > 0 && (
          <RemoveAllButton onClick={handleRemoveAll}>{t('filter.remove_all')}</RemoveAllButton>
        )}
      </Header>
      <hr />

      <FilterGroup>
        <h4>{t('filter.price')}</h4>
        {priceRanges.map(({ value, labelKey }) => (
          <FilterOption selected={selectedFilters.price === value} key={value}>
            <input
              type="radio"
              name="price"
              id={`price-${value}`}
              value={value}
              checked={selectedFilters.price === value}
              onChange={() => handleFilterChange('price', value)}
            />
            <label htmlFor={`price-${value}`}>{t(labelKey)}</label>
          </FilterOption>
        ))}
      </FilterGroup>

      <FilterGroup>
        <h4>{t('filter.type')}</h4>
        {typeOptions.map((type) => (
          <FilterOption
            key={type}
            selected={selectedFilters.type?.includes(type)}
            onChange={() => handleFilterChange('type', type)}
          >
            <input
              type="checkbox"
              id={`type-${type}`}
              checked={selectedFilters.type?.includes(type) || false}
              readOnly
            />
            <label htmlFor={`type-${type}`}>{t(`filter.types.${type.toLowerCase()}`)}</label>
          </FilterOption>
        ))}
      </FilterGroup>

      <FilterGroup>
        <h4>{t('filter.size')}</h4>
        <SizeContainer>
          {sizeOptions.map((size) => (
            <SizeButton
              key={size}
              selected={selectedFilters.size?.includes(size)}
              onClick={() => handleFilterChange('size', size)}
            >
              {size}
            </SizeButton>
          ))}
          <NumberInput
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={numberSize}
            onChange={handleNumberSizeChange}
            onKeyDown={handleNumberSizeKeyPress}
            placeholder="N°"
            maxLength={2}
          />
        </SizeContainer>
      </FilterGroup>

      <hr />

      <SelectedFilters>
        {selectedFilters.price && (
          <FilterTag onClick={() => handleRemoveFilter('price')}>
            {t('filter.price')}: R$ {selectedFilters.price}
            <AiFillCloseCircle />
          </FilterTag>
        )}
        {selectedFilters.type?.map((type) => (
          <FilterTag key={type} onClick={() => handleRemoveFilter('type', type)}>
            {t('filter.type')}: {type}
            <AiFillCloseCircle />
          </FilterTag>
        ))}
        {selectedFilters.size?.map((size) => (
          <FilterTag key={size} onClick={() => handleRemoveFilter('size', size)}>
            {t('filter.size')}: {size}
            <AiFillCloseCircle />
          </FilterTag>
        ))}
      </SelectedFilters>
    </Container>
  );
};

export default FilterSidebar;
