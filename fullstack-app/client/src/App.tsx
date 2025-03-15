import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import i18n from '@/i18n';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />;
    </I18nextProvider>
  );
}

export default App;
