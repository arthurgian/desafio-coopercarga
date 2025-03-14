import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Content, Title, Text, Button } from './styles';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  const { t } = useTranslation('pages');

  return (
    <Container>
      <Content>
        <FaExclamationTriangle size={64} color="#ff4444" />
        <Title>{t('error_page.title')}</Title>
        <Text>{t('error_page.message')}</Text>
        <Button as={Link} to="/">
          {t('error_page.back_home')}
        </Button>
      </Content>
    </Container>
  );
};

export default ErrorPage;
