import { FaArrowUp, FaFire } from 'react-icons/fa';
import {
  CardContainer,
  ImageContainer,
  ProductImage,
  Placeholder,
  CardContent,
  ProductName,
  ProductPrice,
  HotIcon,
  HoverArrow,
} from './styles';

interface ProductCardProps {
  imageUrl?: string;
  name: string;
  price: string;
  hotProduct?: boolean;
  onClick: () => void;
}

const ProductCard = ({ imageUrl, name, price, hotProduct, onClick }: ProductCardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <ImageContainer>
        {hotProduct && (
          <HotIcon>
            <FaFire size={16} />
          </HotIcon>
        )}
        {imageUrl ? <ProductImage src={imageUrl} alt={name} /> : <Placeholder />}
      </ImageContainer>
      <CardContent>
        <ProductName>{name}</ProductName>
        <ProductPrice>R$ {price}</ProductPrice>
        <HoverArrow>
          <FaArrowUp size={18} />
        </HoverArrow>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;
