import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Home, Marketplace } from '@/pages';
import { Suspense } from 'react';
import Preloader from '@/components/Preloader';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import ErrorPage from '@/components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </I18nextProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Preloader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'marketplace',
        element: (
          <Suspense fallback={<Preloader />}>
            <Marketplace />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
