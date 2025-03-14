import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  Overlay,
  ModalContainer,
  CloseButton,
  ProductImage,
  ProductDetails,
  SizesContainer,
  SizeTag,
} from './styles';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  product: {
    id: number;
    name: string;
    image_url: string;
    details: string;
    available_sizes: string[];
  } | null;
  onClose: () => void;
}

const Modal = ({ product, onClose }: ModalProps) => {
  const { t } = useTranslation('components');

  if (!product) return null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes size={18} />
        </CloseButton>
        <ProductImage src={product.image_url} alt={product.name} />
        <ProductDetails>
          <h2>{product.name}</h2>
          <p>{product.details}</p>
          <h3>{t('modal.available_sizes')}</h3>
          <SizesContainer>
            {product.available_sizes.length > 0 ? (
              product.available_sizes.map((size) => <SizeTag key={size}>{size}</SizeTag>)
            ) : (
              <span>{t('modal.unavailable')}</span>
            )}
          </SizesContainer>
        </ProductDetails>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
