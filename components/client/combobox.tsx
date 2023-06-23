'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchWilayah } from '@/hooks/useSearch';
import { Input } from '../ui/input';
import { DialogButton } from './dialog-btn';
import { useDebounce } from '@/hooks/use-debounce';
import axios from 'axios';

interface Provinsi {
  code: string;
  province: string;
  regency: string;
  district: string;
}

export function ComboboxDemo({ frameworks }: any) {
  const [query, setQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<Provinsi[]>([]);
  const debouncedValue = useDebounce<string>(query, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const searchMovies = React.useCallback(async (query: string) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    if (query.length >= 3) {
      const { data: response } = await axios.get(`/api/provinsi?name=${query}`);
      setSearchResults(response.data);
    } else {
      setSearchResults([]);
    }
  }, []);

  React.useEffect(() => {
    if (debouncedValue) {
      searchMovies(debouncedValue);
    }
  }, [debouncedValue, searchMovies]);

  return (
    <div className="flex flex-col max-w-[900px] space-x-3 mx-auto">
      <div className="flex justify-center">
        <Input
          className="w-1/2 focus-visible:ring-offset-sky-500 min-w-[150px]"
          value={query}
          onChange={handleInputChange}
          placeholder="search provinsi..."
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {searchResults.map((result: Provinsi) => (
          <DialogButton
            key={result.province + result.code}
            action={false}
            desc={<pre>{JSON.stringify(result, null, 2)}</pre>}
            cancel="cancel"
            title="Details:"
          >
            {result.province}
          </DialogButton>
        ))}
      </div>
    </div>
  );
}
