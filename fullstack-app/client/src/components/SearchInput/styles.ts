import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 3px solid ${({ theme }) => theme.colors.border};
  padding: 5px 15px;
  border-radius: 25px;
  transition: border 0.2s ease-in-out;
  margin-right: 20px;
  cursor: pointer;
  box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.25);

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 20px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 10px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 100;
    opacity: 0.5;
  }
`;

export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  width: 20%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 5px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`;

export const SuggestionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
  }
`;
