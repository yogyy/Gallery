'use client';

import { useEffect, useState } from 'react';
import UnsplashGrid from '@/components/client/unsplash-grid';
import { useImageSearch } from '@/hooks/use-search';
import { Skeleton } from '@/components/ui/skeleton';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useSearchContext } from '@/app/context/context';
import { cn } from '@/lib/utils';

const ResultGrid3 = ({ loading }: { loading: boolean }) => {
  const { datas: data } = useSearchContext();

  return (
    <div className={cn('relative grid w-full grid-cols-3 gap-1.5 md:gap-2.5')}>
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
    </div>
  );
};

const ResultGrid2 = ({ loading }: { loading: boolean }) => {
  const { datas: data } = useSearchContext();

  return (
    <div
      className={cn(
        'relative grid w-full grid-cols-1 gap-1.5 md:gap-2.5 min-[330px]:grid-cols-2',
        'grid-cols-1 min-[330px]:grid-cols-2'
      )}
    >
      {loading ? (
        <>
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="min-w-full rounded h-80 shrink" />
          ))}
        </>
      ) : (
        data !== null && (
          <>
            <UnsplashGrid data={data.slice(0, Math.ceil(data.length / 2))} />
            <UnsplashGrid data={data.slice(Math.ceil(data.length / 2))} />
          </>
        )
      )}
    </div>
  );
};

export { ResultGrid2, ResultGrid3 };
