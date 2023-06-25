import Link from 'next/link';
import React from 'react';
import { NextImage } from './NextImage';
import Image from 'next/image';
import { UnsplashImage } from '@/app/models/unsplash-image';

export default function UnsplashGrid({ data }: { data: UnsplashImage[] }) {
  return (
    <div className="grid grid-cols-1 gap-y-2">
      {data.map((image: UnsplashImage) => (
        <Link
          prefetch={false}
          key={image.alt_description + image.height}
          href={`/user/${image.user.username}`}
          aria-label={image.alt_description}
          className="w-auto h-auto"
        >
          <NextImage
            src={image.urls.regular}
            width={Math.min(500, image.width)}
            height={(image.width / image.width) * image.height}
            alt={image.alt_description}
            className="object-cover m-0.5 rounded"
          />
        </Link>
      ))}
    </div>
  );
}
