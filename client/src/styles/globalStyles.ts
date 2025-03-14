import { createGlobalStyle } from 'styled-components';
import { Theme } from '@/theme/theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.5s ease;
    max-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;
