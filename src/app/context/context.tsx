'use client';

import * as React from 'react';
import { UnsplashImage } from '../models/unsplash-image';

interface SearchContextType {
  datas: UnsplashImage[] | null;
  setDatas: React.Dispatch<React.SetStateAction<UnsplashImage[] | null>>;
}

export const SearchContext = React.createContext<SearchContextType | null>(null);

export const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [datas, setDatas] = React.useState<UnsplashImage[] | null>(null);

  const value = {
    datas,
    setDatas,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearchContext = (): SearchContextType => {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error('context error');
  }
  return context;
};
