import { useState, useEffect } from 'react';

interface FetchOptions {
  id?: number;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

function useFetchData<T>(
  service: { index: () => Promise<T[]>; show: (id: number) => Promise<T> },
  options?: FetchOptions,
) {
  const [data, setData] = useState<T | T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = options?.id ? await service.show(options.id) : await service.index();
        setData(result);
        options?.onSuccess?.(result);
      } catch (err) {
        setError(err as Error);
        options?.onError?.(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [service, options?.id]);

  return { data, loading, error };
}

export default useFetchData;
