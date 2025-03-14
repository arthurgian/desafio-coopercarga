import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Filter from '@/components/Filter';
import ProductCard from '@/components/ProductCard';
import Modal from '@/components/Modal';
import {
  Container,
  FilterContainer,
  ListContainer,
  NoProductsFound,
  ProductCardContainer,
  ResultsHeader,
  ResultsLine,
} from './styles';
import useFetchData from '@/hooks/useFetchData';
import ProductService from '@/services/ProductService';
import { Product } from '@/DTOs/services/IProductService';
import { FaFrown } from 'react-icons/fa';

const Marketplace = () => {
  const { t } = useTranslation('pages');
  const { data: products } = useFetchData(ProductService);
  const [searchParams, setSearchParams] = useSearchParams();
  const productIdFromURL = searchParams.get('product');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    productIdFromURL ? Number(productIdFromURL) : null,
  );

  const priceFilter = searchParams.get('price') ?? undefined;
  const typeFilter = searchParams.getAll('type');
  const sizeFilter = searchParams.getAll('size');
  const hotProductFilter = searchParams.get('hotProduct') === 'true';
  const genderFilter = searchParams.get('gender') ?? undefined;

  useEffect(() => {
    if (!productIdFromURL) {
      setSelectedProductId(null);
    }
  }, [productIdFromURL]);

  const selectedProduct =
    Array.isArray(products) && selectedProductId !== null
      ? products.find((product) => product.id === selectedProductId)
      : null;

  const searchQuery = searchParams
    .get('search')
    ?.replace(/"/g, '')
    .replace(/-/g, ' ')
    .toLowerCase();

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery);
        const matchesPrice =
          !priceFilter ||
          (priceFilter === '50-200' && product.price >= 50 && product.price <= 200) ||
          (priceFilter === '200-500' && product.price >= 200 && product.price <= 500) ||
          (priceFilter === '500-700' && product.price >= 500 && product.price <= 700) ||
          (priceFilter === '700-1000' && product.price >= 700 && product.price <= 1000);

        const matchesType = typeFilter.length === 0 || typeFilter.includes(product.type);
        const matchesSize =
          sizeFilter.length === 0 ||
          sizeFilter.some((size) => product.available_sizes.includes(size));

        const matchesHotProduct = !hotProductFilter || product.hotProduct;
        const matchesGender = !genderFilter || product.gender === genderFilter;

        return (
          matchesSearch &&
          matchesPrice &&
          matchesType &&
          matchesSize &&
          matchesHotProduct &&
          matchesGender
        );
      })
    : [];

  const handleFilterChange = (newFilters: {
    price?: string;
    type?: string[];
    size?: string[];
    hotProduct?: boolean;
    gender?: string;
  }) => {
    const params = new URLSearchParams();

    if (newFilters.price) {
      params.set('price', newFilters.price);
    }

    if (newFilters.type?.length) {
      params.delete('type');
      newFilters.type.forEach((t) => params.append('type', t));
    }

    if (newFilters.size?.length) {
      params.delete('size');
      newFilters.size.forEach((s) => params.append('size', s));
    }

    if (newFilters.hotProduct) {
      params.set('hotProduct', 'true');
      params.delete('gender');
    } else if (newFilters.gender) {
      params.set('gender', newFilters.gender);
      params.delete('hotProduct');
    }

    setSearchParams(params);
  };

  return (
    <Container>
      <FilterContainer>
        <Filter
          currentFilters={{
            price: priceFilter,
            type: typeFilter,
            size: sizeFilter,
            hotProduct: hotProductFilter,
            gender: genderFilter,
          }}
          onFilterChange={handleFilterChange}
        />
      </FilterContainer>
      <ListContainer>
        <ResultsHeader>
          <ResultsLine />
          <span>
            {t('marketplace.search_results', { count: filteredProducts?.length || 0 })}:
            {searchQuery ? `"${searchQuery}"` : t('marketplace.all_products')}
          </span>
        </ResultsHeader>
        <ProductCardContainer>
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product: Product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.image_url}
                name={product.name}
                price={product.price.toFixed(2)}
                hotProduct={product.hotProduct}
                onClick={() => {
                  setSelectedProductId(product.id);
                  setSearchParams({
                    product: String(product.id),
                    ...Object.fromEntries(searchParams.entries()),
                  });
                }}
              />
            ))
          ) : (
            <NoProductsFound>
              <FaFrown size={50} />
              <p>{t('marketplace.no_products_found')}</p>
            </NoProductsFound>
          )}
        </ProductCardContainer>
      </ListContainer>
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => {
            setSelectedProductId(null);
            setSearchParams(Object.fromEntries(searchParams.entries()));
          }}
        />
      )}
    </Container>
  );
};

export default Marketplace;
