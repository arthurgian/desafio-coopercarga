import { FaCog } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: transparent;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 10px 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-stretch: condensed;
  font-size: 1.35rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 50px;
  font-weight: 100;
`;

export const NavLink = styled.a<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.text)};
  text-decoration: none;
  font-size: 1rem;
  font-weight: normal;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 5px 10px;
  border-radius: 5px;
  input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 5px;
    outline: none;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const SettingsIcon = styled(FaCog)<{ isOpen: boolean }>`
  font-size: 20px;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  cursor: pointer;

  color: ${({ theme, isOpen }) => (isOpen ? theme.colors.primary : theme.colors.text)};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(25deg)' : 'rotate(0deg)')};

  &:hover {
    transform: rotate(25deg);
    color: ${({ theme }) => theme.colors.primary};
  }
`;
