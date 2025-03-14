import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 15px;
  width: 250px;
  height: 530px;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h3 {
    font-size: 1.2rem;
  }
`;

export const RemoveAllButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 6px 12px;
  font-size: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 15px;

  h4 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const FilterOption = styled.label<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  margin-bottom: 5px;
  cursor: pointer;
  color: ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.textSecondary)};

  input {
    accent-color: ${({ theme }) => theme.colors.primary};
  }

  label {
    cursor: pointer;
    flex-grow: 1;
    user-select: none;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SizeButton = styled.button<{ selected?: boolean }>`
  background: ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.border)};
  color: ${({ selected, theme }) => (selected ? theme.colors.buttonText : theme.colors.text)};
  border: none;
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.5s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const SelectedFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`;

export const FilterTag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const NumberInput = styled.input`
  width: 60px;
  height: 32px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  padding: 4px;
  text-align: center;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
