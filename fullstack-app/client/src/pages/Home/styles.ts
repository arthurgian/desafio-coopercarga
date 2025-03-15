import styled from 'styled-components';
import backgroundImage from '@/assets/homepage-background.jpg';

export const Container = styled.div`
  background: url(${backgroundImage}) center/cover no-repeat;
  height: 100vh;
  margin-top: -60px;
`;

export const HeroSection = styled.section`
  display: flex;
  padding: 0 5%;
  height: 70%;

  .text-content {
    margin: 120px 0 0 100px;
    max-width: 500px;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const CatalogButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};

    svg {
      transform: translateX(5px);
    }
  }
`;

export const HighlightSection = styled.section`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  opacity: 0.9;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 1px 1px 15px 10px rgba(0, 0, 0, 0.25);
  width: 60%;
  max-height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const HighlightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  .text {
    max-width: 40%;
  }

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: normal;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    width: 50%;
    margin: 10px 0;
  }

  p {
    font-style: italic;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: lighter;
  }

  .products-grid {
    display: flex;
    gap: 20px;
  }
`;
