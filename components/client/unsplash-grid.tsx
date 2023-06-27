import Link from 'next/link';
import React from 'react';
import { NextImage } from './NextImage';
import Image from 'next/image';
import { UnsplashImage } from '@/app/models/unsplash-image';

type UnsplashGridType = {
  data: UnsplashImage[] | null;
};

export default function UnsplashGrid({ data }: UnsplashGridType) {
  return (
    <div className="grid grid-cols-1 gap-y-1.5 md:gap-y-2.5">
      {data?.map((image: UnsplashImage) => (
        <Link
          prefetch={false}
          key={image.alt_description + image.height}
          href={`/user/${image.user.username}`}
          aria-label={image.alt_description}
          className="relative w-auto h-auto overflow-hidden"
        >
          <NextImage
            src={image.urls.regular}
            width={Math.min(500, image.width)}
            height={(image.width / image.width) * image.height}
            alt={image.alt_description}
            className="object-cover p-0.5 rounded hover:scale-110 transition-transform duration-200"
          />
        </Link>
      ))}
    </div>
  );
}
