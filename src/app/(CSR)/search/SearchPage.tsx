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
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
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
    console.log('function jalan lagi');
  }, [searchImage]);

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
    <div className="w-full h-auto max-w-5xl mx-3 lg:mx-0">
      <div className="w-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(searchImage)}
            className="relative flex flex-wrap justify-center w-full space-x-3 space-y-8"
          >
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem className="w-4/6">
                  <FormLabel className="w-full font-semibold text-prim">Search Image</FormLabel>
                  <FormControl ref={inputRef}>
                    <Input
                      className="focus-visible:shadow-neon placeholder:text-acc/60 focus-visible:ring-offset-0 focus-visible:ring-prim/90 focus-visible:border-prim"
                      disabled={loading}
                      placeholder="query ... "
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-prim">
                    Your search results will appear below.
                  </FormDescription>
                  <FormMessage className="text-acc" />
                </FormItem>
              )}
            />
            <Button
              variant="outline"
              type="submit"
              className="w-[70px] focus-visible:shadow-neon focus-visible:ring-offset-0 focus-visible:ring-prim/90 focus-visible:border-prim hover:bg-background/10"
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="w-4 animate-spin" />
              ) : (
                <kbd className="pointer-events-none bg-transparent inline-flex border-none h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium text-acc/60 opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              )}
            </Button>
          </form>
        </Form>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-3">
        <div className="relative grid w-full grid-cols-1 auto-rows-fr min-[360px]:grid-cols-2 min-[580px]:grid-cols-3 gap-1.5 md:gap-2.5">
          {loading ? (
            <>
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="min-w-full rounded h-80 shrink" />
              ))}
            </>
          ) : (
            data !== null && (
              <>
                <UnsplashGrid data={data.slice(0, Math.ceil(data.length / 3))} />
                <UnsplashGrid
                  data={data.slice(Math.ceil(data.length / 3), Math.ceil((2 * data.length) / 3))}
                />
                <UnsplashGrid
                  data={data.slice(Math.ceil((2 * data.length) / 3))}
                  className="min-[360px]:col-span-2 min-[580px]:col-span-1"
                />
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
