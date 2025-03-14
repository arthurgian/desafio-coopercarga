import styled from 'styled-components';

export const ToggleContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleSlider = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isDark }) => (isDark ? 'flex-end' : 'flex-start')};
  width: 50px;
  height: 20px;
  background: ${({ isDark }) => (isDark ? '#374151' : '#fbbf24')};
  border-radius: 50px;
  padding: 3px;
  transition: all 0.8s ease;
  cursor: pointer;

  & > svg {
    transition: transform 0.5s ease;
  }
`;
