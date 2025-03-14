import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.text};
  }
`;
