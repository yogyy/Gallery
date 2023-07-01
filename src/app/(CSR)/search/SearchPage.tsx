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
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useImageSearch, formSchema } from '@/hooks/use-search';
import { ResultGrid2, ResultGrid3 } from './ResultPage';
import { useSearchContext } from '@/app/context/context';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useIsMounted } from '@/hooks/is-mounted';

export default function SearchPage() {
  const { loading, error, searchImage } = useImageSearch();
  const { datas: data } = useSearchContext();
  const matches = useMediaQuery('(min-width: 768px)');
  const isMounted = useIsMounted();

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
                  <FormControl className="select-all" ref={inputRef}>
                    <Input
                      type="text"
                      className="focus-visible:shadow-neon placeholder:text-acc/60 focus-visible:ring-offset-0 focus-visible:ring-prim/90 focus-visible:border-prim"
                      disabled={loading}
                      placeholder="query ... "
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="select-all text-prim">
                    Your search results will appear below.
                  </FormDescription>
                  <FormMessage className="flex items-center justify-center w-full font-semibold text-red-300 underline decoration-prim" />
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
        {isMounted() && matches ? (
          <ResultGrid3 loading={loading} key="grid3" />
        ) : (
          <ResultGrid2 loading={loading} key="grid2" />
        )}
        {error && (
          <p className="font-semibold text-red-300 underline decoration-prim">someting error</p>
        )}
        {data?.length === 0 && (
          <p className="font-semibold text-red-300 underline decoration-prim">nothing found</p>
        )}
      </div>
    </div>
  );
}
