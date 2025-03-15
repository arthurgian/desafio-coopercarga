import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 12px;
  width: 180px;
  height: 250px;
  box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 1px 1px 18px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const ImageContainer = styled.div`
  background: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 16px;
  position: relative;
`;

export const ProductName = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const HotIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(255, 100, 0, 0.6);
`;

export const HoverArrow = styled.div`
  position: absolute;
  bottom: 0;
  right: 15%;
  transform: translateX(50%);
  color: ${({ theme }) => theme.colors.text};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  opacity: 0;

  ${CardContainer}:hover & {
    transform: translateX(50%) translateY(-5px);
    opacity: 1;
  }
`;
