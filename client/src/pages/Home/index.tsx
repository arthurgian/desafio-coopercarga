import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import {
  Container,
  HeroSection,
  HighlightSection,
  CatalogButton,
  HighlightContent,
} from './styles';
import HotProductCard from '@/components/HotProductCard';
import useFetchData from '@/hooks/useFetchData';
import ProductService from '@/services/ProductService';
import { Product } from '@/DTOs/services/IProductService';

const Home = () => {
  const { t } = useTranslation('pages');
  const { data: products } = useFetchData(ProductService);
  const navigate = useNavigate();

  const shuffleArray = (array: Product[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const hotProducts = Array.isArray(products)
    ? shuffleArray(products.filter((product: Product) => product.hotProduct)).slice(0, 3)
    : [];

  return (
    <Container>
      <HeroSection>
        <div className="text-content">
          <h1>
            {t('home.collection')}
            <br />
            {t('home.female')}
            <br />
            {t('home.summer_autumn')}
          </h1>
          <Link to="/marketplace">
            <CatalogButton>
              {t('home.view_catalog')} <FaArrowRight size={14} />
            </CatalogButton>
          </Link>
        </div>
      </HeroSection>

      {hotProducts.length > 0 && (
        <HighlightSection>
          <HighlightContent>
            <div className="text">
              <h2>
                {t('home.hot_products')} <br />
                <strong>{t('home.highlight')}</strong>
              </h2>
              <hr />
              <p>{t('home.summer_collection')}</p>
            </div>
            <div className="products-grid">
              {hotProducts.map((product) => (
                <HotProductCard
                  key={product.id}
                  image={product.image_url}
                  onClick={() => navigate(`/marketplace?product=${product.id}`)}
                />
              ))}
            </div>
          </HighlightContent>
        </HighlightSection>
      )}
    </Container>
  );
};

export default Home;
