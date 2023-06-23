'use client';

import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import React from 'react';

export const NextImage = ({ src, alt, width, height, className }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw"
      className={cn(
        'w-auto h-full max-w-full transition-opacity duration-1000 rounded opacity-0',
        className
      )}
      onLoadingComplete={image => image.classList.remove('opacity-0')}
    />
  );
};
