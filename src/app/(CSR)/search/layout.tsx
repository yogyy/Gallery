'use client';

import { SearchContextProvider } from '@/app/context/context';
import * as React from 'react';

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
  return <SearchContextProvider>{children}</SearchContextProvider>;
}
