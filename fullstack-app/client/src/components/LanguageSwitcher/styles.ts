import styled from 'styled-components';

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
`;

export const LanguageLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

export const LanguageOption = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
