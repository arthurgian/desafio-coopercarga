import { useMemo } from 'react';

const useFlags = () => {
  return useMemo(
    () => [
      { code: 'en-US', label: 'English', src: '/assets/us.png' },
      { code: 'es', label: 'Español', src: '/assets/es.png' },
      { code: 'pt-BR', label: 'Português', src: '/assets/br.png' },
    ],
    [],
  );
};

export default useFlags;
