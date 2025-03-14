import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.25);

  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ProductDetails = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

export const SizesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const SizeTag = styled.span`
  background: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  color: white;
`;
