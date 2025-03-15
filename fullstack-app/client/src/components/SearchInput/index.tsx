import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { SearchContainer, Input, Separator, SuggestionsContainer, SuggestionItem } from './styles';
import ProductService from '@/services/ProductService';
import { Product } from '@/DTOs/services/IProductService';
import { useTranslation } from 'react-i18next';

const SearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { t } = useTranslation('components');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (value.trim().length > 1) {
      ProductService.index().then((products) => {
        const filtered = products.filter((product: Product) =>
          product.name.toLowerCase().includes(value.toLowerCase()),
        );
        setSuggestions(filtered);
      });
    } else {
      setSuggestions([]);
    }
  }, [value]);

  const onSearch = (searchValue?: string) => {
    let query = (searchValue || value.trim()).toLowerCase();

    if (query) {
      query = `"${query.replace(/\s+/g, '-')}"`;

      navigate(`/marketplace?search=${encodeURIComponent(query)}`);
      setSuggestions([]);

      onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <SearchContainer>
      <FaSearch size={14} onClick={() => onSearch()} />
      <Separator />
      <Input
        type="text"
        placeholder={t('search_input.placeholder')}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />

      {suggestions.length > 0 && (
        <SuggestionsContainer>
          {suggestions.map((product) => (
            <SuggestionItem key={product.id} onClick={() => onSearch(product.name)}>
              {product.name}
            </SuggestionItem>
          ))}
        </SuggestionsContainer>
      )}
    </SearchContainer>
  );
};

export default SearchInput;
