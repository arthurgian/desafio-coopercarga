import { FaExternalLinkAlt } from 'react-icons/fa';
import { CardContainer, HoverIcon } from './styles';
import { useTranslation } from 'react-i18next';

interface HotProductCardProps {
  image?: string;
  onClick: () => void;
}

const HotProductCard = ({ image, onClick }: HotProductCardProps) => {
  const { t } = useTranslation('components');

  return (
    <CardContainer onClick={onClick}>
      <img src={image} alt={t('hot_product_card.image_alt')} />
      <HoverIcon>
        <FaExternalLinkAlt size={14} />
      </HoverIcon>
    </CardContainer>
  );
};

export default HotProductCard;
