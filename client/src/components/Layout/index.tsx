import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import { MainContent } from '@/styles/appStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/theme/theme';
import { GlobalStyles } from '@/styles/globalStyles';
import Preloader from '@/components/Preloader';

const Layout = () => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <Navbar />
      <MainContent>
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </MainContent>
    </StyledThemeProvider>
  );
};

export default Layout;
