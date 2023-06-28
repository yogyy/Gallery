import { useCallback, useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { UnsplashImage } from '@/app/models/unsplash-image';

const formSchema = z.object({
  query: z.string().nonempty('Query cannot be empty'),
});

const useImageSearch = () => {
  const [data, setData] = useState<UnsplashImage[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImage = useCallback(async (e: z.infer<typeof formSchema>) => {
    try {
      const query = e.query;
      formSchema.parse({ query });

      if (query) {
        setError(false);
        setLoading(true);
        const res = await axios.get(`/api/search?query=${query}`);
        const images: UnsplashImage[] = await res.data;
        setData(images);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, searchImage };
};

export { useImageSearch, formSchema };
