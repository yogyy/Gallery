'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default async function QueryLayout({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
