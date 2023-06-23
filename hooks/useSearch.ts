'use client';

import axios from 'axios';
import React from 'react';
import { useDebounce } from './use-debounce';

export interface Wilayah {
  code: string;
  province: string;
  regency: string;
  district: string;
  type?: string;
}

export function useSearchWilayah(wilayah: string) {
  const [query, setQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<Wilayah[]>([]);
  const debouncedValue = useDebounce<string>(query, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const searchKabupaten = React.useCallback(async (query: string) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    if (query.length >= 3) {
      const { data: response } = await axios.get(`${wilayah}?name=${query}`);
      setSearchResults(response.data);
    } else {
      setSearchResults([]);
    }
  }, []);

  React.useEffect(() => {
    if (debouncedValue) {
      searchKabupaten(debouncedValue);
    }
  }, [debouncedValue, searchKabupaten]);

  return { query, handleInputChange, searchResults };
}
