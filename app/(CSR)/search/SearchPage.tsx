'use client';

import { UnsplashImage } from '@/app/models/unsplash-image';
import Loading from '@/components/client/loader';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { NextImage } from '@/components/client/NextImage';

const formSchema = z.object({
  query: z.string().nonempty({ message: 'Query must not empty' }),
});

export default function SearchPage() {
  const [searchResults, setsearchResults] = useState<UnsplashImage[] | null>(null);
  const [searchResultsLoading, setsearchResultsLoading] = useState(false);
  const [searchResultsError, setsearchResultsError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  });

  async function searchImage(e: z.infer<typeof formSchema>) {
    try {
      const query = e.query;
      formSchema.parse({ query });

      if (query) {
        setsearchResults(null);
        setsearchResultsError(false);
        setsearchResultsLoading(true);
        const res = await axios.get(`/api/search?query=${query}`);
        const images: UnsplashImage[] = await res.data;
        setsearchResults(images);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setsearchResultsLoading(false);
    }
  }

  return (
    <div className="w-full h-full min-h-screen mx-3 lg:mx-0">
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(searchImage)}
            className="flex justify-center gap-3 space-y-8"
          >
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem className="w-6/12 ">
                  <FormLabel>Search Query</FormLabel>
                  <FormControl>
                    <Input placeholder="query ..." {...field} />
                  </FormControl>
                  <FormDescription>Your search results will appear below.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={searchResultsLoading}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex flex-col items-center">
        {searchResultsLoading && <Loading />}
        {searchResultsError && <p>someting error</p>}
        {searchResults?.length === 0 && <p>nothing found</p>}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {searchResults && (
            <>
              {searchResults.map(image => (
                <NextImage
                  key={image.alt_description + image.height}
                  src={image.urls.regular}
                  width={image.width / 8}
                  height={image.height / 8}
                  alt={image.alt_description}
                  className="object-cover m-0.5 rounded"
                  onClick={() => console.log(image)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
