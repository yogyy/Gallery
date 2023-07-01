import { useCallback, useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { UnsplashImage } from '@/app/models/unsplash-image';
import { useSearchContext } from '@/app/context/context';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  query: z.string().min(3, { message: 'Query must be at least 3 characters' }).max(50),
});

const useImageSearch = () => {
  const { setDatas } = useSearchContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImage = useCallback(
    async (e: z.infer<typeof formSchema>) => {
      try {
        const query = e.query;
        formSchema.parse({ query });

        if (query.length >= 3) {
          setError(false);
          setLoading(true);
          const res = await axios.get(`/api/search?query=${query}`);
          const images: UnsplashImage[] = await res.data;
          setDatas(images);
        } else {
          toast({
            title: 'Query error',
            description: 'Query must be at least 3 characters',
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [setDatas]
  );

  return { loading, error, searchImage };
};

export { useImageSearch, formSchema };
