'use client';

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
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { NextImage } from '@/components/client/NextImage';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useImageSearch, formSchema } from '@/hooks/use-search';
import UnsplashGrid from '@/components/client/unsplash-grid';

export default function SearchPage() {
  const { data, loading, error, searchImage } = useImageSearch();

  const inputRef = React.useRef<HTMLElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  });

  const focusInput = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        focusInput();
      }
    };

    document.addEventListener('keydown', down);

    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="w-full h-full max-w-5xl min-h-screen mx-3 lg:mx-0">
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
                  <FormControl ref={inputRef}>
                    <Input disabled={loading} placeholder="query ..." {...field} />
                  </FormControl>
                  <FormDescription>Your search results will appear below.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="secondary" type="submit" className="w-[70px]" disabled={loading}>
              {loading ? <Loader2 className="w-4 animate-spin" /> : 'Search'}
            </Button>
          </form>
        </Form>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative grid w-full grid-cols-2 md:grid-cols-3 gap-2.5">
          {loading ? (
            <>
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="min-w-full rounded h-80 m-0.5 shrink" />
              ))}
            </>
          ) : (
            data && (
              <>
                <UnsplashGrid data={data.slice(0, Math.ceil(data.length / 3))} />
                <UnsplashGrid
                  data={data.slice(Math.ceil(data.length / 3), Math.ceil((2 * data.length) / 3))}
                />
                <UnsplashGrid data={data.slice(Math.ceil((2 * data.length) / 3))} />
              </>
            )
          )}
          {error && <p>someting error</p>}
          {data?.length === 0 && <p>nothing found, {error}</p>}
        </div>
      </div>
    </div>
  );
}
